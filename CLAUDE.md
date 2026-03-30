# CLAUDE.md — shadcn/ui Theming Showcase Project

## Project Purpose

This project demonstrates to our development team how to:

1. Use shadcn/ui components in a React + Vite + Tailwind CSS v4 project
2. Export M3 (Material Design 3) design tokens from Figma into our codebase
3. Create and swap themes using CSS custom properties (tokens/variables)
4. Enforce token-only color usage (zero inline/utility color classes)

The deliverable is a multi-page app with **three distinct visual themes**, each showcasing every installed shadcn/ui component. Two themes also power full "mock site" pages.

---

## Tech Stack

| Layer              | Tool / Version                               |
| ------------------ | -------------------------------------------- |
| Framework          | React 19 (latest stable)                     |
| Bundler            | Vite 6 (latest stable)                       |
| Language           | **JavaScript only — no TypeScript**           |
| CSS Framework      | Tailwind CSS v4                              |
| Component Library  | shadcn/ui (latest CLI, `npx shadcn@latest`)  |
| Routing            | React Router v7 (latest)                     |
| Linting            | ESLint 9 flat config + custom rule           |
| Package Manager    | npm                                          |

> **CRITICAL**: We are NOT using TypeScript. All custom code uses `.jsx`. When shadcn installs `.tsx` files, convert them to `.jsx` by removing all type annotations, interfaces, generic parameters, and `as` casts. Rename the files to `.jsx`. Remove any leftover `import type` statements and `: React.FC` / `: React.HTMLAttributes<>` type signatures. The converted component must remain functionally identical.

---

## Folder Structure

```
project-root/
├── CLAUDE.md                          ← you are here
├── index.html
├── package.json
├── vite.config.js
├── postcss.config.js                  ← if needed by Tailwind v4
├── tailwind.config.js                 ← only if Tailwind v4 still needs one
├── eslint.config.js                   ← ESLint 9 flat config
├── eslint-rules/
│   └── no-inline-color-utilities.js   ← custom ESLint rule
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── router.jsx                     ← React Router config
│   │
│   ├── styles/
│   │   ├── global.css                 ← Tailwind directives + base resets
│   │   ├── tokens/
│   │   │   ├── m3-reference.css       ← raw M3 reference palette (all colors)
│   │   │   ├── m3-system.css          ← M3 system-level tokens (light + dark)
│   │   │   └── README.md             ← explains token export from Figma
│   │   └── themes/
│   │       ├── theme-v1.css           ← V1 semantic tokens + overrides
│   │       ├── theme-v2.css           ← V2 semantic tokens + overrides
│   │       └── theme-v3.css           ← V3 semantic tokens + overrides
│   │
│   ├── lib/
│   │   └── utils.js                   ← `cn()` helper (clsx + tailwind-merge)
│   │
│   ├── Components/
│   │   └── Ui/
│   │       ├── V1/                    ← shadcn install target (--path flag)
│   │       │   ├── button.jsx
│   │       │   ├── card.jsx
│   │       │   ├── input.jsx
│   │       │   └── ... (all components)
│   │       ├── V2/
│   │       │   ├── button.jsx
│   │       │   └── ...
│   │       └── V3/
│   │           ├── button.jsx
│   │           └── ...
│   │
│   ├── Features/
│   │   ├── Showcase/
│   │   │   ├── V1/
│   │   │   │   ├── Components/
│   │   │   │   │   ├── ButtonShowcase/
│   │   │   │   │   │   └── ButtonShowcase.jsx
│   │   │   │   │   ├── CardShowcase/
│   │   │   │   │   │   └── CardShowcase.jsx
│   │   │   │   │   ├── InputShowcase/
│   │   │   │   │   │   └── InputShowcase.jsx
│   │   │   │   │   └── ... (one folder per component type)
│   │   │   │   └── Pages/
│   │   │   │       └── ShowcaseV1/
│   │   │   │           └── ShowcaseV1.jsx
│   │   │   ├── V2/
│   │   │   │   ├── Components/
│   │   │   │   │   └── ...
│   │   │   │   └── Pages/
│   │   │   │       └── ShowcaseV2/
│   │   │   │           └── ShowcaseV2.jsx
│   │   │   └── V3/
│   │   │       ├── Components/
│   │   │       │   └── ...
│   │   │       └── Pages/
│   │   │           └── ShowcaseV3/
│   │   │               └── ShowcaseV3.jsx
│   │   │
│   │   ├── MockSiteV1/
│   │   │   ├── Components/
│   │   │   │   ├── Navbar/
│   │   │   │   │   └── Navbar.jsx
│   │   │   │   ├── Hero/
│   │   │   │   │   └── Hero.jsx
│   │   │   │   ├── FeatureCards/
│   │   │   │   │   └── FeatureCards.jsx
│   │   │   │   ├── PricingTable/
│   │   │   │   │   └── PricingTable.jsx
│   │   │   │   ├── Testimonials/
│   │   │   │   │   └── Testimonials.jsx
│   │   │   │   └── Footer/
│   │   │   │       └── Footer.jsx
│   │   │   └── MockSite/
│   │   │       └── MockSite.jsx
│   │   │
│   │   └── MockSiteV2/
│   │       ├── Components/
│   │       │   ├── Navbar/
│   │       │   │   └── Navbar.jsx
│   │       │   ├── Hero/
│   │       │   │   └── Hero.jsx
│   │       │   ├── FeatureCards/
│   │       │   │   └── FeatureCards.jsx
│   │       │   ├── PricingTable/
│   │       │   │   └── PricingTable.jsx
│   │       │   ├── Testimonials/
│   │       │   │   └── Testimonials.jsx
│   │       │   └── Footer/
│   │       │       └── Footer.jsx
│   │       └── MockSite/
│   │           └── MockSite.jsx
│   │
│   └── Shared/
│       ├── ThemeProvider/
│       │   └── ThemeProvider.jsx       ← light/dark mode context
│       ├── ThemeSwitcher/
│       │   └── ThemeSwitcher.jsx       ← toggle light/dark within a theme
│       └── AppShell/
│           └── AppShell.jsx            ← nav between pages
```

---

## Phase-by-Phase Execution Plan

Execute these phases **in order**. Do not skip ahead. Confirm each phase compiles and the dev server runs before moving to the next.

---

### Phase 0 — Project Scaffolding

```bash
npm create vite@latest . -- --template react
npm install
npm install react-router
npm install clsx tailwind-merge
npm install class-variance-authority
npm install -D eslint @eslint/js globals
```

- Tailwind CSS v4: Follow the official Vite install guide. Tailwind v4 uses `@tailwindcss/vite` plugin — install it and add it to `vite.config.js`. Import `tailwindcss` in `global.css` using `@import "tailwindcss"`.
- In `src/lib/utils.js`, export the standard `cn` function:

```js
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
```

- Confirm the dev server runs: `npm run dev`.

---

### Phase 1 — Token Architecture (M3 → CSS Custom Properties)

This is the heart of the theming system. All colors in the entire application flow through CSS custom properties. **No Tailwind color utility classes like `bg-red-500` or `text-blue-300` are ever used directly.** Instead, every color reference uses a token.

