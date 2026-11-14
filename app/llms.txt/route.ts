export function GET() {
  const body = `# EleViewer

EleViewer is a free, portable Windows document viewer and study workspace.

## Product

- Opens PDF, DOCX, XLSX, PPTX, Markdown, CSV, HTML, and TXT files.
- Includes PDF text-to-speech, bookmarks, a local course-folder vault, and session restore.
- Runs locally on Windows 10 and Windows 11 with no account required.
- Desktop files stay local and the desktop app does not collect usage telemetry.

## Useful pages

- Homepage: https://eleviewer.vercel.app/
- Download: https://eleviewer.vercel.app/download
- Documentation: https://eleviewer.vercel.app/docs
- Live demo: https://eleviewer.vercel.app/demo
- Privacy: https://eleviewer.vercel.app/privacy
- Source code: https://github.com/karefined-eng/eleviewer
`

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}
