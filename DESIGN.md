---
version: 1.0.0
name: EleViewer Study-Workspace System
description: The canonical design system contract for EleViewer (eleviewer-site). Modeled after Vercel's Geist developer-platform aesthetic, EleViewer employs a sleek, monochromatic, high-contrast ink-on-canvas design language. It enforces strict visual discipline: zero ad-hoc alert colors (no yellow/amber warnings, no red/rose badges, no green buttons), a single primary action vocabulary (high-contrast black/white pills or rounded rectangles), and canonical monospace typography for all technical eyebrows, badges, and system notices.

colors:
  background: "var(--background)" # #ffffff in light, #131313 in dark
  foreground: "var(--foreground)" # #0c0c0c in light, #f2f2f0 in dark
  panel: "var(--panel)"           # #f4f4f5 in light, #1c1c1c in dark
  panel-2: "var(--panel-2)"       # #e4e4e7 in light, #242424 in dark
  border: "var(--border)"         # #e4e4e7 in light, #2c2c2c in dark
  muted: "var(--muted)"           # #f4f4f5 in light, #232323 in dark
  muted-foreground: "var(--muted-foreground)" # #595959 in light, #9b9b96 in dark
  accent: "var(--accent)"         # #006adc in light, #6cb6ff in dark
  accent-foreground: "var(--accent-foreground)" # #ffffff in light, #0c1826 in dark
  primary: "var(--primary)"       # #0c0c0c in light, #f2f2f0 in dark
  primary-foreground: "var(--primary-foreground)" # #ffffff in light, #131313 in dark

typography:
  display-xl:
    fontFamily: "var(--font-sans), system-ui, sans-serif"
    fontSize: "3rem" # 48px
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  heading-lg:
    fontFamily: "var(--font-sans), system-ui, sans-serif"
    fontSize: "1.875rem" # 30px
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.015em"
  heading-md:
    fontFamily: "var(--font-sans), system-ui, sans-serif"
    fontSize: "1.25rem" # 20px
    fontWeight: 600
    lineHeight: 1.4
  body-md:
    fontFamily: "var(--font-sans), system-ui, sans-serif"
    fontSize: "0.9375rem" # 15px
    fontWeight: 400
    lineHeight: 1.6
  body-sm:
    fontFamily: "var(--font-sans), system-ui, sans-serif"
    fontSize: "0.8125rem" # 13px
    fontWeight: 400
    lineHeight: 1.5
  mono-eyebrow:
    fontFamily: "var(--font-mono), monospace"
    fontSize: "0.75rem" # 12px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
    textTransform: "uppercase"

rounded:
  sm: "calc(var(--radius) - 4px)" # 4px
  md: "calc(var(--radius) - 2px)" # 6px
  lg: "var(--radius)"             # 8px (0.5rem)
  full: "9999px"                  # pill

components:
  notice-box:
    backgroundColor: "{colors.panel}"
    borderColor: "{colors.border}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.lg}"
    padding: "1rem"
    borderWidth: "1px"
    fontFamily: "var(--font-mono)"
  status-pill:
    backgroundColor: "{colors.panel}"
    borderColor: "{colors.border}"
    textColor: "{colors.muted-foreground}"
    typography: "{typography.mono-eyebrow}"
    rounded: "{rounded.full}"
    padding: "0.25rem 0.75rem"
    borderWidth: "1px"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.primary-foreground}"
    typography: "0.875rem font-medium"
    rounded: "{rounded.lg}"
    padding: "0 1.5rem"
    height: "2.75rem" # h-11 / 44px
  button-secondary:
    backgroundColor: "transparent"
    borderColor: "{colors.border}"
    textColor: "{colors.foreground}"
    typography: "0.875rem font-medium"
    rounded: "{rounded.lg}"
    padding: "0 1.5rem"
    height: "2.75rem" # h-11 / 44px
    borderWidth: "1px"
---

# EleViewer UI Design System (Stitch Contract)

## Core Philosophy
EleViewer is built for developers, academics, and power users who value local-first privacy, speed, and clean design. The UI follows a strict **monochromatic developer aesthetic** inspired by Vercel and linear.app.

### Mandatory Rules for AI Agents & Developers:
1. **NO AD-HOC ALERT PALETTES:**
   - Never use `amber-500`, `rose-500`, `red-500`, `emerald-500`, `purple-500`, or `green-500` for cards, badges, icon boxes, or buttons.
   - All icon boxes in feature cards and trust bars MUST use `bg-accent/10 text-accent` or `bg-panel text-foreground`.
   - All checkmarks in lists (like System Requirements) MUST use `text-accent` or `text-foreground`.
2. **NO HARDCODED HEX COLORS:**
   - Never use `#856404`, `#595959`, `#1e1e1e`, or any raw hex strings in `.tsx` components (except inside the interactive IDE window mockup which simulates a standalone desktop application).
   - Always reference design tokens: `text-muted-foreground`, `text-foreground`, `bg-panel`, `border-border`, etc.
3. **CANONICAL NOTICES & WARNINGS (`notice-box`):**
   - Whether displaying a Windows SmartScreen notice, an offline reminder, or an info banner, use the canonical class pattern:
     ```tsx
     <div className="rounded-lg border border-border bg-panel/50 p-4 text-left font-mono text-xs text-muted-foreground leading-relaxed">
       <span className="font-semibold text-foreground">ℹ️ Note:</span> Message content here.
     </div>
     ```
4. **CANONICAL CTAs (`button-primary` & `button-secondary`):**
   - Primary action buttons (Download, Join Nightly, Push to Laptop) MUST use:
     `flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90`
   - Secondary buttons (View on GitHub, Email Link, Copy Winget) MUST use:
     `flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-panel`
5. **CANONICAL EYEBROWS & BADGES (`status-pill`):**
   - Category tags, release badges, and status eyebrows MUST use:
     `inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider`
