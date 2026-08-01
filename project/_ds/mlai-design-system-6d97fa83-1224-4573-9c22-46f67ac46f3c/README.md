# MLAI Corporation — Design System

**Machine Learning Advanced Innovations, Inc.**
Privacy-first AI infrastructure. Tagline: **"private, high-performance AI."**
Positioning line: *Infrastructure for resilient intelligence.*

This repository is the canonical source of truth for designing anything branded MLAI —
production UI, marketing pages, decks, OG cards, or throwaway prototypes. Read this file
first, then explore the foundations (`colors_and_type.css`), the preview cards
(`preview/`), and the UI kits (`ui_kits/`).

---

## 1 · Company & product context

MLAI builds the **infrastructure layer** for private, high-performance AI — "fast by
design, private by default, verifiable by architecture." The work runs **local-first /
on-device** and is written close to the metal (Zig). Three things make up the product
story:

### Products

| Product | What it is | One-liner |
|---|---|---|
| **WDBX** | A vector-database **runtime** (written in Zig). HNSW search, SHA-256-chained history, lock-free MVCC concurrency, sharded storage. | *"Memory you can verify."* |
| **ABI Framework** | The orchestration layer — a six-layer runtime that routes, traces and governs. | *Orchestration you can trace.* |
| **The Personas** | Three "minds" in one system, exposed as distinct registers. | *Three minds, one system.* |

### The three personas (core to the brand)

Each persona owns a fixed color so they read as distinct on sight:

- **Abbey** — *Empathic Polymath* — **emerald `#34D399`** — proof / verified. Warm,
  encouraging; scaffolds hard ideas with metaphor before precision. The emotional heart;
  emerald is reserved almost exclusively for her. The only persona that ever resolves to a
  (luminous, faceless) humanoid silhouette.
- **Aviva** — *Unfiltered Expert* — **violet `#A855F7`** — research / vision. Direct,
  concise, zero hedging. Optimized for technical density and speed.
- **Abi** — *Adaptive Moderator* — **cyan `#22D3EE`** — interactive / fast. Neutral and
  balanced; classifies intent, routes, and blends the other two. The brand's **default**
  register and the connective tissue of the system.

### Operating principles (how the company holds itself)

- **Disciplined Secrecy** — Apple-style restraint. Protect what we build.
- **Mission Stewardship** — frontier-lab seriousness about privacy-first AI.
- **Operational Velocity** — NVIDIA-style. Velocity as discipline.

### Claims discipline

"private / on-device / high-performance" is **brand positioning**. The personas, the
six-layer runtime, verifiable (SHA-256-chained) memory and the principle-based governance
are real architectural concepts — but keep measured performance numbers (latency,
throughput, accuracy) out of any public surface **unless tied to a published, reproducible
benchmark**. Label anything aspirational (e.g. a distributed multi-tier fabric) as
**vision / roadmap**. Stat figures in the lab dashboard are explicitly **simulated /
illustrative**.

---

## 2 · Sources (provided materials)

All of the following were provided as local files under `uploads/` (no external Figma /
GitHub / live URL was attached — the brand lives entirely in these HTML/JSX artifacts).
They are preserved in `uploads/` in case the reader has them too.

| File | What it is |
|---|---|
| `uploads/mlai-brand.html` | **Brand guidelines v1.0** — logo, color, type, voice, visual language, principles. The primary brand doc. |
| `uploads/MLAI Design Upgrade v2.html` + `dsv2-*.jsx` | **Design Upgrade v2** — the *reconciled* token system (color roles, 4-tier elevation, 4px spacing + rhythm, tuned type scale, light system, components). This is the canonical low-level system and the basis of `colors_and_type.css`. |
| `uploads/mlai-hero.html` | Marketing **homepage** hero — animated embedding-galaxy canvas, persona legend, tweak panel. |
| `uploads/mlai-design.html` | **Poster / generative studio / OG cards** — brand board, flow-field & galaxy generators, 1200×630 social cards. |
| `uploads/mlai-lab.html` | **Design & Algorithmic Lab** — a simulated WDBX telemetry dashboard, command palette, theme switcher, and a gallery of generative canvases. |
| `uploads/index.html` + `scenes_*.jsx`, `brand.jsx`, `fx.jsx`, `narration.jsx`, `animations.jsx` | The long-form **brand film** (~10 min) — act cards, neural backgrounds, diagram scenes, voiceover. `brand.jsx` holds film-side brand tokens + the `MLAIMark` component. |
| `uploads/Trailer.html` + `trailer_*.jsx` | Short brand **trailer** cut. |
| `uploads/MLAI-Cinematic-Prompts.md` | **Cinematic video prompt kit** — directorial system for text-to-video tools; the clearest statement of mood, palette, persona motion signatures and negative prompts. |

