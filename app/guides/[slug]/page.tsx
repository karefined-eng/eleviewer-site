import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DOWNLOAD_URL } from "@/lib/links"

type FormatRow = [string, string, string, string] // Format, Open/View, Text Extraction, Limitations

type Guide = {
  title: string
  description: string
  question: string
  answer: string
  steps: string[]
  related: [string, string][]
  limitations?: string
  formatMatrix?: FormatRow[]
}

const guides: Record<string, Guide> = {
  "open-docx-without-word": {
    title: "How to Open DOCX Files Without Microsoft Word",
    description: "Open DOCX files on Windows 10 or 11 without Microsoft Word, an Office subscription, installation, or admin rights.",
    question: "Can you open a DOCX file without Microsoft Word?",
    answer: "Yes. EleViewer opens DOCX files for free on Windows 10 and 11. It is a portable app, so you can download one .exe and open a Word document without installing Microsoft Office or creating an account.",
    steps: [
      "Download the portable EleViewer .exe.", 
      "Drag and drop your .docx file into the window, or press Ctrl+O.", 
      "Read the document, search it, or keep it beside your notes in the split view.", 
      "EleViewer is a viewer, not an editor. You can copy text but not modify the original document."
    ],
    limitations: "EleViewer provides a clean reading view for text, headings, basic tables, and common images. It does not support editing, saving changes, tracked changes, comments, macros, complex charts, or embedded objects.",
    related: [["Open XLSX without Excel", "/guides/open-xlsx-without-excel"], ["Portable document viewer", "/guides/portable-document-viewer"], ["EleViewer for students", "/use-cases/students"]],
  },
  "open-xlsx-without-excel": {
    title: "How to Open XLSX Files Without Microsoft Excel",
    description: "View XLSX spreadsheets on Windows without Microsoft Excel. EleViewer is free, portable, offline, and needs no admin rights.",
    question: "What is a free way to open an XLSX file without Excel?",
    answer: "EleViewer opens XLSX spreadsheets on Windows 10 and 11 without Microsoft Excel. Use the portable .exe to inspect spreadsheet data locally, without an Office subscription or installation.",
    steps: [
      "Download EleViewer for Windows.", 
      "Run the portable .exe from your desktop, USB drive, or course folder.", 
      "Press Ctrl+O or drag-and-drop the .xlsx file.", 
      "Use the native table view to inspect the spreadsheet cells and keep your work local."
    ],
    limitations: "The XLSX viewer displays cell values and text data. It does not support formula evaluation, editing cells, charts, pivot tables, macros, or complex conditional formatting.",
    related: [["Open DOCX without Word", "/guides/open-docx-without-word"], ["Office viewer alternative", "/alternatives/microsoft-office-viewer"], ["Download EleViewer", "/download"]],
  },
  "open-pptx-without-powerpoint": {
    title: "How to Open PPTX Files Without Microsoft PowerPoint",
    description: "View PPTX presentations on Windows without Microsoft PowerPoint. Free, portable, offline, and secure.",
    question: "Can you view a PPTX presentation without PowerPoint?",
    answer: "Yes, EleViewer opens PPTX presentations on Windows without Microsoft PowerPoint. It extracts text and slide contents for quick reading and study, without needing an Office license.",
    steps: [
      "Download EleViewer.", 
      "Double-click the .exe to open the app.", 
      "Press Ctrl+O and select your .pptx file.", 
      "Scroll through the presentation content alongside your other course materials."
    ],
    limitations: "EleViewer focuses on extracting text and structure for study purposes. It does not render animations, transitions, embedded media, or exact slide layouts.",
    related: [["Open DOCX without Word", "/guides/open-docx-without-word"], ["All-in-one Office Viewer", "/guides/open-pdf-docx-xlsx-without-office"], ["Download EleViewer", "/download"]],
  },
  "pdf-text-to-speech-windows": {
    title: "Free PDF Text-to-Speech Reader for Windows",
    description: "Read PDFs aloud on Windows 10 and 11 with a free offline document reader that uses native Windows speech voices.",
    question: "How can you read a PDF aloud on Windows for free?",
    answer: "EleViewer reads PDF text aloud with the native Windows speech engine. Open a PDF, select a passage if needed, and press F9 to start hands-free reading. Supported voices can work completely offline.",
    steps: [
      "Open a text-based PDF in EleViewer.", 
      "Select a passage, or leave the document unselected to start from the current reading position.", 
      "Press F9 to show Read Aloud controls.", 
      "Adjust the reading rate and voice, and continue studying while your eyes rest."
    ],
    limitations: "Text-to-speech requires a text-based PDF. Scanned or image-only PDFs without OCR text layers cannot be read aloud. Reading order may vary for multi-column layouts, tables, complex math equations, or non-standard footnotes. Offline voice availability depends on the voices installed in your Windows settings.",
    related: [["Read PDFs and listen aloud", "/docs/pdf-and-tts"], ["Offline study workspace", "/use-cases/offline-study"], ["Download EleViewer", "/download"]],
  },
  "portable-document-viewer": {
    title: "Portable Document Viewer for Windows With No Install",
    description: "Use a free portable document viewer on Windows. Download, copy to a USB or folder, and open files without an installer or administrator privileges.",
    question: "What is a portable document viewer?",
    answer: "A portable document viewer runs from a single executable file without running a traditional installer or changing system-wide registry settings. EleViewer opens PDF, DOCX, XLSX, PPTX, and more from a portable Windows .exe.",
    steps: [
      "Download the latest EleViewer .exe to your computer.", 
      "Copy the file to a USB flash drive or any local course folder.", 
      "Run it directly by double-clicking it. No installer or admin permission is needed.", 
      "Open your files. All your work stays in the app workspace."
    ],
    limitations: "While portable, EleViewer does not guarantee \"zero traces\" on a shared system. Windows naturally creates cache files, prefetch records, and recent document history. Antivirus software, group policies, and institutional execution restrictions still apply and may block unknown executables.",
    related: [["Use EleViewer on school computers", "/use-cases/school-computers"], ["Open DOCX without Word", "/guides/open-docx-without-word"], ["Compare alternatives", "/alternatives/sumatra-pdf"]],
  },
  "open-pdf-docx-xlsx-without-office": {
    title: "Open PDF, DOCX, and XLSX Files Without Microsoft Office",
    description: "An all-in-one, portable document viewer for Windows that opens PDF, Word, Excel, and PowerPoint files without a Microsoft Office subscription.",
    question: "How can I open PDF and Office files without Microsoft Office?",
    answer: "EleViewer acts as a universal study workspace for Windows. It opens PDF, DOCX, XLSX, PPTX, Markdown, and CSV files in one interface without requiring multiple bloated applications or a paid Microsoft subscription.",
    steps: [
      "Download the portable EleViewer app.", 
      "Run the app without administrator rights.", 
      "Use the Vault sidebar to add your local document folders.", 
      "Click any PDF, DOCX, or XLSX file to read it instantly in the split-view workspace."
    ],
    formatMatrix: [
      ["PDF", "Native rendering", "Full text & TTS", "May struggle with heavily layered forms"],
      ["DOCX", "Native text rendering", "Full text", "No editing, comments, macros, or charts"],
      ["XLSX", "Data table rendering", "Full text", "No formula evaluation or charts"],
      ["PPTX", "Text extraction", "Full text", "No animations or slide layouts"],
    ],
    related: [["Open DOCX without Word", "/guides/open-docx-without-word"], ["Open XLSX without Excel", "/guides/open-xlsx-without-excel"], ["Free Office viewer alternative", "/alternatives/microsoft-office-viewer"]],
  }
}

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

  const jsonLd = { 
    "@context": "https://schema.org", 
    "@type": "HowTo", 
    name: guide.title, 
    description: guide.description, 
    step: guide.steps.map((text) => ({ "@type": "HowToStep", text })), 
    url: `https://eleviewer.vercel.app/guides/${slug}` 
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          
          <p className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Windows guide
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            {guide.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
            {guide.description}
          </p>
          
          <div className="mt-10 rounded-xl border border-border bg-panel/50 p-6">
            <h2 className="text-xl font-semibold">{guide.question}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{guide.answer}</p>
          </div>
          
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">How to do it</h2>
            <ol className="mt-5 grid gap-4 sm:grid-cols-2">
              {guide.steps.map((step, index) => (
                <li key={step} className="rounded-lg border border-border p-5">
                  <span className="font-mono text-xs text-muted-foreground">STEP {index + 1}</span>
                  <p className="mt-2 text-sm leading-6">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          {guide.formatMatrix && (
            <section className="mt-12">
              <h2 className="text-2xl font-semibold mb-5">Supported Format Capabilities</h2>
              <div className="overflow-x-auto rounded-lg border border-border">
                <table className="w-full text-left text-sm text-foreground">
                  <thead className="bg-panel font-medium text-foreground">
                    <tr>
                      <th className="border-b border-border px-4 py-3">Format</th>
                      <th className="border-b border-border border-l px-4 py-3">Open / View</th>
                      <th className="border-b border-border border-l px-4 py-3">Text Extraction</th>
                      <th className="border-b border-border border-l px-4 py-3">Limitations</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border bg-background">
                    {guide.formatMatrix.map(([format, view, extract, limits], idx) => (
                      <tr key={idx}>
                        <td className="px-4 py-3 font-semibold">{format}</td>
                        <td className="border-l border-border px-4 py-3">{view}</td>
                        <td className="border-l border-border px-4 py-3">{extract}</td>
                        <td className="border-l border-border px-4 py-3 text-muted-foreground">{limits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}

          {guide.limitations && (
            <section className="mt-12 rounded-xl border border-border bg-panel/30 p-6">
              <h2 className="text-lg font-semibold text-foreground">Document Fidelity & Limitations</h2>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {guide.limitations}
              </p>
            </section>
          )}

          <section className="mt-12 rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold">Why use EleViewer?</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              EleViewer is a free, open-source study workspace for Windows. It opens common files locally, works offline, uses zero telemetry, and runs as one portable .exe without admin rights.
            </p>
            <a href={DOWNLOAD_URL} className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Download EleViewer
            </a>
          </section>
          
          <nav aria-label="Related guides" className="mt-12 border-t border-border pt-8">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Keep exploring</h2>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {guide.related.map(([label, href]) => (
                <a key={href} href={href} className="text-sm underline underline-offset-4 hover:text-accent">
                  {label}
                </a>
              ))}
            </div>
          </nav>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
