import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DOWNLOAD_URL } from "@/lib/links"

const guides = {
  "open-docx-without-word": {
    title: "How to Open DOCX Files Without Microsoft Word",
    description: "Open DOCX files on Windows 10 or 11 without Microsoft Word, an Office subscription, installation, or admin rights.",
    question: "Can you open a DOCX file without Microsoft Word?",
    answer: "Yes. EleViewer opens DOCX files for free on Windows 10 and 11. It is a portable app, so you can download one .exe and open a Word document without installing Microsoft Office or creating an account.",
    steps: ["Download the portable EleViewer .exe.", "Double-click the file. No installer or admin rights are needed.", "Press Ctrl+O and choose your .docx file.", "Read the document, search it, or keep it beside your notes."],
    related: [["Open XLSX without Excel", "/guides/open-xlsx-without-excel"], ["Portable document viewer", "/guides/portable-document-viewer"], ["EleViewer for students", "/use-cases/students"]],
  },
  "open-xlsx-without-excel": {
    title: "How to Open XLSX Files Without Microsoft Excel",
    description: "View XLSX spreadsheets on Windows without Microsoft Excel. EleViewer is free, portable, offline, and needs no admin rights.",
    question: "What is a free way to open an XLSX file without Excel?",
    answer: "EleViewer opens XLSX spreadsheets on Windows 10 and 11 without Microsoft Excel. Use the portable .exe to inspect spreadsheet data locally, without an Office subscription or installation.",
    steps: ["Download EleViewer for Windows.", "Run the portable .exe from your desktop, USB drive, or course folder.", "Press Ctrl+O and select the .xlsx file.", "Use the table view to inspect the spreadsheet and keep your work local."],
    related: [["Open DOCX without Word", "/guides/open-docx-without-word"], ["Office viewer alternative", "/alternatives/microsoft-office-viewer"], ["Download EleViewer", "/download"]],
  },
  "pdf-text-to-speech-windows": {
    title: "Free PDF Text-to-Speech Reader for Windows",
    description: "Read PDFs aloud on Windows 10 and 11 with a free offline document reader that uses native Windows speech voices.",
    question: "How can you read a PDF aloud on Windows for free?",
    answer: "EleViewer reads PDF text aloud with the Windows speech engine. Open a PDF, select a passage if needed, and press F9 to start hands-free reading. Supported voices can work offline.",
    steps: ["Open a PDF in EleViewer.", "Select a passage, or leave the document unselected to start from the current position.", "Press F9 to show Read Aloud controls.", "Adjust the reading rate and continue studying while your eyes rest."],
    related: [["Read PDFs and listen aloud", "/docs/pdf-and-tts"], ["Offline study workspace", "/use-cases/offline-study"], ["Download EleViewer", "/download"]],
  },
  "portable-document-viewer": {
    title: "Portable Document Viewer for Windows With No Install",
    description: "Use a free portable document viewer on Windows without an installer, account, or administrator privileges.",
    question: "What is a portable document viewer?",
    answer: "A portable document viewer runs from a single file instead of changing system-wide settings. EleViewer opens PDF, DOCX, XLSX, PPTX, Markdown, CSV, HTML, and TXT files from a portable Windows .exe.",
    steps: ["Download the latest EleViewer .exe.", "Copy it to a USB drive or any folder you can access.", "Run it without an installer or admin permission.", "Open mixed course and work files in one local workspace."],
    related: [["Use EleViewer on school computers", "/use-cases/school-computers"], ["Open DOCX without Word", "/guides/open-docx-without-word"], ["Compare alternatives", "/alternatives/sumatra-pdf"]],
  },
} as const

type GuideSlug = keyof typeof guides

export function generateStaticParams() {
  return Object.keys(guides).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const guide = guides[slug as GuideSlug]
  if (!guide) return {}
  return { title: guide.title, description: guide.description, alternates: { canonical: `/guides/${slug}` } }
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const guide = guides[slug as GuideSlug]
  if (!guide) notFound()

  const jsonLd = { "@context": "https://schema.org", "@type": "HowTo", name: guide.title, description: guide.description, step: guide.steps.map((text) => ({ "@type": "HowToStep", text })), url: `https://eleviewer.vercel.app/guides/${slug}` }

  return <div className="flex min-h-screen flex-col bg-background text-foreground"><SiteHeader /><main id="main-content" className="flex-1"><article className="mx-auto max-w-4xl px-5 py-16 sm:py-24"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><p className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">Windows guide</p><h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">{guide.title}</h1><p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">{guide.description}</p><div className="mt-10 rounded-xl border border-border bg-panel/50 p-6"><h2 className="text-xl font-semibold">{guide.question}</h2><p className="mt-3 leading-7 text-muted-foreground">{guide.answer}</p></div><section className="mt-12"><h2 className="text-2xl font-semibold">How to do it</h2><ol className="mt-5 grid gap-4 sm:grid-cols-2">{guide.steps.map((step, index) => <li key={step} className="rounded-lg border border-border p-5"><span className="font-mono text-xs text-muted-foreground">STEP {index + 1}</span><p className="mt-2 text-sm leading-6">{step}</p></li>)}</ol></section><section className="mt-12 rounded-xl border border-border p-6"><h2 className="text-xl font-semibold">Why use EleViewer?</h2><p className="mt-3 leading-7 text-muted-foreground">EleViewer is a free, open-source study workspace for Windows. It opens common files locally, works offline, uses zero telemetry, and runs as one portable .exe without admin rights.</p><a href={DOWNLOAD_URL} className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">Download EleViewer</a></section><nav aria-label="Related guides" className="mt-12 border-t border-border pt-8"><h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Keep exploring</h2><div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">{guide.related.map(([label, href]) => <a key={href} href={href} className="text-sm underline underline-offset-4 hover:text-accent">{label}</a>)}</div></nav></article></main><SiteFooter /></div>
}
