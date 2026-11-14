export const guides = {
  "open-docx-without-word": {
    title: "How to Open DOCX Files Without Microsoft Word",
    description: "Open DOCX files on Windows 10 or 11 without Microsoft Word, an Office subscription, installation, or admin rights.",
  },
  "open-xlsx-without-excel": {
    title: "How to Open XLSX Files Without Microsoft Excel",
    description: "View XLSX spreadsheets on Windows without Microsoft Excel. EleViewer is free, portable, offline, and needs no admin rights.",
  },
  "open-pptx-without-powerpoint": {
    title: "How to Open PPTX Files Without Microsoft PowerPoint",
    description: "View PPTX presentations on Windows without Microsoft PowerPoint. Free, portable, offline, and secure.",
  },
  "pdf-text-to-speech-windows": {
    title: "Free PDF Text-to-Speech Reader for Windows",
    description: "Read PDFs aloud on Windows 10 and 11 with a free offline document reader that uses native Windows speech voices.",
  },
  "portable-document-viewer": {
    title: "Portable Document Viewer for Windows With No Install",
    description: "Use a free portable document viewer on Windows. Download, copy to a USB or folder, and open files without an installer or administrator privileges.",
  },
  "open-pdf-docx-xlsx-without-office": {
    title: "Open PDF, DOCX, and XLSX Files Without Microsoft Office",
    description: "An all-in-one, portable document viewer for Windows that opens PDF, Word, Excel, and PowerPoint files without a Microsoft Office subscription.",
  }
} as const;

export type GuideSlug = keyof typeof guides;