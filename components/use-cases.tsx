export function UseCases() {
  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <div className="rounded-3xl border border-border bg-panel p-8 shadow-sm">
        <div className="max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
            Native Nuitka C++ Compilation — &lt;100ms cold-start on Windows 10/11
          </p>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
            One local workspace for the files your course already uses
          </h2>
          <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
            EleViewer is a portable study workspace for Windows 10 and 11. Open readings, notes, slides, and spreadsheets without installing several heavy apps, then use text-to-speech, bookmarks, and session restore to keep the whole study session together.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="rounded-3xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-foreground">Open the files professors assign</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Open Word documents, slides, spreadsheets, PDFs, Markdown, CSV, HTML, and TXT from one small portable app—even when Microsoft Office is not available.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-foreground">Listen to readings while you study</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Use built-in Windows voices to read selected text or a full PDF aloud while you walk, commute, or rest your eyes.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-foreground">Keep private notes private</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              No account, no ads, and no usage tracking. Your documents are opened and processed locally on your Windows computer.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-background p-6">
              <h3 className="text-sm font-semibold text-foreground">Return to the same study session</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Add a course folder, bookmark your place, and reopen your tabs and reading position when you come back.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
