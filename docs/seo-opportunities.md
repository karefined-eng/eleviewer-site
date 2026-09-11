# SEO opportunities

> Content and search-intent backlog for EleViewer. Reviewed September 11, 2026.

This document records additional search-query opportunities for the EleViewer website. Priorities are based on intent strength, product fit, existing route coverage, and competitor positioning. Search-volume figures were not reliably available from accessible sources, so they should be validated before investing in large content expansions.

## Priority opportunities

### 1. Open Office files without Microsoft Office

**Example queries**

- `open PPTX without PowerPoint`
- `free Office viewer for Windows`
- `open PDF DOCX XLSX without Office`

**Recommended work**

- Strengthen `/guides/open-docx-without-word`.
- Strengthen `/guides/open-xlsx-without-excel`.
- Add `/guides/open-pptx-without-powerpoint` if the supported workflow is stable.
- Put the exact task in each H1 and include a format matrix, download workflow, and viewer-versus-editor explanation.

**Caution:** “Opens” does not mean full Office fidelity. Document limitations for comments, tracked changes, macros, formulas, charts, embedded objects, and complex layouts.

### 2. Portable and no-install document viewing

**Example queries**

- `portable document viewer Windows`
- `run document viewer from USB`
- `portable Office viewer`
- `no install PDF viewer`

**Recommended work**

- Expand `/guides/portable-document-viewer`.
- Show a tested download → copy → open workflow.
- Explain storage location, updates, and troubleshooting.

**Caution:** Do not claim that portable execution leaves no traces, works everywhere, or bypasses school or workplace policies. Windows caches, antivirus tools, permissions, and execution controls still apply.

### 3. PDF read aloud and text-to-speech

**Example queries**

- `PDF read aloud Windows`
- `read PDF aloud free`
- `PDF text to speech offline`
- `listen to PDF while studying`

**Recommended work**

- Strengthen `/guides/pdf-text-to-speech-windows`.
- Consider `/guides/read-pdf-aloud-offline` only if it offers materially distinct content.
- Cover selectable-text workflow, F9, voice and rate controls, bookmarks, and study use cases.

**Caution:** Distinguish text PDFs from scanned or image-only PDFs. Qualify offline voice availability and reading order for columns, tables, footnotes, equations, and headers.

### 4. Offline study and no-internet reading

**Example queries**

- `offline study app Windows`
- `study PDFs without internet`
- `offline document reader Windows`

**Recommended work**

- Expand `/use-cases/offline-study`.
- Describe a complete local study workflow: course folder, search, bookmarks, Read Aloud, and session restore.
- Link to this use case prominently from the homepage and docs overview.

**Caution:** Separate “works after download without internet” from first-run downloads, updates, crash reporting, web-panel behavior, and Windows speech voice availability.

### 5. School, university, shared, and locked-down computers

**Example queries**

- `document viewer for school computer`
- `open DOCX without admin rights`
- `viewer for locked down PC`

**Recommended work**

- Expand `/use-cases/school-computers`.
- Consider `/guides/document-viewer-without-admin-rights` only after testing on a standard Windows account.
- Address shared-computer privacy, folder-based workflows, and what users can do when installation is blocked.

**Caution:** Never imply that EleViewer can bypass administrator controls, antivirus, execution-control software, or school policies.

### 6. Private and local document viewing

**Example queries**

- `private PDF reader no upload`
- `local document viewer no account`
- `PDF reader without cloud upload`

**Recommended work**

- Add a privacy-focused page such as `/privacy/local-document-viewer`.
- Explain desktop-versus-website data flows, optional feedback behavior, network access, update checks, and source-code links.
- Link to the existing privacy page.

**Caution:** Scope privacy claims carefully. Say that the **desktop app does not collect usage telemetry** if that is the verified claim; do not imply that the marketing website has no analytics or server logs.

### 7. Lightweight Adobe Reader alternative

**Example queries**

- `lightweight PDF reader Windows`
- `fast PDF reader`
- `Adobe Reader alternative portable`

**Recommended work**

- Consider `/alternatives/adobe-reader` or `/alternatives/lightweight-pdf-reader`.
- Compare use cases: EleViewer for mixed Office/PDF and study workflows; PDF-only readers for minimal PDF or ebook reading.

**Caution:** Avoid “fastest,” “smallest,” or “lightest” claims without reproducible measurements, versions, test files, and hardware details.

### 8. All-in-one Office and PDF viewer

**Example queries**

- `universal document viewer Windows`
- `open PDF DOCX XLSX without Office`
- `Office and PDF viewer`

**Recommended work**

- Add a format-focused landing page such as `/guides/open-pdf-docx-xlsx-without-office`.
- Include an indexed support table covering open/view, search, text extraction, text-to-speech, editing, and known limitations.

**Caution:** Define support levels. Do not present every supported extension as having identical rendering or editing capabilities.

### 9. Reading Word documents aloud

**Example queries**

- `read Word document aloud`
- `text to speech DOCX Windows`
- `listen to lecture notes`

**Recommended work**

- Pursue this only after verifying that DOCX, TXT, or Markdown text-to-speech is supported reliably.
- Otherwise keep current messaging focused on verified PDF Read Aloud behavior.

**Caution:** Do not extend the PDF text-to-speech claim to Word, PowerPoint, tables, or Markdown without implementation and UX verification.

### 10. Alternatives and comparison searches

**Example queries**

- `Sumatra PDF alternative`
- `Microsoft Office Viewer alternative`
- `FreeFileViewer alternative`
- `PDF reader vs Office viewer`

**Recommended work**

- Improve `/alternatives/sumatra-pdf`.
- Improve `/alternatives/microsoft-office-viewer`.
- Consider `/alternatives/freefileviewer` only after collecting current, version-specific competitor facts.
- Structure comparisons around mixed formats, portability, text-to-speech, privacy, offline use, and file fidelity.

**Caution:** Keep competitor facts current and sourced. Avoid claiming that a competitor lacks a feature unless its current documentation has been checked.

## Recommended sequence

1. Improve the existing DOCX, XLSX, PDF text-to-speech, and portable-viewer pages with richer task steps, limitations, and internal links.
2. Expand the school-computer and offline-study pages because they are distinctive scenarios with clear product fit.
3. Add a privacy/local-processing explainer with carefully scoped desktop-versus-website claims.
4. Add Adobe Reader and FreeFileViewer comparison pages after collecting current competitor facts.
5. Create a general “open PDF, DOCX, and XLSX without Office” hub that links to individual task guides and the support matrix.

## Current coverage

The site already has strong foundations:

- Guides for opening DOCX and XLSX without Office, PDF text-to-speech, and portable document viewing.
- Use-case pages for students, offline study, and school computers.
- Comparison pages for Sumatra PDF and Microsoft Office Viewer.
- FAQ content aligned with Office-free file opening, PDF Read Aloud, portability, school computers, offline use, and alternatives.
- Homepage copy covering local study, Office-free file opening, Read Aloud, no account, and no cloud upload.

## Copy and trust checks

- Replace unsupported superlatives such as “absolute fastest,” “king,” or “renders massive PDFs instantly” with tested, measurable claims or qualified comparisons.
- Keep privacy language scoped to the desktop app because the website uses Vercel Analytics and Speed Insights.
- Preserve clear distinctions between viewing and editing, local processing and website behavior, and offline operation and first-run/update requirements.
- Prefer direct search language in headings and metadata over internal product jargon.

