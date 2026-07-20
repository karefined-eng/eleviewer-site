export function UseCases() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <div className="rounded-3xl border border-border bg-panel p-8 shadow-sm">
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Built for Windows study workflows
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
            One free Windows document viewer for every student file type
          </h2>
          <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
            EleViewer is a portable study workspace for Windows 10 and 11. Open DOCX, XLSX, PDF, Markdown, and TXT files without installing extra software, and use PDF text-to-speech, bookmarks, and session restore to stay focused.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-border bg-background p-6">
            <h3 className="text-sm font-semibold text-foreground">Free Windows document viewer</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A lightweight portable app for opening and editing DOCX, XLSX, PDF, Markdown, and TXT on Windows.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6">
            <h3 className="text-sm font-semibold text-foreground">PDF reader with text-to-speech</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Turn lecture slides and course readings into audio, so you can study hands-free or review while on the go.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6">
            <h3 className="text-sm font-semibold text-foreground">Open source and portable</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              No account, no telemetry, and no installer. Keep your files local and your workflow fast.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6">
            <h3 className="text-sm font-semibold text-foreground">Study-ready file vault</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Keep all your course documents accessible from one window with a vault sidebar and bookmarks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