> Note on tokens: the brand-board (`mlai-brand.html`) ran a looser 6-color palette and the
> early site ran a single blue. **Design Upgrade v2 reconciled these** into action / spectrum
> / persona / semantic roles. When the two disagree, **v2 wins** — and `colors_and_type.css`
> encodes v2.

---

## 3 · Content fundamentals (voice & copy)

**Register:** Terse, precise, privacy-forward. State what's true and useful — no hype, no
hedging. *Confident, not loud.* Technical depth delivered with clarity. The default voice
is **Abi's** neutral register; shift toward **Abbey** (warmer, metaphor-first) or **Aviva**
(blunt, dense) to match the audience.

**Person & address:** Speaks as "we" (the company); addresses the reader as "you" sparingly.
Most marketing copy is **impersonal and declarative** — it describes the system, not the
reader. ("From the vector engine up." "Memory you can verify.")

**Casing:** Sentence case for headlines and body. **Eyebrows / kickers are UPPERCASE** in
mono with wide tracking ("PRIVACY-FIRST AI INFRASTRUCTURE"). Product names keep their
casing: **WDBX** (all caps), **ABI**, **Abbey / Aviva / Abi**. The wordmark is **MLAI**
(all caps, letter-spaced).

**Sentence shape:** Short. Often fragments. Triads and contrast pairs are the signature
rhythm: *"fast by design, private by default, verifiable by architecture."* — *"confusion →
clarity."* — *"Three minds, one system."* Numbers, when used, are concrete and mono-set
(`295×`, `0.8ms`, `p99`), and always carry the simulated/benchmark caveat where relevant.

**Tone words:** premium, restrained, awe-not-hype, "Apple-keynote energy," verifiable,
resilient, private. Avoid: exclamation marks, breathless adjectives, growth-hacky CTAs.

**Emoji:** **Not used** in product or marketing copy. (Personas are represented by **colored
dots**, not emoji.) Unicode symbols appear only as functional glyphs: arrows (`→`), the
command key (`⌘K`), a diamond bullet (`◆`), check (`✓`).

**Example copy (verbatim, on-brand):**
- Hero: *"The infrastructure layer for private, high-performance AI."*
- Sub: *"From the vector engine up — WDBX, the ABI framework, and three minds in one system."*
- Eyebrow: *"PRIVACY-FIRST AI INFRASTRUCTURE · Zig · local-first"*
- Persona (Aviva sample): *"Use HNSW. M=16, ef=200. Cosine for text, L2 for clustering. Done."*
- Persona (Abbey sample): *"Think of a vector database as a library that files books by meaning, not title."*
- CTAs: *"Explore the stack" · "Meet Abbey" · "Request access" · "View benchmarks" · "Docs →"*

---

## 4 · Visual foundations

The MLAI look is **premium, restrained, near-black space with electric accents** — awe, not
hype. Think Apple-keynote energy crossed with a frontier-lab.

**Color & vibe.** A deep, cool, near-black base (`#050509`) lifted only by source light.
Cool shadows, neutral highlights — **never** an orange-teal grade. The accent story is a
single **electric spectrum: cyan `#22D3EE` → blue `#3B82F6` → violet `#A855F7`**, with one
disciplined **action blue** for interaction and **emerald / amber / red** for meaning.
Color is **never decorative** — it's action, identity/data, persona, or semantic. Imagery
reads **cool and luminous** (blues, cyans, violets glowing in black), with soft bloom and
deep blacks; no warm grade, no oversaturation.

**Type.** **Outfit** (geometric sans) for display & headings; **Inter** for UI & body;
**JetBrains Mono** for labels, eyebrows, metrics, code. A Major-Third (1.25) modular scale.
Tracking **tightens** as size grows (display `-0.03em`) and leading **loosens** as size
shrinks (body `1.6`). Eyebrows are mono, uppercase, `0.24em` tracking.

