import Link from "next/link"
import {
  Volume2,
  FolderTree,
  Zap,
  History,
  Bookmark,
  Globe,
  Search,
  Save,
  ArrowRight,
} from "lucide-react"

const features = [
  {
    icon: Volume2,
    title: "PDFs that read to you",
    body: "Native Windows text-to-speech turns selectable text in lecture slides or readings into audio. (Windows 10/11 only)",
    docSlug: "pdf-and-tts",
  },
  {
    icon: FolderTree,
        title: "Keep a course folder close",
        body: "Point EleViewer at a course folder and keep its supported files one click away in the sidebar. Toggle it with Alt+V whenever you need it.",
    docSlug: "vault-explorer",
  },
  {
    icon: Zap,
        title: "Find the next file fast",
        body: "Press Ctrl+Q to search recent and pinned files without digging through folders. Type a few letters, press Enter, and keep working.",
    docSlug: "master-index",
  },
  {
    icon: History,
        title: "Pick up where you stopped",
        body: "Close EleViewer in the middle of a study session and reopen it later with your tabs restored, including the active tab when the files are still available.",
    docSlug: "overview",
  },
  {
    icon: Bookmark,
        title: "Save your place",
        body: "Bookmark pages and files in a dedicated panel so you can return to the important part of a long reading tomorrow.",
    docSlug: "pdf-and-tts",
  },
  {
    icon: Globe,
        title: "Look things up beside your notes",
        body: "Press Ctrl+T to open a browser panel beside your documents, so you can check a source without losing your place.",
    docSlug: "html-and-web",
  },
  {
    icon: Search,
        title: "Search inside your notes",
        body: "Press Ctrl+F to find text or Ctrl+H to replace it across any open text-based document.",
    docSlug: "master-index",
  },
  {
    icon: Save,
        title: "Keep your work safe",
        body: "Background saving runs automatically to reduce the risk of losing notes. You can adjust the interval in Settings.",
    docSlug: "markdown-editor",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-5xl scroll-mt-20 px-5 pb-16 sm:pb-24">
      <div className="mb-12 max-w-xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          Your first study session
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
          Everything you need to start studying in one window
        </h2>
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
          Open a reading, listen when your eyes need a break, save your place, and return to the same work later — without switching between several heavy apps.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f) => (
          <div key={f.title} className="flex flex-col justify-between gap-4 bg-panel p-6">
            <div className="flex flex-col gap-3">
              <f.icon className="h-5 w-5 text-accent" aria-hidden="true" />
              <h3 className="text-[15px] font-semibold text-foreground">
                {f.title}
              </h3>
              <p className="text-[13px] leading-relaxed text-muted-foreground">
                {f.body}
              </p>
            </div>
            <Link
              href={`/docs/${f.docSlug}`}
              className="mt-2 flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-accent transition-colors"
            >
              See how it works <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
