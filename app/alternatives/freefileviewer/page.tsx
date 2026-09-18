import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DOWNLOAD_URL } from "@/lib/links"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { RelatedAlternatives } from "@/components/related-alternatives"

export const metadata: Metadata = { 
  title: "FreeFileViewer Alternative for Windows", 
  description: "A modern, open-source alternative to FreeFileViewer with a unified study workspace, dark mode, and built-in PDF text-to-speech.", 
  alternates: { canonical: "https://eleviewer.vercel.app/alternatives/freefileviewer" } 
}

const rows = [
  ["Document Formats", "PDF, DOCX, XLSX, PPTX, CSV, HTML, TXT", "200+ formats (documents, audio, video)"], 
  ["Interface", "Modern split-pane workspace, Dark mode", "Basic, older window interface"], 
  ["Text-to-Speech", "Yes (Native Windows voices)", "No"], 
  ["Local Folder Sidebar", "Yes (Vault Explorer)", "No"], 
  ["Built-in Web Browser", "Yes", "No"], 
  ["Open Source", "Yes (GPLv3)", "No (Freeware)"]
]

export default function FreeFileViewerAlternative() { 
  const jsonLd = { 
    "@context": "https://schema.org", 
    "@type": "Article", 
    headline: "FreeFileViewer Alternative for Windows", 
    description: metadata.description, 
    url: "https://eleviewer.vercel.app/alternatives/freefileviewer" 
  }; 
  
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <BreadcrumbJsonLd items={[{ name: "EleViewer", url: "https://eleviewer.vercel.app/" }, { name: "Alternatives", url: "https://eleviewer.vercel.app/alternatives" }, { name: "FreeFileViewer alternative", url: "https://eleviewer.vercel.app/alternatives/freefileviewer" }]} />
          
          <p className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Alternative guide
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            A Modern Alternative to FreeFileViewer
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
            While FreeFileViewer is known for supporting hundreds of file types, its interface and feature set are tailored toward quick, basic viewing. EleViewer offers a modern, study-focused workspace for the formats that matter most: PDFs and Office documents.
          </p>
          
          <div className="mt-10 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[520px] text-left text-sm">
              <caption className="sr-only">EleViewer compared with FreeFileViewer</caption>
              <thead className="bg-panel text-muted-foreground">
                <tr>
                  <th className="p-4 font-medium">Capability</th>
                  <th className="p-4 font-medium">EleViewer</th>
                  <th className="p-4 font-medium">FreeFileViewer</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {rows.map(([feature, eleviewer, competitor]) => (
                  <tr key={feature} className="border-t border-border">
                    <th className="p-4 font-medium">{feature}</th>
                    <td className="p-4 text-muted-foreground">{eleviewer}</td>
                    <td className="p-4 text-muted-foreground">{competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <section className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">When to choose FreeFileViewer</h2>
            <p className="mb-4 text-muted-foreground">
              If you frequently encounter obscure file extensions, legacy formats, or need a single app that can also play audio and video files natively, FreeFileViewer’s massive format library (200+) is incredibly useful.
            </p>
            
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-foreground">When to choose EleViewer</h2>
            <p className="mb-4 text-muted-foreground">
              EleViewer is intentionally focused on document and study workflows. If you spend hours reading PDFs, Excel sheets, and Word documents, EleViewer provides a significantly better reading experience. With a modern interface, a dark mode that reduces eye strain, built-in PDF text-to-speech, and a sidebar to manage your local course folders, it is built for extended study sessions.
            </p>
          </section>
          
          <section className="mt-12 rounded-xl border border-border bg-panel/50 p-6">
            <h2 className="text-xl font-semibold">Try EleViewer</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Open your course and work documents in a fast, open-source workspace that respects your privacy.
            </p>
            <a href={DOWNLOAD_URL} className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Download the portable app
            </a>
          </section>

          <hr className="my-16 border-border" />
          <RelatedAlternatives currentSlug="freefileviewer" />
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
