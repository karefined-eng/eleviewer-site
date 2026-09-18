import { Metadata } from "next"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DOWNLOAD_URL } from "@/lib/links"
import { RelatedAlternatives } from "@/components/related-alternatives"

export const metadata: Metadata = {
  title: "EleViewer vs Sumatra PDF — Free Document Viewer Alternative",
  description: "Comparing EleViewer and Sumatra PDF for Windows. See which portable PDF and document reader is right for your study workflow.",
  alternates: { canonical: "https://eleviewer.vercel.app/alternatives/sumatra-pdf" },
}

export default function SumatraAlternativePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "EleViewer vs Sumatra PDF — Free Document Viewer Alternative",
    description: "Comparing EleViewer and Sumatra PDF for Windows. See which portable PDF and document reader is right for your study workflow.",
    url: "https://eleviewer.vercel.app/alternatives/sumatra-pdf",
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <BreadcrumbJsonLd items={[
            { name: "EleViewer", url: "https://eleviewer.vercel.app/" },
            { name: "Alternatives", url: "https://eleviewer.vercel.app/alternatives" },
            { name: "Sumatra PDF alternative", url: "https://eleviewer.vercel.app/alternatives/sumatra-pdf" },
          ]} />

          <p className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Alternative guide
          </p>
          <h1 className="mt-5 mb-4 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl text-foreground">
            EleViewer vs Sumatra PDF
          </h1>
          <p className="mb-8 mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
            Sumatra PDF is an excellent, lightweight PDF reader. But if you need to also open DOCX, XLSX, and PPTX files, or if you want built-in text-to-speech for studying, EleViewer might be a better fit.
          </p>

          <h2 className="mb-4 text-2xl font-semibold text-foreground">Feature Comparison</h2>
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="w-full text-left text-sm text-foreground">
              <thead className="bg-panel font-medium text-foreground">
                <tr>
                  <th className="border-b border-border px-4 py-3">Feature</th>
                  <th className="border-b border-border border-l px-4 py-3">EleViewer</th>
                  <th className="border-b border-border border-l px-4 py-3">Sumatra PDF</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-background">
                <tr>
                  <td className="px-4 py-3">Portable (.exe)</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">PDF Support</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes (Extremely fast)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">DOCX, XLSX, PPTX Support</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes</td>
                  <td className="border-l border-border px-4 py-3">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Text-to-Speech (Read Aloud)</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes (Native Windows)</td>
                  <td className="border-l border-border px-4 py-3">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Markdown Editor</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes</td>
                  <td className="border-l border-border px-4 py-3">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Built-in Web Browser</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes (Side panel)</td>
                  <td className="border-l border-border px-4 py-3">❌ No</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">File Vault Sidebar</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes</td>
                  <td className="border-l border-border px-4 py-3">❌ No (Basic favorites only)</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">Session Restore</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes</td>
                  <td className="border-l border-border px-4 py-3">✅ Yes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-12">
            <h2 className="mb-4 text-2xl font-semibold text-foreground">When to choose Sumatra PDF</h2>
            <p className="mb-4 text-muted-foreground">
              If you <strong>only</strong> need to read PDFs, EPUBs, or comic books (CBZ/CBR) and you want the absolute fastest, most minimal reader available, Sumatra PDF is the king. It has been battle-tested for years and renders massive PDFs instantly.
            </p>

            <h2 className="mb-4 text-2xl font-semibold text-foreground">When to choose EleViewer</h2>
            <p className="mb-4 text-muted-foreground">
              If you are a student or professional who constantly deals with professors or clients sending <code>.docx</code>, <code>.pptx</code>, or <code>.xlsx</code> files, but you don't want to install the multi-gigabyte Microsoft Office suite, EleViewer is the perfect middle ground. It also includes <strong>Text-to-Speech</strong> so you can listen to your PDF readings hands-free, and a built-in web browser for looking up terms without leaving your notes.
            </p>
          </div>

          <section className="mt-12 rounded-xl border border-border bg-panel/50 p-6">
            <h2 className="text-xl font-semibold">Try EleViewer free</h2>
            <p className="mt-3 leading-7 text-muted-foreground">
              Download the single portable executable. No installation, no admin rights, and no sign-ups required.
            </p>
            <a href={DOWNLOAD_URL} className="mt-6 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Download EleViewer
            </a>
          </section>

          <hr className="my-16 border-border" />
          <RelatedAlternatives currentSlug="sumatra-pdf" />
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}
