import { Metadata } from "next"

export const metadata: Metadata = {
  title: "EleViewer vs Sumatra PDF — Free Document Viewer Alternative",
  description: "Comparing EleViewer and Sumatra PDF for Windows. See which portable PDF and document reader is right for your study workflow.",
}

export default function SumatraAlternativePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">EleViewer vs Sumatra PDF</h1>
      <p className="mb-8 text-lg text-muted-foreground">
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
    </div>
  )
}
