const faqs = [
  {
    question: "Can I browse the web inside EleViewer?",
    answer:
      "Yes. Press Ctrl+T to open the built-in web browser panel and browse side-by-side with your documents. Tabs and URLs persist between sessions.",
  },
  {
    question: "Is EleViewer truly free and open source?",
    answer:
      "Yes. EleViewer is free, MIT licensed, portable, and requires no account or installation.",
  },
  {
    question: "What file types can EleViewer open?",
    answer:
      "EleViewer opens DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT files.",
  },
  {
    question: "Does EleViewer support PDF text-to-speech?",
    answer:
      "Yes, on Windows 10 and 11. The built-in PDF reader uses the Windows speech engine to read documents aloud so you can study hands-free. macOS and Linux support is planned for a future release.",
  },
  {
    question: "Can I use EleViewer offline?",
    answer:
      "Yes. EleViewer runs fully locally on Windows 10 and 11 without an internet connection.",
  },
  {
    question: "How do I open a DOCX file without Microsoft Word?",
    answer:
      "Download EleViewer — it opens Word documents (.docx) for free with no Microsoft Office required. Just drag the file onto EleViewer or use Ctrl+O to open it.",
  },
  {
    question: "Is there a free portable PDF reader for Windows with no install?",
    answer:
      "Yes — EleViewer is a portable .exe that opens PDFs, DOCX, XLSX, Markdown, and more with no installation. Run it directly from a USB drive or a shared lab computer.",
  },
  {
    question: "Can EleViewer run on a school or university computer without admin rights?",
    answer:
      "Yes. EleViewer is a single portable .exe that requires no installation and no admin privileges. Just download and double-click.",
  },
  {
    question: "Does EleViewer work without an internet connection?",
    answer:
      "Fully. EleViewer runs 100% locally on Windows 10 and 11. No internet connection is needed to open, edit, or read documents.",
  },
  {
    question: "What is the keyboard shortcut to search inside a file in EleViewer?",
    answer:
      "Press Ctrl+F to open Find in any open document. Press Ctrl+H to open Find & Replace.",
  },
  {
    question: "How do I open my course folder in EleViewer?",
    answer:
      "Press Alt+V to toggle the Vault sidebar, then point it at your course folder in settings. Every file in the folder becomes one click away.",
  },
  {
    question: "Does EleViewer save my files automatically?",
    answer:
      "Yes. EleViewer has a built-in autosave that runs in the background at a configurable interval. You can adjust the autosave frequency in Settings (Alt+S).",
  },
  {
    question: "Is EleViewer safe to download? Will it trigger antivirus warnings?",
    answer:
      "EleViewer is fully open source (MIT licensed) — you can read every line of code on GitHub. Windows may show a SmartScreen warning because the app is not yet code-signed. Click 'More info' then 'Run anyway' to proceed. The source code is publicly auditable at github.com/karefined-eng/eleviewer.",
  },
]

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <div className="max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          FAQ
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
          Common questions about EleViewer
        </h2>
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
          Everything you need to know about using EleViewer as a free Windows document viewer and study workspace.
        </p>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {faqs.map((faq) => (
          <article key={faq.question} className="rounded-3xl border border-border bg-panel p-6">
            <h3 className="text-sm font-semibold text-foreground">{faq.question}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{faq.answer}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
