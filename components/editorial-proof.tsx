import {
  EDITORIAL_UPDATED_AT,
  EDITORIAL_UPDATED_LABEL,
} from "@/lib/editorial"
import {
  GITHUB_PROFILE_URL,
  GITHUB_URL,
  LATEST_RELEASE_VERSION,
} from "@/lib/links"
import { getReleaseByVersion } from "@/lib/releases-data"

export function EditorialProof() {
  const latestRelease = getReleaseByVersion(LATEST_RELEASE_VERSION)
  if (!latestRelease) {
    throw new Error(`Release data is missing for v${LATEST_RELEASE_VERSION}`)
  }

  return (
    <aside
      aria-label="Author, update date, and product sources"
      className="mt-12 rounded-lg border border-border bg-panel/50 p-5 text-sm leading-6 text-muted-foreground"
    >
      <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
        <span>
          By{" "}
          <a
            href={GITHUB_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-foreground underline underline-offset-4 hover:text-accent"
          >
            Karefined
          </a>
          , EleViewer maintainer
        </span>
        <time dateTime={EDITORIAL_UPDATED_AT}>
          Updated {EDITORIAL_UPDATED_LABEL}
        </time>
      </div>
      <p className="mt-3">
        EleViewer is a portable app for Windows 10 and 11. It opens PDF, DOCX,
        XLSX, PPTX, Markdown, CSV, HTML, and TXT files. The portable download is
        about 135 MB. These facts describe the desktop app; this website uses
        separate analytics.
      </p>
      <p className="mt-3">
        Sources:{" "}
        <a
          href={`${GITHUB_URL}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          GitHub project and source
        </a>
        {" · "}
        <a
          href="/docs"
          className="underline underline-offset-4 hover:text-foreground"
        >
          product documentation
        </a>
        {" · "}
        <a
          href={`${GITHUB_URL}/releases/tag/v${latestRelease.version}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          v{latestRelease.version} release ({latestRelease.date})
        </a>
        {" · "}
        <a
          href="/privacy/local-document-viewer"
          className="underline underline-offset-4 hover:text-foreground"
        >
          desktop privacy details
        </a>
      </p>
    </aside>
  )
}
