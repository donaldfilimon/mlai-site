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
