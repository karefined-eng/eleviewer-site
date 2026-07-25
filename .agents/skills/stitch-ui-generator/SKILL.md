---
name: stitch-ui-generator
description: Generates, styles, and refactors Next.js web components in eleviewer-site using the canonical Google Stitch and Vercel Geist monochromatic design system tokens defined in DESIGN.md. Use this skill whenever creating UI layouts, buttons, badges, notices, or feedback forms on the website.
---

# Stitch UI Generator Skill for EleViewer Web Platform (`eleviewer-site`)

When invoked to create or modify web components, follow this modular, high-contrast design specification to ensure fast, token-efficient AI inference and absolute visual consistency.

## 1. Core Visual Principles
- **Monochromatic Ink-on-Canvas:** Rely strictly on near-white canvases (`bg-background` / `bg-panel`) and near-black ink (`text-foreground` / `text-muted-foreground`) with 1px hairline borders (`border-border`).
- **Zero Ad-Hoc Palettes:** Never invent or use Tailwind utility classes like `amber-500`, `rose-500`, `emerald-500`, `red-500`, `purple-500`, or `green-500` for badges, icon boxes, or alerts.
- **No Hardcoded Hex Strings:** Never use raw hex strings (e.g., `#856404`, `#595959`) in `.tsx` components (except inside standalone IDE desktop window mockups).

## 2. Canonical Component Vocabulary
When building UI elements, implement these exact canonical patterns from `DESIGN.md`:

### System Notices & Alerts (`notice-box`)
```tsx
<div className="rounded-lg border border-border bg-panel/50 p-4 text-left font-mono text-xs text-muted-foreground leading-relaxed">
  <span className="font-semibold text-foreground">ℹ️ Note:</span> Message content here.
</div>
```

### Primary Action Buttons (`button-primary`)
```tsx
<button className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
  Click Action
</button>
```

### Secondary Buttons & Links (`button-secondary`)
```tsx
<a href="/target" className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-panel">
  Secondary Action
</a>
```

### Eyebrows, Categories & Badges (`status-pill`)
```tsx
<span className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
  Status Tag
</span>
```

## 3. Copywriting & Readability (Flesch-Kincaid Grade 6 Rule)
- All public developer copy must be written at a Flesch-Kincaid 6th-to-8th grade reading level (ages 11–13) for rapid scanning.
- Use direct, conversational English (Paul Graham / David Ogilvy principle: *"Write like you talk"*).
- For feedback intake, use outcome-driven phrasing: *"Is there something you wish EleViewer could do? Share your idea directly with the developer — every submission is reviewed for our upcoming builds."*