#### 1A — M3 Reference Palette (`src/styles/tokens/m3-reference.css`)

This file simulates what a Figma M3 token export produces. It defines the full tonal palettes as raw custom properties on `:root`. These are reference-level — they are never used directly in components.

```css
/* ============================================================
   M3 Reference Palette
   In a real workflow this file is auto-generated from the
   Figma M3 Theme Builder plugin → Design Token export (JSON)
   → Style Dictionary → CSS custom properties.
   ============================================================ */

:root {
  /* --- Primary Tonal Palette (example: a blue-ish hue) --- */
  --md-ref-palette-primary0:   #000000;
  --md-ref-palette-primary10:  #001F2A;
  --md-ref-palette-primary20:  #003544;
  --md-ref-palette-primary30:  #004D61;
  --md-ref-palette-primary40:  #006780;
  --md-ref-palette-primary50:  #0081A1;
  --md-ref-palette-primary60:  #009CC3;
  --md-ref-palette-primary70:  #21B8E0;
  --md-ref-palette-primary80:  #54D2F9;
  --md-ref-palette-primary90:  #B8EAFF;
  --md-ref-palette-primary95:  #DCEFFF;
  --md-ref-palette-primary99:  #F5FAFF;
  --md-ref-palette-primary100: #FFFFFF;

  /* --- Secondary Tonal Palette --- */
  --md-ref-palette-secondary0:   #000000;
  --md-ref-palette-secondary10:  #0C1B23;
  --md-ref-palette-secondary20:  #213039;
  --md-ref-palette-secondary30:  #374650;
  --md-ref-palette-secondary40:  #4F5D68;
  --md-ref-palette-secondary50:  #677681;
  --md-ref-palette-secondary60:  #81909B;
  --md-ref-palette-secondary70:  #9BAAB6;
  --md-ref-palette-secondary80:  #B6C5D2;
  --md-ref-palette-secondary90:  #D2E1EE;
  --md-ref-palette-secondary95:  #E0F0FD;
  --md-ref-palette-secondary99:  #F5FAFF;
  --md-ref-palette-secondary100: #FFFFFF;

  /* --- Tertiary Tonal Palette --- */
  --md-ref-palette-tertiary0:   #000000;
  --md-ref-palette-tertiary10:  #1A1249;
  --md-ref-palette-tertiary20:  #302661;
  --md-ref-palette-tertiary30:  #463D79;
  --md-ref-palette-tertiary40:  #5F5592;
  --md-ref-palette-tertiary50:  #786DAD;
  --md-ref-palette-tertiary60:  #9287C8;
  --md-ref-palette-tertiary70:  #ADA2E4;
  --md-ref-palette-tertiary80:  #C9BEFF;
  --md-ref-palette-tertiary90:  #E5DEFF;
  --md-ref-palette-tertiary95:  #F3EDFF;
  --md-ref-palette-tertiary99:  #FCFAFF;
  --md-ref-palette-tertiary100: #FFFFFF;

  /* --- Error Tonal Palette --- */
  --md-ref-palette-error0:   #000000;
  --md-ref-palette-error10:  #410002;
  --md-ref-palette-error20:  #690005;
  --md-ref-palette-error30:  #93000A;
  --md-ref-palette-error40:  #BA1A1A;
  --md-ref-palette-error50:  #DE3730;
  --md-ref-palette-error60:  #FF5449;
  --md-ref-palette-error70:  #FF897D;
  --md-ref-palette-error80:  #FFB4AB;
  --md-ref-palette-error90:  #FFDAD6;
  --md-ref-palette-error95:  #FFEDEA;
  --md-ref-palette-error99:  #FFFBFF;
  --md-ref-palette-error100: #FFFFFF;

  /* --- Neutral Tonal Palette --- */
  --md-ref-palette-neutral0:   #000000;
  --md-ref-palette-neutral10:  #191C1E;
  --md-ref-palette-neutral20:  #2E3133;
  --md-ref-palette-neutral30:  #444749;
  --md-ref-palette-neutral40:  #5C5F61;
  --md-ref-palette-neutral50:  #75787A;
  --md-ref-palette-neutral60:  #8F9193;
  --md-ref-palette-neutral70:  #A9ACAE;
  --md-ref-palette-neutral80:  #C5C7C9;
  --md-ref-palette-neutral90:  #E1E3E5;
  --md-ref-palette-neutral95:  #EFF1F3;
  --md-ref-palette-neutral99:  #FAFCFE;
  --md-ref-palette-neutral100: #FFFFFF;

  /* --- Neutral Variant Tonal Palette --- */
  --md-ref-palette-neutral-variant0:   #000000;
  --md-ref-palette-neutral-variant10:  #151D22;
  --md-ref-palette-neutral-variant20:  #2A3237;
  --md-ref-palette-neutral-variant30:  #40484D;
  --md-ref-palette-neutral-variant40:  #586065;
  --md-ref-palette-neutral-variant50:  #70787E;
  --md-ref-palette-neutral-variant60:  #8A9298;
  --md-ref-palette-neutral-variant70:  #A4ACB2;
  --md-ref-palette-neutral-variant80:  #C0C8CD;
  --md-ref-palette-neutral-variant90:  #DCE4E9;
  --md-ref-palette-neutral-variant95:  #EAF2F8;
  --md-ref-palette-neutral-variant99:  #F5FAFF;
  --md-ref-palette-neutral-variant100: #FFFFFF;
}
```

#### 1B — M3 System Tokens (`src/styles/tokens/m3-system.css`)

Maps reference palette values to semantic system-level roles. These are the tokens that theme files will override.

