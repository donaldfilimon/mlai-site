# Full MLAI website

_Started 2026-07-08 11:06 UTC_

---

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Untitled"
What `list_files` on the project root returns right now (dotfiles, if any, are not shown here):
📁 _ds
Current date is now July 8, 2026
</system-info>

<attached aesthetic_system_instructions>
A design system or theme is attached to this project. That attachment already answers the visual-style question: apply it. Do NOT ask the user which visual style to use — no questions about vibe, colors or palette directions (including color-swatch svg-options questions), typography, mood, or art direction, and skip the "divergent visuals" question from the question-asking tips; offer divergent visual directions only if the user themselves asks for alternatives. Treat the attachment as the confirmed starting point and product context — the "confirm the starting point" tip is already satisfied, so do not ask the user to confirm or re-pick it. If you use the questions_v2 tool, set show_design_system_picker to false so the visual-direction picker this app can append to the form is not shown on top of the attached design system. Spend your questions on everything else you need: audience, purpose, content, structure, scope, interactions, tone of copy.
</attached aesthetic_system_instructions>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Design Components">
This project uses Design Components: every design is a single streaming `Name.dc.html` file. The full authoring spec is in your system prompt under "Writing code — Design Components" — follow it. Author and edit `.dc.html` content with the `dc_write`, `dc_html_str_replace`, `dc_js_str_replace`, and `dc_set_props` tools (not `write_file`; `str_replace_edit` works but won't stream); template edits stream into the live preview as you type.
</attached-skill>

<attached-skill name="Make a deck">
Create a presentation deck as a single self-contained HTML page.

Assume this role: you are a presentation designer. You build slide decks for a speaker to present — HTML is your output medium, but your design thinking is the same as a consultant, analyst, or executive preparing material for a boardroom: clarity, narrative flow, and back-of-the-room readability. You are not building a website.

Every slide is an exercise in both layout design and copywriting. Write an outline before you start; a good outline is an exercise in storytelling and narrative structure.

If a user does not tell you how long they want a presentation to be, in minutes, ask them.
If the user does not tell you the visual aesthetic they want, and they do not provide a design system, use the questions tool to ASK what they want. Don't just provide a generic design!

Build at 1920×1080 (16:9). Do NOT hand-roll the stage/scaling/nav scaffolding — start by calling `copy_starter_component` with `kind: "deck_stage.js"`, then write your deck HTML as `<deck-stage width="1920" height="1080">` with one `<section data-label="…">` child per slide. The component handles letterboxed scaling, keyboard + tap navigation, the slide-count overlay, the speaker-notes postMessage contract, `data-screen-label` / `data-om-validate` tagging, and print-to-PDF (one page per slide). Load it with a plain `<script src="deck-stage.js"></script>` — it is vanilla JS, not JSX. (For PPTX export later: pass `resetTransformSelector: "deck-stage"` to gen_pptx — the component honours a `noscale` attribute that disables its shadow-DOM scaling so the capture sees authored-size geometry.)

Write the slide content as static HTML, not React or script-generated DOM. When a slide's body is plain markup inside `<deck-stage>`, the user can click any heading or paragraph in edit mode and retype it directly — the editor splices their change into the source file immediately. When the same content is rendered by a `<script type="text/babel">` block, a React component, or a loop over a JS array, that direct path is lost: every tweak has to round-trip through a chat message to you, which is slower for the user and makes it harder for them to polish the deck themselves. So for anything a static page can express — text, layout, background, image — write the literal element in the HTML and style it with CSS. Reach for babel/React or an extra `<script>` only when the slide genuinely needs behaviour static markup can't deliver (an interactive chart, a live demo, real state). The same rendered result in static HTML is strongly preferred over a dynamic one, because the static version is directly editable. The Tweaks panel (`tweaks-panel.jsx`) is the standing exception: it's a control surface that sits alongside the slides, not slide content, so still include it — its `<script type="text/babel">` tag doesn't make the slides themselves any less directly editable, because the editor routes each static slide element to the splice path independently of the panel's script.

Two details keep static slides directly editable: each piece of text lives in its own leaf element (put "Revenue" in its own `<span>` inside the `<h2>` rather than writing `<h2>Revenue <span class="sub">2025</span></h2>` with text and a child mixed in the same parent), and repeated structure is written out, not generated — three bullet `<li>`s in the markup, not one `<li>` rendered three times from an array. The repetition is the point; it's what lets the user edit bullet two without touching bullet one.

Use large type sizes (at least 48px for titles). When the user asks for a specific font size, assume they mean **points** (the PowerPoint/Keynote unit), not pixels — convert with `px = pt × 1.333`. So "make titles 36pt" → set ~48px in your CSS.

Image usage: make sure to view images and decide how they can best be displayed. Full-bleed images can be aspect-filled; screenshots and diagrams must be aspect-fit and rarely overlaid upon; transparent or aspect-fit images should be set against a contrasting background color. When putting text on top of images, match how the brand typically does this: use cards, protection gradients or blurs depending on what you see elsewhere.

Use smooth transitions between slides. Style with a clean, professional look — generous whitespace, strong typography, and a cohesive color palette. Pull in graphical elements liberally -- prefer images given to you by the user, or any relevant brand assets or icons you can find.

Do not use emoji or self-drawn assets unless asked. Use icons from your design system / brand, or images provided by the user.

Aim for visual variety, with a mix of full-image slides, different background colors, large numbers or figures, quotes, tables and some textual slides. Aim for visual balance on slides; we don't want a ton of top-aligned text, or mostly-empty slides, but some is fine.

Critical: AVOID PUTTING TOO MUCH TEXT ON SLIDES! This is a common failure mode. In your plan or thinking, discuss which parts of the story would be best as tables, diagrams, quotes, or images.

Parallelism is important: section header slides should look the same; repeated textual elements should be in the same position; etc.

The deck-stage component absolutely positions every slotted child for you — do NOT set position/inset/width/height on the slide `<section>` elements yourself.

# Slide writing guidelines

In general, the titles of a slide deck alone should tell you the overall story/content of the deck (similar to ToC in a book)
There are generally a few types of title structures that are used in slide decks:
- Short textbook-title-style, all capitalized (e.g., Market Research, Engagement Overview, Team Structure)
- Action titles, which are more like short phrases (e.g., “Asia is our largest market….”, “...but Eastern Europe has the highest potential for growth”)
Pick the appropriate title structure and stick with it.

Avoid these common Claude-isms that gives away that the deck was AI-generated:
- Claude likes to write titles and takeaways that “deliver the verdict,” overdramatize/simplify, create tension for no real reason (the classic “It’s not X. It’s Y.”), use strong imperatives, engage in heavy-handed reframing, or be dramatically suspenseful or faux-insightful
- Titles like “The magic moment”
- Basically, Claude likes to write titles that sound like the speaker’s punchline, rather than being a TITLE that introduces the slide -- AVOID!

# Planning steps

In addition to your normal planning, make sure to do these things:

1. Ask questions if you don't know audience, desired brand, and duration.
2. Write out the full title sequence. Choose ONE grammatical style (for example, short topic noun-phrases or brief declarative sentences) that is appropriate for the content, and write every title in that style. Read them back to yourself and determine if a person reading ONLY the titles could follow the flow of the presentation. The titles should be like chapters in a book - they orient the reader on what to expect with straightforward language. Review the titles and revise as needed. Put these in an scratchpad.md file.
3. Define your type scale and spacing as CSS custom properties in a `<style>` block in `<head>` before writing any slide — these commit you to projection-appropriate sizing and stop you defaulting to web density. At 1920×1080 a reasonable starting scale is `:root { --type-title: 64px; --type-subtitle: 44px; --type-body: 34px; --type-small: 28px; --pad-top: 100px; --pad-bottom: 80px; --pad-x: 100px; --gap-title: 52px; --gap-item: 28px; }`. At 1280×720, scale by ~0.67. Reference these everywhere — every font-size uses a `--type-*` variable, every padding/gap uses a `--pad-*` or `--gap-*` variable, via `var(…)` in inline styles or class rules. Keeping these as CSS (not JS constants) means the user can change one number — in the style block directly, or via a Tweaks slider bound to the same variable — to re-size the whole deck, and the slide markup stays static HTML with no script needed to compute sizes. The explicit `--pad-bottom` reserves breathing room at the base of every slide; that space is structural, not empty. Web defaults (14-16px body, 48-72px padding) are too small for slides; if the values don't feel generous, they aren't. Your validator will throw an error if you use a size smaller than 24px.
4. Build the slides, remembering that each slide is an exercise in both design and copywriting. Give each slide the attention it deserves in terms of the layout, the text content, and the tone. Follow the principles below and ensure that each slide can stand alone; a person looking at that slide should be able to understand its high-level meaning without other context.

# Verification tips for slide decks
During review, check your screenshots against slide composition rules — not web-layout instincts. `align-items: flex-start` with open space in the bottom third is correct slide composition, not a defect. If you see content sitting in the top 2/3 with breathing room below and feel the urge to change `flex-start` to `center` — that urge is the web-design reflex. Resist it. The open space is intentional. Also verify: font sizes match your `--type-*` scale (not web density), slide frame padding matches your `--pad-*` values (not web-tight), title parallelism across slides, no accent-border cards or takeaway boxes
</attached-skill>

<attached-skill name="MLAI Lab UI Primitives (design system)">
[Design System] This project uses the **MLAI Lab UI Primitives** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **MlaiLab** design system bound at `_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/`. If anything under that path is missing or fails to load, the folder name may differ — `list_files` `_ds/` and use the folder whose name ends with c535eba1-9a32-465a-a804-0926c7d0c8ad instead, including in the <link>/<script> paths below.

**Loading the bundle is how you use this design system.** Every Design Component you build must load `_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/_ds_bundle.js` in `<helmet>` (include it in child DCs too — de-duped by URL) and compose with its components — do not recreate those components from scratch or restyle raw HTML to look like them. At the top of the template:

```html
<helmet>
  <link rel="stylesheet" href="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/fonts/fonts.css">
  <link rel="stylesheet" href="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/_ds_bundle.css">
  <link rel="stylesheet" href="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/styles.css">
  <script src="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/_ds_bundle.js"></script>
</helmet>
```

Then mount any component directly in the template — no logic class needed:

```html
<x-import component-from-global-scope="MlaiLab.Button" hint-size="auto,40px">Label</x-import>
```

Props are template attributes (kebab → camelCase); template children pass through as `props.children`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

The full design-system source tree lives at `/projects/c535eba1-9a32-465a-a804-0926c7d0c8ad/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# MLAI "Lab" UI — conventions for building with this design system

These are the shadcn-style primitives behind the MLAI Corporation site, styled with the
**"Lab"** brand: **cyan** primary on a **near-black ink** canvas (`--background` ≈
`oklch(0.07 0.012 260)`), with **violet / emerald / amber** as fixed persona accents and a
**Spectral serif** display face (`--font-display`) on headings. Body text is **Geist**.

## Setup
- **No provider is required** for the primitives. Color comes entirely from CSS custom
  properties defined on `:root` in `styles.css` — the system is **dark-only** (there is no
  light theme; the `.dark` class only sets `color-scheme`). Render on a dark surface
  (`background: var(--background)`); components built for that canvas (Input, Select,
  Separator borders) look washed out on a white background.
- Import components from the bundle global, e.g. `import { Button, Card } from "&lt;this DS&gt;"`.
  All exports are also on `window.MlaiLab`.

## Styling idiom — Tailwind utility classes with semantic tokens
Components accept a `className`; compose layout with Tailwind utilities. **Prefer the
semantic token utilities over raw colors** so new UI stays on-brand:

| Concern | Utilities |
|---|---|
| Surfaces | `bg-background`, `bg-card`, `bg-muted`, `bg-popover` |
| Text | `text-foreground`, `text-muted-foreground`, `text-primary` |
| Primary action | `bg-primary` + `text-primary-foreground` (primary is **light cyan**, so its foreground is **dark**) |
| Borders / focus | `border-border`, `border-input`, `ring-ring` |
| Status | `text-destructive`, and the `cyan-500` / `yellow-500` ramps for success / warning |
| Persona accents | `cyan` (Abbey), `violet`, `emerald`, `amber` Tailwind ramps |
| Radius / type | `rounded-md` (token `--radius`), `font-display` (Spectral) for headings |

Don't hardcode hex; reach for `bg-primary`/`text-muted-foreground`/`border-border` etc.

## Where the truth lives
- `styles.css` (imports `_ds_bundle.css`) — the full token set and compiled utilities.
- `&lt;Name&gt;.d.ts` — the prop contract; `&lt;Name&gt;.prompt.md` — per-component usage.

## Idiomatic snippet
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from "&lt;this DS&gt;";

&lt;Card className="max-w-sm"&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;WDBX store&lt;/CardTitle&gt;
    &lt;CardDescription&gt;Durable vector / block memory.&lt;/CardDescription&gt;
  &lt;/CardHeader&gt;
  &lt;CardContent className="flex items-center gap-2"&gt;
    &lt;Badge variant="success"&gt;healthy&lt;/Badge&gt;
    &lt;span className="text-sm text-muted-foreground"&gt;1,204 vectors&lt;/span&gt;
  &lt;/CardContent&gt;
  &lt;CardFooter className="gap-2"&gt;
    &lt;Button size="sm"&gt;Open&lt;/Button&gt;
    &lt;Button size="sm" variant="outline"&gt;Compact&lt;/Button&gt;
  &lt;/CardFooter&gt;
&lt;/Card&gt;
```

## Notes
- **Compound components** (Card, Alert, Dialog, Select, Tabs, Accordion, DropdownMenu) are
  composed from named parts (`CardHeader`, `AlertTitle`, `SelectItem`, `TabsTrigger`, …) —
  all exported. Overlay parts (Dialog/DropdownMenu/Tooltip) use Base UI and render their
  open state in a portal.
- Button variants: `default | secondary | outline | ghost | destructive | link`;
  Badge adds `success`; Alert adds `success | warning | destructive`.

# MlaiLab (mlai-corporation-www@1.0.0)

This design system is the published mlai-corporation-www React library, bundled as a single
browser global. All 16 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.MlaiLab`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md` (example JSX + variants), `&lt;Name&gt;.d.ts` (types), `&lt;Name&gt;.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).
- `guidelines/` — the design system's own usage guidance (3 doc(s), see `guidelines/index.md`). Read these before composing larger layouts.

For a specific component, `read_file("components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
&lt;link rel="stylesheet" href="styles.css"&gt;
&lt;script src="_ds_bundle.js"&gt;&lt;/script&gt;
```

Components are then available at `window.MlaiLab.*`. Mount into a dedicated child node (e.g. `&lt;div id="ds-root"&gt;`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Accordion } = window.MlaiLab;
ReactDOM.createRoot(document.getElementById('ds-root')).render(&lt;Accordion /&gt;);
```

## Tokens

267 CSS custom properties from mlai-corporation-www. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (100): `--color-red-50`, `--color-red-300`, `--color-red-400`, …
- **spacing** (6): `--tw-space-y-reverse`, `--tw-space-x-reverse`, `--tw-inset-shadow`, …
- **typography** (16): `--font-sans`, `--font-mono`, `--font-weight-normal`, …
- **radius** (6): `--radius-sm`, `--radius-md`, `--radius-lg`, …
- **shadow** (7): `--tw-shadow`, `--tw-ring-shadow`, `--tw-ring-offset-shadow`, …
- **other** (132): `--spacing`, `--container-xs`, `--container-sm`, …

## Components

### general
- `Accordion`
- `Alert`
- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DropdownMenu`
- `Input`
- `Label`
- `Select`
- `Separator`
- `Skeleton`
- `Tabs`
- `Textarea`
- `Toaster`
- `Tooltip`

</design-system-guide>
</attached-skill>

<attached-skill name="Google Slides safe">
This deck will be exported to Google Slides. Author it so the import is clean on the first try.

Choose every typeface from Google Fonts and load each family explicitly with a `<link href="https://fonts.googleapis.com/css2?family=…" crossorigin="anonymous">` tag. Do not rely on system, brand, or locally installed fonts; if a design system or reference names one, pick the closest Google Fonts match and use that instead. Pair at most two families across the whole deck and stick to the weights you actually link.

The user will run the PPTX export with the Google Slides font option, so there is nothing to substitute at export time — the families you author with are the families that ship.
</attached-skill>

<attached-skill name="Speaker notes">
Write speaker notes for this deck and keep the slides visual-first.

One string per slide, same order. Write conversationally — full scripts of what the presenter actually says out loud, not bullet points.

Ask a few questions about tone + conversational style before writing.

Because the script carries the narrative, strip text off the slides. Slides should lean on large figures, quotes, full-bleed images, diagrams, and one-line headlines — NOT paragraphs. If a slide is mostly text, you've put the script on the slide instead of in the notes.

### Format

Put each slide's note as plain text in a `data-speaker-notes` attribute on its `<section>`:

```html
<section data-label="Title" data-speaker-notes="Keep it under a minute">…</section>
```

The system renders the notes. For that to work, the page MUST call `window.postMessage({slideIndexChanged: N})` on init and on every slide change — the `deck_stage.js` starter component does this for you. The attribute travels with the slide on reorder/duplicate/delete, so there's nothing to realign. (Older decks that used a `<script id="speaker-notes">` JSON block still work; don't write that for new decks.)
</attached-skill>

## Assistant

What would you like to make? It looks like you've set up for a slide deck (MLAI Lab design system, Google Slides export, speaker notes) — tell me the topic, audience, and how long you'll be presenting, and I'll get started.

## User

<system-info comment="Only acknowledge these if relevant">
User is viewing file: Canvas.dc.html
</system-info>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Ammoura Design System (design system)">
[Design System] This project uses the **Ammoura Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **AmmouraDesignSystem_b0ebb7** design system bound at `_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/`. If anything under that path is missing or fails to load, the folder name may differ — `list_files` `_ds/` and use the folder whose name ends with b0ebb77c-387a-4087-8f99-7cc858aa0c6f instead, including in the <link>/<script> paths below.

**Loading the bundle is how you use this design system.** Every Design Component you build must load `_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/_ds_bundle.js` in `<helmet>` (include it in child DCs too — de-duped by URL) and compose with its components — do not recreate those components from scratch or restyle raw HTML to look like them. At the top of the template:

```html
<helmet>
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/colors.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/themes.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/typography.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/spacing.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/effects.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/base.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/styles.css">
  <script src="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/_ds_bundle.js"></script>
</helmet>
```

Then mount any component directly in the template — no logic class needed:

```html
<x-import component-from-global-scope="AmmouraDesignSystem_b0ebb7.Button" hint-size="auto,40px">Label</x-import>
```

Props are template attributes (kebab → camelCase); template children pass through as `props.children`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

**Start from a template if one matches.** Before building from scratch, check whether a template below matches the user's request. Read the template (list its folder, `read_file` the entry) and decide: if it's close to what's asked, `copy_files` the folder as your starting point; if you'd rather re-author in DC, `dc_write` a new page using the template as your structural reference. When this design system is bound, `copy_files` repoints the copied `ds-base.js` automatically — only edit its base line yourself if the copy result says so, or when copying from an unbound project (change `'../..'` to your `_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f` path). (Older templates have no `ds-base.js` and carry `../../…` bundle/stylesheet refs in their pages instead — repoint those by hand.)

- `Ammoura Storefront` (`/projects/b0ebb77c-387a-4087-8f99-7cc858aa0c6f/templates/storefront/`) — Branded store landing — hero with gradient orbs + a product grid built from Ammoura components

The full design-system source tree lives at `/projects/b0ebb77c-387a-4087-8f99-7cc858aa0c6f/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# Ammoura™ Design System

A design system for **Ammoura™** — a modern, multi-tenant **eCommerce platform** (developed under the codename *Hermes*). Ammoura lets anyone spin up a beautiful online store with a WYSIWYG page builder, a swappable theme system, products/cart/checkout, and an admin dashboard. It runs on SvelteKit + Cloudflare (Pages, D1, R2) with TypeScript.

&gt; **Name origin.** Ammoura is named for King Hammurabi of Babylon (c. 1792–1750 BCE), author of one of history's first commercial legal codes. Just as Hammurabi brought order and fairness to ancient markets, Ammoura provides the foundation for modern digital commerce. **Ammoura™** is a trademark of David William Monaghan. © 2025.

## Source material
This system was reverse-engineered from the product's own source. Explore these to build with higher fidelity:
- **GitHub — `starspacegroup/hermes`**: https://github.com/starspacegroup/hermes
  - Global stylesheet &amp; theme tokens: `src/app.css`
  - Named color themes: `src/lib/utils/editor/colorThemes.ts`
  - Components: `src/lib/components/*.svelte` (Button, Avatar, ProductCard, ConfirmModal, ThemeToggle, …)
  - Storefront homepage &amp; product page: `src/routes/+page.svelte`, `src/routes/product/[id]/+page.svelte`
- **Org:** https://github.com/orgs/AmmouraMe/

The reader is encouraged to browse these repositories to do an even better job designing for Ammoura.

---

## Content fundamentals — how Ammoura writes

- **Audience &amp; person.** Copy speaks directly to the *store owner* in second person. "Create **your** own online store." "Make **your** store uniquely yours." Customers are addressed warmly too ("Your customers can shop from anywhere").
- **Tone.** Encouraging, plain-spoken, optimistic, never jargon-heavy. Short declaratives. "Simple, beautiful, and ready for your business."
- **Fairness is the brand promise.** Pricing copy leads with alignment: "Zero monthly fees. **We win when you win.**" / "Pay-as-You-Grow."
- **Casing.** Marketing headlines use Title Case ("Everything You Need to Succeed"); UI labels and buttons use sentence-friendly Title Case too ("Add to Cart", "Quick View", "Start Your Store"). Eyebrow/category labels are UPPERCASE with letter-spacing.
- **Emoji are part of the voice.** Used as friendly section/feature markers and in headings: 🎯 ✨ 📦 💳 🎨 📱 💰 💎 🚀. Keep them tasteful — one per feature/heading, never mid-sentence in body copy.
- **Examples:** "Start Selling Online Today" · "See Example Store" · "No credit card required • Cancel anytime" · "Only 3 left!" · "✓ In Stock".

## Visual foundations

- **Color.** A theme-driven palette. The default light theme is **Vibrant Pink** (primary `#ec4899`, secondary purple `#8b5cf6`, accent amber `#f59e0b`, pink-tinted backgrounds). The default dark theme is **Midnight Purple** (primary `#a78bfa` on slate `#0f172a`). Stores can pick any of **8 named presets** (vibrant, midnight, minimal, professional, warm, cool, nature, monochrome) — see `tokens/themes.css`. Two parallel token layers exist: `--color-*` (app/components) and `--theme-*` (page-builder references).
- **Type.** No custom webfonts — the native **system sans** stack (`-apple-system, Segoe UI, Roboto…`) for everything, **Fira Code** for mono. Headings are bold→extrabold with tight tracking; `h1` is `clamp(2rem,5vw,3.5rem)` @ 800 / `-0.02em`; the marketing hero goes to `clamp(2.5rem,8vw,4.5rem)`. Body is `1.6` line-height. Eyebrow labels (`h6`, categories) are uppercase, 600, `0.05em`.
- **Backgrounds.** Soft tinted surfaces (no photos as backgrounds in core UI). The hero floats large **blurred gradient orbs** (primary/secondary, `blur(80px)`, ~0.3 opacity, slow float). Marketing CTAs use a **135° primary→secondary gradient** panel with a faint diagonal-stripe overlay. Brand gradient is also used for **clipped gradient text** on hero keywords.
- **Corner radii.** `4px` code · `6px` badges/small buttons · `8px` buttons &amp; inputs · `12px` feature cards · `16px` product cards / hero panels / CTA · `50px` pills &amp; hero badge.
- **Shadows.** Soft and diffuse: `sm 0 2px 4px /.05`, `md 0 4px 12px /.1`, `lg 0 20px 60px /.3`. Cards rest on a light `0 2px 8px` shadow and rise to `0 12px 32px` on hover.
- **Cards.** White (`--color-bg-primary`), `1px` border (`--color-border-secondary`), soft shadow, `16px` radius. On hover they **lift** (`translateY(-8px)` for products, `-4px` for feature/pricing), deepen their shadow, and adopt a **brand-colored border**. Highlighted/accent panels swap to a `2px` primary border.
- **Motion.** Playful but restrained. Transitions `fast 150ms / normal 250ms / slow 350ms`, all `ease`. Signatures: hover-lift on cards &amp; buttons, image zoom on product hover using a springy `cubic-bezier(0.34,1.56,0.64,1)`, hero fade-up, pulsing badge icon, bouncing scroll arrows, skeleton-shimmer image loaders, floating orbs.
- **Hover / press.** Solid buttons darken to `--color-primary-hover` and lift `-2px` with a shadow; pressing returns to `translateY(0)`. Secondary/ghost buttons tint to `--color-bg-accent`. Icon controls nudge `-1px`. Quantity buttons scale `1.1` on hover, `0.95` on press.
- **Borders &amp; focus.** `1–2px` solid borders. Inputs use a `2px` border and a brand **focus ring**: `0 0 0 3px` of primary at 10% (`color-mix`). Focus-visible outlines are `2px` primary with `2px` offset.
- **Transparency &amp; blur.** Sticky navbar uses a translucent surface + `backdrop-filter: blur`. Product hover reveals a `rgba(0,0,0,0.7)` "Quick View" scrim. Status badges use ~10% tinted backgrounds of their status color.
- **Imagery vibe.** Bright, clean, retail-friendly. When product photos are absent, the platform renders a neutral tile with a 📦 glyph (this system uses emoji placeholders in demos for the same reason).

## Iconography

- **Primary set: [Lucide](https://lucide.dev)** — the product ships `lucide-svelte`. Line icons, **2px stroke**, round caps &amp; joins, `24×24` viewbox (rendered ~16–24px). Examples in source: cart, arrow-right, check, sun/moon (theme toggle), info-circle, x (close).
  - In HTML artifacts, either inline the Lucide SVG (2px round-cap stroke, `stroke="currentColor"`) — as this system's `ThemeToggle`, `Navbar` and `CartDrawer` do — or load Lucide from a CDN. **Match the 2px round-cap style; don't mix in filled or hairline icon sets.**
- **Emoji as iconography.** Ammoura deliberately uses emoji for feature/marketing markers and as the empty-product placeholder (📦). Treat emoji as a legitimate, on-brand icon layer for marketing surfaces — not for functional UI controls (use Lucide there).
- **No custom icon font or SVG sprite** exists in the source beyond Lucide + a tiny favicon (`assets/favicon.png`). There is **no formal logo asset** — the wordmark is type-based (see `guidelines/brand-wordmark.card.html`): "Ammoura" set in the system sans at 800 weight, leading "A" in primary, paired with a gradient "A" glyph tile.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (imports everything below).
- `tokens/` — `colors.css` (app + theme layers, light &amp; dark), `themes.css` (8 named presets), `typography.css`, `spacing.css`, `effects.css` (radii/shadows/motion/gradients), `base.css` (element defaults).
- `assets/` — `favicon.png`.
- `SKILL.md` — Agent-Skills-compatible entry point.

**Components** (`components/&lt;group&gt;/`, namespace exposed as `window.AmmouraDesignSystem_*`)
- `core/` — **Button, Avatar, Badge, Card, QuantityStepper, ThemeToggle**
- `forms/` — **Input, Select, Checkbox, Switch**
- `feedback/` — **Modal**
- `commerce/` — **ProductCard** (composes Badge + Button + QuantityStepper)

Each component directory has `&lt;Name&gt;.jsx`, `&lt;Name&gt;.d.ts`, `&lt;Name&gt;.prompt.md`, and a `*.card.html` thumbnail.

**Foundation cards** (`guidelines/`) — Colors (brand, surfaces/text, status, themes), Type (display, hero, body/mono), Spacing (scale, radii), Effects (shadows, gradient/focus/motion), Brand (wordmark, story &amp; voice). These populate the Design System tab.

**UI kit** (`ui_kits/storefront/`) — an interactive recreation of the Ammoura customer storefront (hero, features, product grid, quick-view modal, cart drawer, light/dark). See its `README.md`.

## Caveats
- **Fonts are the system stack by design** — Ammoura ships no webfonts. `--font-sans` lists `Oxygen`/`Ubuntu`/`Cantarell` and `--font-mono` lists `Fira Code` as *stack members*; they render only if installed locally and otherwise fall back gracefully. No font upload is required.
- No official logo mark exists in the source; the wordmark here is an original type treatment consistent with the brand.

</design-system-guide>
</attached-skill>

<attached-skill name="MLAI Design System (design system)">
[Design System] This project uses the **MLAI Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.

    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/6d97fa83-1224-4573-9c22-46f67ac46f3c/`. Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# MLAI Corporation — Design System

**Machine Learning Advanced Innovations, Inc.**
Privacy-first AI infrastructure. Tagline: **"private, high-performance AI."**
Positioning line: *Infrastructure for resilient intelligence.*

This repository is the canonical source of truth for designing anything branded MLAI —
production UI, marketing pages, decks, OG cards, or throwaway prototypes. Read this file
first, then explore the foundations (`colors_and_type.css`), the preview cards
(`preview/`), and the UI kits (`ui_kits/`).

---

## 1 · Company &amp; product context

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
| `uploads/mlai-design.html` | **Poster / generative studio / OG cards** — brand board, flow-field &amp; galaxy generators, 1200×630 social cards. |
| `uploads/mlai-lab.html` | **Design &amp; Algorithmic Lab** — a simulated WDBX telemetry dashboard, command palette, theme switcher, and a gallery of generative canvases. |
| `uploads/index.html` + `scenes_*.jsx`, `brand.jsx`, `fx.jsx`, `narration.jsx`, `animations.jsx` | The long-form **brand film** (~10 min) — act cards, neural backgrounds, diagram scenes, voiceover. `brand.jsx` holds film-side brand tokens + the `MLAIMark` component. |
| `uploads/Trailer.html` + `trailer_*.jsx` | Short brand **trailer** cut. |
| `uploads/MLAI-Cinematic-Prompts.md` | **Cinematic video prompt kit** — directorial system for text-to-video tools; the clearest statement of mood, palette, persona motion signatures and negative prompts. |

&gt; Note on tokens: the brand-board (`mlai-brand.html`) ran a looser 6-color palette and the
&gt; early site ran a single blue. **Design Upgrade v2 reconciled these** into action / spectrum
&gt; / persona / semantic roles. When the two disagree, **v2 wins** — and `colors_and_type.css`
&gt; encodes v2.

---

## 3 · Content fundamentals (voice &amp; copy)

**Register:** Terse, precise, privacy-forward. State what's true and useful — no hype, no
hedging. *Confident, not loud.* Technical depth delivered with clarity. The default voice
is **Abi's** neutral register; shift toward **Abbey** (warmer, metaphor-first) or **Aviva**
(blunt, dense) to match the audience.

**Person &amp; address:** Speaks as "we" (the company); addresses the reader as "you" sparingly.
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

**Color &amp; vibe.** A deep, cool, near-black base (`#050509`) lifted only by source light.
Cool shadows, neutral highlights — **never** an orange-teal grade. The accent story is a
single **electric spectrum: cyan `#22D3EE` → blue `#3B82F6` → violet `#A855F7`**, with one
disciplined **action blue** for interaction and **emerald / amber / red** for meaning.
Color is **never decorative** — it's action, identity/data, persona, or semantic. Imagery
reads **cool and luminous** (blues, cyans, violets glowing in black), with soft bloom and
deep blacks; no warm grade, no oversaturation.

**Type.** **Outfit** (geometric sans) for display &amp; headings; **Inter** for UI &amp; body;
**JetBrains Mono** for labels, eyebrows, metrics, code. A Major-Third (1.25) modular scale.
Tracking **tightens** as size grows (display `-0.03em`) and leading **loosens** as size
shrinks (body `1.6`). Eyebrows are mono, uppercase, `0.24em` tracking.

**Spacing &amp; layout.** A strict **4px base scale** plus five rhythm tokens (section, block,
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

**Depth &amp; elevation.** A **4-tier surface ramp** — L0 canvas `#050509` → L1 sunken
`#08090F` → L2 surface `#0E0F18` → L3 raised `#161721` → L4 overlay `#1D1E2A` — each paired
with a fixed shadow (`--shadow-1..4`). Cards are **glassmorphic**: `--glass-fill` (a 145°
white 4.5%→1% gradient), a `1px` hairline border (`rgba(255,255,255,0.08–0.14)`),
`blur(14px)`, and a top **sheen** highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`). Glow
is *inherited from the page light*, not invented per-card.

**Borders &amp; corners.** Hairline borders only (`--hair` 8% / `--hair-strong` 14% white).
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

**Transparency &amp; blur.** Used deliberately: glass panels, sticky nav bars
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
&lt;script src="https://unpkg.com/lucide@latest"&gt;&lt;/script&gt;
&lt;i data-lucide="lock"&gt;&lt;/i&gt;
&lt;script&gt;lucide.createIcons();&lt;/script&gt;
```

or inline a single path with the stroke settings above (matches the original code exactly).
**Never** hand-draw bespoke pictograms, and **never** substitute emoji for icons.

**Other glyphs.** Personas are shown as **colored dots** (`●` / a glowing 2.5–3px circle),
never icons or faces. Functional Unicode only: `→`, `⌘K`, `◆`, `✓`, `·`. The **brand mark**
(`assets/mlai-mark.svg`) is the gradient "M" chip with the three-persona "neural trifecta"
dots — see §6.

&gt; Substitution flag: the source used inline-coded Lucide paths (not the npm package). This
&gt; system documents the equivalent CDN/`data-lucide` usage — visually identical (same set,
&gt; same stroke). No icon style was changed.

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

&gt; Logo note: MLAI's mark is defined in code (a CSS/SVG gradient chip), not as a raster file —
&gt; there was no PNG/AI logo to import. These SVGs faithfully reproduce the mark exactly as the
&gt; brand defines it (`brand.jsx` `MLAIMark`, `mlai-brand.html` `Mark`). **Misuse, never:**
&gt; don't stretch, don't recolor the chip, no heavy outer glow, no busy background.

**Fonts.** Outfit, Inter and JetBrains Mono are all **Google Fonts**, loaded via CDN
(`@import` at the top of `colors_and_type.css`). No binary font files are bundled. If you
need them offline, download the families from Google Fonts and add `@font-face` rules — the
families are an exact match, not a substitution.

---

## 7 · Index / manifest

Root files:

- **`README.md`** — this file. Brand context, voice, visual foundations, iconography, manifest.
- **`colors_and_type.css`** — the canonical token system (color roles, elevation, spacing +
  rhythm, radii, the Major-Third type scale, motion) plus semantic element styles. Import this
  into anything you build.
- **`SKILL.md`** — Agent-Skill front-matter so this folder works as a downloadable Claude skill.
- **`assets/`** — `mlai-mark.svg`, `mlai-logo-lockup.svg`.
- **`preview/`** — small HTML specimen cards that populate the Design System tab (type, color,
  spacing/elevation, components, brand).
- **`uploads/`** — the original provided source artifacts (see §2).

UI kits (`ui_kits/&lt;product&gt;/`):

- **`ui_kits/marketing/`** — the MLAI marketing website: nav, hero with embedding-galaxy
  canvas, persona legend, feature cards, stat blocks, footer, command palette. `index.html` is
  an interactive click-through.
- **`ui_kits/console/`** — the MLAI **Console / Lab**: app shell with sidebar + command palette,
  the simulated **WDBX telemetry dashboard** (gauges, sparklines, shard health), and a personas
  chat surface. `index.html` is an interactive click-through.

Each UI kit folder has its own `README.md`, an `index.html` demo, and small JSX components.

---

*© Machine Learning Advanced Innovations, Inc. · Brand Guidelines · Disciplined Secrecy ·
Mission Stewardship · Operational Velocity.*

</design-system-guide>

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s) (`/projects/6d97fa83-1224-4573-9c22-46f67ac46f3c/colors_and_type.css`). The 77 custom properties it defines are:

--action, --action-hover, --action-soft, --danger, --dur-base, --dur-fast, --dur-reveal, --dur-slow, --ease-in-out, --ease-out, --font-display, --font-mono, --font-sans, --glass-blur, --glass-fill, --glass-sheen, --hair, --hair-strong, --leading-display, --leading-normal, --leading-snug, --leading-tight, --persona-abbey, --persona-abi, --persona-aviva, --proof, --radius-lg, --radius-md, --radius-pill, --radius-sm, --radius-xl, --shadow-1, --shadow-2, --shadow-3, --shadow-4, --signal, --space-1, --space-10, --space-2, --space-3, --space-4, --space-5, --space-6, --space-7, --space-8, --space-9, --space-block, --space-card, --space-inline, --space-section, --space-stack, --spectrum-blue, --spectrum-cyan, --spectrum-grad, --spectrum-violet, --surface-0, --surface-1, --surface-2, --surface-3, --surface-4, --text, --text-base, --text-dim, --text-faint, --text-h0, --text-h00, --text-h1, --text-h2, --text-h3, --text-h4, --text-h5, --text-mono, --tracking-display, --tracking-eyebrow, --tracking-mono, --tracking-normal, --tracking-tight

Only use `var(--*)` names from that list. Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/6d97fa83-1224-4573-9c22-46f67ac46f3c/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

<attached-skill name="MLAI Design System (design system)">
[Design System] This project uses the **MLAI Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.

    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/f72d5c75-682a-48b1-915f-b14d45ceaa87/`. Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# MLAI Corporation — Design System

**Machine Learning Advanced Innovations, Inc.**
Privacy-first AI infrastructure. Tagline: **"private, high-performance AI."**
Positioning line: *Infrastructure for resilient intelligence.*

This repository is the canonical source of truth for designing anything branded MLAI —
production UI, marketing pages, decks, OG cards, or throwaway prototypes. Read this file
first, then explore the foundations (`colors_and_type.css`), the preview cards
(`preview/`), and the UI kits (`ui_kits/`).

---

## 1 · Company &amp; product context

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
| `uploads/mlai-design.html` | **Poster / generative studio / OG cards** — brand board, flow-field &amp; galaxy generators, 1200×630 social cards. |
| `uploads/mlai-lab.html` | **Design &amp; Algorithmic Lab** — a simulated WDBX telemetry dashboard, command palette, theme switcher, and a gallery of generative canvases. |
| `uploads/index.html` + `scenes_*.jsx`, `brand.jsx`, `fx.jsx`, `narration.jsx`, `animations.jsx` | The long-form **brand film** (~10 min) — act cards, neural backgrounds, diagram scenes, voiceover. `brand.jsx` holds film-side brand tokens + the `MLAIMark` component. |
| `uploads/Trailer.html` + `trailer_*.jsx` | Short brand **trailer** cut. |
| `uploads/MLAI-Cinematic-Prompts.md` | **Cinematic video prompt kit** — directorial system for text-to-video tools; the clearest statement of mood, palette, persona motion signatures and negative prompts. |

&gt; Note on tokens: the brand-board (`mlai-brand.html`) ran a looser 6-color palette and the
&gt; early site ran a single blue. **Design Upgrade v2 reconciled these** into action / spectrum
&gt; / persona / semantic roles. When the two disagree, **v2 wins** — and `colors_and_type.css`
&gt; encodes v2.

---

## 3 · Content fundamentals (voice &amp; copy)

**Register:** Terse, precise, privacy-forward. State what's true and useful — no hype, no
hedging. *Confident, not loud.* Technical depth delivered with clarity. The default voice
is **Abi's** neutral register; shift toward **Abbey** (warmer, metaphor-first) or **Aviva**
(blunt, dense) to match the audience.

**Person &amp; address:** Speaks as "we" (the company); addresses the reader as "you" sparingly.
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

**Color &amp; vibe.** A deep, cool, near-black base (`#050509`) lifted only by source light.
Cool shadows, neutral highlights — **never** an orange-teal grade. The accent story is a
single **electric spectrum: cyan `#22D3EE` → blue `#3B82F6` → violet `#A855F7`**, with one
disciplined **action blue** for interaction and **emerald / amber / red** for meaning.
Color is **never decorative** — it's action, identity/data, persona, or semantic. Imagery
reads **cool and luminous** (blues, cyans, violets glowing in black), with soft bloom and
deep blacks; no warm grade, no oversaturation.

**Type.** **Outfit** (geometric sans) for display &amp; headings; **Inter** for UI &amp; body;
**JetBrains Mono** for labels, eyebrows, metrics, code. A Major-Third (1.25) modular scale.
Tracking **tightens** as size grows (display `-0.03em`) and leading **loosens** as size
shrinks (body `1.6`). Eyebrows are mono, uppercase, `0.24em` tracking.

**Spacing &amp; layout.** A strict **4px base scale** plus five rhythm tokens (section, block,
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

**Depth &amp; elevation.** A **4-tier surface ramp** — L0 canvas `#050509` → L1 sunken
`#08090F` → L2 surface `#0E0F18` → L3 raised `#161721` → L4 overlay `#1D1E2A` — each paired
with a fixed shadow (`--shadow-1..4`). Cards are **glassmorphic**: `--glass-fill` (a 145°
white 4.5%→1% gradient), a `1px` hairline border (`rgba(255,255,255,0.08–0.14)`),
`blur(14px)`, and a top **sheen** highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`). Glow
is *inherited from the page light*, not invented per-card.

**Borders &amp; corners.** Hairline borders only (`--hair` 8% / `--hair-strong` 14% white).
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

**Transparency &amp; blur.** Used deliberately: glass panels, sticky nav bars
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
&lt;script src="https://unpkg.com/lucide@latest"&gt;&lt;/script&gt;
&lt;i data-lucide="lock"&gt;&lt;/i&gt;
&lt;script&gt;lucide.createIcons();&lt;/script&gt;
```

or inline a single path with the stroke settings above (matches the original code exactly).
**Never** hand-draw bespoke pictograms, and **never** substitute emoji for icons.

**Other glyphs.** Personas are shown as **colored dots** (`●` / a glowing 2.5–3px circle),
never icons or faces. Functional Unicode only: `→`, `⌘K`, `◆`, `✓`, `·`. The **brand mark**
(`assets/mlai-mark.svg`) is the gradient "M" chip with the three-persona "neural trifecta"
dots — see §6.

&gt; Substitution flag: the source used inline-coded Lucide paths (not the npm package). This
&gt; system documents the equivalent CDN/`data-lucide` usage — visually identical (same set,
&gt; same stroke). No icon style was changed.

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

&gt; Logo note: MLAI's mark is defined in code (a CSS/SVG gradient chip), not as a raster file —
&gt; there was no PNG/AI logo to import. These SVGs faithfully reproduce the mark exactly as the
&gt; brand defines it (`brand.jsx` `MLAIMark`, `mlai-brand.html` `Mark`). **Misuse, never:**
&gt; don't stretch, don't recolor the chip, no heavy outer glow, no busy background.

**Fonts.** Outfit, Inter and JetBrains Mono are all **Google Fonts**, loaded via CDN
(`@import` at the top of `colors_and_type.css`). No binary font files are bundled. If you
need them offline, download the families from Google Fonts and add `@font-face` rules — the
families are an exact match, not a substitution.

---

## 7 · Index / manifest

Root files:

- **`README.md`** — this file. Brand context, voice, visual foundations, iconography, manifest.
- **`colors_and_type.css`** — the canonical token system (color roles, elevation, spacing +
  rhythm, radii, the Major-Third type scale, motion) plus semantic element styles. Import this
  into anything you build.
- **`SKILL.md`** — Agent-Skill front-matter so this folder works as a downloadable Claude skill.
- **`assets/`** — `mlai-mark.svg`, `mlai-logo-lockup.svg`.
- **`preview/`** — small HTML specimen cards that populate the Design System tab (type, color,
  spacing/elevation, components, brand).
- **`uploads/`** — the original provided source artifacts (see §2).

UI kits (`ui_kits/&lt;product&gt;/`):

- **`ui_kits/marketing/`** — the MLAI marketing website: nav, hero with embedding-galaxy
  canvas, persona legend, feature cards, stat blocks, footer, command palette. `index.html` is
  an interactive click-through.
- **`ui_kits/console/`** — the MLAI **Console / Lab**: app shell with sidebar + command palette,
  the simulated **WDBX telemetry dashboard** (gauges, sparklines, shard health), and a personas
  chat surface. `index.html` is an interactive click-through.

Each UI kit folder has its own `README.md`, an `index.html` demo, and small JSX components.

---

*© Machine Learning Advanced Innovations, Inc. · Brand Guidelines · Disciplined Secrecy ·
Mission Stewardship · Operational Velocity.*

</design-system-guide>

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s) (`/projects/f72d5c75-682a-48b1-915f-b14d45ceaa87/colors_and_type.css`, `/projects/f72d5c75-682a-48b1-915f-b14d45ceaa87/uploads/MLAI Corporation (Template)-handoff/project/src/index.css`). The 106 custom properties it defines are:

--action, --action-grad, --action-hover, --action-press, --action-ring, --action-soft, --border-1, --border-2, --border-3, --border-4, --danger, --danger-soft, --dur-base, --dur-fast, --dur-reveal, --dur-slow, --ease-in-out, --ease-out, --font-display, --font-mono, --font-sans, --glass-blur, --glass-fill, --glass-fill-hi, --glass-sheen, --grain-opacity, --hair, --hair-hi, --hair-strong, --leading-display, --leading-normal, --leading-snug, --leading-tight, --light-ambient, --light-fill, --light-key, --mlai-amber, --mlai-blue, --mlai-blue-hi, --mlai-blue-lo, --mlai-cyan, --mlai-cyan-hi, --mlai-green, --mlai-red, --mlai-violet, --mlai-violet-hi, --persona-abbey, --persona-abi, --persona-aviva, --proof, --proof-soft, --radius-lg, --radius-md, --radius-pill, --radius-sm, --radius-xl, --radius-xs, --shadow-1, --shadow-2, --shadow-3, --shadow-4, --signal, --signal-soft, --space-1, --space-10, --space-2, --space-3, --space-4, --space-5, --space-6, --space-7, --space-8, --space-9, --space-block, --space-card, --space-inline, --space-section, --space-stack, --spectrum-blue, --spectrum-cyan, --spectrum-grad, --spectrum-grad-135, --spectrum-violet, --surface-0, --surface-1, --surface-2, --surface-3, --surface-4, --text, --text-base, --text-dim, --text-faint, --text-h0, --text-h00, --text-h1, --text-h2, --text-h3, --text-h4, --text-h5, --text-mono, --text-sm, --tracking-display, --tracking-eyebrow, --tracking-mono, --tracking-normal, --tracking-tight

Only use `var(--*)` names from that list. Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/f72d5c75-682a-48b1-915f-b14d45ceaa87/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

<attached-skill name="MLAI Lab UI Primitives (design system)">
[Design System] This project uses the **MLAI Lab UI Primitives** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **MlaiLab** design system bound at `_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/`. If anything under that path is missing or fails to load, the folder name may differ — `list_files` `_ds/` and use the folder whose name ends with c535eba1-9a32-465a-a804-0926c7d0c8ad instead, including in the <link>/<script> paths below.

**Loading the bundle is how you use this design system.** Every Design Component you build must load `_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/_ds_bundle.js` in `<helmet>` (include it in child DCs too — de-duped by URL) and compose with its components — do not recreate those components from scratch or restyle raw HTML to look like them. At the top of the template:

```html
<helmet>
  <link rel="stylesheet" href="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/fonts/fonts.css">
  <link rel="stylesheet" href="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/_ds_bundle.css">
  <link rel="stylesheet" href="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/styles.css">
  <script src="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/_ds_bundle.js"></script>
</helmet>
```

Then mount any component directly in the template — no logic class needed:

```html
<x-import component-from-global-scope="MlaiLab.Button" hint-size="auto,40px">Label</x-import>
```

Props are template attributes (kebab → camelCase); template children pass through as `props.children`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

The full design-system source tree lives at `/projects/c535eba1-9a32-465a-a804-0926c7d0c8ad/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# MLAI "Lab" UI — conventions for building with this design system

These are the shadcn-style primitives behind the MLAI Corporation site, styled with the
**"Lab"** brand: **cyan** primary on a **near-black ink** canvas (`--background` ≈
`oklch(0.07 0.012 260)`), with **violet / emerald / amber** as fixed persona accents and a
**Spectral serif** display face (`--font-display`) on headings. Body text is **Geist**.

## Setup
- **No provider is required** for the primitives. Color comes entirely from CSS custom
  properties defined on `:root` in `styles.css` — the system is **dark-only** (there is no
  light theme; the `.dark` class only sets `color-scheme`). Render on a dark surface
  (`background: var(--background)`); components built for that canvas (Input, Select,
  Separator borders) look washed out on a white background.
- Import components from the bundle global, e.g. `import { Button, Card } from "&lt;this DS&gt;"`.
  All exports are also on `window.MlaiLab`.

## Styling idiom — Tailwind utility classes with semantic tokens
Components accept a `className`; compose layout with Tailwind utilities. **Prefer the
semantic token utilities over raw colors** so new UI stays on-brand:

| Concern | Utilities |
|---|---|
| Surfaces | `bg-background`, `bg-card`, `bg-muted`, `bg-popover` |
| Text | `text-foreground`, `text-muted-foreground`, `text-primary` |
| Primary action | `bg-primary` + `text-primary-foreground` (primary is **light cyan**, so its foreground is **dark**) |
| Borders / focus | `border-border`, `border-input`, `ring-ring` |
| Status | `text-destructive`, and the `cyan-500` / `yellow-500` ramps for success / warning |
| Persona accents | `cyan` (Abbey), `violet`, `emerald`, `amber` Tailwind ramps |
| Radius / type | `rounded-md` (token `--radius`), `font-display` (Spectral) for headings |

Don't hardcode hex; reach for `bg-primary`/`text-muted-foreground`/`border-border` etc.

## Where the truth lives
- `styles.css` (imports `_ds_bundle.css`) — the full token set and compiled utilities.
- `&lt;Name&gt;.d.ts` — the prop contract; `&lt;Name&gt;.prompt.md` — per-component usage.

## Idiomatic snippet
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from "&lt;this DS&gt;";

&lt;Card className="max-w-sm"&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;WDBX store&lt;/CardTitle&gt;
    &lt;CardDescription&gt;Durable vector / block memory.&lt;/CardDescription&gt;
  &lt;/CardHeader&gt;
  &lt;CardContent className="flex items-center gap-2"&gt;
    &lt;Badge variant="success"&gt;healthy&lt;/Badge&gt;
    &lt;span className="text-sm text-muted-foreground"&gt;1,204 vectors&lt;/span&gt;
  &lt;/CardContent&gt;
  &lt;CardFooter className="gap-2"&gt;
    &lt;Button size="sm"&gt;Open&lt;/Button&gt;
    &lt;Button size="sm" variant="outline"&gt;Compact&lt;/Button&gt;
  &lt;/CardFooter&gt;
&lt;/Card&gt;
```

## Notes
- **Compound components** (Card, Alert, Dialog, Select, Tabs, Accordion, DropdownMenu) are
  composed from named parts (`CardHeader`, `AlertTitle`, `SelectItem`, `TabsTrigger`, …) —
  all exported. Overlay parts (Dialog/DropdownMenu/Tooltip) use Base UI and render their
  open state in a portal.
- Button variants: `default | secondary | outline | ghost | destructive | link`;
  Badge adds `success`; Alert adds `success | warning | destructive`.

# MlaiLab (mlai-corporation-www@1.0.0)

This design system is the published mlai-corporation-www React library, bundled as a single
browser global. All 16 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.MlaiLab`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md` (example JSX + variants), `&lt;Name&gt;.d.ts` (types), `&lt;Name&gt;.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).
- `guidelines/` — the design system's own usage guidance (3 doc(s), see `guidelines/index.md`). Read these before composing larger layouts.

For a specific component, `read_file("components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
&lt;link rel="stylesheet" href="styles.css"&gt;
&lt;script src="_ds_bundle.js"&gt;&lt;/script&gt;
```

Components are then available at `window.MlaiLab.*`. Mount into a dedicated child node (e.g. `&lt;div id="ds-root"&gt;`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Accordion } = window.MlaiLab;
ReactDOM.createRoot(document.getElementById('ds-root')).render(&lt;Accordion /&gt;);
```

## Tokens

267 CSS custom properties from mlai-corporation-www. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (100): `--color-red-50`, `--color-red-300`, `--color-red-400`, …
- **spacing** (6): `--tw-space-y-reverse`, `--tw-space-x-reverse`, `--tw-inset-shadow`, …
- **typography** (16): `--font-sans`, `--font-mono`, `--font-weight-normal`, …
- **radius** (6): `--radius-sm`, `--radius-md`, `--radius-lg`, …
- **shadow** (7): `--tw-shadow`, `--tw-ring-shadow`, `--tw-ring-offset-shadow`, …
- **other** (132): `--spacing`, `--container-xs`, `--container-sm`, …

## Components

### general
- `Accordion`
- `Alert`
- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DropdownMenu`
- `Input`
- `Label`
- `Select`
- `Separator`
- `Skeleton`
- `Tabs`
- `Textarea`
- `Toaster`
- `Tooltip`

</design-system-guide>
</attached-skill>

<attached-skill name="MLAI Site Design System (design system)">
[Design System] This project uses the **MLAI Site Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **MLAI** design system bound at `_ds/mlai-site-design-system-6d584c89-162e-4026-be7e-449113802c69/`. If anything under that path is missing or fails to load, the folder name may differ — `list_files` `_ds/` and use the folder whose name ends with 6d584c89-162e-4026-be7e-449113802c69 instead, including in the <link>/<script> paths below.

**Loading the bundle is how you use this design system.** Every Design Component you build must load `_ds/mlai-site-design-system-6d584c89-162e-4026-be7e-449113802c69/_ds_bundle.js` in `<helmet>` (include it in child DCs too — de-duped by URL) and compose with its components — do not recreate those components from scratch or restyle raw HTML to look like them. At the top of the template:

```html
<helmet>
  <link rel="stylesheet" href="_ds/mlai-site-design-system-6d584c89-162e-4026-be7e-449113802c69/styles.css">
  <script src="_ds/mlai-site-design-system-6d584c89-162e-4026-be7e-449113802c69/_ds_bundle.js"></script>
</helmet>
```

Then mount any component directly in the template — no logic class needed:

```html
<x-import component-from-global-scope="MLAI.Button" hint-size="auto,40px">Label</x-import>
```

Props are template attributes (kebab → camelCase); template children pass through as `props.children`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

The full design-system source tree lives at `/projects/6d584c89-162e-4026-be7e-449113802c69/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# MLAI Site Design System — usage conventions

A dark, engineering-grade marketing/product design system (Next.js + Tailwind origin). Components are plain React — **no provider or context wrapper is required**; import and render directly.

## Render on a dark canvas (required)
Every component is built for a near-black page. Put your design on the ink background or text and surfaces vanish (several components use `text-white` / light text with no background of their own):

```tsx
&lt;div className="bg-ink min-h-screen text-slate-300 font-body"&gt;{/* your design */}&lt;/div&gt;
```

`bg-ink` = `#05070B` (page), `bg-panel` = `#0A0E16` (raised). Never place these components on a light background.

## Styling idiom — Tailwind utilities + a few custom classes
Style your own layout glue with Tailwind (`grid`, `gap-*`, `md:grid-cols-3`, `mt-*`, `max-w-*`). Use this system's vocabulary for surfaces, color, and type:

| Concern | Use |
|---|---|
| Card surface | `.surface` (gradient + 1px border + inset top highlight), `.surface-hover` (lift), `.accent-edge` (top accent hairline; set `--accent` inline via `style`) |
| Product accent color | `text-wdbx` / `text-abi` / `text-abbey`, `bg-wdbx`…, `border-wdbx/40`… — **cyan = wdbx (vector store), violet = abi (GPU/runtime), emerald = abbey (agent personas)** |
| Hairlines / dividers | `border-line` (white @ 8%); `.brand-seam` = the tri-color cyan→violet→emerald seam, used once at a major boundary |
| Type | `font-display` (Sora, headings), `font-body` (Manrope), `font-mono` (JetBrains Mono — labels, eyebrows, numbers, provenance; usually uppercase with wide tracking) |
| Text emphasis | `text-white` → `text-slate-300` → `text-slate-400` → `text-slate-500/600` (descending) |

Most components take **`accent?: "wdbx" | "abi" | "abbey"`** (default `"wdbx"`) — set the accent via the prop, don't hardcode colors.

## The provenance rule (this DS's signature)
Every quantitative claim renders through `&lt;ProvTag tag="measured|target|reported" /&gt;` or `&lt;StatBlock&gt;`: **measured** = reproduced on hardware, **target** = engineering goal (not yet achieved), **reported** = cited figure. Don't show unlabeled numbers; frame goals as `target`, never as achievements. `&lt;ProvLegend /&gt;` documents the three.

## Where the truth lives
Read the bound `_ds/&lt;folder&gt;/styles.css` and its `@import` closure (tokens, `fonts/fonts.css`, `_ds_bundle.css`) for the exact compiled classes, and each component's `&lt;Name&gt;.prompt.md` + `&lt;Name&gt;.d.ts` for its API. All components are in one group.

## Idiomatic example
```tsx
import { Section, FeatureCard, StatBlock, ProvLegend } from "mlai-site";

export function PlatformSection() {
  return (
    &lt;div className="bg-ink min-h-screen text-slate-300 font-body"&gt;
      &lt;Section eyebrow="Vector store" title="WDBX" accent="wdbx"
               lead="Durable vector &amp; block memory with JSONL persistence."&gt;
        &lt;div className="grid gap-5 md:grid-cols-3"&gt;
          &lt;FeatureCard accent="wdbx" title="HNSW index" desc="M=16, efConstruction=200." /&gt;
          &lt;FeatureCard accent="wdbx" title="Local-first" desc="Data never leaves the device." /&gt;
          &lt;FeatureCard accent="wdbx" title="Audited log" desc="Append-only JSONL persistence." /&gt;
        &lt;/div&gt;
        &lt;div className="mt-8 grid gap-5 md:grid-cols-2"&gt;
          &lt;StatBlock accent="wdbx" stat={{ value: "8.2ms", label: "p50 vector query", tag: "measured" }} /&gt;
          &lt;StatBlock accent="abi"  stat={{ value: "295×",  label: "GPU matmul goal", tag: "target" }} /&gt;
        &lt;/div&gt;
        &lt;div className="mt-6"&gt;&lt;ProvLegend /&gt;&lt;/div&gt;
      &lt;/Section&gt;
    &lt;/div&gt;
  );
}
```

# MLAI (mlai-site@2.0.0)

This design system is the published mlai-site React library, bundled as a single
browser global. All 27 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.MLAI`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md` (example JSX + variants), `&lt;Name&gt;.d.ts` (types), `&lt;Name&gt;.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
&lt;link rel="stylesheet" href="styles.css"&gt;
&lt;script src="_ds_bundle.js"&gt;&lt;/script&gt;
```

Components are then available at `window.MLAI.*`. Mount into a dedicated child node (e.g. `&lt;div id="ds-root"&gt;`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AccentGlow } = window.MLAI;
ReactDOM.createRoot(document.getElementById('ds-root')).render(&lt;AccentGlow /&gt;);
```

## Tokens

64 CSS custom properties from mlai-site. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (8): `--tw-border-spacing-x`, `--tw-border-spacing-y`, `--tw-ring-offset-color`, …
- **spacing** (2): `--tw-ring-inset`, `--tw-space-y-reverse`
- **typography** (3): `--font-sora`, `--font-manrope`, `--font-jbm`
- **shadow** (4): `--tw-ring-offset-shadow`, `--tw-ring-shadow`, `--tw-shadow`, …
- **other** (47): `--tw-translate-x`, `--tw-translate-y`, `--tw-rotate`, …

## Components

### general
- `AccentGlow`
- `Callout`
- `DataTable`
- `DeepDive`
- `Eyebrow`
- `FAQList`
- `FeatureCard`
- `Footer`
- `Glossary`
- `HeroBench`
- `IndexCard`
- `Logo`
- `LogoMark`
- `Nav`
- `NextUp`
- `PersonaCard`
- `Prose`
- `ProvLegend`
- `ProvTag`
- `PublicationIndex`
- `PullQuote`
- `Section`
- `SpecList`
- `SplitSection`
- `StatBlock`
- `StepList`
- `ThroughputCard`

</design-system-guide>
</attached-skill>

## Assistant

_[tool: list_files]_

_[tool: read_file]_

The project has an empty canvas and several design systems attached (Ammoura, plus the MLAI family). What would you like me to build — and which system should lead? If it's the deck from before, give me the topic, audience, and duration.

## User

full mlai website

## Assistant

_[tool: list_files]_

_[tool: list_files]_

_[tool: list_files]_

_[tool: questions_v2]_

## User

Questions answered:
- structure: Multi-page: Home + product pages (WDBX, ABI, Personas) + Research + About
- pages: The three personas, Hero + positioning, WDBX (vector store), Benchmarks / stats (with provenance tags), ABI framework / runtime, About / principles, FAQ, Decide for me, Contact / request access, Research / publications
- audience: General public
- content: Use the design system's canonical copy + illustrative stats (tagged)
- variations: No — one solid build

## Assistant

_[tool: copy_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: grep]_

_[tool: grep]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: update_todos]_

_[tool: write_file]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: update_todos]_

_[tool: ready_for_verification]_

Full MLAI site is up — six linked pages built from the MLAI Site DS components:

- **Home** — hero + animated benchmark terminal, product index, stats with provenance, personas, principles
- **WDBX / ABI / Abbey** — product pages using the canonical brand data (features, benchmark tables, speedup ladder, persona cards)
- **Research** — filterable publication index + glossary
- **About** — principles, company facts, FAQ, contact (nav's Contact/Company/Investors routes land here)

Nav and footer links route between the pages. One tweak on Home: toggle the hero benchmark terminal. Note the contact email is a placeholder (`hello@mlai.example`) — tell me the real one and I'll swap it in.

## User

continue and massively redesign and improve all

## User

finish all pages for production

## User

finish all pages for production

## Assistant

_[tool: snip]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: str_replace_edit]_

_[tool: run_script]_

_[tool: dc_js_str_replace]_

_[tool: str_replace_edit]_

_[tool: present_fs_item_for_download]_

_[tool: ready_for_verification]_

All 11 nav routes now have real pages — added **Platform** (layer stack + data flow), **Services** (engagements + process), **Architecture** (six layers, verifiable memory, security), **Investors** (thesis, tagged numbers, facts, press), and **Contact** (working request-access form with validation, chip select, and success state). Router updated, and the TSX/Bun/React 19 package (download above) now mirrors the complete site including the interactive Contact form. Contact email is still the `hello@mlai.example` placeholder.

## User

<system-info comment="Only acknowledge these if relevant">
User is viewing file: Contact.dc.html
</system-info>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Frontend design">
Use this guidance when designing frontend/UI work that is NOT governed by an existing brand or design system. Create distinctive HTML with exceptional attention to aesthetic details and creative choices.

### Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. Use these for inspiration but design one that is true to the aesthetic direction.
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

### Aesthetics Guidelines

- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt for distinctive, characterful choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, grain overlays.

Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on the same choices across generations.

Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate animations and effects. Minimalist designs need restraint, precision, and careful attention to spacing and subtle details.
</attached-skill>

## Assistant

_[tool: snip]_

The site is complete — all 11 pages live and the TSX/Bun/React 19 package downloadable. What's next? I can push the art direction further on any page, wire the placeholder email to a real one, or export whatever you need.

## User

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Animated video">
Create an animated video or motion design piece rendered as an HTML page. Build a timeline-based animation with smooth transitions. Design frame-by-frame sequences with playback controls (play/pause, scrubber). Focus on visual storytelling with the Anthropic brand palette. Export-ready at a fixed aspect ratio (16:9 or 9:16). If you need to know the position of an element (eg to move a cursor or character between elements) use refs to grab the position.

For any standalone animation (one that isn't embedded inside another design or page), ALWAYS build on the `animations.jsx` starter — only skip it if the user explicitly asks you not to.

START by calling `copy_starter_component` with `kind: "animations.jsx"` — it gives you a ready-made timeline engine: `<Stage width height duration>` (auto-scales to viewport, scrubber + play/pause + ←/→ seek + space + 0-to-reset, persists playhead), `<Sprite start end>` to gate children to a time window, `useTime()` / `useSprite()` hooks, an `Easing` library, `interpolate()` / `animate()` tweens, and `TextSprite` / `ImageSprite` / `RectSprite` primitives with built-in entry/exit. Read the file after copying and build YOUR scenes by composing Sprites inside a Stage; only fall back to Popmotion (https://unpkg.com/popmotion@11.0.5/dist/popmotion.min.js) if the starter genuinely can't do what you need.

Stage renders inside <svg><foreignObject>; if a screenshot of it comes back black, that's a capture artifact — trust the live preview.

Animations are complex code! Make reusable JSX components for each visual element and each scene. Invest in tweaking the timeline iteratively.

Animation tips:
- Storytelling is KEY! Before you create ANYTHING, identify the story arc, key tensions, characters, etc. Align on the message you want to convey. Run it by the user.
- Use good animation principles... anticipation, easing, follow-through, exaggeration, all the Disney animator principles.
- Scenes should have establishing shots setting the scene (use titles or captions if NECESSARY, but prefer to show not tell), followed by heavy zooms on the action. (either hard cuts, or ken-burns-style zooms, or mouse-follows.) Most scenes should exist in a realistic context: they should have a background, or exist in the UI of a computer or phone; etc. Elements should generally not float in the aether.
- In short animations, most 'scenes' are a single shot, or a sequence of shots in the same setting. Scenes may be slides (e.g. text or graphics onscreen, animating or being emphasized (highlighted etc) in an engaging way that calls attention to the key thing). Decide what the shot is going to be. Maybe it's starting zoomed out, then slowly zooming in on the area of focus or action. Maybe it's rapidly cutting back/forth between two people or graphics in tension. Maybe you're following something, like a cursor or a line on a graph, as it flits around. Be creative!
- Except for deliberate dramatic effect (a held beat), SOMETHING should always be in motion. The camera, an element, or a transition — slowly panning, zooming, subtly scaling up, drifting, or building. A truly static frame reads as a bug. Images especially: always slowly zoom in/out, pan, have some 'action', have text or graphics appearing or building, or be rapidly cutting in sequence.
- Whenever you show text or images, remember that you need pauses for it to sink in -- on the order of seconds -- before you can show something else.

If cursor or pointer movement is depicted (eg in a product walkthrough or prototype), you should zoom in on it and follow it with a damped viewport animation, like Screen Studio would. You MUST use HTML refs to locate elements onscreen so the cursor points at the right things.

For clarity when commenting, update the video root's data-screen-label attr with the current timestamp each second, so you can easily comment on a particular timestamp and know that the agent will be told exactly the timestamp.

To make content the user can export as a video (Share → Export → Video):

- Put `data-om-exportable-video-with-duration-secs="<N>"` on the root element you want exported (N ≤ 300; longer is clamped).
- That element MUST listen for the custom event `data-om-seek-to-time-frame` (`detail: {time, frame}`): on receipt, pause playback and synchronously render that exact timestamp so every visible child is at that point.
- Nested `<video>` elements that should contribute audio must carry `data-om-exportable-video-play-start`, `data-om-exportable-video-play-end` (seconds into the source), and optionally `data-om-exportable-video-play-speed`; they loop within [start,end] at that speed and their audio is mixed into the export. Keep their visual frame in sync with the timeline yourself (set `video.currentTime` from the seek event / your clock).
- For best results, make the root an `<svg><foreignObject>` wrapper and inline your @font-face rules into it once — the exporter then serializes the svg directly per frame (fast, pixel-perfect). A plain div works too, just slower (full-page snapshot per frame).
- The `animations.jsx` starter (see the "Animated video" skill) wires all of this automatically — svg/foreignObject wrapper, font inlining, seek listener, and a `<VideoSprite>` helper for looped <video> clips.
</attached-skill>

<attached-skill name="Frontend design">
Use this guidance when designing frontend/UI work that is NOT governed by an existing brand or design system. Create distinctive HTML with exceptional attention to aesthetic details and creative choices.

### Design Thinking

Before coding, understand the context and commit to a BOLD aesthetic direction:
- **Purpose**: What problem does this interface solve? Who uses it?
- **Tone**: Pick an extreme: brutally minimal, maximalist chaos, retro-futuristic, organic/natural, luxury/refined, playful/toy-like, editorial/magazine, brutalist/raw, art deco/geometric, soft/pastel, industrial/utilitarian, etc. Use these for inspiration but design one that is true to the aesthetic direction.
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

Choose a clear conceptual direction and execute it with precision. Bold maximalism and refined minimalism both work — the key is intentionality, not intensity.

### Aesthetics Guidelines

- **Typography**: Choose fonts that are beautiful, unique, and interesting. Avoid generic fonts like Arial and Inter; opt for distinctive, characterful choices. Pair a distinctive display font with a refined body font.
- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes.
- **Motion**: Use animations for effects and micro-interactions. Prioritize CSS-only solutions for HTML. Focus on high-impact moments: one well-orchestrated page load with staggered reveals creates more delight than scattered micro-interactions.
- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density.
- **Backgrounds & Visual Details**: Create atmosphere and depth rather than defaulting to solid colors. Gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, decorative borders, grain overlays.

Vary between light and dark themes, different fonts, different aesthetics. NEVER converge on the same choices across generations.

Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate animations and effects. Minimalist designs need restraint, precision, and careful attention to spacing and subtle details.
</attached-skill>

## Assistant

_[tool: snip]_

_[tool: questions_v2]_

## User

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>

## Assistant

I've posted a few questions in the preview about the video idea — answer those if that's the direction. If you've switched gears and want an interactive prototype instead (the MLAI Console? a WDBX query playground? something else), just tell me what to build.

## User

proceed

## Assistant

_[tool: list_files]_

_[tool: run_script]_

_[tool: dc_write]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

**MLAI Console** prototype is live (`Console.dc.html`) — a working app shell with three surfaces:

- **Query** — type a search, hit Enter: simulated HNSW results with cosine scores, provenance paths, latency readout (labeled simulated), skeleton loading
- **Personas** — chat with Abbey / Aviva / Abi, each replying in its own register, with typing state
- **Audit log** — every search/chat appends a hash-chained entry; "Verify chain" confirms integrity

Everything runs on the MlaiLab primitives (Input, Button, Badge, Skeleton). The earlier video questions form is still open if you want that next — or I can link the Console from the site nav.

## User

Found issues — fixing…

## User

Add tweakable controls to Console.dc.html (declare with dc_set_props, read via this.props): study this design and add a tweaks panel with two or three expressive controls that reshape the feel, not single-property pixel-pushing

## User

Add tweakable controls to Console.dc.html (declare with dc_set_props, read via this.props): study this design and add a tweaks panel with two or three expressive controls that reshape the feel, not single-property pixel-pushing

## Assistant

_[tool: snip]_

_[tool: dc_set_props]_

_[tool: dc_set_props]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: dc_js_str_replace]_

_[tool: ready_for_verification]_

The Console now has four expressive tweaks (open the Tweaks panel):

- **Density** — comfortable ↔ compact: reshapes padding, row heights, gaps, and body type across all three views
- **Accent** — curated swatches (cyan / violet / emerald / amber) recoloring the console chrome: eyebrow, scores, latency, hover borders, glow
- **Ambient glow** — toggles the brand key-light wash over the whole shell
- **Latency profile** — instant / realistic / stressed: changes search delay, reported latencies (amber when stressed), skeleton time, and persona typing speed — the whole demo feels like different hardware

## User

<system-info comment="Only acknowledge these if relevant">
Project title is now "Full MLAI website"
What `list_files` on the project root returns right now (dotfiles, if any, are not shown here):
📁 _ds
📁 design_handoff_mlai_site
📁 uploads
📄 Abbey.dc.html
📄 ABI.dc.html
📄 About.dc.html
📄 Architecture.dc.html
📄 Canvas-2.dc.html
📄 Canvas.dc.html
📄 Console.dc.html
📄 Contact.dc.html
📄 galaxy.js
📄 Home.dc.html
📄 Investors.dc.html
📄 Platform.dc.html
📄 Research.dc.html
📄 router.js
📄 Services.dc.html
📄 support.js
📄 WDBX.dc.html
User is viewing file: Abbey.dc.html
Current date is now July 31, 2026
User adjusted these values via the in-page Tweaks panel (already saved to disk):
Trailer.html:
  engine: "neural"
  voiceOn: true
  grain: false
  voicePreset: "Calm"
  rate: 0.98
  pitch: 1.06
  expr: 1
  volume: 1
  abbeyVoice: "af_bella"
  captions: false
</system-info>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Ammoura Design System (design system)">
[Design System] This project uses the **Ammoura Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **AmmouraDesignSystem_b0ebb7** design system bound at `_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/`. If anything under that path is missing or fails to load, the folder name may differ — `list_files` `_ds/` and use the folder whose name ends with b0ebb77c-387a-4087-8f99-7cc858aa0c6f instead, including in the <link>/<script> paths below.

**Loading the bundle is how you use this design system.** Every Design Component you build must load `_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/_ds_bundle.js` in `<helmet>` (include it in child DCs too — de-duped by URL) and compose with its components — do not recreate those components from scratch or restyle raw HTML to look like them. At the top of the template:

```html
<helmet>
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/colors.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/themes.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/typography.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/spacing.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/effects.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/tokens/base.css">
  <link rel="stylesheet" href="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/styles.css">
  <script src="_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f/_ds_bundle.js"></script>
</helmet>
```

Then mount any component directly in the template — no logic class needed:

```html
<x-import component-from-global-scope="AmmouraDesignSystem_b0ebb7.Button" hint-size="auto,40px">Label</x-import>
```

Props are template attributes (kebab → camelCase); template children pass through as `props.children`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

**Start from a template if one matches.** Before building from scratch, check whether a template below matches the user's request. Read the template (list its folder, `read_file` the entry) and decide: if it's close to what's asked, `copy_files` the folder as your starting point; if you'd rather re-author in DC, `dc_write` a new page using the template as your structural reference. When this design system is bound, `copy_files` repoints the copied `ds-base.js` automatically — only edit its base line yourself if the copy result says so, or when copying from an unbound project (change `'../..'` to your `_ds/ammoura-design-system-b0ebb77c-387a-4087-8f99-7cc858aa0c6f` path). (Older templates have no `ds-base.js` and carry `../../…` bundle/stylesheet refs in their pages instead — repoint those by hand.)

- `Ammoura Storefront` (`/projects/b0ebb77c-387a-4087-8f99-7cc858aa0c6f/templates/storefront/`) — Branded store landing — hero with gradient orbs + a product grid built from Ammoura components

The full design-system source tree lives at `/projects/b0ebb77c-387a-4087-8f99-7cc858aa0c6f/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# Ammoura™ Design System

A design system for **Ammoura™** — a modern, multi-tenant **eCommerce platform** (developed under the codename *Hermes*). Ammoura lets anyone spin up a beautiful online store with a WYSIWYG page builder, a swappable theme system, products/cart/checkout, and an admin dashboard. It runs on SvelteKit + Cloudflare (Pages, D1, R2) with TypeScript.

&gt; **Name origin.** Ammoura is named for King Hammurabi of Babylon (c. 1792–1750 BCE), author of one of history's first commercial legal codes. Just as Hammurabi brought order and fairness to ancient markets, Ammoura provides the foundation for modern digital commerce. **Ammoura™** is a trademark of David William Monaghan. © 2025.

## Source material
This system was reverse-engineered from the product's own source. Explore these to build with higher fidelity:
- **GitHub — `starspacegroup/hermes`**: https://github.com/starspacegroup/hermes
  - Global stylesheet &amp; theme tokens: `src/app.css`
  - Named color themes: `src/lib/utils/editor/colorThemes.ts`
  - Components: `src/lib/components/*.svelte` (Button, Avatar, ProductCard, ConfirmModal, ThemeToggle, …)
  - Storefront homepage &amp; product page: `src/routes/+page.svelte`, `src/routes/product/[id]/+page.svelte`
- **Org:** https://github.com/orgs/AmmouraMe/

The reader is encouraged to browse these repositories to do an even better job designing for Ammoura.

---

## Content fundamentals — how Ammoura writes

- **Audience &amp; person.** Copy speaks directly to the *store owner* in second person. "Create **your** own online store." "Make **your** store uniquely yours." Customers are addressed warmly too ("Your customers can shop from anywhere").
- **Tone.** Encouraging, plain-spoken, optimistic, never jargon-heavy. Short declaratives. "Simple, beautiful, and ready for your business."
- **Fairness is the brand promise.** Pricing copy leads with alignment: "Zero monthly fees. **We win when you win.**" / "Pay-as-You-Grow."
- **Casing.** Marketing headlines use Title Case ("Everything You Need to Succeed"); UI labels and buttons use sentence-friendly Title Case too ("Add to Cart", "Quick View", "Start Your Store"). Eyebrow/category labels are UPPERCASE with letter-spacing.
- **Emoji are part of the voice.** Used as friendly section/feature markers and in headings: 🎯 ✨ 📦 💳 🎨 📱 💰 💎 🚀. Keep them tasteful — one per feature/heading, never mid-sentence in body copy.
- **Examples:** "Start Selling Online Today" · "See Example Store" · "No credit card required • Cancel anytime" · "Only 3 left!" · "✓ In Stock".

## Visual foundations

- **Color.** A theme-driven palette. The default light theme is **Vibrant Pink** (primary `#ec4899`, secondary purple `#8b5cf6`, accent amber `#f59e0b`, pink-tinted backgrounds). The default dark theme is **Midnight Purple** (primary `#a78bfa` on slate `#0f172a`). Stores can pick any of **8 named presets** (vibrant, midnight, minimal, professional, warm, cool, nature, monochrome) — see `tokens/themes.css`. Two parallel token layers exist: `--color-*` (app/components) and `--theme-*` (page-builder references).
- **Type.** No custom webfonts — the native **system sans** stack (`-apple-system, Segoe UI, Roboto…`) for everything, **Fira Code** for mono. Headings are bold→extrabold with tight tracking; `h1` is `clamp(2rem,5vw,3.5rem)` @ 800 / `-0.02em`; the marketing hero goes to `clamp(2.5rem,8vw,4.5rem)`. Body is `1.6` line-height. Eyebrow labels (`h6`, categories) are uppercase, 600, `0.05em`.
- **Backgrounds.** Soft tinted surfaces (no photos as backgrounds in core UI). The hero floats large **blurred gradient orbs** (primary/secondary, `blur(80px)`, ~0.3 opacity, slow float). Marketing CTAs use a **135° primary→secondary gradient** panel with a faint diagonal-stripe overlay. Brand gradient is also used for **clipped gradient text** on hero keywords.
- **Corner radii.** `4px` code · `6px` badges/small buttons · `8px` buttons &amp; inputs · `12px` feature cards · `16px` product cards / hero panels / CTA · `50px` pills &amp; hero badge.
- **Shadows.** Soft and diffuse: `sm 0 2px 4px /.05`, `md 0 4px 12px /.1`, `lg 0 20px 60px /.3`. Cards rest on a light `0 2px 8px` shadow and rise to `0 12px 32px` on hover.
- **Cards.** White (`--color-bg-primary`), `1px` border (`--color-border-secondary`), soft shadow, `16px` radius. On hover they **lift** (`translateY(-8px)` for products, `-4px` for feature/pricing), deepen their shadow, and adopt a **brand-colored border**. Highlighted/accent panels swap to a `2px` primary border.
- **Motion.** Playful but restrained. Transitions `fast 150ms / normal 250ms / slow 350ms`, all `ease`. Signatures: hover-lift on cards &amp; buttons, image zoom on product hover using a springy `cubic-bezier(0.34,1.56,0.64,1)`, hero fade-up, pulsing badge icon, bouncing scroll arrows, skeleton-shimmer image loaders, floating orbs.
- **Hover / press.** Solid buttons darken to `--color-primary-hover` and lift `-2px` with a shadow; pressing returns to `translateY(0)`. Secondary/ghost buttons tint to `--color-bg-accent`. Icon controls nudge `-1px`. Quantity buttons scale `1.1` on hover, `0.95` on press.
- **Borders &amp; focus.** `1–2px` solid borders. Inputs use a `2px` border and a brand **focus ring**: `0 0 0 3px` of primary at 10% (`color-mix`). Focus-visible outlines are `2px` primary with `2px` offset.
- **Transparency &amp; blur.** Sticky navbar uses a translucent surface + `backdrop-filter: blur`. Product hover reveals a `rgba(0,0,0,0.7)` "Quick View" scrim. Status badges use ~10% tinted backgrounds of their status color.
- **Imagery vibe.** Bright, clean, retail-friendly. When product photos are absent, the platform renders a neutral tile with a 📦 glyph (this system uses emoji placeholders in demos for the same reason).

## Iconography

- **Primary set: [Lucide](https://lucide.dev)** — the product ships `lucide-svelte`. Line icons, **2px stroke**, round caps &amp; joins, `24×24` viewbox (rendered ~16–24px). Examples in source: cart, arrow-right, check, sun/moon (theme toggle), info-circle, x (close).
  - In HTML artifacts, either inline the Lucide SVG (2px round-cap stroke, `stroke="currentColor"`) — as this system's `ThemeToggle`, `Navbar` and `CartDrawer` do — or load Lucide from a CDN. **Match the 2px round-cap style; don't mix in filled or hairline icon sets.**
- **Emoji as iconography.** Ammoura deliberately uses emoji for feature/marketing markers and as the empty-product placeholder (📦). Treat emoji as a legitimate, on-brand icon layer for marketing surfaces — not for functional UI controls (use Lucide there).
- **No custom icon font or SVG sprite** exists in the source beyond Lucide + a tiny favicon (`assets/favicon.png`). There is **no formal logo asset** — the wordmark is type-based (see `guidelines/brand-wordmark.card.html`): "Ammoura" set in the system sans at 800 weight, leading "A" in primary, paired with a gradient "A" glyph tile.

---

## Index / manifest

**Root**
- `styles.css` — the single entry point consumers link (imports everything below).
- `tokens/` — `colors.css` (app + theme layers, light &amp; dark), `themes.css` (8 named presets), `typography.css`, `spacing.css`, `effects.css` (radii/shadows/motion/gradients), `base.css` (element defaults).
- `assets/` — `favicon.png`.
- `SKILL.md` — Agent-Skills-compatible entry point.

**Components** (`components/&lt;group&gt;/`, namespace exposed as `window.AmmouraDesignSystem_*`)
- `core/` — **Button, Avatar, Badge, Card, QuantityStepper, ThemeToggle**
- `forms/` — **Input, Select, Checkbox, Switch**
- `feedback/` — **Modal**
- `commerce/` — **ProductCard** (composes Badge + Button + QuantityStepper)

Each component directory has `&lt;Name&gt;.jsx`, `&lt;Name&gt;.d.ts`, `&lt;Name&gt;.prompt.md`, and a `*.card.html` thumbnail.

**Foundation cards** (`guidelines/`) — Colors (brand, surfaces/text, status, themes), Type (display, hero, body/mono), Spacing (scale, radii), Effects (shadows, gradient/focus/motion), Brand (wordmark, story &amp; voice). These populate the Design System tab.

**UI kit** (`ui_kits/storefront/`) — an interactive recreation of the Ammoura customer storefront (hero, features, product grid, quick-view modal, cart drawer, light/dark). See its `README.md`.

## Caveats
- **Fonts are the system stack by design** — Ammoura ships no webfonts. `--font-sans` lists `Oxygen`/`Ubuntu`/`Cantarell` and `--font-mono` lists `Fira Code` as *stack members*; they render only if installed locally and otherwise fall back gracefully. No font upload is required.
- No official logo mark exists in the source; the wordmark here is an original type treatment consistent with the brand.

</design-system-guide>
</attached-skill>

<attached-skill name="MLAI Design System (design system)">
[Design System] This project uses the **MLAI Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **MLAIDesignSystem_6d97fa** design system bound at `_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/`. If anything under that path is missing or fails to load, the folder name may differ — `list_files` `_ds/` and use the folder whose name ends with 6d97fa83-1224-4573-9c22-46f67ac46f3c instead, including in the <link>/<script> paths below.

**Loading the bundle is how you use this design system.** Every Design Component you build must load `_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/_ds_bundle.js` in `<helmet>` (include it in child DCs too — de-duped by URL) and compose with its components — do not recreate those components from scratch or restyle raw HTML to look like them. At the top of the template:

```html
<helmet>
  <link rel="stylesheet" href="_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/vendor/lab/fonts/fonts.css">
  <link rel="stylesheet" href="_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/vendor/lab/theme.css">
  <link rel="stylesheet" href="_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/vendor/site/fonts/fonts.css">
  <link rel="stylesheet" href="_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/vendor/site/theme.css">
  <link rel="stylesheet" href="_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/vendor/tw-token-registry.css">
  <link rel="stylesheet" href="_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/colors_and_type.css">
  <link rel="stylesheet" href="_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/styles.css">
  <script src="_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c/_ds_bundle.js"></script>
</helmet>
```

Then mount any component directly in the template — no logic class needed:

```html
<x-import component-from-global-scope="MLAIDesignSystem_6d97fa.Button" hint-size="auto,40px">Label</x-import>
```

Props are template attributes (kebab → camelCase); template children pass through as `props.children`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

**Start from a template if one matches.** Before building from scratch, check whether a template below matches the user's request. Read the template (list its folder, `read_file` the entry) and decide: if it's close to what's asked, `copy_files` the folder as your starting point; if you'd rather re-author in DC, `dc_write` a new page using the template as your structural reference. When this design system is bound, `copy_files` repoints the copied `ds-base.js` automatically — only edit its base line yourself if the copy result says so, or when copying from an unbound project (change `'../..'` to your `_ds/mlai-design-system-6d97fa83-1224-4573-9c22-46f67ac46f3c` path). (Older templates have no `ds-base.js` and carry `../../…` bundle/stylesheet refs in their pages instead — repoint those by hand.)

- `Vision Trailer` (`/projects/6d97fa83-1224-4573-9c22-46f67ac46f3c/templates/vision-trailer/`) — The 63s MLAI vision trailer — animated 16:9 cut with Abbey's neural voiceover, captions, and format/voice options.

The full design-system source tree lives at `/projects/6d97fa83-1224-4573-9c22-46f67ac46f3c/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# MLAI Corporation — Design System

**Machine Learning Advanced Innovations, Inc.**
Privacy-first AI infrastructure. Tagline: **"private, high-performance AI."**
Positioning line: *Infrastructure for resilient intelligence.*

This repository is the canonical source of truth for designing anything branded MLAI —
production UI, marketing pages, decks, OG cards, or throwaway prototypes. Read this file
first, then explore the foundations (`colors_and_type.css`), the preview cards
(`preview/`), and the UI kits (`ui_kits/`).

---

## 1 · Company &amp; product context

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
| `uploads/mlai-design.html` | **Poster / generative studio / OG cards** — brand board, flow-field &amp; galaxy generators, 1200×630 social cards. |
| `uploads/mlai-lab.html` | **Design &amp; Algorithmic Lab** — a simulated WDBX telemetry dashboard, command palette, theme switcher, and a gallery of generative canvases. |
| `uploads/index.html` + `scenes_*.jsx`, `brand.jsx`, `fx.jsx`, `narration.jsx`, `animations.jsx` | The long-form **brand film** (~10 min) — act cards, neural backgrounds, diagram scenes, voiceover. `brand.jsx` holds film-side brand tokens + the `MLAIMark` component. |
| `uploads/Trailer.html` + `trailer_*.jsx` | Short brand **trailer** cut. |
| `uploads/MLAI-Cinematic-Prompts.md` | **Cinematic video prompt kit** — directorial system for text-to-video tools; the clearest statement of mood, palette, persona motion signatures and negative prompts. |

&gt; Note on tokens: the brand-board (`mlai-brand.html`) ran a looser 6-color palette and the
&gt; early site ran a single blue. **Design Upgrade v2 reconciled these** into action / spectrum
&gt; / persona / semantic roles. When the two disagree, **v2 wins** — and `colors_and_type.css`
&gt; encodes v2.

---

## 3 · Content fundamentals (voice &amp; copy)

**Register:** Terse, precise, privacy-forward. State what's true and useful — no hype, no
hedging. *Confident, not loud.* Technical depth delivered with clarity. The default voice
is **Abi's** neutral register; shift toward **Abbey** (warmer, metaphor-first) or **Aviva**
(blunt, dense) to match the audience.

**Person &amp; address:** Speaks as "we" (the company); addresses the reader as "you" sparingly.
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

**Color &amp; vibe.** A deep, cool, near-black base (`#050509`) lifted only by source light.
Cool shadows, neutral highlights — **never** an orange-teal grade. The accent story is a
single **electric spectrum: cyan `#22D3EE` → blue `#3B82F6` → violet `#A855F7`**, with one
disciplined **action blue** for interaction and **emerald / amber / red** for meaning.
Color is **never decorative** — it's action, identity/data, persona, or semantic. Imagery
reads **cool and luminous** (blues, cyans, violets glowing in black), with soft bloom and
deep blacks; no warm grade, no oversaturation.

**Type.** **Outfit** (geometric sans) for display &amp; headings; **Inter** for UI &amp; body;
**JetBrains Mono** for labels, eyebrows, metrics, code. A Major-Third (1.25) modular scale.
Tracking **tightens** as size grows (display `-0.03em`) and leading **loosens** as size
shrinks (body `1.6`). Eyebrows are mono, uppercase, `0.24em` tracking.

**Spacing &amp; layout.** A strict **4px base scale** plus five rhythm tokens (section, block,
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

**Depth &amp; elevation.** A **4-tier surface ramp** — L0 canvas `#050509` → L1 sunken
`#08090F` → L2 surface `#0E0F18` → L3 raised `#161721` → L4 overlay `#1D1E2A` — each paired
with a fixed shadow (`--shadow-1..4`). Cards are **glassmorphic**: `--glass-fill` (a 145°
white 4.5%→1% gradient), a `1px` hairline border (`rgba(255,255,255,0.08–0.14)`),
`blur(14px)`, and a top **sheen** highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`). Glow
is *inherited from the page light*, not invented per-card.

**Borders &amp; corners.** Hairline borders only (`--hair` 8% / `--hair-strong` 14% white).
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

**Transparency &amp; blur.** Used deliberately: glass panels, sticky nav bars
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
&lt;script src="https://unpkg.com/lucide@latest"&gt;&lt;/script&gt;
&lt;i data-lucide="lock"&gt;&lt;/i&gt;
&lt;script&gt;lucide.createIcons();&lt;/script&gt;
```

or inline a single path with the stroke settings above (matches the original code exactly).
**Never** hand-draw bespoke pictograms, and **never** substitute emoji for icons.

**Other glyphs.** Personas are shown as **colored dots** (`●` / a glowing 2.5–3px circle),
never icons or faces. Functional Unicode only: `→`, `⌘K`, `◆`, `✓`, `·`. The **brand mark**
(`assets/mlai-mark.svg`) is the gradient "M" chip with the three-persona "neural trifecta"
dots — see §6.

&gt; Substitution flag: the source used inline-coded Lucide paths (not the npm package). This
&gt; system documents the equivalent CDN/`data-lucide` usage — visually identical (same set,
&gt; same stroke). No icon style was changed.

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

&gt; Logo note: MLAI's mark is defined in code (a CSS/SVG gradient chip), not as a raster file —
&gt; there was no PNG/AI logo to import. These SVGs faithfully reproduce the mark exactly as the
&gt; brand defines it (`brand.jsx` `MLAIMark`, `mlai-brand.html` `Mark`). **Misuse, never:**
&gt; don't stretch, don't recolor the chip, no heavy outer glow, no busy background.

**Fonts.** Outfit, Inter and JetBrains Mono are all **Google Fonts**, loaded via CDN
(`@import` at the top of `colors_and_type.css`). No binary font files are bundled. If you
need them offline, download the families from Google Fonts and add `@font-face` rules — the
families are an exact match, not a substitution.

---

## 7 · Component library (combined)

This project now merges **three MLAI systems into one bundle**. Loading it:

```html
&lt;link rel="stylesheet" href="styles.css"&gt;          &lt;!-- one link — all tokens + component CSS --&gt;
&lt;script src="_vendor/react.js"&gt;&lt;/script&gt;            &lt;!-- or your own React 18 --&gt;
&lt;script src="_vendor/react-dom.js"&gt;&lt;/script&gt;
&lt;script src="_ds_bundle.js"&gt;&lt;/script&gt;
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
internal carriers, never used directly. Per-component docs: `components/&lt;grp&gt;/&lt;Name&gt;/&lt;Name&gt;.d.ts`.

&gt; **Token-scanner note.** The vendor stylesheets are compiled Tailwind. The real theme
&gt; tokens live in `vendor/lab/theme.css` + `vendor/site/theme.css` (clean `:root` scopes,
&gt; imported by `styles.css`); the full utility/variant CSS is embedded in the runtime
&gt; carriers and injected at page load as the FIRST stylesheet in `&lt;head&gt;`, so everything
&gt; linked via `styles.css` (brand tokens last) wins the cascade.
&gt;
&gt; **Regenerating vendor CSS.** `vendor/lab/_ds_bundle.css` and `vendor/site/_ds_bundle.css`
&gt; are the canonical sources. If you edit them, re-embed: replace the JSON string literal
&gt; inside the `data-mlai-vendor-css` injector in `components/vendor/LabRuntime/LabRuntime.jsx`
&gt; / `SiteRuntime/SiteRuntime.jsx` with the updated file content (JSON.stringify'd), and
&gt; re-extract the theme blocks if tokens changed.

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

UI kits (`ui_kits/&lt;product&gt;/`):

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

</design-system-guide>
</attached-skill>

<attached-skill name="MLAI Design System (design system)">
[Design System] This project uses the **MLAI Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

    Explore it to find what you need:
    - Always copy out the fonts and colors you need
    - For prototypes and designs, always copy out any relevant components
    - If the design system contains existing mocks of products, and you were asked to design or prototype something similar, copy and fork those mocks to start your design. This helps you make high-quality designs.

    Explore it quickly to find relevant UI kits (e.g. mocks of existing products you can copy and fork)

Full system at `/projects/f72d5c75-682a-48b1-915f-b14d45ceaa87/`. Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# MLAI Corporation — Design System

**Machine Learning Advanced Innovations, Inc.**
Privacy-first AI infrastructure. Tagline: **"private, high-performance AI."**
Positioning line: *Infrastructure for resilient intelligence.*

This repository is the canonical source of truth for designing anything branded MLAI —
production UI, marketing pages, decks, OG cards, or throwaway prototypes. Read this file
first, then explore the foundations (`colors_and_type.css`), the preview cards
(`preview/`), and the UI kits (`ui_kits/`).

---

## 1 · Company &amp; product context

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
| `uploads/mlai-design.html` | **Poster / generative studio / OG cards** — brand board, flow-field &amp; galaxy generators, 1200×630 social cards. |
| `uploads/mlai-lab.html` | **Design &amp; Algorithmic Lab** — a simulated WDBX telemetry dashboard, command palette, theme switcher, and a gallery of generative canvases. |
| `uploads/index.html` + `scenes_*.jsx`, `brand.jsx`, `fx.jsx`, `narration.jsx`, `animations.jsx` | The long-form **brand film** (~10 min) — act cards, neural backgrounds, diagram scenes, voiceover. `brand.jsx` holds film-side brand tokens + the `MLAIMark` component. |
| `uploads/Trailer.html` + `trailer_*.jsx` | Short brand **trailer** cut. |
| `uploads/MLAI-Cinematic-Prompts.md` | **Cinematic video prompt kit** — directorial system for text-to-video tools; the clearest statement of mood, palette, persona motion signatures and negative prompts. |

&gt; Note on tokens: the brand-board (`mlai-brand.html`) ran a looser 6-color palette and the
&gt; early site ran a single blue. **Design Upgrade v2 reconciled these** into action / spectrum
&gt; / persona / semantic roles. When the two disagree, **v2 wins** — and `colors_and_type.css`
&gt; encodes v2.

---

## 3 · Content fundamentals (voice &amp; copy)

**Register:** Terse, precise, privacy-forward. State what's true and useful — no hype, no
hedging. *Confident, not loud.* Technical depth delivered with clarity. The default voice
is **Abi's** neutral register; shift toward **Abbey** (warmer, metaphor-first) or **Aviva**
(blunt, dense) to match the audience.

**Person &amp; address:** Speaks as "we" (the company); addresses the reader as "you" sparingly.
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

**Color &amp; vibe.** A deep, cool, near-black base (`#050509`) lifted only by source light.
Cool shadows, neutral highlights — **never** an orange-teal grade. The accent story is a
single **electric spectrum: cyan `#22D3EE` → blue `#3B82F6` → violet `#A855F7`**, with one
disciplined **action blue** for interaction and **emerald / amber / red** for meaning.
Color is **never decorative** — it's action, identity/data, persona, or semantic. Imagery
reads **cool and luminous** (blues, cyans, violets glowing in black), with soft bloom and
deep blacks; no warm grade, no oversaturation.

**Type.** **Outfit** (geometric sans) for display &amp; headings; **Inter** for UI &amp; body;
**JetBrains Mono** for labels, eyebrows, metrics, code. A Major-Third (1.25) modular scale.
Tracking **tightens** as size grows (display `-0.03em`) and leading **loosens** as size
shrinks (body `1.6`). Eyebrows are mono, uppercase, `0.24em` tracking.

**Spacing &amp; layout.** A strict **4px base scale** plus five rhythm tokens (section, block,
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

**Depth &amp; elevation.** A **4-tier surface ramp** — L0 canvas `#050509` → L1 sunken
`#08090F` → L2 surface `#0E0F18` → L3 raised `#161721` → L4 overlay `#1D1E2A` — each paired
with a fixed shadow (`--shadow-1..4`). Cards are **glassmorphic**: `--glass-fill` (a 145°
white 4.5%→1% gradient), a `1px` hairline border (`rgba(255,255,255,0.08–0.14)`),
`blur(14px)`, and a top **sheen** highlight (`inset 0 1px 0 rgba(255,255,255,0.08)`). Glow
is *inherited from the page light*, not invented per-card.

**Borders &amp; corners.** Hairline borders only (`--hair` 8% / `--hair-strong` 14% white).
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

**Transparency &amp; blur.** Used deliberately: glass panels, sticky nav bars
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
&lt;script src="https://unpkg.com/lucide@latest"&gt;&lt;/script&gt;
&lt;i data-lucide="lock"&gt;&lt;/i&gt;
&lt;script&gt;lucide.createIcons();&lt;/script&gt;
```

or inline a single path with the stroke settings above (matches the original code exactly).
**Never** hand-draw bespoke pictograms, and **never** substitute emoji for icons.

**Other glyphs.** Personas are shown as **colored dots** (`●` / a glowing 2.5–3px circle),
never icons or faces. Functional Unicode only: `→`, `⌘K`, `◆`, `✓`, `·`. The **brand mark**
(`assets/mlai-mark.svg`) is the gradient "M" chip with the three-persona "neural trifecta"
dots — see §6.

&gt; Substitution flag: the source used inline-coded Lucide paths (not the npm package). This
&gt; system documents the equivalent CDN/`data-lucide` usage — visually identical (same set,
&gt; same stroke). No icon style was changed.

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

&gt; Logo note: MLAI's mark is defined in code (a CSS/SVG gradient chip), not as a raster file —
&gt; there was no PNG/AI logo to import. These SVGs faithfully reproduce the mark exactly as the
&gt; brand defines it (`brand.jsx` `MLAIMark`, `mlai-brand.html` `Mark`). **Misuse, never:**
&gt; don't stretch, don't recolor the chip, no heavy outer glow, no busy background.

**Fonts.** Outfit, Inter and JetBrains Mono are all **Google Fonts**, loaded via CDN
(`@import` at the top of `colors_and_type.css`). No binary font files are bundled. If you
need them offline, download the families from Google Fonts and add `@font-face` rules — the
families are an exact match, not a substitution.

---

## 7 · Index / manifest

Root files:

- **`README.md`** — this file. Brand context, voice, visual foundations, iconography, manifest.
- **`colors_and_type.css`** — the canonical token system (color roles, elevation, spacing +
  rhythm, radii, the Major-Third type scale, motion) plus semantic element styles. Import this
  into anything you build.
- **`SKILL.md`** — Agent-Skill front-matter so this folder works as a downloadable Claude skill.
- **`assets/`** — `mlai-mark.svg`, `mlai-logo-lockup.svg`.
- **`preview/`** — small HTML specimen cards that populate the Design System tab (type, color,
  spacing/elevation, components, brand).
- **`uploads/`** — the original provided source artifacts (see §2).

UI kits (`ui_kits/&lt;product&gt;/`):

- **`ui_kits/marketing/`** — the MLAI marketing website: nav, hero with embedding-galaxy
  canvas, persona legend, feature cards, stat blocks, footer, command palette. `index.html` is
  an interactive click-through.
- **`ui_kits/console/`** — the MLAI **Console / Lab**: app shell with sidebar + command palette,
  the simulated **WDBX telemetry dashboard** (gauges, sparklines, shard health), and a personas
  chat surface. `index.html` is an interactive click-through.

Each UI kit folder has its own `README.md`, an `index.html` demo, and small JSX components.

---

*© Machine Learning Advanced Innovations, Inc. · Brand Guidelines · Disciplined Secrecy ·
Mission Stewardship · Operational Velocity.*

</design-system-guide>

CSS tokens: the guide may describe tokens in prose, but the exact `--*` names are defined in the design system's stylesheet(s) (`/projects/f72d5c75-682a-48b1-915f-b14d45ceaa87/colors_and_type.css`, `/projects/f72d5c75-682a-48b1-915f-b14d45ceaa87/uploads/MLAI Corporation (Template)-handoff/project/src/index.css`). The 106 custom properties it defines are:

--action, --action-grad, --action-hover, --action-press, --action-ring, --action-soft, --border-1, --border-2, --border-3, --border-4, --danger, --danger-soft, --dur-base, --dur-fast, --dur-reveal, --dur-slow, --ease-in-out, --ease-out, --font-display, --font-mono, --font-sans, --glass-blur, --glass-fill, --glass-fill-hi, --glass-sheen, --grain-opacity, --hair, --hair-hi, --hair-strong, --leading-display, --leading-normal, --leading-snug, --leading-tight, --light-ambient, --light-fill, --light-key, --mlai-amber, --mlai-blue, --mlai-blue-hi, --mlai-blue-lo, --mlai-cyan, --mlai-cyan-hi, --mlai-green, --mlai-red, --mlai-violet, --mlai-violet-hi, --persona-abbey, --persona-abi, --persona-aviva, --proof, --proof-soft, --radius-lg, --radius-md, --radius-pill, --radius-sm, --radius-xl, --radius-xs, --shadow-1, --shadow-2, --shadow-3, --shadow-4, --signal, --signal-soft, --space-1, --space-10, --space-2, --space-3, --space-4, --space-5, --space-6, --space-7, --space-8, --space-9, --space-block, --space-card, --space-inline, --space-section, --space-stack, --spectrum-blue, --spectrum-cyan, --spectrum-grad, --spectrum-grad-135, --spectrum-violet, --surface-0, --surface-1, --surface-2, --surface-3, --surface-4, --text, --text-base, --text-dim, --text-faint, --text-h0, --text-h00, --text-h1, --text-h2, --text-h3, --text-h4, --text-h5, --text-mono, --text-sm, --tracking-display, --tracking-eyebrow, --tracking-mono, --tracking-normal, --tracking-tight

Only use `var(--*)` names from that list. Never guess a token name — an unresolved `var()` silently falls back to the browser default.

For assets and UI kits beyond the guide: `read_file("/projects/f72d5c75-682a-48b1-915f-b14d45ceaa87/<path>")` and `copy_files` to bring them into the current project.
</attached-skill>

<attached-skill name="MLAI Lab UI Primitives (design system)">
[Design System] This project uses the **MLAI Lab UI Primitives** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **MlaiLab** design system bound at `_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/`. If anything under that path is missing or fails to load, the folder name may differ — `list_files` `_ds/` and use the folder whose name ends with c535eba1-9a32-465a-a804-0926c7d0c8ad instead, including in the <link>/<script> paths below.

**Loading the bundle is how you use this design system.** Every Design Component you build must load `_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/_ds_bundle.js` in `<helmet>` (include it in child DCs too — de-duped by URL) and compose with its components — do not recreate those components from scratch or restyle raw HTML to look like them. At the top of the template:

```html
<helmet>
  <link rel="stylesheet" href="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/fonts/fonts.css">
  <link rel="stylesheet" href="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/_ds_bundle.css">
  <link rel="stylesheet" href="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/styles.css">
  <script src="_ds/mlai-lab-ui-primitives-c535eba1-9a32-465a-a804-0926c7d0c8ad/_ds_bundle.js"></script>
</helmet>
```

Then mount any component directly in the template — no logic class needed:

```html
<x-import component-from-global-scope="MlaiLab.Button" hint-size="auto,40px">Label</x-import>
```

Props are template attributes (kebab → camelCase); template children pass through as `props.children`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

The full design-system source tree lives at `/projects/c535eba1-9a32-465a-a804-0926c7d0c8ad/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# MLAI "Lab" UI — conventions for building with this design system

These are the shadcn-style primitives behind the MLAI Corporation site, styled with the
**"Lab"** brand: **cyan** primary on a **near-black ink** canvas (`--background` ≈
`oklch(0.07 0.012 260)`), with **violet / emerald / amber** as fixed persona accents and a
**Spectral serif** display face (`--font-display`) on headings. Body text is **Geist**.

## Setup
- **No provider is required** for the primitives. Color comes entirely from CSS custom
  properties defined on `:root` in `styles.css` — the system is **dark-only** (there is no
  light theme; the `.dark` class only sets `color-scheme`). Render on a dark surface
  (`background: var(--background)`); components built for that canvas (Input, Select,
  Separator borders) look washed out on a white background.
- Import components from the bundle global, e.g. `import { Button, Card } from "&lt;this DS&gt;"`.
  All exports are also on `window.MlaiLab`.

## Styling idiom — Tailwind utility classes with semantic tokens
Components accept a `className`; compose layout with Tailwind utilities. **Prefer the
semantic token utilities over raw colors** so new UI stays on-brand:

| Concern | Utilities |
|---|---|
| Surfaces | `bg-background`, `bg-card`, `bg-muted`, `bg-popover` |
| Text | `text-foreground`, `text-muted-foreground`, `text-primary` |
| Primary action | `bg-primary` + `text-primary-foreground` (primary is **light cyan**, so its foreground is **dark**) |
| Borders / focus | `border-border`, `border-input`, `ring-ring` |
| Status | `text-destructive`, and the `cyan-500` / `yellow-500` ramps for success / warning |
| Persona accents | `cyan` (Abbey), `violet`, `emerald`, `amber` Tailwind ramps |
| Radius / type | `rounded-md` (token `--radius`), `font-display` (Spectral) for headings |

Don't hardcode hex; reach for `bg-primary`/`text-muted-foreground`/`border-border` etc.

## Where the truth lives
- `styles.css` (imports `_ds_bundle.css`) — the full token set and compiled utilities.
- `&lt;Name&gt;.d.ts` — the prop contract; `&lt;Name&gt;.prompt.md` — per-component usage.

## Idiomatic snippet
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from "&lt;this DS&gt;";

&lt;Card className="max-w-sm"&gt;
  &lt;CardHeader&gt;
    &lt;CardTitle&gt;WDBX store&lt;/CardTitle&gt;
    &lt;CardDescription&gt;Durable vector / block memory.&lt;/CardDescription&gt;
  &lt;/CardHeader&gt;
  &lt;CardContent className="flex items-center gap-2"&gt;
    &lt;Badge variant="success"&gt;healthy&lt;/Badge&gt;
    &lt;span className="text-sm text-muted-foreground"&gt;1,204 vectors&lt;/span&gt;
  &lt;/CardContent&gt;
  &lt;CardFooter className="gap-2"&gt;
    &lt;Button size="sm"&gt;Open&lt;/Button&gt;
    &lt;Button size="sm" variant="outline"&gt;Compact&lt;/Button&gt;
  &lt;/CardFooter&gt;
&lt;/Card&gt;
```

## Notes
- **Compound components** (Card, Alert, Dialog, Select, Tabs, Accordion, DropdownMenu) are
  composed from named parts (`CardHeader`, `AlertTitle`, `SelectItem`, `TabsTrigger`, …) —
  all exported. Overlay parts (Dialog/DropdownMenu/Tooltip) use Base UI and render their
  open state in a portal.
- Button variants: `default | secondary | outline | ghost | destructive | link`;
  Badge adds `success`; Alert adds `success | warning | destructive`.

# MlaiLab (mlai-corporation-www@1.0.0)

This design system is the published mlai-corporation-www React library, bundled as a single
browser global. All 16 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.MlaiLab`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md` (example JSX + variants), `&lt;Name&gt;.d.ts` (types), `&lt;Name&gt;.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).
- `guidelines/` — the design system's own usage guidance (3 doc(s), see `guidelines/index.md`). Read these before composing larger layouts.

For a specific component, `read_file("components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
&lt;link rel="stylesheet" href="styles.css"&gt;
&lt;script src="_ds_bundle.js"&gt;&lt;/script&gt;
```

Components are then available at `window.MlaiLab.*`. Mount into a dedicated child node (e.g. `&lt;div id="ds-root"&gt;`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Accordion } = window.MlaiLab;
ReactDOM.createRoot(document.getElementById('ds-root')).render(&lt;Accordion /&gt;);
```

## Tokens

267 CSS custom properties from mlai-corporation-www. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (100): `--color-red-50`, `--color-red-300`, `--color-red-400`, …
- **spacing** (6): `--tw-space-y-reverse`, `--tw-space-x-reverse`, `--tw-inset-shadow`, …
- **typography** (16): `--font-sans`, `--font-mono`, `--font-weight-normal`, …
- **radius** (6): `--radius-sm`, `--radius-md`, `--radius-lg`, …
- **shadow** (7): `--tw-shadow`, `--tw-ring-shadow`, `--tw-ring-offset-shadow`, …
- **other** (132): `--spacing`, `--container-xs`, `--container-sm`, …

## Components

### general
- `Accordion`
- `Alert`
- `Badge`
- `Button`
- `Card`
- `Dialog`
- `DropdownMenu`
- `Input`
- `Label`
- `Select`
- `Separator`
- `Skeleton`
- `Tabs`
- `Textarea`
- `Toaster`
- `Tooltip`

</design-system-guide>
</attached-skill>

<attached-skill name="MLAI Site Design System (design system)">
[Design System] This project uses the **MLAI Site Design System** design system. This is a binding choice for visual style — every visual must follow it. Don't invent colors, type, spacing, or components not grounded here.

Scope: the design system is a visual style reference only. Its guide may describe example products, brands, or people that are unrelated to the user and unrelated to the subject of this conversation. Never treat anything in the design system as a fact about the user, their work, or the topic they asked about.

This project has the **MLAI** design system bound at `_ds/mlai-site-design-system-6d584c89-162e-4026-be7e-449113802c69/`. If anything under that path is missing or fails to load, the folder name may differ — `list_files` `_ds/` and use the folder whose name ends with 6d584c89-162e-4026-be7e-449113802c69 instead, including in the <link>/<script> paths below.

**Loading the bundle is how you use this design system.** Every Design Component you build must load `_ds/mlai-site-design-system-6d584c89-162e-4026-be7e-449113802c69/_ds_bundle.js` in `<helmet>` (include it in child DCs too — de-duped by URL) and compose with its components — do not recreate those components from scratch or restyle raw HTML to look like them. At the top of the template:

```html
<helmet>
  <link rel="stylesheet" href="_ds/mlai-site-design-system-6d584c89-162e-4026-be7e-449113802c69/styles.css">
  <script src="_ds/mlai-site-design-system-6d584c89-162e-4026-be7e-449113802c69/_ds_bundle.js"></script>
</helmet>
```

Then mount any component directly in the template — no logic class needed:

```html
<x-import component-from-global-scope="MLAI.Button" hint-size="auto,40px">Label</x-import>
```

Props are template attributes (kebab → camelCase); template children pass through as `props.children`. The linked stylesheet(s) carry the design tokens (colors, type, spacing) — style against those via `var(--*)` and the design system's classes rather than guessing values.

The full design-system source tree lives at `/projects/6d584c89-162e-4026-be7e-449113802c69/` — use `list_files` / `read_file` from there for anything not under `_ds/` (layout varies by brand; don't assume folder names). Its guide is reproduced below so you don't need to fetch it:

<design-system-guide>
# MLAI Site Design System — usage conventions

A dark, engineering-grade marketing/product design system (Next.js + Tailwind origin). Components are plain React — **no provider or context wrapper is required**; import and render directly.

## Render on a dark canvas (required)
Every component is built for a near-black page. Put your design on the ink background or text and surfaces vanish (several components use `text-white` / light text with no background of their own):

```tsx
&lt;div className="bg-ink min-h-screen text-slate-300 font-body"&gt;{/* your design */}&lt;/div&gt;
```

`bg-ink` = `#05070B` (page), `bg-panel` = `#0A0E16` (raised). Never place these components on a light background.

## Styling idiom — Tailwind utilities + a few custom classes
Style your own layout glue with Tailwind (`grid`, `gap-*`, `md:grid-cols-3`, `mt-*`, `max-w-*`). Use this system's vocabulary for surfaces, color, and type:

| Concern | Use |
|---|---|
| Card surface | `.surface` (gradient + 1px border + inset top highlight), `.surface-hover` (lift), `.accent-edge` (top accent hairline; set `--accent` inline via `style`) |
| Product accent color | `text-wdbx` / `text-abi` / `text-abbey`, `bg-wdbx`…, `border-wdbx/40`… — **cyan = wdbx (vector store), violet = abi (GPU/runtime), emerald = abbey (agent personas)** |
| Hairlines / dividers | `border-line` (white @ 8%); `.brand-seam` = the tri-color cyan→violet→emerald seam, used once at a major boundary |
| Type | `font-display` (Sora, headings), `font-body` (Manrope), `font-mono` (JetBrains Mono — labels, eyebrows, numbers, provenance; usually uppercase with wide tracking) |
| Text emphasis | `text-white` → `text-slate-300` → `text-slate-400` → `text-slate-500/600` (descending) |

Most components take **`accent?: "wdbx" | "abi" | "abbey"`** (default `"wdbx"`) — set the accent via the prop, don't hardcode colors.

## The provenance rule (this DS's signature)
Every quantitative claim renders through `&lt;ProvTag tag="measured|target|reported" /&gt;` or `&lt;StatBlock&gt;`: **measured** = reproduced on hardware, **target** = engineering goal (not yet achieved), **reported** = cited figure. Don't show unlabeled numbers; frame goals as `target`, never as achievements. `&lt;ProvLegend /&gt;` documents the three.

## Where the truth lives
Read the bound `_ds/&lt;folder&gt;/styles.css` and its `@import` closure (tokens, `fonts/fonts.css`, `_ds_bundle.css`) for the exact compiled classes, and each component's `&lt;Name&gt;.prompt.md` + `&lt;Name&gt;.d.ts` for its API. All components are in one group.

## Idiomatic example
```tsx
import { Section, FeatureCard, StatBlock, ProvLegend } from "mlai-site";

export function PlatformSection() {
  return (
    &lt;div className="bg-ink min-h-screen text-slate-300 font-body"&gt;
      &lt;Section eyebrow="Vector store" title="WDBX" accent="wdbx"
               lead="Durable vector &amp; block memory with JSONL persistence."&gt;
        &lt;div className="grid gap-5 md:grid-cols-3"&gt;
          &lt;FeatureCard accent="wdbx" title="HNSW index" desc="M=16, efConstruction=200." /&gt;
          &lt;FeatureCard accent="wdbx" title="Local-first" desc="Data never leaves the device." /&gt;
          &lt;FeatureCard accent="wdbx" title="Audited log" desc="Append-only JSONL persistence." /&gt;
        &lt;/div&gt;
        &lt;div className="mt-8 grid gap-5 md:grid-cols-2"&gt;
          &lt;StatBlock accent="wdbx" stat={{ value: "8.2ms", label: "p50 vector query", tag: "measured" }} /&gt;
          &lt;StatBlock accent="abi"  stat={{ value: "295×",  label: "GPU matmul goal", tag: "target" }} /&gt;
        &lt;/div&gt;
        &lt;div className="mt-6"&gt;&lt;ProvLegend /&gt;&lt;/div&gt;
      &lt;/Section&gt;
    &lt;/div&gt;
  );
}
```

# MLAI (mlai-site@2.0.0)

This design system is the published mlai-site React library, bundled as a single
browser global. All 27 components are the real upstream code.

## Where things are

- `_ds_bundle.js` — the whole-DS bundle at the project root; loads every component to `window.MLAI`. First line is a `/* @ds-bundle: … */` metadata header.
- `styles.css` — the single stylesheet entry: it `@import`s the tokens, fonts, and component styles (`_ds_bundle.css`). Link this one file.
- `components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md` (example JSX + variants), `&lt;Name&gt;.d.ts` (types), `&lt;Name&gt;.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).

For a specific component, `read_file("components/&lt;group&gt;/&lt;Name&gt;/&lt;Name&gt;.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
&lt;link rel="stylesheet" href="styles.css"&gt;
&lt;script src="_ds_bundle.js"&gt;&lt;/script&gt;
```

Components are then available at `window.MLAI.*`. Mount into a dedicated child node (e.g. `&lt;div id="ds-root"&gt;`), not the host page's own React root, so the two trees don't collide:

```jsx
const { AccentGlow } = window.MLAI;
ReactDOM.createRoot(document.getElementById('ds-root')).render(&lt;AccentGlow /&gt;);
```

## Tokens

64 CSS custom properties from mlai-site. Names are
preserved verbatim from upstream. They are declared inside `_ds_bundle.css` (this DS ships one compiled stylesheet rather than separate token files).

- **color** (8): `--tw-border-spacing-x`, `--tw-border-spacing-y`, `--tw-ring-offset-color`, …
- **spacing** (2): `--tw-ring-inset`, `--tw-space-y-reverse`
- **typography** (3): `--font-sora`, `--font-manrope`, `--font-jbm`
- **shadow** (4): `--tw-ring-offset-shadow`, `--tw-ring-shadow`, `--tw-shadow`, …
- **other** (47): `--tw-translate-x`, `--tw-translate-y`, `--tw-rotate`, …

## Components

### general
- `AccentGlow`
- `Callout`
- `DataTable`
- `DeepDive`
- `Eyebrow`
- `FAQList`
- `FeatureCard`
- `Footer`
- `Glossary`
- `HeroBench`
- `IndexCard`
- `Logo`
- `LogoMark`
- `Nav`
- `NextUp`
- `PersonaCard`
- `Prose`
- `ProvLegend`
- `ProvTag`
- `PublicationIndex`
- `PullQuote`
- `Section`
- `SpecList`
- `SplitSection`
- `StatBlock`
- `StepList`
- `ThroughputCard`

</design-system-guide>
</attached-skill>

## Assistant

_[tool: read_file]_

Console.dc.html already has the tweaks panel from the last pass — density, accent (color swatches), ambient glow, and latency profile, all reshaping colors/spacing/behavior together (not single pixel tweaks). That satisfies this request as-is; nothing further to change unless you want different/more controls.

_[tool: update_todos]_

All todos complete — Console.dc.html's tweaks panel (density, accent, ambient glow, latency profile) is live and satisfies this request. Let me know if you want additional or different controls.

## User

<system-info comment="Only acknowledge these if relevant">
User is viewing file: Console.dc.html
</system-info>

<!-- The user explicitly selected the following skills for this project, as attachments to their message. These are not optional context — they define how you work. Use them. -->
<attached-skill name="Interactive prototype">
Create a fully interactive prototype with realistic state management and transitions. Use React useState/useEffect for dynamic behavior. Include hover states, click interactions, form validation, animated transitions, and multi-step navigation flows. It should feel like a real working app, not a static mockup.
</attached-skill>

## Assistant

No action needed.

## User

/live-artifact-builder

## Assistant

No action needed.

## User

refactoring all

## Assistant

_[tool: list_files]_

_[tool: grep]_

_[tool: list_files]_

_[tool: run_script]_

_[tool: run_script]_

_[tool: show_html]_

_[tool: ready_for_verification]_

Refactored all 12 site + console pages onto the single combined **MLAI Design System** bundle — one stylesheet chain and one `_ds_bundle.js` per page instead of the separate site/lab bundles. Component namespaces (`MLAI.*`, `MlaiLab.*`) are unchanged, so no markup rewrites were needed. Canvas files untouched (no DS refs).

