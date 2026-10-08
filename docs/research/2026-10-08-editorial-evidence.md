# Editorial evidence and freshness

## Decision

Long-form docs, guides, use-case pages, and comparison pages now share a concise author, update date, product-facts, and source block. Their Article structured data also names the author and publisher and records a modification date. The site-wide Organization entity connects EleViewer to its verified GitHub project and maintainer profile.

## Why

Readers and answer engines should not have to piece basic product facts together across several pages. A small source block keeps the format list, Windows versions, approximate download size, and desktop privacy scope together with links to the project, release, documentation, and privacy details. The named maintainer and update date make responsibility and freshness easy to see without adding a large author biography to every page.

This also reduces cognitive effort: one compact block provides provenance after the article, where readers can check evidence without interrupting the main task.

## Evidence and safeguards

- Supported formats, Windows versions, and approximate size are repeated in the existing project content.
- Release version and date are read from `lib/releases-data.ts` rather than copied into the component.
- Privacy copy distinguishes the desktop app from website analytics.
- No performance benchmark, competitor claim, or professional credential is added.
- The update date is explicit in `lib/editorial.ts`; change it when this shared editorial content is reviewed and revised.
