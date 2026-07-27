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
    title: "Vault sidebar",
    body: "Point EleViewer at your course folders and all supported files are one click away in the sidebar. Toggle it with Alt+V and stay in flow.",
    docSlug: "vault-explorer",
  },
  {
    icon: Zap,
    title: "Quick switcher",
    body: "Ctrl+Q opens a fuzzy-search dialog over your recent and pinned files, similar to the quick file switcher in VSCode. Type three letters, hit Enter, keep working.",
    docSlug: "master-index",
  },
  {
    icon: History,
    title: "Session restore",
    body: "Put your laptop to sleep or close EleViewer in the middle of a study session. Reopen EleViewer and your previous tabs are restored — including file order and active tab, when the files are still available.",
    docSlug: "overview",
  },
  {
    icon: Bookmark,
    title: "Persistent bookmarks",
    body: "Bookmark PDF pages and files in a dedicated panel. Your place in long PDFs (such as a 400-page textbook) is preserved across sessions.",
    docSlug: "pdf-and-tts",
  },
  {
    icon: Globe,
    title: "Built-in web panel",
    body: "Open a browser side-by-side with your notes using Ctrl+T. Browse web pages in a built-in panel without switching away from your notes window.",
    docSlug: "html-and-web",
  },
  {
    icon: Search,
    title: "Find & replace",
    body: "Ctrl+F to find, Ctrl+H to replace — across any open document. Works in every text-based format EleViewer supports.",
    docSlug: "master-index",
  },
  {
    icon: Save,
    title: "Autosave",
    body: "Background saving runs automatically to reduce the risk of losing work. Configurable interval in settings.",
    docSlug: "markdown-editor",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-5xl scroll-mt-20 px-5 pb-16 sm:pb-24">
      <div className="mb-12 max-w-xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          Features
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
          A focused study workspace, not a heavy, multi-gigabyte office suite
        </h2>
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
          Core tools to read, write, and organize coursework — without large background services or heavy dependencies that slow older laptops.
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
              Read Manual <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
