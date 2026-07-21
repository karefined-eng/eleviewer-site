import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "EleViewer — Free Windows Document Viewer & Study Workspace"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#0d0d0f",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, #1a1e29 0%, #0d0d0f 70%)",
          color: "#f2f2f0",
          fontFamily: "system-ui, -apple-system, sans-serif",
          padding: "64px",
          boxSizing: "border-box",
        }}
      >
        {/* Header: Logo & Brand */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          {/* Logo Mark */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#1c1c1f",
              border: "1px solid #333338",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "4px",
            }}
          >
            <div
              style={{
                width: "22px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "#f2f2f0",
              }}
            />
            <div
              style={{
                width: "16px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "#6cb6ff",
                marginLeft: "-6px",
              }}
            />
            <div
              style={{
                width: "22px",
                height: "4px",
                borderRadius: "2px",
                backgroundColor: "#f2f2f0",
              }}
            />
          </div>
          <span
            style={{
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            EleViewer
          </span>
          <span
            style={{
              marginLeft: "12px",
              padding: "4px 12px",
              borderRadius: "999px",
              border: "1px solid rgba(108, 182, 255, 0.3)",
              backgroundColor: "rgba(108, 182, 255, 0.1)",
              color: "#6cb6ff",
              fontSize: "14px",
              fontWeight: 600,
            }}
          >
            Free & Open Source
          </span>
        </div>

        {/* Hero Body */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginTop: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              margin: 0,
              background: "linear-gradient(180deg, #FFFFFF 0%, #A1A1AA 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Free Windows Document Viewer &amp; Study Workspace
          </h1>
          <p
            style={{
              fontSize: "24px",
              lineHeight: 1.4,
              color: "#9ca3af",
              margin: 0,
              maxWidth: "960px",
            }}
          >
            Open DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT in one lightweight app. Built for speed, privacy, and distraction-free studying.
          </p>
        </div>

        {/* Footer Features & Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            paddingTop: "24px",
          }}
        >
          <div style={{ display: "flex", gap: "10px" }}>
            {["PDF Speech", "Find & Replace", "Autosave", "File Vault", "Session Restore"].map(
              (feature) => (
                <div
                  key={feature}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "6px",
                    backgroundColor: "#18181b",
                    border: "1px solid #27272a",
                    color: "#d4d4d8",
                    fontSize: "15px",
                    fontWeight: 500,
                  }}
                >
                  {feature}
                </div>
              )
            )}
          </div>
          <span
            style={{
              fontSize: "18px",
              fontWeight: 600,
              color: "#6cb6ff",
            }}
          >
            eleviewer.vercel.app
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
