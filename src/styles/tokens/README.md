# Design Token Architecture

## The Three-Tier M3 Token Hierarchy

This project uses Google's Material Design 3 (M3) token system. Tokens flow through three tiers:

```
Tier 1: Reference Palette  (m3-reference.css)
    Raw color values. Full tonal ramps (0–100) for each palette.
    Never used directly in components.
    Example: --md-ref-palette-primary40: #006780

Tier 2: System Tokens  (m3-system.css)
    Semantic roles mapped from reference tones.
    Light + dark variants defined here.
    Example: --md-sys-color-primary: var(--md-ref-palette-primary40)

Tier 3: Component Tokens  (theme-v*.css → global.css @theme)
    shadcn bridge vars + Tailwind utility names.
    Example: --primary: var(--md-sys-color-primary)
             Tailwind: bg-primary → var(--primary)
```

---

## Exporting Tokens from Figma

### Using the M3 Theme Builder Plugin

1. Open your Figma file and install the **Material Theme Builder** plugin
2. Set your brand's primary seed color in the plugin
3. The plugin generates the full M3 tonal palette automatically
4. Click **Export** → choose **Design Tokens (JSON)** format
5. Save the JSON file (e.g., `tokens.json`)

### Converting JSON → CSS (Style Dictionary)

Install Style Dictionary:
```bash
npm install -g style-dictionary
```

Create a `style-dictionary.config.json`:
```json
{
  "source": ["tokens.json"],
  "platforms": {
    "css": {
      "transformGroup": "css",
      "prefix": "md-ref-palette",
      "buildPath": "src/styles/tokens/",
      "files": [{ "destination": "m3-reference.css", "format": "css/variables" }]
    }
  }
}
```

Run: `style-dictionary build`

Alternatively, copy hex values manually from the Figma export into `m3-reference.css`.

---

## The shadcn Bridge

shadcn/ui components expect variables like `--background`, `--primary`, `--card`, etc.
Our theme files map M3 system tokens to these shadcn names:

```css
/* Inside .theme-v* { } */
--background: var(--md-sys-color-surface);
--primary:    var(--md-sys-color-primary);
--card:       var(--md-sys-color-surface-container-low);
/* ... etc */
```

This way, shadcn components work correctly while all colors flow through M3 tokens.

---

## Adding a New Theme

1. Copy `theme-v1.css` to `theme-v4.css`
2. Change the scoping class from `.theme-v1` to `.theme-v4`
3. Override the `--md-ref-palette-*` values with your brand colors
4. Adjust `--radius-*` for your desired shape style:
   - Rounded/pill: `--radius-full: 9999px`
   - Square: `--radius-full: 0px`
   - Chamfered: `--radius-full: 0px 16px 0px 16px`
5. Set `--component-border-width` to `0px` (borderless) or `1.5px` (outlined)
6. Import the new file in `global.css`
7. Wrap your pages with `<div className="theme-v4">`

---

## Dark Mode

The `.dark` class is toggled on `<html>` by `ThemeProvider`.

Dark mode flips are defined in two places:
- `m3-system.css` — global semantic flip (primary tone 40 → 80, surfaces flip, etc.)
- `theme-v*.css` → `.dark .theme-v*` block — per-theme dark overrides if needed

No component-level dark mode code is required — it flows through the token chain automatically.