```css
/* ============================================================
   M3 System Tokens — Light & Dark baseline
   These map reference palette tones → semantic roles.
   Individual theme files override these for each version.
   ============================================================ */

:root {
  /* --- Surface --- */
  --md-sys-color-surface:               var(--md-ref-palette-neutral99);
  --md-sys-color-surface-dim:           var(--md-ref-palette-neutral90);
  --md-sys-color-surface-bright:        var(--md-ref-palette-neutral99);
  --md-sys-color-surface-container:     var(--md-ref-palette-neutral95);
  --md-sys-color-surface-container-low: var(--md-ref-palette-neutral95);
  --md-sys-color-surface-container-high:var(--md-ref-palette-neutral90);
  --md-sys-color-on-surface:            var(--md-ref-palette-neutral10);
  --md-sys-color-on-surface-variant:    var(--md-ref-palette-neutral-variant30);

  /* --- Primary --- */
  --md-sys-color-primary:               var(--md-ref-palette-primary40);
  --md-sys-color-on-primary:            var(--md-ref-palette-primary100);
  --md-sys-color-primary-container:     var(--md-ref-palette-primary90);
  --md-sys-color-on-primary-container:  var(--md-ref-palette-primary10);

  /* --- Secondary --- */
  --md-sys-color-secondary:             var(--md-ref-palette-secondary40);
  --md-sys-color-on-secondary:          var(--md-ref-palette-secondary100);
  --md-sys-color-secondary-container:   var(--md-ref-palette-secondary90);
  --md-sys-color-on-secondary-container:var(--md-ref-palette-secondary10);

  /* --- Tertiary --- */
  --md-sys-color-tertiary:              var(--md-ref-palette-tertiary40);
  --md-sys-color-on-tertiary:           var(--md-ref-palette-tertiary100);
  --md-sys-color-tertiary-container:    var(--md-ref-palette-tertiary90);
  --md-sys-color-on-tertiary-container: var(--md-ref-palette-tertiary10);

  /* --- Error --- */
  --md-sys-color-error:                 var(--md-ref-palette-error40);
  --md-sys-color-on-error:              var(--md-ref-palette-error100);
  --md-sys-color-error-container:       var(--md-ref-palette-error90);
  --md-sys-color-on-error-container:    var(--md-ref-palette-error10);

  /* --- Outline --- */
  --md-sys-color-outline:               var(--md-ref-palette-neutral-variant50);
  --md-sys-color-outline-variant:       var(--md-ref-palette-neutral-variant80);

  /* --- Inverse --- */
  --md-sys-color-inverse-surface:       var(--md-ref-palette-neutral20);
  --md-sys-color-inverse-on-surface:    var(--md-ref-palette-neutral95);
  --md-sys-color-inverse-primary:       var(--md-ref-palette-primary80);

  /* --- Shape (not a color — but an M3 token) --- */
  --md-sys-shape-corner-none:           0px;
  --md-sys-shape-corner-extra-small:    4px;
  --md-sys-shape-corner-small:          8px;
  --md-sys-shape-corner-medium:         12px;
  --md-sys-shape-corner-large:          16px;
  --md-sys-shape-corner-extra-large:    28px;
  --md-sys-shape-corner-full:           9999px;

  /* --- Elevation (shadow) --- */
  --md-sys-elevation-0: none;
  --md-sys-elevation-1: 0 1px 3px 1px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.3);
  --md-sys-elevation-2: 0 2px 6px 2px rgba(0,0,0,.15), 0 1px 2px rgba(0,0,0,.3);
  --md-sys-elevation-3: 0 4px 8px 3px rgba(0,0,0,.15), 0 1px 3px rgba(0,0,0,.3);
  --md-sys-elevation-4: 0 6px 10px 4px rgba(0,0,0,.15), 0 2px 3px rgba(0,0,0,.3);
  --md-sys-elevation-5: 0 8px 12px 6px rgba(0,0,0,.15), 0 4px 4px rgba(0,0,0,.3);
}

/* --- Dark mode baseline --- */
.dark {
  --md-sys-color-surface:               var(--md-ref-palette-neutral10);
  --md-sys-color-surface-dim:           var(--md-ref-palette-neutral0);
  --md-sys-color-surface-bright:        var(--md-ref-palette-neutral20);
  --md-sys-color-surface-container:     var(--md-ref-palette-neutral20);
  --md-sys-color-surface-container-low: var(--md-ref-palette-neutral10);
  --md-sys-color-surface-container-high:var(--md-ref-palette-neutral30);
  --md-sys-color-on-surface:            var(--md-ref-palette-neutral90);
  --md-sys-color-on-surface-variant:    var(--md-ref-palette-neutral-variant80);

  --md-sys-color-primary:               var(--md-ref-palette-primary80);
  --md-sys-color-on-primary:            var(--md-ref-palette-primary20);
  --md-sys-color-primary-container:     var(--md-ref-palette-primary30);
  --md-sys-color-on-primary-container:  var(--md-ref-palette-primary90);

  --md-sys-color-secondary:             var(--md-ref-palette-secondary80);
  --md-sys-color-on-secondary:          var(--md-ref-palette-secondary20);
  --md-sys-color-secondary-container:   var(--md-ref-palette-secondary30);
  --md-sys-color-on-secondary-container:var(--md-ref-palette-secondary90);

  --md-sys-color-tertiary:              var(--md-ref-palette-tertiary80);
  --md-sys-color-on-tertiary:           var(--md-ref-palette-tertiary20);
  --md-sys-color-tertiary-container:    var(--md-ref-palette-tertiary30);
  --md-sys-color-on-tertiary-container: var(--md-ref-palette-tertiary90);

  --md-sys-color-error:                 var(--md-ref-palette-error80);
  --md-sys-color-on-error:              var(--md-ref-palette-error20);
  --md-sys-color-error-container:       var(--md-ref-palette-error30);
  --md-sys-color-on-error-container:    var(--md-ref-palette-error90);

  --md-sys-color-outline:               var(--md-ref-palette-neutral-variant60);
  --md-sys-color-outline-variant:       var(--md-ref-palette-neutral-variant30);

  --md-sys-color-inverse-surface:       var(--md-ref-palette-neutral90);
  --md-sys-color-inverse-on-surface:    var(--md-ref-palette-neutral20);
  --md-sys-color-inverse-primary:       var(--md-ref-palette-primary40);
}
```

#### 1C — The shadcn ↔ M3 Bridge

shadcn/ui expects certain CSS variable names (e.g., `--background`, `--foreground`, `--primary`, `--card`, `--border`, etc.). Each theme file maps M3 system tokens to shadcn's expected variable names. **This bridge lives inside each `theme-v*.css` file.**

The bridge variables use shadcn's HSL convention but **we are switching to OKLCH or raw hex with Tailwind v4's `@theme` inline** approach. Since Tailwind v4 supports `color-mix` and arbitrary properties natively, we define the shadcn variables as plain hex/oklch values and use Tailwind's `bg-[var(--primary)]` or configure `@theme` in `global.css`.

**IMPORTANT — Tailwind v4 `@theme` integration**: In `global.css`, after `@import "tailwindcss"`, add a `@theme` block that maps CSS variables to Tailwind utility names. This lets us write `bg-primary` and have it resolve to `var(--primary)`:

```css
@import "tailwindcss";

@theme {
  --color-primary: var(--primary);
  --color-on-primary: var(--on-primary);
  --color-primary-container: var(--primary-container);
  --color-on-primary-container: var(--on-primary-container);
  --color-secondary: var(--secondary);
  --color-on-secondary: var(--on-secondary);
  --color-secondary-container: var(--secondary-container);
  --color-on-secondary-container: var(--on-secondary-container);
  --color-tertiary: var(--tertiary);
  --color-on-tertiary: var(--on-tertiary);
  --color-surface: var(--surface);
  --color-on-surface: var(--on-surface);
  --color-surface-container: var(--surface-container);
  --color-surface-container-low: var(--surface-container-low);
  --color-surface-container-high: var(--surface-container-high);
  --color-on-surface-variant: var(--on-surface-variant);
  --color-error: var(--error);
  --color-on-error: var(--on-error);
  --color-error-container: var(--error-container);
  --color-on-error-container: var(--on-error-container);
  --color-outline: var(--outline);
  --color-outline-variant: var(--outline-variant);
  --color-inverse-surface: var(--inverse-surface);
  --color-inverse-on-surface: var(--inverse-on-surface);
  --color-inverse-primary: var(--inverse-primary);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --radius-sm: var(--radius-small);
  --radius-md: var(--radius-medium);
  --radius-lg: var(--radius-large);
  --radius-xl: var(--radius-extra-large);
  --radius-full: var(--radius-full);
}
```

