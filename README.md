# MLAI — marketing website

Privacy-first AI infrastructure for Apple Silicon. Eleven routes: Home, WDBX (vector
store), ABI Framework (GPU/ML runtime), Abbey (personas), Platform, Services, Research,
Architecture, Company, Investors, and Contact.

This is the production implementation of the Claude Design handoff in [`project/`](project/).

## Run

```sh
npm install
npm run dev           # vite dev server
npm run build         # tsc -b && vite build
npm run preview       # serve the production build
npm run lint          # eslint
npm run format        # prettier --write
npm run check         # lint + format:check + build, same as CI
```

React 19 + TypeScript + Vite, routed with `react-router-dom` v7. No server components —
a static SPA. (`bun install` / `bunx --bun vite` work too if you prefer Bun.)

CI runs `lint`, `format:check`, and `build` on every push to `main` and every PR.

## Layout

```
index.html            entry document
public/favicon.svg    the LogoMark, as a favicon
src/
  main.tsx            root render; imports the DS stylesheet before global.css
  App.tsx             routes — all 11 nav destinations, unknown paths redirect to /
  global.css          entrance + reveal keyframes, focus ring, hover states,
                      responsive grid primitives, contrast overrides
  components/
    Galaxy.tsx        the signature drifting-particle canvas
    site.tsx          layout primitives: Page, Main, shell, Band, CardGrid, Split,
                      Hero, HeroTitle, Kicker, H2, PillLink, and the fluid type scale
  ds/                 vendored design system — see below
  pages/              one file per route
```

## Responsive behavior

The prototypes were desktop-fixed — hard 3- and 4-column grids, an 80px headline, and a
1152px shell that overflowed below about 1200px. Two mechanisms carry the responsive
behavior without changing how the design renders on desktop:

- **Fluid type** (`fluid` in `site.tsx`). Every clamp's upper bound is the prototype's
  fixed size, so desktop is pixel-identical and only narrow viewports scale down.
- **Auto-fitting grids** (`.mlai-grid`, `.mlai-split`). Columns wrap at a stated minimum
  rather than at a breakpoint, so the same markup gives 4-up on desktop and 1-up on a
  phone. `--min` sets the wrap point; `--cols` preserves a desktop ratio on splits.

Verified with no horizontal overflow on all 11 routes at 375, 768, and 1440px.

## Accessibility

- `<main id="main">` landmark on every page, one `<h1>` each, and a skip link as the
  first tab stop.
- A visible `:focus-visible` ring — every interactive element here is custom-styled,
  which otherwise suppresses the UA focus ring entirely.
- Contact's fields carry `aria-invalid` and `aria-describedby` wired to their error text;
  the data-residency chips are a real `radiogroup`; the confirmation panel is a
  `role="status"` so the swap is announced.
- Galaxy canvases are `aria-hidden` — they're pure atmosphere.
- **Contrast:** the two dimmest steps of the design's text ramp fail WCAG AA on the
  near-black canvas (`#64748B` at 4.24:1 and `#475569` at 2.66:1, both used at 10–12px).
  They are lifted to `#7C8BA1` (5.82:1) and `#6E7D93` (4.82:1), which keeps five distinct
  steps. This is the one place the implementation deliberately departs from the
  prototype's exact values.

## The vendored design system (`src/ds/`)

The prototypes imported `mlai-site@^2.0.0` for their section components. **That package is
not published to any registry**, so it is vendored here instead, ported from the design
system bundle that shipped with the handoff
(`project/_ds/mlai-design-system-…/_ds_bundle.js`, `components/vendor/SiteRuntime`):

