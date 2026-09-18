## 2026-09-18 — Internal Linking Architecture Sprint

### What was built
1. **Hub pages** — Created `/use-cases` and `/alternatives` hub pages. Previously these routes 404'd, breaking breadcrumbs on all spoke pages.
2. **Shared data layer** — Extracted use case and alternatives metadata into `lib/use-cases-data.ts` and `lib/alternatives-data.ts` so hubs, spokes, and cross-link components all pull from a single source of truth.
3. **Programmatic cross-links** — Every `/use-cases/[slug]` page now auto-renders "Explore more use cases" linking to all sibling pages. Created `components/related-alternatives.tsx` and added it to all 4 alternatives pages.
4. **Sumatra PDF page fixed** — Was missing `SiteHeader` / `SiteFooter` wrapper; now consistent with all other pages.

### Build
56 static pages, 0 errors, TypeScript clean.

### To extend
- **New use case:** Add entry to `lib/use-cases-data.ts` — hubs and related sections auto-update.
- **New alternative:** Add entry to `lib/alternatives-data.ts` — hub and `RelatedAlternatives` auto-update.