This means in component code you write `bg-primary`, `text-on-primary`, `bg-surface`, `rounded-lg`, etc. — all resolving through the token chain.

#### 1D — Theme Files

Each theme file:
1. Overrides the M3 reference palette values to produce a unique color scheme
2. Optionally overrides M3 system token mappings
3. Defines the shadcn bridge variables (`--background`, `--foreground`, `--primary`, etc.)
4. Defines shape/radius tokens
5. Has both light (default) and `.dark` variants

##### `src/styles/themes/theme-v1.css` — "Warm Sunrise"

- **Color Scheme**: Warm — amber/gold primary, terracotta secondary, sage tertiary
- **Shape**: Rounded corners (large radius, pill buttons). `--radius-large: 16px; --radius-full: 9999px`
- **Borders**: Mostly none — components rely on elevation and background fills
- **Scoped by**: `.theme-v1` class on a wrapper element

```css
.theme-v1 {
  /* Override M3 reference palette for warm tones */
  --md-ref-palette-primary40:  #8B5E0F;
  --md-ref-palette-primary80:  #FACC15;
  --md-ref-palette-primary90:  #FEF3C7;
  --md-ref-palette-primary30:  #713F00;
  --md-ref-palette-primary10:  #3D1F00;
  --md-ref-palette-primary100: #FFFFFF;
  --md-ref-palette-primary20:  #5A2D00;

  /* secondary: terracotta */
  --md-ref-palette-secondary40: #A0522D;
  --md-ref-palette-secondary80: #E8A87C;
  --md-ref-palette-secondary90: #FDDCBD;

  /* tertiary: sage green */
  --md-ref-palette-tertiary40:  #5B7553;
  --md-ref-palette-tertiary80:  #A8C89A;
  --md-ref-palette-tertiary90:  #D7EAD0;

  /* Neutrals: warm gray */
  --md-ref-palette-neutral10:  #201A12;
  --md-ref-palette-neutral20:  #362F24;
  --md-ref-palette-neutral90:  #EDE0D4;
  --md-ref-palette-neutral95:  #F5EDE3;
  --md-ref-palette-neutral99:  #FFFBF5;

  /* --- shadcn Bridge (Light) --- */
  --background:         var(--md-sys-color-surface);
  --foreground:         var(--md-sys-color-on-surface);
  --card:               var(--md-sys-color-surface-container-low);
  --card-foreground:    var(--md-sys-color-on-surface);
  --primary:            var(--md-sys-color-primary);
  --on-primary:         var(--md-sys-color-on-primary);
  --primary-container:  var(--md-sys-color-primary-container);
  --on-primary-container: var(--md-sys-color-on-primary-container);
  --secondary:          var(--md-sys-color-secondary);
  --on-secondary:       var(--md-sys-color-on-secondary);
  --secondary-container:var(--md-sys-color-secondary-container);
  --on-secondary-container: var(--md-sys-color-on-secondary-container);
  --tertiary:           var(--md-sys-color-tertiary);
  --on-tertiary:        var(--md-sys-color-on-tertiary);
  --surface:            var(--md-sys-color-surface);
  --on-surface:         var(--md-sys-color-on-surface);
  --surface-container:  var(--md-sys-color-surface-container);
  --surface-container-low:  var(--md-sys-color-surface-container-low);
  --surface-container-high: var(--md-sys-color-surface-container-high);
  --on-surface-variant:     var(--md-sys-color-on-surface-variant);
  --muted:              var(--md-sys-color-surface-container);
  --muted-foreground:   var(--md-sys-color-on-surface-variant);
  --accent:             var(--md-sys-color-secondary-container);
  --accent-foreground:  var(--md-sys-color-on-secondary-container);
  --destructive:        var(--md-sys-color-error);
  --destructive-foreground: var(--md-sys-color-on-error);
  --border:             transparent;
  --input:              var(--md-sys-color-surface-container-high);
  --ring:               var(--md-sys-color-primary);
  --outline:            var(--md-sys-color-outline);
  --outline-variant:    var(--md-sys-color-outline-variant);
  --inverse-surface:    var(--md-sys-color-inverse-surface);
  --inverse-on-surface: var(--md-sys-color-inverse-on-surface);
  --inverse-primary:    var(--md-sys-color-inverse-primary);
  --error:              var(--md-sys-color-error);
  --on-error:           var(--md-sys-color-on-error);
  --error-container:    var(--md-sys-color-error-container);
  --on-error-container: var(--md-sys-color-on-error-container);

  /* Shape: rounded, generous radii */
  --radius-small:       8px;
  --radius-medium:      12px;
  --radius-large:       16px;
  --radius-extra-large: 28px;
  --radius-full:        9999px;

  /* Elevation preference: use fills instead of borders */
  --component-border-width: 0px;
}

.theme-v1.dark {
  /* Dark mode: the M3 system tokens in .dark already flip tones,
     but we can add any V1-specific dark tweaks here */
}
```

##### `src/styles/themes/theme-v2.css` — "Cool Steel"

- **Color Scheme**: Cool — indigo primary, slate secondary, teal tertiary
- **Shape**: Square corners (0 radius). Sharp, geometric.
- **Borders**: Mostly none — components rely on contrasting surface fills
- **Scoped by**: `.theme-v2`

Define analogous to V1, but with:
```css
.theme-v2 {
  /* indigo primary, slate secondary, teal tertiary, cool gray neutrals */
  /* --radius-small: 0px; --radius-medium: 0px; --radius-large: 0px; --radius-extra-large: 2px; */
  --component-border-width: 0px;
}
```

##### `src/styles/themes/theme-v3.css` — "Neon Blueprint"

- **Color Scheme**: Deep navy/charcoal base, electric cyan primary, coral secondary, lime tertiary
- **Shape**: Unique — chamfered/octagonal feel via `clip-path` utility classes or asymmetric radii (`border-radius: 0 12px 0 12px`)
- **Borders**: Visible outlines on everything (1-2px using `--outline` token)
- **Scoped by**: `.theme-v3`

```css
.theme-v3 {
  --component-border-width: 1.5px;
  --radius-small: 0px 8px 0px 8px;
  --radius-medium: 0px 12px 0px 12px;
  /* ... */
}
```

**All three theme files must follow this exact pattern** — override palette, set shadcn bridge vars, define shape/radius, handle light + dark.

#### 1E — Token README (`src/styles/tokens/README.md`)

Write a short README explaining:
1. What M3 tokens are and the hierarchy (reference → system → component)
2. How to export from Figma using the M3 Theme Builder plugin
3. How to convert the JSON export to CSS custom properties (using Style Dictionary or manually)
4. How the bridge maps M3 system tokens to shadcn variables
5. How to add a new theme: copy a `theme-v*.css`, change the palette overrides, done

---

### Phase 2 — shadcn/ui Installation (Three Copies)

