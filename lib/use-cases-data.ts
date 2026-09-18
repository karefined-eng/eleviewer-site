export const useCases = {
  students: { 
    title: "Document Viewer and Study Workspace for Students", 
    description: "A free Windows study workspace for students who need PDFs, Word files, slides, spreadsheets, and notes in one offline app.", 
    answer: "EleViewer helps students keep readings, assignments, slides, and notes together. It opens common formats locally, reads PDFs aloud, remembers your place, and needs no Microsoft Office account.", 
    points: [
      "Open PDF, DOCX, XLSX, PPTX, Markdown, CSV, HTML, and TXT files", 
      "Use Read Aloud for hands-free reading", 
      "Add a local course folder with the Vault sidebar", 
      "Study offline with zero telemetry and no account"
    ] 
  },
  "offline-study": { 
    title: "Offline Study App for Windows", 
    description: "Study without Wi-Fi in a local-first Windows app for readings, notes, spreadsheets, and course folders.", 
    answer: "EleViewer is an offline study app for Windows 10 and 11. Once downloaded, it can open supported local files without an internet connection, account, or cloud upload. It keeps your workspace intact even if you lose connectivity.", 
    points: [
      "Keep course material on your own computer", 
      "Search local course folders with the Vault Explorer", 
      "Restore tabs and reading positions automatically via Session Restore", 
      "Use native Windows voices for offline Read Aloud",
      "Persist persistent bookmarks across study sessions"
    ] 
  },
  "school-computers": { 
    title: "Portable Document Viewer for School Computers", 
    description: "Open course files on shared or locked-down Windows computers with a portable app that works on standard user accounts.", 
    answer: "EleViewer is designed for standard Windows user accounts where you cannot install software or run elevated installers. Copy the single portable .exe to an accessible folder (like Documents or a USB drive) and open documents without making system-wide registry changes.", 
    points: [
      "Runs on standard Windows accounts; no administrator privileges required", 
      "No traditional installer or Microsoft account necessary", 
      "Works with common Office and document formats", 
      "Does not bypass administrator, antivirus, or execution-control policies",
      "Open source code is available for institutional review"
    ] 
  },
  "distraction-free-study": {
    title: "Distraction-Free Offline Study Workspace",
    description: "Keep your focus with a local-first study app. EleViewer blocks the noise of the browser so you can concentrate on your readings and notes.",
    answer: "EleViewer is designed to be a distraction-free study environment for Windows. By moving your readings, slides, and notes out of the web browser and into an offline, local app, you remove the temptation of opening new tabs or checking social media.",
    points: [
      "Offline-first design removes the need for an internet connection",
      "Split-screen view keeps readings and notes in one window",
      "Read Aloud feature helps you focus while resting your eyes",
      "No ads, no accounts, and no data tracking"
    ]
  },
  "universal-document-viewer": {
    title: "Universal Document Viewer for Windows",
    description: "Open PDF, DOCX, XLSX, and PPTX files in a single, lightweight Windows application instead of installing bloated software suites.",
    answer: "EleViewer replaces the need for installing multiple heavy applications like Adobe Acrobat and Microsoft Office. It's an all-in-one universal viewer that handles documents, spreadsheets, and presentations instantly.",
    points: [
      "Open multiple file types without switching applications",
      "Significantly smaller footprint than Microsoft Office",
      "Starts up instantly on Windows 10 and 11",
      "Portable design means no installation is required"
    ]
  }
} as const;

export type UseCaseSlug = keyof typeof useCases;
