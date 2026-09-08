# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

`README.md` is the operator document: it holds the full command table, the design-token
values, the responsive and accessibility rationale, and the known issues. Read it first.
This file adds the constraints that only become visible after reading several files
together, and it does not repeat the README.

## Commands

Node 22, npm (the lockfile is `package-lock.json`; `bun install` works but do not commit a
second lockfile).

- `npm run check` = `lint` + `format:check` + `build`, exactly what `.github/workflows/ci.yml`
  runs. There is no other gate.
- `npm run build` is `tsc -b && vite build`; type errors surface **only** here, since `lint`
  is ESLint alone and `dev` does not typecheck.
- **There is no test runner in this repository** — no Vitest, no Playwright, no `test`
  script. Verification is the three CI steps plus reading the page at 375, 768 and 1440px.
  Do not report a change as "tested"; report which gate passed.
- One file at a time: `npx eslint src/pages/Home.tsx`, `npx prettier --check src/pages/Home.tsx`,
  `npx tsc -b`.

## Three-layer source split

`src/ds/` is a **vendored port**, not code we author. The prototype imported these
components from an `mlai-site` npm package that is not published to any registry, so they
were ported out of the design-system bundle (`project/_ds/mlai-design-system-…/_ds_bundle.js`)
with markup and class names intact. Keep them shaped like their upstream: the point of the
port is that the components render identically to the design. Two deliberate divergences
already exist (Nav/Footer/NextUp link through react-router, and Nav reads the active route
from the router instead of the bundle's `() => "/"` stub) — add a third only with a reason.

`src/components/site.tsx` is the layout layer this repo does own: `shell`, `Band`,
`CardGrid`, `Split`, `Hero`, `PillLink`, plus the `fluid` type scale and `gridMin` map.
`src/pages/` is one file per route and composes the other two. Pages carry inline `style`
objects; there is no CSS-in-JS runtime and no Tailwind build step in this project.

## The CSS cascade is load-bearing

`src/main.tsx` imports `ds/fonts.css` → `ds/mlai-site.css` → `global.css` in that order, and
the order is a correctness constraint, not a style preference.

`src/ds/mlai-site.css` is a **verbatim extraction** of the stylesheet the design bundle
injected at runtime — Tailwind preflight, brand utilities (`bg-ink`, `text-wdbx`, …) and the
`surface` / `accent-edge` / `brand-seam` primitives, all frozen output with no Tailwind
pipeline behind them. It is prettier-ignored and must not be hand-edited; if the design
system is republished, re-extract it.

That is why every override lives in `global.css` instead. The WCAG contrast fix is the clear
case: `global.css` redefines `.text-slate-500` / `.text-slate-600` to lift the two dimmest
text steps, which works only because it loads after the vendored sheet. Reordering the
imports silently reverts those two colors to failing contrast, with nothing to catch it.

## The webfonts are not from the bundle, and that is deliberate

`src/ds/fonts/` holds the latin and latin-ext shards of Sora, Manrope and JetBrains
Mono, taken from `@fontsource-variable` and vendored as files (no runtime dependency).
They replace the three woff2s that shipped inside the design-system bundle, which were
each a single wrong shard: between them they mapped exactly one printable ASCII
character, `A`, plus Latin Extended-A and Cyrillic tails. Every other glyph fell back
to the system stack, so none of the site's typography actually rendered — in the
prototypes either.

Nothing in the gate catches this. `npm run check` passes, the page still looks
deliberate, and the only symptom is that the letterforms are wrong. So if you
re-extract the design system, or swap a font for any reason, verify coverage before
trusting the file:

```sh
python3 -c "
from fontTools.ttLib import TTFont; import string, sys
f = TTFont(sys.argv[1]); cm = {}
for t in f['cmap'].tables: cm.update(t.cmap)
missing = set(string.printable[:95]) - {chr(c) for c in cm}
print(len(cm), 'codepoints;', len(missing), 'printable ASCII missing')
" src/ds/fonts/sora-latin.woff2
```

A latin shard should report 0 missing. A latin-ext shard reports 93 missing by design —
it is gated by `unicode-range` and only fetched for the characters it covers. Keep the
family names (`Sora`, `Manrope`, `JetBrains Mono`) and the declared weight axes exactly
as they are: inline styles across `src/` and the vendored utility classes both resolve
through those names, so renaming a family silently drops the whole site to fallbacks.

## Responsive behavior is structural, not breakpoint-driven

The prototypes were desktop-fixed. Two mechanisms carry every viewport, and both fail
quietly if bypassed:

- Fluid type: each `clamp()` in `fluid` has the prototype's fixed size as its **upper**
  bound, so desktop stays pixel-identical. A hardcoded `fontSize: 80` regresses narrow
  viewports without changing what you see on a laptop.
- Auto-fitting grids: `.mlai-grid` and `.mlai-split` wrap at a stated minimum via `--min` /
  `--cols`, not at a media query. Writing `gridTemplateColumns: "repeat(4, 1fr)"` restores
  the overflow the port was built to remove.

`html, body { overflow-x: hidden }` in `global.css` hides horizontal overflow rather than
preventing it, so eyeballing the page will not reveal a regression — check the mechanisms.

Measuring it has two traps, and falling into either reports a clean site that is not clean:

- **`scrollWidth` is useless here.** `overflow-x: hidden` clamps it to `clientWidth`, so the
  usual `scrollWidth > clientWidth` test passes no matter how far content escapes. Measure
  element geometry instead: anything whose `getBoundingClientRect().right` exceeds the
  viewport is a candidate.
- **A candidate inside a scrollable wrapper is not a bug.** `.mlai-scroll-x` exists so wide
  content — the WDBX spec tables, for one — scrolls inside its own box. Walk each candidate's
  ancestors, and only count it if no ancestor has `overflow-x: auto | scroll` clipping at or
  before the viewport edge. At 375px `/wdbx` legitimately reports 37 such elements.

Anything changing rendered text metrics can move this, fonts included: the earlier
verification was run while the webfonts were still glyph-empty, so every measurement was of
the system fallback. Re-checked on the real faces, all 11 routes are clean at 375, 768 and
1440 — but re-check rather than assume after any change to type.

## Verifying the accessibility claims

`README.md` lists specific accessibility properties, and with no test runner here nothing
checks them. Driving a browser does, and all of them currently hold: one `<h1>`, the
`main#main` landmark and the skip link as first tab stop on all 11 routes; every canvas
`aria-hidden`; no unlabelled image, button or form control; no duplicate `id`; and no
dangling `aria-*` or `label[for]` reference anywhere.

Two things make the Contact form's wiring easy to test wrongly, and both report a false pass:

- **The form's state has to be driven, not just loaded.** `aria-invalid` and
  `aria-describedby` are set from React error state, so they do not exist until a submit
  fails. Submitting empty is what produces them — three fields marked invalid, each
  `aria-describedby` resolving to real error text (`#err-name`, `#err-email`,
  `#err-building`). The `role="status"` confirmation only exists after a _successful_
  submit, which replaces the form. Inspecting the pristine page finds none of it and looks
  clean.
- **`button[type="submit"]` must be matched exactly.** The residency chips are `<button>`
  elements earlier in the form, so a loose selector like `form button` returns a chip;
  clicking it selects a residency option and no validation runs.

One more trap, not specific to this form: serving `dist/` with a plain static server has no
SPA fallback, so `GET /contact` is a 404 and every assertion runs against the error page.
Load `/` and route client-side (`history.pushState` plus a `popstate` event) instead.

## Routes and nav are two lists

Adding a page means editing both `src/App.tsx` (the `<Route>` table; unknown paths
`Navigate` to `/`) and the `nav` array in `src/ds/brand.ts` (the nav model, with its
`accent` key). Neither derives from the other, and a route missing from `nav` is reachable
but invisible.

The app is a static SPA under `BrowserRouter` with no server and no prerendering:
`index.html` carries the only `<title>` and `<meta name="description">` in the build, so all
eleven routes ship identical metadata, and deep links need a host-side rewrite to
`index.html`. CI builds but does not deploy — there is no deploy workflow here.

## Claims discipline

`src/ds/brand.ts` is the single source for copy and every published figure. Each `Stat`
carries a `tag: "measured" | "target" | "reported"`, and `ProvLegend` renders the key in the
footer and beside stat bands. Do not add a figure without a tag, and do not promote a
`target` to `measured` without a harness run behind it.

## Reference material, not source

`project/` (the Claude Design export: `*.dc.html` prototypes, `_ds/` bundles, `galaxy.js`,
`router.js`, `HANDOFF.md`) and `chats/` are the design record. Both are excluded from ESLint
and Prettier; treat them as read-only inputs. `project/design_handoff_mlai_site/` is an
earlier TSX export superseded by `src/` — it cannot build, because it imports the
unpublished `mlai-site` package. `project/HANDOFF.md` addresses coding agents directly; its
instructions describe the original build and are already carried out.
