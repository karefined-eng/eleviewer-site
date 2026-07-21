import { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "EleViewer — Free Windows Document Viewer",
    short_name: "EleViewer",
    description:
      "EleViewer is a free open-source portable Windows document viewer that opens DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d0f",
    theme_color: "#131313",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  }
}