| File                   | Contents                                                                                                                                                                                         |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `brand.ts`             | canonical copy, benchmark figures with provenance tags, the nav model, publications                                                                                                              |
| `ui.tsx`               | Nav, Footer, Section, Eyebrow, StatBlock, ProvTag/ProvLegend, FeatureCard, DataTable, NextUp, Logo/LogoMark                                                                                      |
| `content.tsx`          | Prose, SplitSection, DeepDive, StepList, Callout, FAQList, Glossary, PullQuote, SpecList                                                                                                         |
| `cards.tsx`            | AccentGlow, IndexCard, ThroughputCard, PersonaCard                                                                                                                                               |
| `HeroBench.tsx`        | the self-typing benchmark terminal                                                                                                                                                               |
| `PublicationIndex.tsx` | the filterable publication list                                                                                                                                                                  |
| `mlai-site.css`        | the component stylesheet the bundle injected at runtime, extracted verbatim — Tailwind preflight, brand utilities, and the `surface` / `surface-hover` / `accent-edge` / `brand-seam` primitives |
| `fonts.css`, `fonts/`  | Sora, Manrope, JetBrains Mono (woff2) — **not** the bundle's, which had no usable glyphs; see CLAUDE.md                                                                                          |

Markup and class names are unchanged from the bundle, so the components render exactly as
they did in the prototype. Two deliberate changes: `Nav` / `Footer` / `NextUp` link through
react-router instead of raw `<a href>` (the bundle stubbed Next's `Link`), and `Nav` reads
the active route from the router rather than the bundle's `() => "/"` stub, so the current
page keeps its cyan underline.

`mlai-site.css` is generated, not hand-written. If the design system is republished, prefer
re-extracting it over editing it in place.

## Design tokens

- Ink `#05070B` · panel `#0A0E16` · hairline `rgba(255,255,255,0.08)`
- Accents: wdbx/cyan `#00D4FF` · abi/violet `#7C3AED` (text `#A78BFA`) · abbey/emerald `#10B981` (text `#34D399`)
- Text ramp: `#FFFFFF` → `#CBD5E1` → `#94A3B8` → `#7C8BA1` → `#6E7D93`
  (the last two lifted from the prototype's `#64748B` / `#475569` for contrast — see
  Accessibility)
- Type: Sora (display, 80/64/48/44/26px, tracking −0.02 to −0.03em), Manrope (body, 15–19px,
  1.65–1.7), JetBrains Mono (labels, 11–13px, uppercase, 0.14–0.24em)
- Rhythm: section padding 96px · hero 124–150px top · grid gap 20px · content shell 1152px

## Motion

Entrances are fade + 18px rise, 700ms `cubic-bezier(0.22,1,0.36,1)`, staggered ~90ms
(`mlaiRise` in `global.css`). Galaxy canvases drift continuously; nodes connect within
130px at `0.16 × (1 − d/130)` alpha, DPR capped at 2. Under `prefers-reduced-motion` the
canvas paints one static frame and global CSS disables every animation and transition.

## Claims discipline

Every statistic carries a provenance tag and the legend is always in reach (`ProvLegend`
sits in the footer and beside stat bands): **measured** = reproduced on our hardware,
**target** = engineering goal not yet achieved, **reported** = cited internal figure. Do
not add an untagged figure, and do not promote a `target` to `measured` without a harness
run behind it.

## Known issues

- The contact email is still `hello@mlai.example` (unresolved from the design conversation).
- `npm audit` reports a high-severity advisory against `react-router` 7.12.0–8.2.0
  ([GHSA-qwww-vcr4-c8h2](https://github.com/advisories/GHSA-qwww-vcr4-c8h2)). It is a CSRF
  bypass **in RSC mode only** — this app is a static SPA with no server, no actions, and
  no RSC, so the vulnerable path is unreachable. The fix ships in `react-router` 8.x, but
  `react-router-dom` has no 8.x release: clearing the advisory means migrating to the
  consolidated `react-router` package. Worth doing deliberately, not as a drive-by.

## Design sources

`project/` is the exported Claude Design bundle, kept as the reference for this build:

- `project/*.dc.html` — the HTML prototypes each page was built against
- `project/galaxy.js`, `project/router.js` — prototype-only helpers, superseded by
  `src/components/Galaxy.tsx` and react-router
- `project/_ds/` — the design system bundles the vendored components were ported from
- `project/design_handoff_mlai_site/` — an earlier TSX export; superseded by `src/`, and it
  will not build on its own because it imports the unpublished `mlai-site` package
- `project/HANDOFF.md` — the original handoff instructions
- `chats/` — the design conversation

`Console.dc.html`, `Canvas.dc.html`, and `Canvas-2.dc.html` are prototypes outside the
eleven nav routes and are not implemented here.
