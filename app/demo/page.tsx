import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InteractiveDemo } from "~features/demo-browser/components/interactive-demo"

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 py-12 md:py-20">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Try EleViewer Live
            </h1>
            <p className="mt-4 text-[15px] text-muted-foreground leading-relaxed">
              Test-drive EleViewer in your browser. Switch between sample files to see how the interface renders PDF slides, toggles read-aloud TTS, edits Markdown in split-screen, and views CSV tables.
            </p>
          </div>
          
          <div className="mx-auto max-w-5xl">
            <p className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground text-center">
              Browser Simulation — Edits made in this demo are temporary and stay in your browser memory
            </p>
            <InteractiveDemo />
            <div className="mt-8 rounded-lg border border-border bg-panel/50 p-4 text-left font-mono text-xs text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">ℹ️ Simulation Notice:</span> This web demo is an interactive simulation of the EleViewer desktop interface. The actual desktop application runs offline on Windows 10 and 11 as a native app; this browser version lets you test the layout, file switcher, and document viewers before downloading the ~212 MB portable executable.
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
