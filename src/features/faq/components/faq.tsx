"use client"

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "What should I do first after downloading EleViewer?",
    answer:
      "Open EleViewer, press Ctrl+O, and choose a course file. Open a PDF and press F9 to show Read Aloud, or press Alt+V to set up a local course folder. You can start without an account or an internet connection.",
  },
  {
    question: "How do I open a DOCX file without Microsoft Word?",
    answer:
      "Download EleViewer, then drag the Word document onto the app or press Ctrl+O to open it. It is a single portable .exe, so you do not need Microsoft Office, an installation, or a sign-up.",
  },
  {
    question: "How do I open an XLSX spreadsheet without Excel?",
    answer:
      "EleViewer opens Excel spreadsheets (.xlsx) for free. It renders your data in a clean table view with column headers and formatting preserved. No Microsoft Office, no LibreOffice — just download the .exe and open your files.",
  },
  {
    question: "Is there a free PowerPoint viewer for Windows?",
    answer:
      "Yes. Microsoft discontinued its official PowerPoint Viewer, but EleViewer opens .pptx presentations for free on Windows 10 and 11. Slides display with text, images, and formatting in a clean slide-by-slide view with text-to-speech support.",
  },
  {
    question: "Is there a free PDF reader with text to speech for Windows?",
    answer:
      "Yes. Open a PDF, select a passage if you want to hear only that section, and press F9 to show the Read Aloud controls. EleViewer uses Windows voices, so supported voices can work offline.",
  },
  {
    question: "What is the best free alternative to Microsoft Word Viewer?",
    answer:
      "EleViewer replaces the discontinued Microsoft Word Viewer, Excel Viewer, and PowerPoint Viewer in one portable app. It opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT — no install required.",
  },
  {
    question: "Can I browse the web inside EleViewer?",
    answer:
      "Yes. Press Ctrl+T to open the built-in web browser panel and browse side-by-side with your documents. Tabs and URLs persist between sessions.",
  },
  {
    question: "Is EleViewer truly free and open source?",
    answer:
      "Yes. EleViewer is free of charge, GPLv3 licensed, runs as a single portable .exe, and requires no account or installation.",
  },
  {
    question: "What file types can EleViewer open?",
    answer:
      "EleViewer opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT files.",
  },
  {
    question: "Does EleViewer support PDF text-to-speech?",
    answer:
      "Yes, on Windows 10 and 11 only. The built-in PDF reader uses the Windows speech engine to read documents aloud so you can study hands-free. macOS and Linux support is planned for a future release.",
  },
  {
    question: "Can I use EleViewer offline?",
    answer:
      "Yes. EleViewer runs fully locally on Windows 10 and 11 without an internet connection.",
  },
  {
    question: "Is there a free portable PDF reader for Windows with no install?",
    answer:
      "Yes — EleViewer is a portable .exe that opens PDFs, DOCX, XLSX, PPTX, Markdown, and more with no installation. Run it directly from a USB drive or a shared lab computer.",
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
      "Press Alt+V to show the Vault sidebar, open Settings with Alt+S, and add your course folder. EleViewer keeps supported local files one click away and lets you switch between folders when you change courses.",
  },
  {
    question: "Does EleViewer save my files automatically?",
    answer:
      "Yes. EleViewer has a built-in autosave that runs in the background at a configurable interval. You can adjust the autosave frequency in Settings (Alt+S).",
  },
  {
    question: "Is EleViewer safe to download? Will it trigger antivirus warnings?",
    answer:
      "EleViewer's application code is open source (GPLv3 licensed) — you can read every line of its code on GitHub. Windows may show a SmartScreen warning because the app is not yet code-signed. Click 'More info' then 'Run anyway' to proceed. The source code is publicly auditable at github.com/karefined-eng/eleviewer.",
  },
  {
    question: "Is EleViewer a good alternative to Sumatra PDF?",
    answer:
      "Both are free of charge and run as portable executables that don't require installation. The key difference: Sumatra only opens PDFs and ebooks, while EleViewer also opens DOCX, XLSX, PPTX, CSV, HTML, and Markdown — plus it has text-to-speech, a file vault, find & replace, and a built-in web browser.",
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
          Start using EleViewer with confidence
        </h2>
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
          The short answers to the questions that come up before your first study session.
        </p>
      </div>
      <Accordion.Root type="single" collapsible className="mt-10 grid gap-4 sm:grid-cols-2">
        {faqs.map((faq, i) => (
          <Accordion.Item key={faq.question} value={`item-${i}`} className="rounded-3xl border border-border bg-panel p-2">
            <Accordion.Header className="flex">
              <Accordion.Trigger className="group flex flex-1 items-center justify-between p-4 text-left text-sm font-semibold text-foreground hover:text-accent transition-colors">
                {faq.question}
                <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Accordion.Trigger>
            </Accordion.Header>
            <Accordion.Content className="overflow-hidden text-sm leading-relaxed text-muted-foreground data-[state=closed]:hidden">
              <div className="px-4 pb-4 pt-1">{faq.answer}</div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </section>
  )
}
