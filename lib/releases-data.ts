/**
 * EleViewer release history data.
 *
 * Each release entry maps to:
 *  - A URL at /updates/[version]  (e.g. /updates/1.3.4)
 *  - A section on the /updates index timeline
 *
 * To add a new release: prepend a new entry to RELEASES (keep newest first).
 * Then update LATEST_RELEASE_VERSION in lib/links.ts.
 */

export interface ReleaseHighlight {
  /** Short label shown as the bullet header */
  title: string
  /** One or two sentences describing the change in plain English */
  body: string
}

export interface Release {
  version: string
  /** ISO date string, e.g. "2026-09-14" */
  date: string
  /** Short tagline used in timeline cards */
  tagline: string
  /** 2–4 top highlights shown on the index timeline and at the top of the release page */
  highlights: ReleaseHighlight[]
  /**
   * Full release note content grouped by area.
   * Each entry is a named section with a list of changes.
   */
  sections: {
    title: string
    emoji: string
    items: string[]
  }[]
}

export const RELEASES: Release[] = [
  {
    version: "1.3.5",
    date: "2026-09-15",
    tagline: "UI polish, splitter improvements, and documentation",
    highlights: [
      {
        title: "Splitter grip icons",
        body: "Added horizontal and vertical splitter grip icons and refined QSplitter styling for better panel resizing visibility.",
      },
      {
        title: "Documentation updates",
        body: "Added a comprehensive README focusing on user workflows, killer features, and repository badges.",
      },
    ],
    sections: [
      {
        title: "UI & Theme",
        emoji: "🎨",
        items: [
          "Added horizontal and vertical splitter grip icons to make resizable areas more obvious.",
          "Updated QSplitter styling to integrate more cleanly with the current theme.",
        ],
      },
      {
        title: "Documentation",
        emoji: "📝",
        items: [
          "Added comprehensive README.md focusing on user workflows and core features.",
          "Added repository badges for downloads, stars, and version status.",
        ],
      },
    ],
  },
  {
    version: "1.3.4",
    date: "2026-09-14",
    tagline: "Web panel overhaul, PPTX rendering upgrades, and UI polish",
    highlights: [
      {
        title: "Modern browser tab layout",
        body: "The Web Panel now places tabs at the very top of the window, matching the layout of Chrome and Edge for a familiar browsing experience.",
      },
      {
        title: "Smarter PowerPoint rendering",
        body: "Bullet indentation levels, large-text headings, and grouped shapes are now correctly extracted and rendered from PPTX files.",
      },
      {
        title: "Better security indicators",
        body: "The HTTPS globe icon has been replaced with a clean padlock, and HTTP pages now show a warning triangle — matching modern browser conventions.",
      },
      {
        title: "Layout and clipping fixes",
        body: "Fixed text clipping at the bottom of list items in Vault Search, Bookmarks, and Downloads dialogs.",
      },
    ],
    sections: [
      {
        title: "Web Panel",
        emoji: "🌐",
        items: [
          "Tabs are now positioned at the top of the panel, above the address bar, following standard browser layout.",
          "HTTPS URLs now show a padlock icon. HTTP URLs show an amber warning triangle instead of a green globe.",
          "Fullscreen mode rebuilt to use direct parent reparenting — eliminates window glitches on multi-monitor setups.",
          "Navigation icon sizes reduced to reclaim screen space for content.",
        ],
      },
      {
        title: "PowerPoint Viewer",
        emoji: "📊",
        items: [
          "Bullet indentation levels (paragraph.level) are now respected — bullets render with correct visual hierarchy.",
          "Text with a font size ≥ 32pt renders as <h2>; ≥ 24pt renders as <h3>, matching the slide's visual intent.",
          "Grouped shapes (MSO_SHAPE_TYPE.GROUP) are now recursed into, recovering previously hidden text and images.",
          "Title detection now uses the official placeholder index (idx == 0) instead of guessing from text order.",
          "WMF/EMF images (common in older files) now show a graceful placeholder instead of being silently dropped.",
          "Image order in the QTextBrowser fallback path is now preserved correctly across all slides.",
        ],
      },
      {
        title: "General Fixes",
        emoji: "🛠️",
        items: [
          "Fixed a NameError crash in the PPTX viewer caused by a misnamed variable (image_uris).",
          "Fixed a KeyError during theme accent color initialization — the app now always loads with the correct colors.",
          "Fixed a test failure where new session windows incorrectly replaced the Welcome Tab.",
          "Fixed text clipping at the bottom of list items in Vault Search, Bookmarks, and Web Downloads panels.",
          "Hardened vault search path handling to prevent symlink traversal edge cases.",
        ],
      },
      {
        title: "Theme & UI",
        emoji: "🎨",
        items: [
          "UI components now use dynamic theme palettes throughout, ensuring consistent rendering in both dark and light mode.",
          "Toolbar styles standardized with the compact_toolbar_stylesheet helper across all viewer panels.",
        ],
      },
    ],
  },
  {
    version: "1.3.3",
    date: "2026-09-10",
    tagline: "Bookmark manager, Omnibar, and a refreshed Welcome screen",
    highlights: [
      {
        title: "Bookmark manager dialog",
        body: "A full bookmark manager dialog and interactive bookmarks bar are now available in the Web Panel.",
      },
      {
        title: "Omnibar on the Welcome screen",
        body: "A new combined search bar on the Welcome widget lets you search vault files and launch URLs in one place.",
      },
      {
        title: "Session restore improvements",
        body: "Recent files and bookmarks are now shown as quick-access columns directly on the Welcome screen.",
      },
      {
        title: "Smaller build size",
        body: "The Nuitka build pipeline now excludes unused standard library modules, reducing the final executable size.",
      },
    ],
    sections: [
      {
        title: "Web Panel",
        emoji: "🌐",
        items: [
          "Added a Bookmark Manager dialog with import and export support for bookmarks and cookies.",
          "Added an interactive bookmarks bar that can be toggled from the navigation menu.",
          "Standardized toolbar button sizes across the application.",
          "Refactored fullscreen web handling for better reliability.",
        ],
      },
      {
        title: "Welcome Screen",
        emoji: "🏠",
        items: [
          "New Omnibar search on the Welcome widget for searching vault files and launching URLs.",
          "Recent files and bookmarks displayed as quick-access columns.",
        ],
      },
      {
        title: "Build & CI",
        emoji: "⚙️",
        items: [
          "Optimized Nuitka build pipeline to exclude unused standard library modules (tkinter, unittest, etc.).",
          "Restored missing .gitmodules and setup.iss to resolve CI/CD build failures.",
        ],
      },
      {
        title: "Fixes",
        emoji: "🛠️",
        items: [
          "Fixed a crash related to the paintEvent drop indicator.",
        ],
      },
    ],
  },
  {
    version: "1.3.1",
    date: "2026-08-27",
    tagline: "Minor fixes and performance improvements",
    highlights: [
      {
        title: "Under-the-hood tweaks",
        body: "Minor bug fixes and stability improvements following the v1.3.0 major layout update.",
      },
    ],
    sections: [
      {
        title: "General",
        emoji: "🛠️",
        items: [
          "Various stability improvements and bug fixes.",
        ],
      },
    ],
  },
  {
    version: "1.3.0",
    date: "2026-08-24",
    tagline: "Beautiful Scrollbars, Modern Tooltips, and Smoother Welcome Screen",
    highlights: [
      {
        title: "Beautiful Scrollbars",
        body: "We've removed the bulky, legacy Windows scrollbars and replaced them with custom, dark-themed scrollbars that match the app's sleek aesthetic.",
      },
      {
        title: "Modern Tooltips",
        body: "Hovering over buttons now reveals soft, dark-themed tooltips instead of the bright yellow Windows 95 style boxes.",
      },
    ],
    sections: [
      {
        title: "A More Polished Experience",
        emoji: "✨",
        items: [
          "Beautiful Scrollbars: Custom dark-themed scrollbars replacing legacy Windows ones.",
          "Modern Tooltips: Soft, dark-themed tooltips instead of bright yellow boxes.",
          "Consistent Branding: Fixed a bug where generic Windows icons would show on some popups.",
          "Smoother Welcome Screen: The dashboard resizes smoothly without element overlap.",
        ],
      },
      {
        title: "Bug Fixes & Stability",
        emoji: "🔧",
        items: [
          "Smarter Search Bar: Fixed an issue where typing a local file path into the search bar would sometimes accidentally trigger a web search.",
          "Under-the-hood: Various stability improvements to make installing and updating the app faster.",
        ],
      },
    ],
  },
  {
    version: "1.2.0",
    date: "2026-07-21",
    tagline: "Web Browser Panel, Find & Replace, and Single-Instance Locking",
    highlights: [
      {
        title: "Web Browser Panel",
        body: "Side-by-side web browsing with persistent sessions and dynamic tab icons.",
      },
      {
        title: "Find & Replace",
        body: "Search and replace text across all text-based document types.",
      },
    ],
    sections: [
      {
        title: "Features",
        emoji: "✨",
        items: [
          "Web Browser Panel (Ctrl+T) for side-by-side web browsing with persistent sessions.",
          "Find & Replace (Ctrl+F / Ctrl+H) across all text-based documents.",
          "Single-Instance Locking — files open in the existing window instead of launching duplicates.",
          "App Branding — new application icon and modernized branding logo.",
          "Autosave — automatic background saving with configurable intervals.",
          "HTML Support — open and edit .html/.htm files.",
        ],
      },
      {
        title: "Improvements",
        emoji: "🔧",
        items: [
          "PDF Viewer refactored to QPdfView for better vector rendering and high-DPI support.",
          "Web Panel upgraded to QWebEngineView with persistent cookies and cache.",
          "Improved error handling across viewers.",
        ],
      },
    ],
  },
  {
    version: "1.0",
    date: "2026-05-31",
    tagline: "First public release of EleViewer",
    highlights: [
      {
        title: "Multi-format support",
        body: "View and edit Word documents (.docx), Excel spreadsheets (.xlsx), Markdown (.md), and plain text.",
      },
      {
        title: "Advanced editing",
        body: "Multi-tab interface, session restore, quick switcher (Ctrl+P), and pinned/recent files.",
      },
    ],
    sections: [
      {
        title: "Multi-format support",
        emoji: "✅",
        items: [
          "Word documents (.docx) — view and edit.",
          "Excel spreadsheets (.xlsx) — view, edit cells, multiple sheets.",
          "Markdown files (.md) — full editing.",
          "Plain text (.txt) — full editing.",
        ],
      },
      {
        title: "Advanced editing features",
        emoji: "✨",
        items: [
          "Multi-tab interface — work with multiple files simultaneously.",
          "Session restore — automatically reopens tabs from your last session.",
          "Quick switcher (Ctrl+P) — fuzzy search and jump to recent/pinned files.",
          "Pinned files — keep frequently used files at the top for quick access.",
        ],
      },
    ],
  },
]

/** Returns a release by its version string, or undefined if not found. */
export function getReleaseByVersion(version: string): Release | undefined {
  return RELEASES.find((r) => r.version === version)
}

/** Returns the latest release (first in the array). */
export function getLatestRelease(): Release {
  return RELEASES[0]
}
