export const submissionKit = {
  product: {
    name: "EleViewer",
    tagline: "Free portable Windows study workspace — open DOCX, XLSX, PPTX, PDF, MD, CSV, HTML, TXT without Office",
    description: {
      short: "EleViewer is a ~135MB portable Windows app that opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT files without Microsoft Office. Includes built-in PDF text-to-speech, vault sidebar, session restore, and zero telemetry.",
      medium: "EleViewer is a free, open-source portable Windows study workspace. It opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT files in one ~135MB executable — no Microsoft Office, no installer, no admin rights, no account. Built-in PDF text-to-speech uses native Windows voices (SAPI) for hands-free reading. Features include a vault sidebar for course folders, session restore, split-screen web browser, quick switcher (Ctrl+Q), and persistent bookmarks. Zero telemetry, fully offline, GPLv3 licensed. Ideal for students, researchers, and anyone on locked-down or shared computers.",
      long: "EleViewer solves a specific problem: students and researchers juggle several heavy apps just to read a PDF, write notes, and view a Word document or spreadsheet. It brings those workflows into one ~135MB portable Windows executable with built-in text-to-speech for PDFs.\n\nFile Support: Opens & edits DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT — all in one workspace.\n\nReading & Study Tools:\n- PDF text-to-speech — reads lectures/PDFs aloud for hands-free studying using native Windows SAPI voices (works offline)\n- Persistent bookmarks — never lose your place, even in 400-page textbooks\n- Split-screen web browser — press Ctrl+T to research side-by-side with your documents\n\nOrganization:\n- Vault sidebar — one-click access to course folders\n- Quick switcher — fuzzy file search like VSCode (Ctrl+Q)\n- Session restore — reopens all tabs right where you left off\n\nSpecs:\n- ~135 MB, single portable .exe — no traditional installation needed\n- No account, no telemetry — files stay local\n- Windows 10 & 11 (64-bit)\n- GPLv3 open source\n- SHA256: 0FA547D30B6A88C35D7F35A0EDF36145493734A17317D87DB5506ED20544C393"
    },
    website: "https://eleviewer.vercel.app",
    download: "https://eleviewer.vercel.app/download",
    github: "https://github.com/karefined-eng/eleviewer",
    releases: "https://github.com/karefined-eng/eleviewer/releases",
    pricing: "Free (GPLv3)",
    platforms: ["Windows 10", "Windows 11"],
    size: "~135 MB",
    sha256: "0FA547D30B6A88C35D7F35A0EDF36145493734A17317D87DB5506ED20544C393",
    version: "1.3.7",
    category: "Document Viewer / Education / Productivity",
    tags: ["portable", "offline", "text-to-speech", "student", "no-telemetry", "open-source", "no-admin", "windows", "pdf-reader", "docx-viewer"],
    license: "GPL-3.0",
    author: {
      name: "karefined-eng",
      url: "https://github.com/karefined-eng"
    }
  },
  screenshots: [
    { url: "https://eleviewer.vercel.app/opengraph-image", caption: "EleViewer — Portable Windows Document Viewer & Study Workspace", primary: true },
    { url: "https://eleviewer.vercel.app/screenshot-main.png", caption: "Main workspace with split-screen document view" },
    { url: "https://eleviewer.vercel.app/screenshot-tts.png", caption: "Read Aloud (F9) with native Windows voices" },
    { url: "https://eleviewer.vercel.app/screenshot-vault.png", caption: "Vault sidebar with course folders" },
    { url: "https://eleviewer.vercel.app/screenshot-split.png", caption: "Split-screen web browser panel (Ctrl+T)" }
  ],
  features: [
    "Portable single .exe — no installer, no admin rights required",
    "Opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, TXT",
    "PDF text-to-speech with native Windows SAPI voices (offline)",
    "Vault sidebar for organizing course folders",
    "Session restore — reopens tabs and reading positions",
    "Split-screen web browser panel (Ctrl+T)",
    "Quick switcher — fuzzy search recent files (Ctrl+Q)",
    "Persistent bookmarks across sessions",
    "Zero telemetry, fully offline, no account needed",
    "GPLv3 open source — auditable, modifiable, redistributable"
  ],
  targetAudience: ["Students (high school, university)", "Researchers", "Educators", "IT administrators in schools/universities", "Professionals on locked-down workstations"],
  useCases: [
    "Offline study on air-gapped machines",
    "School computers without admin rights",
    "Distraction-free reading (no browser tabs)",
    "Universal document viewer replacing multiple apps",
    "Reading PDFs aloud while multitasking",
    "USB-portable workflow across devices"
  ],
  comparisons: {
    "Sumatra PDF": "Sumatra is faster for raw PDF viewing but lacks DOCX/XLSX/PPTX support, text-to-speech, web panel, and markdown editing.",
    "Microsoft Word Viewer": "Discontinued. EleViewer is actively maintained, supports more formats, and includes TTS + vault + session restore.",
    "FreeFileViewer": "Ad-supported, 30-day trial limit. EleViewer is free, open-source, no trial, no ads.",
    "Adobe Reader": "Heavy, cloud-connected, telemetry. EleViewer is ~135MB portable, offline, zero-telemetry."
  },
  pressKit: {
    logo: "https://eleviewer.vercel.app/icon.png",
    logoSvg: "https://eleviewer.vercel.app/icon.svg",
    banner: "https://eleviewer.vercel.app/opengraph-image"
  }
}