**Spacing & layout.** A strict **4px base scale** plus five rhythm tokens (section, block,
card, stack, inline) so every page breathes identically. Generous negative space is itself
the premium — "never fill the frame." Content centers or sits in lower-thirds; max content
widths around 760px for hero copy, ~1100–1280px for page shells.

**Backgrounds.** Almost always **near-black with a subtle radial light** (cyan key from
top-center, violet fill from bottom-right — one declared light direction for the whole
page). Recurring motifs: a faint **64px / 48px grid** masked by a radial fade; **particle
networks / embedding galaxies** (drifting nodes connected within a radius — *the* signature
canvas); a **SHA-256 memory ribbon** (a chain of light blocks). **Film grain** at very low
opacity (~0.015–0.04, `mix-blend: overlay`). No photographic backgrounds; no busy clutter;
no rainbow gradients.

**Depth & elevation.** A **4-tier surface ramp** — L0 canvas `#050509` → L1 sunken
`#08090F` → L2 surface `#0E0F18` → L3 raised `#161721` → L4 overlay `#1D1E2A` — each paired
with a fixed shadow (`--shadow-1..4`). Cards are **glassmorphic**: `--glass-fill` (a 145°
white 4.5%→1% gradient), a `1px` hairline border (`rgba(255,255,255,0.08–0.14)`),
`blur(14px)`, and a top **sheen** highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`). Glow
is *inherited from the page light*, not invented per-card.

**Borders & corners.** Hairline borders only (`--hair` 8% / `--hair-strong` 14% white).
Corner radii: inputs/chips `8px`, tiles `12px`, **cards `20px` (default)**, large frames
`28px`, and **pills `999px`** for buttons, badges and nav. Buttons and badges are
overwhelmingly **fully-rounded pills**.

**Buttons.**
- *Primary action* — `linear-gradient(180deg,#3B82F6,#2563EB)`, white text, pill, shadow
  `0 8–12px 20–30px -6/8px rgba(59,130,246,.7)` + inset top sheen.
- *Secondary* — `rgba(255,255,255,0.06)` fill, `1px` white-12% border, light text, pill.
  (A white-fill / near-black-text pill is the alternate primary on hero canvases.)
- *Tertiary / link* — bare cyan text, often with a `→`.

**Badges / chips.** Mono, uppercase, `0.1em` tracking, pill, faint tinted fill
(`rgba(255,255,255,0.04)`) + hairline, a `1.5px` **colored status dot** on the left in the
relevant spectrum/semantic color.

**Hover / press / focus.**
- *Hover* — surfaces lighten (move up the elevation ramp) and/or borders strengthen
  (white-10% → white-20%); buttons may lift `translateY(-2px)`; links go to `#fff`.
- *Press* — action blue darkens to `--action-hover` `#2563EB`.
- *Focus* — action blue ring.
- Transitions use `--ease-out` (`cubic-bezier(.22,1,.36,1)`) for entrances/reveals and
  `--ease-in-out` for moves/toggles; durations `180 / 300 / 500ms`.

**Animation.** Calm and weighty. Entrance = **fade + small rise** (`translateY ~18px`,
700ms `ease-out`), staggered. Ambient canvases drift slowly and continuously (slow rotation,
breathing core, parallax to pointer). **No bounces, no fast strobing, no whip-pans.** Let
beats settle. Always respect `prefers-reduced-motion` (every page does).

**Transparency & blur.** Used deliberately: glass panels, sticky nav bars
(`bg-#050509/80–85 + backdrop-blur`), command palettes (`black/60 + blur`), and protection
scrims over canvases (radial vignette `+ linear floor-fade to surface-0`). Blur is for
**chrome over content**, not everywhere.

**Cards, in one line:** near-black glass, `20px` radius, `1px` 8–11% white border, layered
shadow + top sheen, `2rem` (`--space-card`) interior padding, content left-aligned.

---

## 5 · Iconography

**System: Lucide** (lucide.dev) — and only Lucide. Every icon across the provided
artifacts is a **Lucide outline glyph**, drawn inline as SVG with **`stroke="currentColor"`,
`stroke-width="2"`, `stroke-linecap="round"`, `stroke-linejoin="round"`, `fill="none"`,
`viewBox="0 0 24 24"`**. Default render size 14–22px; they inherit text color, so a cyan/
violet/emerald icon is just the icon in that color. Examples seen in use: `lock`, `eye`,
`eye-off`, `arrow-right`, `chevron-right`, `search`, `check`, `x`, `menu`, `shield`, `zap`,
`sparkles`, `database`, `layers`, `palette`, `git-flow`, `network`.

**How to use it here.** Lucide is CDN-available, so link it rather than hand-rolling:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<i data-lucide="lock"></i>
<script>lucide.createIcons();</script>
```

or inline a single path with the stroke settings above (matches the original code exactly).
**Never** hand-draw bespoke pictograms, and **never** substitute emoji for icons.

**Other glyphs.** Personas are shown as **colored dots** (`●` / a glowing 2.5–3px circle),
never icons or faces. Functional Unicode only: `→`, `⌘K`, `◆`, `✓`, `·`. The **brand mark**
(`assets/mlai-mark.svg`) is the gradient "M" chip with the three-persona "neural trifecta"
dots — see §6.

> Substitution flag: the source used inline-coded Lucide paths (not the npm package). This
> system documents the equivalent CDN/`data-lucide` usage — visually identical (same set,
> same stroke). No icon style was changed.

---

## 6 · Assets

In `assets/`:

- **`mlai-mark.svg`** — primary brand mark. Gradient chip (135° cyan→blue→violet), rounded
  square (radius ≈ 0.28 × size), white **Outfit-800 "M"**, an inset 1px white ring, a
  top-left sheen, and the **neural trifecta** (emerald / white / violet dots joined by a
  faint synapse) along the bottom. Use on dark; min size 24px digital / 8mm print; keep clear
  space ≥ the height of the "M".
- **`mlai-logo-lockup.svg`** — horizontal lockup: mark + **MLAI** wordmark (Outfit-700,
  `0.18em` tracking).

> Logo note: MLAI's mark is defined in code (a CSS/SVG gradient chip), not as a raster file —
> there was no PNG/AI logo to import. These SVGs faithfully reproduce the mark exactly as the
> brand defines it (`brand.jsx` `MLAIMark`, `mlai-brand.html` `Mark`). **Misuse, never:**
> don't stretch, don't recolor the chip, no heavy outer glow, no busy background.

**Fonts.** Outfit, Inter and JetBrains Mono are all **Google Fonts**, loaded via CDN
(`@import` at the top of `colors_and_type.css`). No binary font files are bundled. If you
need them offline, download the families from Google Fonts and add `@font-face` rules — the
families are an exact match, not a substitution.

---

## 7 · Component library (combined)

This project now merges **three MLAI systems into one bundle**. Loading it:

```html
<link rel="stylesheet" href="styles.css">          <!-- one link — all tokens + component CSS -->
<script src="_vendor/react.js"></script>            <!-- or your own React 18 -->
<script src="_vendor/react-dom.js"></script>
<script src="_ds_bundle.js"></script>
```

Everything lands on **one namespace** (`window.MLAIDesignSystem_6d97fa`); the embedded
runtimes also keep their original globals `window.MlaiLab` and `window.MLAI` for
back-compat, and merge **all** their exports (compound parts like `CardHeader`,
`SelectItem`, `DialogContent`, plus helpers like `toast`) onto the combined namespace.

The three layers:

- **Brand foundations** — `colors_and_type.css` tokens + semantic element styles (§4).
  These load **last** in `styles.css`, so where token names collide (`--font-sans`,
  `--font-mono`, `--font-display`, `--radius-*`) **the brand wins**: vendor components
  inherit Outfit / Inter / JetBrains Mono and the brand radii.
- **Lab primitives** (`components/lab/`, group *Primitives*) — the 16 shadcn-style
  controls from `mlai-corporation-www` (Button, Card, Dialog, Select, Tabs, Toaster, …).
  Dark-only; Tailwind utility classes; compound parts all exported.
- **Site sections** (`components/site/`, group *Site Sections*) — the 27 marketing/product
  sections from `mlai-site` (Section, FeatureCard, StatBlock, ProvTag, Nav, Footer, …).
  Keep the **provenance rule**: every number renders through `ProvTag`/`StatBlock` as
  `measured | target | reported`. Most take `accent: "wdbx" | "abi" | "abbey"`.

`components/vendor/` holds the two embedded runtimes (`LabRuntime`, `SiteRuntime`) —
internal carriers, never used directly. Per-component docs: `components/<grp>/<Name>/<Name>.d.ts`.

> **Token-scanner note.** The vendor stylesheets are compiled Tailwind. The real theme
> tokens live in `vendor/lab/theme.css` + `vendor/site/theme.css` (clean `:root` scopes,
> imported by `styles.css`); the full utility/variant CSS is embedded in the runtime
> carriers and injected at page load as the FIRST stylesheet in `<head>`, so everything
> linked via `styles.css` (brand tokens last) wins the cascade.
>
> **Regenerating vendor CSS.** `vendor/lab/_ds_bundle.css` and `vendor/site/_ds_bundle.css`
> are the canonical sources. If you edit them, re-embed: replace the JSON string literal
> inside the `data-mlai-vendor-css` injector in `components/vendor/LabRuntime/LabRuntime.jsx`
> / `SiteRuntime/SiteRuntime.jsx` with the updated file content (JSON.stringify'd), and
> re-extract the theme blocks if tokens changed.

### Components

**Primitives (lab):** Accordion · Alert · Badge · Button · Card · Dialog · DropdownMenu ·
Input · Label · Select · Separator · Skeleton · Tabs · Textarea · Toaster · Tooltip

**Site sections:** AccentGlow · Callout · DataTable · DeepDive · Eyebrow · FAQList ·
FeatureCard · Footer · Glossary · HeroBench · IndexCard · Logo · LogoMark · Nav · NextUp ·
PersonaCard · Prose · ProvLegend · ProvTag · PublicationIndex · PullQuote · Section ·
SpecList · SplitSection · StatBlock · StepList · ThroughputCard

**Internal:** LabRuntime · SiteRuntime (embedded runtime carriers — never render these)

---

## 8 · Index / manifest

Root files:

- **`README.md`** — this file. Brand context, voice, visual foundations, iconography, manifest.
- **`colors_and_type.css`** — the canonical token system (color roles, elevation, spacing +
  rhythm, radii, the Major-Third type scale, motion) plus semantic element styles.
- **`styles.css`** — the combined entry stylesheet: vendor fonts + compiled component CSS +
  `colors_and_type.css` (last, so brand tokens win). Import this into anything you build.
- **`_ds_bundle.js`** — compiled component bundle (auto-generated; see §7).
- **`components/`** — `lab/` primitives · `site/` sections · `vendor/` embedded runtimes.
- **`vendor/`** — the two systems' compiled CSS + font files (`lab/`, `site/`).
- **`_vendor/`**, **`_preview/`** — React 18 UMD builds and per-component preview stories
  used by the component cards.
- **`SKILL.md`** — Agent-Skill front-matter so this folder works as a downloadable Claude skill.
- **`assets/`** — `mlai-mark.svg`, `mlai-logo-lockup.svg`.
- **`preview/`** — small HTML specimen cards that populate the Design System tab (type, color,
  spacing/elevation, components, brand).
- **`uploads/`** — the original provided source artifacts (see §2).

UI kits (`ui_kits/<product>/`):

- **`ui_kits/marketing/`** — the MLAI marketing website: nav, hero with embedding-galaxy
  canvas, persona legend, feature cards, stat blocks, footer, command palette. `index.html` is
  an interactive click-through.
- **`ui_kits/console/`** — the MLAI **Console / Lab**: app shell with sidebar + command palette,
  the simulated **WDBX telemetry dashboard** (gauges, sparklines, shard health), and a personas
  chat surface. `index.html` is an interactive click-through.
- **`ui_kits/docs/`** — the MLAI **Docs** site: sidebar shell, prose primitives, code blocks,
  callouts. `index.html` is an interactive click-through.

Each UI kit folder has its own `README.md`, an `index.html` demo, and small JSX components.

---

*© Machine Learning Advanced Innovations, Inc. · Brand Guidelines · Disciplined Secrecy ·
Mission Stewardship · Operational Velocity.*
