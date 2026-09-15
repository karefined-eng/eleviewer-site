"use client"

import { useRef } from "react"
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
  PenTool,
  Lightbulb,
} from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "Split-Screen Web Browser",
    body: "Press Ctrl+T to open a split-screen web browser with built-in downloads and smooth page zoom, so you can research without losing your place.",
    docSlug: "html-and-web",
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
    icon: PenTool,
    title: "Global Quick Note",
    body: "Press Alt+E to instantly open a quick scratchpad from anywhere in Windows to jot down an idea without losing your focus.",
    docSlug: "overview",
  },
]

export function Features() {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    containerRef.current.style.setProperty("--mouse-x", `${x}px`)
    containerRef.current.style.setProperty("--mouse-y", `${y}px`)
  }

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
      <div 
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="group relative grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3"
      >
        {features.map((f) => (
          <div key={f.title} className="relative flex flex-col justify-between gap-4 bg-panel p-6 z-10 hover:bg-panel/80 transition-colors overflow-hidden">
            <div 
              className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100 z-0"
              style={{
                background: `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(108,182,255,0.15), transparent 40%)`
              }}
            />
            <div className="flex flex-col gap-3 relative z-10">
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
              className="mt-2 flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-accent transition-colors relative z-10"
            >
              See how it works <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