shadcn/ui must be installed three times, once per version folder, using the `--path` (`-p`) flag.

**BEFORE installing**, create a `components.json` (or modify it between installs) so that each install targets the correct directory. The shadcn CLI reads `components.json` for output paths.

The approach:

1. Run `npx shadcn@latest init` once to scaffold `components.json`.
   - During init: select "New York" style, pick any base color (we'll override), do NOT use CSS variables from shadcn (we have our own), JavaScript (not TypeScript).
   - Make sure `components.json` `aliases.components` points to `@/Components/Ui/V1` initially.

2. Install ALL desired components for V1:
   ```bash
   npx shadcn@latest add --all --path src/Components/Ui/V1 --overwrite
   ```
   (If `--all` is not supported, install individually: `button card input textarea select checkbox radio switch slider tabs dialog sheet popover dropdown-menu tooltip accordion alert alert-dialog avatar badge calendar command separator scroll-area table toggle toggle-group navigation-menu breadcrumb pagination progress skeleton sonner label form`)

3. **Convert all generated `.tsx` files in V1 to `.jsx`**:
   - Strip all TypeScript syntax (type annotations, interfaces, generics, `as` casts, `import type`)
   - Rename files from `.tsx` → `.jsx`
   - Update all internal import paths to use `.jsx` extensions or extensionless (Vite resolves both)

4. **Edit `components.json` to retarget V2, then reinstall.**
   Open `components.json` and change the `aliases` block so that `components` and `ui` both point to the V2 directory:

   ```json
   {
     "aliases": {
       "components": "@/Components/Ui/V2",
       "utils": "@/lib/utils",
       "ui": "@/Components/Ui/V2",
       "lib": "@/lib",
       "hooks": "@/hooks"
     }
   }
   ```

   The `--path` flag tells the CLI **where to write files on disk**, but `aliases.components` and `aliases.ui` control what the **internal import paths inside the generated files** resolve to. You need both to match — otherwise a V2 button will contain import paths that point at V1 siblings. After editing, run:

   ```bash
   npx shadcn@latest add --all --path src/Components/Ui/V2 --overwrite
   ```

   Then convert all generated `.tsx` → `.jsx` in V2 (same process as step 3).

5. **Edit `components.json` to retarget V3, then reinstall.**
   Same process — change both alias values to V3:

   ```json
   {
     "aliases": {
       "components": "@/Components/Ui/V3",
       "utils": "@/lib/utils",
       "ui": "@/Components/Ui/V3",
       "lib": "@/lib",
       "hooks": "@/hooks"
     }
   }
   ```

   Then run:

   ```bash
   npx shadcn@latest add --all --path src/Components/Ui/V3 --overwrite
   ```

   Then convert all generated `.tsx` → `.jsx` in V3.

6. **Reset `components.json` aliases back to V1** (or whichever you consider the "default") so that any future ad-hoc `npx shadcn add <component>` doesn't accidentally write into the wrong folder:

   ```json
   {
     "aliases": {
       "components": "@/Components/Ui/V1",
       "utils": "@/lib/utils",
       "ui": "@/Components/Ui/V1",
       "lib": "@/lib",
       "hooks": "@/hooks"
     }
   }
   ```

   > **Why both fields matter:** `aliases.ui` controls where shadcn writes the file. `aliases.components` controls the import path that other generated files use when they reference sibling components (e.g., `dialog.jsx` importing `button.jsx`). If these don't match the `--path` target, the generated code will have broken cross-references pointing at the wrong version folder.

After all three installs:
- `src/Components/Ui/V1/` has one `.jsx` file per component
- `src/Components/Ui/V2/` has one `.jsx` file per component (identical code at this point)
- `src/Components/Ui/V3/` has one `.jsx` file per component (identical code at this point)

**Import path alias**: In `vite.config.js`, set up aliases:

```js
resolve: {
  alias: {
    "@": path.resolve(__dirname, "./src"),
    "@ui-v1": path.resolve(__dirname, "./src/Components/Ui/V1"),
    "@ui-v2": path.resolve(__dirname, "./src/Components/Ui/V2"),
    "@ui-v3": path.resolve(__dirname, "./src/Components/Ui/V3"),
  }
}
```

Also configure `jsconfig.json` (since no tsconfig) with matching `paths` for editor intellisense.

---

### Phase 3 — Component Theming (Modify CVA Bases)

This is where each version diverges visually. After installing shadcn components into all three folders, modify the CVA base styles in each version.

#### The Core Mechanic: `theme-v*` Class IN the CVA Base String

When shadcn installs a component, its CVA base string may contain classes like `group/button`. **Remove every `group/*` class and replace it with the version's theme class** — `theme-v1`, `theme-v2`, or `theme-v3`.

This is critical. The theme class **must live on the component itself**, not just on a distant wrapper `<div>`. Placing `theme-v1` in the CVA base string makes the component **self-scoping** — it activates the correct set of CSS custom properties (`--primary`, `--radius-medium`, `--component-border-width`, etc.) at the component level. This means:

- The component works correctly even if it's rendered outside of a `<div className="theme-v1">` wrapper (e.g., inside a portal, a dialog, a tooltip, or a toast that renders at the document root).
- The cascade still works when a wrapper IS present — the component's own `theme-v1` class is simply redundant with the wrapper's, which is harmless.
- Every component explicitly declares which design system version it belongs to.

**Before (shadcn default):**
```js
const buttonVariants = cva(
  "group/button inline-flex items-center justify-center rounded-md border ...",
```

**After (V1 example):**
```js
const buttonVariants = cva(
  "theme-v1 inline-flex items-center justify-center rounded-[var(--radius-full)] border-[length:var(--component-border-width)] ...",
```

#### General Rules for ALL Versions

1. **Replace `group/*` with `theme-v*`** — every CVA base string in V1 components gets `theme-v1`, V2 gets `theme-v2`, V3 gets `theme-v3`. No exceptions.
2. **Never use raw Tailwind color utilities** (`bg-blue-500`, `text-red-400`, etc.) inside CVA definitions or anywhere in the codebase. Use only token-based classes: `bg-primary`, `text-on-primary`, `bg-surface`, `text-foreground`, `border-outline`, etc. Colors resolve through the theme's CSS custom properties.
3. **All shape values must reference CSS custom properties** — never hardcode `rounded-full`, `rounded-none`, or `rounded-lg` directly. Instead, use Tailwind's arbitrary value syntax to reference the theme's shape tokens:
   - `rounded-[var(--radius-small)]`
   - `rounded-[var(--radius-medium)]`
   - `rounded-[var(--radius-large)]`
   - `rounded-[var(--radius-extra-large)]`
   - `rounded-[var(--radius-full)]`
   
   This way, the same class produces `9999px` pill shapes in V1 (where `--radius-full: 9999px`), `0px` sharp squares in V2 (where `--radius-full: 0px`), and asymmetric chamfers in V3 (where `--radius-full: 0px 16px 0px 16px`).
4. **Border width must reference `--component-border-width`** — use `border-[length:var(--component-border-width)]`. This resolves to `0px` in V1/V2 (borderless) and `1.5px` in V3 (outlined).
5. **Elevation/shadow must reference M3 elevation tokens** — use `shadow-[var(--md-sys-elevation-1)]` etc.

#### V1 Component Modifications — "Warm Sunrise" (Rounded, No Borders)

Theme class: **`theme-v1`** in every CVA base string.

The V1 theme CSS defines:
- `--radius-full: 9999px` (pill), `--radius-large: 16px`, `--radius-medium: 12px`, `--radius-small: 8px`
- `--component-border-width: 0px` (no borders)
- Warm amber/gold/terracotta color palette

For every component in `src/Components/Ui/V1/`:

- **Button**: `rounded-[var(--radius-full)]` (pill shape via token), zero border, filled backgrounds using `bg-primary text-on-primary`. Hover: `hover:brightness-95`. Shadow: `shadow-[var(--md-sys-elevation-1)]` on hover.
- **Card**: `rounded-[var(--radius-large)]`, zero border, `bg-surface-container-low`, `shadow-[var(--md-sys-elevation-1)]`.
- **Input / Textarea**: `rounded-[var(--radius-medium)]`, zero border, `bg-surface-container` fill. Focus ring: `ring-ring`.
- **Select, Dropdown, Popover, Dialog, Sheet**: `rounded-[var(--radius-large)]`, no borders, elevation shadows.
- **Tabs**: pill-style active indicator using `rounded-[var(--radius-full)]`, no underline.
- **Toggle / Switch**: `rounded-[var(--radius-full)]`, filled style.
- **Badge**: `rounded-[var(--radius-full)]` (pill), filled.
- **Alert**: `rounded-[var(--radius-large)]`, filled background, no border.

**Example — V1 Button CVA:**
```js
const buttonVariants = cva(
  "theme-v1 inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-[var(--radius-full)] border-[length:var(--component-border-width)] shadow-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary hover:brightness-95",
        destructive: "bg-destructive text-destructive-foreground hover:brightness-95",
        outline: "bg-transparent text-primary border border-outline hover:bg-primary/10",
        secondary: "bg-secondary-container text-on-secondary-container hover:brightness-95",
        ghost: "bg-transparent text-on-surface hover:bg-surface-container",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

**Example — V1 Card CVA:**
```js
const cardVariants = cva(
  "theme-v1 rounded-[var(--radius-large)] border-[length:var(--component-border-width)] border-border bg-card text-card-foreground shadow-[var(--md-sys-elevation-1)]"
);
```

#### V2 Component Modifications — "Cool Steel" (Square, No Borders)

Theme class: **`theme-v2`** in every CVA base string.

The V2 theme CSS defines:
- `--radius-full: 0px`, `--radius-large: 0px`, `--radius-medium: 0px`, `--radius-small: 0px` (all square)
- `--component-border-width: 0px` (no borders)
- Cool indigo/slate/teal color palette

For every component in `src/Components/Ui/V2/`:

- **Button**: `rounded-[var(--radius-full)]` (resolves to `0px` = sharp square), zero border, filled. Hover: `hover:brightness-110`.
- **Card**: `rounded-[var(--radius-large)]` (resolves to `0px`), zero border, `bg-surface-container-low`, `shadow-[var(--md-sys-elevation-2)]`.
- **Input / Textarea**: `rounded-[var(--radius-small)]` (resolves to `0px`), zero border, thick bottom-line accent on focus (`focus:border-b-2 focus:border-b-primary`).
- **Badge**: `rounded-[var(--radius-small)]` (square), uppercase text, `tracking-wider`.
- **Tabs**: sharp underline active indicator, no rounded tab shape.
- **Everything**: hard edges, geometric, high contrast.

**Example — V2 Button CVA:**
```js
const buttonVariants = cva(
  "theme-v2 inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-[var(--radius-full)] border-[length:var(--component-border-width)] shadow-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary hover:brightness-110",
        destructive: "bg-destructive text-destructive-foreground hover:brightness-110",
        outline: "bg-transparent text-primary border border-outline hover:bg-primary/10",
        secondary: "bg-secondary-container text-on-secondary-container hover:brightness-110",
        ghost: "bg-transparent text-on-surface hover:bg-surface-container",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

> Notice the CVA base string is **structurally identical** to V1 — same arbitrary value classes like `rounded-[var(--radius-full)]` and `border-[length:var(--component-border-width)]`. The only difference is `theme-v2` instead of `theme-v1`. The CSS custom properties do the rest: `--radius-full` resolves to `0px` in V2's theme, producing square corners from the same class.

#### V3 Component Modifications — "Neon Blueprint" (Outlined, Unique Shape)

Theme class: **`theme-v3`** in every CVA base string.

The V3 theme CSS defines:
- `--radius-full: 0px 16px 0px 16px` (asymmetric chamfer), `--radius-large: 0px 12px 0px 12px`, `--radius-medium: 0px 8px 0px 8px`, `--radius-small: 0px 4px 0px 4px`
- `--component-border-width: 1.5px` (visible outlines on everything)
- Deep navy/charcoal base, electric cyan primary, coral secondary, lime tertiary

For every component in `src/Components/Ui/V3/`:

- **Button**: `rounded-[var(--radius-medium)]` (resolves to asymmetric `0px 8px 0px 8px`), visible border via `border-[length:var(--component-border-width)] border-outline`.
- **Card**: `rounded-[var(--radius-large)]` (asymmetric chamfer), visible border, optional `hover:border-dashed` for interactivity.
- **Input / Textarea**: `rounded-[var(--radius-medium)]` (asymmetric), visible `border-outline`, colored focus border.
- **Badge**: `rounded-[var(--radius-small)]` (asymmetric), outlined.
- **Everything**: outlined with `border-outline` via the `--component-border-width` token, unique chamfered shape via asymmetric radius tokens.

**Example — V3 Button CVA:**
```js
const buttonVariants = cva(
  "theme-v3 inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 rounded-[var(--radius-medium)] border-[length:var(--component-border-width)] border-outline shadow-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-on-primary hover:brightness-95",
        destructive: "bg-destructive text-destructive-foreground hover:brightness-95",
        outline: "bg-transparent text-primary hover:bg-primary/10",
        secondary: "bg-secondary-container text-on-secondary-container hover:brightness-95",
        ghost: "bg-transparent text-on-surface hover:bg-surface-container",
        link: "text-primary underline-offset-4 hover:underline border-0",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-8 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
```

#### Summary of CVA Base String Pattern

Every shadcn component across all three versions follows this pattern in its CVA base:

```
"theme-v{N} [layout utilities] rounded-[var(--radius-{size})] border-[length:var(--component-border-width)] border-border [token-based color classes] shadow-[var(--md-sys-elevation-{level})]"
```

The only hard-coded difference between V1/V2/V3 component files is the theme class name (`theme-v1`, `theme-v2`, `theme-v3`). Everything else — colors, shapes, borders, shadows — resolves through CSS custom properties scoped to that theme class. This is the mechanism that makes themes swappable: change the CSS variables, and every component updates.

---

### Phase 4 — ESLint Custom Rule: No Inline Color Utilities

Create a custom ESLint rule that forbids Tailwind color utility classes used inline in JSX `className` props and in `cva()` / `cn()` string arguments.

#### Rule File: `eslint-rules/no-inline-color-utilities.js`

The rule should:
1. Scan all string literals and template literals inside `className` attributes, `cva()` calls, `cn()` calls, and `clsx()` calls.
2. Flag any token that matches a raw Tailwind color utility pattern:
   - `bg-{color}-{shade}` (e.g., `bg-red-500`, `bg-slate-100`)
   - `text-{color}-{shade}`
   - `border-{color}-{shade}`
   - `ring-{color}-{shade}`
   - `from-{color}-{shade}`, `to-{color}-{shade}`, `via-{color}-{shade}`
   - `fill-{color}-{shade}`, `stroke-{color}-{shade}`
   - `outline-{color}-{shade}`
   - `decoration-{color}-{shade}`
   - `shadow-{color}-{shade}`
   - `divide-{color}-{shade}`
   - `placeholder-{color}-{shade}`
   - The pattern for "color" is any of: slate, gray, zinc, neutral, stone, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose, black, white.
3. The error message should say: `"Use a design token (e.g., bg-primary, text-foreground) instead of the raw Tailwind color utility '{{class}}'."`
4. Allow exceptions only for `opacity` modifiers on token classes (e.g., `bg-primary/50` is fine — it still uses a token).

#### ESLint Config: `eslint.config.js`

```js
import js from "@eslint/js";
import globals from "globals";
import noInlineColorUtilities from "./eslint-rules/no-inline-color-utilities.js";

export default [
  js.configs.recommended,
  {
    files: ["src/**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: "module",
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "custom-rules": {
        rules: {
          "no-inline-color-utilities": noInlineColorUtilities,
        },
      },
    },
    rules: {
      "custom-rules/no-inline-color-utilities": "error",
    },
  },
  {
    ignores: ["node_modules/", "dist/"],
  },
];
```

After creating the rule, run `npx eslint src/` and confirm zero violations in your authored code.

---

### Phase 5 — Theme Provider & Dark Mode

#### `src/Shared/ThemeProvider/ThemeProvider.jsx`

A React context provider that manages light/dark mode:

```jsx
import { createContext, useContext, useState, useEffect, useCallback } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(() => {
    const stored = localStorage.getItem("color-mode");
    if (stored) return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", mode === "dark");
    localStorage.setItem("color-mode", mode);
  }, [mode]);

  const toggleMode = useCallback(() => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
}
```

#### `src/Shared/ThemeSwitcher/ThemeSwitcher.jsx`

A toggle button (import from the appropriate V* Button) that flips light ↔ dark.

---

### Phase 6 — Routing

#### `src/router.jsx`

Use React Router v7 (latest). Define routes:

| Path                | Component                          |
| ------------------- | ---------------------------------- |
| `/`                 | Home / landing page with links     |
| `/showcase/v1`      | `ShowcaseV1`                       |
| `/showcase/v2`      | `ShowcaseV2`                       |
| `/showcase/v3`      | `ShowcaseV3`                       |
| `/mock-site/v1`     | `MockSiteV1 > MockSite`           |
| `/mock-site/v2`     | `MockSiteV2 > MockSite`           |

Each route wraps its content in the appropriate theme class:

```jsx
// Inside the route component for V1
<div className="theme-v1">
  <ShowcaseV1 />
</div>
```

#### `src/Shared/AppShell/AppShell.jsx`

A top-level navigation bar visible on every page with:
- Links to each showcase and mock site page
- The `ThemeSwitcher` (light/dark toggle)
- Should use neutral styling that doesn't belong to any one theme

---

### Phase 7 — Showcase Pages

Each showcase page (`ShowcaseV1.jsx`, `ShowcaseV2.jsx`, `ShowcaseV3.jsx`) renders every installed shadcn component in a scrollable gallery format.

#### Showcase Structure

```
ShowcaseV1.jsx
├── Page title + description
├── Section: Buttons
│   ├── Default, Destructive, Outline, Secondary, Ghost, Link variants
│   ├── Small, Default, Large sizes
│   └── Disabled state
├── Section: Cards
│   ├── Basic card
│   ├── Card with header + content + footer
│   └── Interactive card (hover state)
├── Section: Inputs & Forms
│   ├── Text input
│   ├── Textarea
│   ├── Select
│   ├── Checkbox
│   ├── Radio group
│   ├── Switch
│   ├── Slider
│   └── Form with label + validation state
├── Section: Data Display
│   ├── Table
│   ├── Badge (all variants)
│   ├── Avatar
│   └── Separator
├── Section: Feedback
│   ├── Alert (info, success, warning, destructive)
│   ├── Progress bar
│   ├── Skeleton loader
│   └── Toast / Sonner
├── Section: Overlays
│   ├── Dialog
│   ├── Alert Dialog
│   ├── Sheet (side panel)
│   ├── Popover
│   ├── Tooltip
│   └── Dropdown menu
├── Section: Navigation
│   ├── Tabs
│   ├── Accordion
│   ├── Navigation Menu
│   ├── Breadcrumb
│   ├── Pagination
│   └── Command palette
└── Section: Toggles
    ├── Toggle
    └── Toggle Group
```

Each section has a heading (`<h2>`) and a brief description. Components are laid out in a grid or flex row to show multiple variants side by side.

**Each `ShowcaseV*` imports components only from its own `@ui-v*` alias**. V1 showcase only uses `@ui-v1` components. V2 only uses `@ui-v2`. V3 only uses `@ui-v3`.

Each section component (e.g., `ButtonShowcase.jsx`) lives in its own folder under `Features/Showcase/V*/Components/`. The main `ShowcaseV*.jsx` page composes all section components.

---

### Phase 8 — Mock Site Pages

#### MockSiteV1 — "SaaS Landing Page" (Warm Sunrise Theme)

A modern SaaS product landing page using V1 components and the warm amber theme:

- **Navbar**: Logo, nav links (using V1 NavigationMenu), CTA button (V1 Button)
- **Hero**: Large headline, subtext, two CTA buttons (filled + ghost), illustration area
- **Feature Cards**: 3-up grid of V1 Cards with icons
- **Pricing Table**: 3-tier pricing using V1 Cards, V1 Badges for "Popular", V1 Buttons
- **Testimonials**: V1 Card with V1 Avatar, quote text
- **Footer**: links in columns, V1 Separator

Apply `.theme-v1` wrapper. Include a working `ThemeSwitcher` in the Navbar to toggle dark mode.

#### MockSiteV2 — "Developer Dashboard" (Cool Steel Theme)

A developer-facing dashboard using V2 components and the cool indigo theme:

- **Navbar**: Logo, breadcrumb trail (V2 Breadcrumb), user Avatar + Dropdown
- **Hero/Header**: Dashboard title, date range selector (V2 Select), filter toggles
- **Feature Cards**: KPI stat cards (V2 Card) with numbers and badges
- **Table Section**: Data table with V2 Table, sortable headers, pagination
- **Sidebar Sheet**: Triggered by button, shows detail panel (V2 Sheet)
- **Footer**: Minimal, V2 Separator + legal text

Apply `.theme-v2` wrapper. Include working `ThemeSwitcher`.

---

### Phase 9 — Global CSS Import Order

In `src/styles/global.css`:

```css
/* 1. Tailwind base */
@import "tailwindcss";

/* 2. M3 Reference palette */
@import "./tokens/m3-reference.css";

/* 3. M3 System tokens (light + dark baseline) */
@import "./tokens/m3-system.css";

/* 4. Theme files (each scoped to .theme-v* class) */
@import "./themes/theme-v1.css";
@import "./themes/theme-v2.css";
@import "./themes/theme-v3.css";

/* 5. Tailwind theme mapping */
@theme {
  /* ... (as defined in Phase 1C above) ... */
}

/* 6. Base resets */
body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: system-ui, sans-serif;
}
```

In `src/main.jsx`:
```jsx
import "./styles/global.css";
```

---

## Critical Constraints (Read Before Every Commit)

1. **ZERO inline color utilities.** Never write `bg-red-500`, `text-blue-200`, `border-gray-300`, etc. Always use token-mapped classes: `bg-primary`, `text-on-primary`, `bg-surface`, `border-outline`, etc. The ESLint rule enforces this — `npx eslint src/` must pass clean.

2. **All colors must flow through CSS custom properties.** The chain is: M3 reference → M3 system → shadcn bridge → Tailwind `@theme` → utility class. No shortcuts.

3. **Each version folder is self-contained.** V1 showcase imports only from `Components/Ui/V1/`. V2 from V2. V3 from V3. Never cross-import.

4. **Theme scoping is dual-layered.** Each component carries its theme class in its CVA base string (`theme-v1`, `theme-v2`, `theme-v3`) — this is component-level self-scoping. Additionally, each showcase/mock-site page wraps content in `<div className="theme-v1">` (or v2/v3) for cascade-level scoping. Both exist so that portaled elements (dialogs, tooltips, toasts) still resolve the correct tokens even when rendered outside the wrapper.

5. **Dark mode via `.dark` class on `<html>`.** The `ThemeProvider` toggles this. Each theme CSS file includes a `.theme-v*.dark` (or simply inherits from the base `.dark` M3 system tokens).

6. **No TypeScript.** All files are `.js` or `.jsx`. Convert any shadcn-generated `.tsx` to `.jsx`.

7. **shadcn `group/*` → `theme-v*` replacement.** When modifying CVA bases, remove any `group/button`, `group/card`, or similar `group/*` Tailwind classes that shadcn may inject and replace them with the version's theme class (`theme-v1`, `theme-v2`, or `theme-v3`). Every CVA base string must begin with its version's theme class.

8. **All shapes/radii must use CSS custom property tokens.** Never hardcode `rounded-full`, `rounded-none`, `rounded-lg`, etc. Always use `rounded-[var(--radius-full)]`, `rounded-[var(--radius-medium)]`, etc. — the theme's CSS variables control the actual resolved values. Similarly, border widths use `border-[length:var(--component-border-width)]`.

9. **Do not install shadcn's CSS variable system.** We are NOT using shadcn's built-in `--background: 0 0% 100%` HSL format. Our tokens use raw hex values mapped through M3. During `shadcn init`, decline CSS variables or immediately replace them with our token bridge.

10. **MockSiteV3 is NOT built.** Only V3 tokens, theme CSS, shadcn components, and the showcase page are built. MockSiteV3 will be built later by the team.

11. **Use latest React patterns.** Functional components only. Hooks for all state. No class components. Use `useCallback`, `useMemo` where appropriate. Use React Router v7's data APIs if relevant.

---

## Verification Checklist

Before considering the project complete, verify:

- [ ] `npm run dev` starts without errors
- [ ] `npx eslint src/` passes with zero errors
- [ ] Navigating to `/showcase/v1` shows all components in V1 warm theme
- [ ] Navigating to `/showcase/v2` shows all components in V2 cool theme
- [ ] Navigating to `/showcase/v3` shows all components in V3 neon/outlined theme
- [ ] Each showcase page displays every installed shadcn component
- [ ] Light/dark toggle works on every page
- [ ] `/mock-site/v1` renders a complete SaaS landing page with warm theme
- [ ] `/mock-site/v2` renders a complete dev dashboard with cool theme
- [ ] No raw Tailwind color classes exist anywhere in `src/`
- [ ] No hardcoded `rounded-full`, `rounded-none`, `rounded-lg` etc. — all radii use `rounded-[var(--radius-*)]`
- [ ] Every CVA base string in V1 components starts with `theme-v1`, V2 with `theme-v2`, V3 with `theme-v3`
- [ ] No `group/*` classes remain in any CVA base string
- [ ] All `.jsx` files — no `.tsx` files exist in `src/`
- [ ] V1, V2, V3 component folders each contain their own independent shadcn component copies
- [ ] Theme switching is instant (no page reload) for light/dark
- [ ] `src/styles/tokens/README.md` explains the Figma → CSS token pipeline

---

## Appendix A — shadcn Components to Install

Install all of these for each version:

```
accordion alert alert-dialog avatar badge breadcrumb button calendar
card checkbox command dialog dropdown-menu form input label
navigation-menu pagination popover progress radio-group scroll-area
select separator sheet skeleton slider sonner switch table tabs
textarea toast toggle toggle-group tooltip
```

## Appendix B — Quick Reference: Token Class Names

Use these Tailwind class names (mapped via `@theme`) for all color references:

| Usage                | Class                    |
| -------------------- | ------------------------ |
| Page background      | `bg-background`          |
| Page text            | `text-foreground`        |
| Primary fill         | `bg-primary`             |
| Primary text-on      | `text-on-primary`        |
| Card background      | `bg-card`                |
| Card text            | `text-card-foreground`   |
| Muted fill           | `bg-muted`               |
| Muted text           | `text-muted-foreground`  |
| Accent fill          | `bg-accent`              |
| Accent text          | `text-accent-foreground` |
| Destructive fill     | `bg-destructive`         |
| Destructive text     | `text-destructive-foreground` |
| Border               | `border-border`          |
| Outline              | `border-outline`         |
| Input background     | `bg-input`               |
| Focus ring           | `ring-ring`              |
| Surface              | `bg-surface`             |
| On-surface text      | `text-on-surface`        |
| Surface container    | `bg-surface-container`   |

## Appendix C — Figma Export Workflow (for README.md)

1. In Figma, use the **M3 Theme Builder** plugin (or Material Theme Builder web tool)
2. Define your custom color source (primary seed color)
3. Export tokens as **Design Tokens JSON** format
4. Run through **Style Dictionary** with a CSS transform to generate `m3-reference.css` and `m3-system.css`
5. Alternatively, manually copy hex values from the Figma export into the CSS custom property files
6. Map to shadcn bridge vars in the theme file
7. Done — Tailwind utility classes now reflect your Figma tokens
