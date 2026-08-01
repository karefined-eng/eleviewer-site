# EleViewer Web Project Rules

## Mandatory UI Design System Enforcement
Before creating or modifying any web component in `eleviewer-site`, you MUST read and strictly adhere to `eleviewer-site/DESIGN.md`.

### Key Constraints:
1. **No Ad-Hoc Color Palettes:** Do NOT invent Tailwind color utility classes like `rose-500`, `amber-500`, `emerald-500`, `purple-500`, or `green-500` for badges, icon containers, alerts, or buttons. Stick strictly to monochromatic and accent tokens (`bg-panel`, `border-border`, `text-muted-foreground`, `bg-accent/10`, `text-accent`, `bg-primary`, `text-primary-foreground`).
2. **No Hardcoded Hex Colors:** Do NOT use hardcoded hex strings (e.g., `#856404`, `#595959`) in standard `.tsx` UI components. **Exemption:** You may use raw hex colors ONLY inside components that simulate external software environments (e.g., `app-mockup.tsx`, `interactive-demo.tsx`) to match their native OS themes, or inside SVG paths (e.g., `logo.tsx`).
3. **Canonical Components:**
   - All notices, security warnings, and SmartScreen disclaimers MUST use the canonical `notice-box` pattern defined in `DESIGN.md`.
   - All primary CTAs (Download, Join Insiders, Push to Laptop) MUST use the canonical `button-primary` styling (`h-11 px-6 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90`).
   - All category tags and status pills MUST use the canonical `status-pill` styling (`rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs text-muted-foreground`).
4. **SEO, AEO & GEO Keyword Optimization (No Niche Jargon):** When writing headings (`<h1>`, `<h2>`), titles, meta descriptions, or documentation copy, do NOT use obscure internal branding or niche philosophy terms (like *"Sovereignty Workstation"* or *"Reflex Engine"*). Instead, prioritize high-intent, universally searched keywords (e.g., *"Free Windows Document Reader"*, *"Offline PDF & Office Viewer"*, *"Local Text-to-Speech Study Tool"*, *"Zero Telemetry Document Indexer"*) to maximize discoverability across traditional search engines (SEO), AI chat assistants (AEO), and generative AI summaries (GEO).
