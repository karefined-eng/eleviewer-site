export interface Alternative {
  slug: string;
  title: string;
  description: string;
}

export const alternativesData: Alternative[] = [
  { slug: "adobe-reader", title: "Adobe Reader Alternative for Windows", description: "A lightweight, portable alternative to Adobe Reader that opens PDFs alongside DOCX, XLSX, and PPTX files. No installer required." },
  { slug: "freefileviewer", title: "FreeFileViewer Alternative for Windows", description: "A modern, open-source alternative to FreeFileViewer with a unified study workspace, dark mode, and built-in PDF text-to-speech." },
  { slug: "microsoft-office-viewer", title: "Microsoft Office Viewer Alternative | EleViewer", description: "Open DOCX, XLSX, and PPTX files with a free portable alternative to the discontinued Microsoft Office viewers." },
  { slug: "sumatra-pdf", title: "EleViewer vs Sumatra PDF — Free Document Viewer Alternative", description: "Comparing EleViewer and Sumatra PDF for Windows. See which portable PDF and document reader is right for your study workflow." },
];
