# Editorial evidence and freshness

Added a reusable author and product-source block to documentation articles, task guides, use-case pages, and comparison pages. It names Karefined as the EleViewer maintainer, shows an explicit update date, lists verified platform and format facts, and links to the project repository, current release, product documentation, and desktop privacy explanation.

Article JSON-LD now includes the author, publisher, and modification date on those content routes. The global structured data includes an Organization entity connected to the verified GitHub profile and project repository. The shared release fact is derived from `lib/releases-data.ts`; the editorial date lives in `lib/editorial.ts`.

The displayed product facts distinguish desktop app privacy from website analytics and avoid unsupported speed or competitor benchmarks. The update date must be revised when the shared content is next reviewed.
