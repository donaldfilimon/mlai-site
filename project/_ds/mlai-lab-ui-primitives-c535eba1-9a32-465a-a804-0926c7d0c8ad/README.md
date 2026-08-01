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
- Import components from the bundle global, e.g. `import { Button, Card } from "<this DS>"`.
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
- `<Name>.d.ts` — the prop contract; `<Name>.prompt.md` — per-component usage.

## Idiomatic snippet
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button, Badge } from "<this DS>";

<Card className="max-w-sm">
  <CardHeader>
    <CardTitle>WDBX store</CardTitle>
    <CardDescription>Durable vector / block memory.</CardDescription>
  </CardHeader>
  <CardContent className="flex items-center gap-2">
    <Badge variant="success">healthy</Badge>
    <span className="text-sm text-muted-foreground">1,204 vectors</span>
  </CardContent>
  <CardFooter className="gap-2">
    <Button size="sm">Open</Button>
    <Button size="sm" variant="outline">Compact</Button>
  </CardFooter>
</Card>
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
- `components/<group>/<Name>/<Name>.prompt.md` (example JSX + variants), `<Name>.d.ts` (types), `<Name>.html` (variant grid).
- `tokens/*.css` — CSS custom properties, names verbatim from upstream.
- `fonts/` — `@font-face` files + `fonts.css` (when the package ships fonts).
- `guidelines/` — the design system's own usage guidance (3 doc(s), see `guidelines/index.md`). Read these before composing larger layouts.

For a specific component, `read_file("components/<group>/<Name>/<Name>.prompt.md")`.

## Loading

Add these two lines to your page once (React must be on the page first):

```html
<link rel="stylesheet" href="styles.css">
<script src="_ds_bundle.js"></script>
```

Components are then available at `window.MlaiLab.*`. Mount into a dedicated child node (e.g. `<div id="ds-root">`), not the host page's own React root, so the two trees don't collide:

```jsx
const { Accordion } = window.MlaiLab;
ReactDOM.createRoot(document.getElementById('ds-root')).render(<Accordion />);
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
