const faqs = [
  {
    question: "Is EleViewer truly free and open source?",
    answer:
      "Yes. EleViewer is free to download and use, MIT licensed, portable, and does not require an account or installation.",
  },
  {
    question: "What file types can EleViewer open?",
    answer:
      "EleViewer opens DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT files in one lightweight Windows app.",
  },
  {
    question: "Does EleViewer support PDF text-to-speech?",
    answer:
      "Yes. The built-in PDF reader can read documents aloud so you can study hands-free.",
  },
  {
    question: "Can I use EleViewer offline on Windows?",
    answer:
      "Absolutely. EleViewer runs locally on Windows 10 and 11 and works without an internet connection.",
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
