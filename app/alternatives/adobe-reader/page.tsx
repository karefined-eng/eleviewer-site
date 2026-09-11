import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DOWNLOAD_URL } from "@/lib/links"

export const metadata: Metadata = { 
  title: "Adobe Reader Alternative for Windows", 
  description: "A lightweight, portable alternative to Adobe Reader that opens PDFs alongside DOCX, XLSX, and PPTX files. No installer required.", 
  alternates: { canonical: "https://eleviewer.vercel.app/alternatives/adobe-reader" } 
}

const rows = [
  ["PDF Support", "Yes", "Yes"], 
  ["DOCX, XLSX, PPTX Support", "Yes", "Requires paid subscription / cloud conversion"], 
  ["Text-to-Speech (Read Aloud)", "Yes (Native Windows voices)", "Yes"], 
  ["Portable (.exe)", "Yes (No install required)", "No (Large installer required)"], 
  ["Offline Operation", "100% Local", "Cloud features deeply integrated"], 
  ["Telemetry", "Zero telemetry", "Usage data collected by default"]
]

export default function AdobeReaderAlternative() { 
  const jsonLd = { 
    "@context": "https://schema.org", 
    "@type": "Article", 
    headline: "Adobe Reader Alternative for Windows", 
    description: metadata.description, 
    url: "https://eleviewer.vercel.app/alternatives/adobe-reader" 
  }; 
  
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          
          <p className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Alternative guide
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            A Lightweight Alternative to Adobe Acrobat Reader
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
            Adobe Acrobat Reader is the industry standard for PDF viewing, but it is a heavy application that requires an installer, background update services, and cloud integration. If you need a fast, portable viewer that also opens Office files, EleViewer is the perfect alternative.
          </p>
          
          <div className="mt-10 overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[520px] text-left text-sm">
              <caption className="sr-only">EleViewer compared with Adobe Acrobat Reader</caption>
              <thead className="bg-panel text-muted-foreground">
                <tr>
                  <th className="p-4 font-medium">Capability</th>
                  <th className="p-4 font-medium">EleViewer</th>
                  <th className="p-4 font-medium">Adobe Acrobat Reader</th>
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
            <h2 className="mb-4 text-2xl font-semibold text-foreground">When to choose Adobe Acrobat Reader</h2>
            <p className="mb-4 text-muted-foreground">
              If your workflow relies on filling out complex, interactive PDF forms, validating digital signatures, or advanced PDF printing controls, you should use Adobe Acrobat Reader. It is the most robust tool for advanced PDF-specific workflows.
            </p>
            
            <h2 className="mt-8 mb-4 text-2xl font-semibold text-foreground">When to choose EleViewer</h2>
            <p className="mb-4 text-muted-foreground">
              If you are a student or professional who frequently receives a mix of <code>.pdf</code>, <code>.docx</code>, and <code>.xlsx</code> files, EleViewer keeps you focused. It runs as a single portable application, meaning no background update services are installed on your computer. Plus, all your documents are processed strictly locally with zero usage telemetry.
            </p>
          </section>
          
          <section className="mt-12 rounded-xl border border-border bg-panel/50 p-6">
            <h2 className="text-xl font-semibold">Try the portable alternative</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Download the single executable. No installation, no admin rights, and no sign-ups required.
            </p>
            <a href={DOWNLOAD_URL} className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Download EleViewer
            </a>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
