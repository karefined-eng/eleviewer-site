import { GITHUB_URL, DOWNLOAD_URL, ISSUES_URL } from "./links";

export interface DocSection {
  id: string;
  title: string;
  paragraphs?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  code?: {
    language: string;
    code: string;
  };
  notice?: {
    type: "note" | "tip" | "important" | "warning";
    label: string;
    message: string;
  };
}

export interface DocTopic {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  eyebrow: string;
  sections: DocSection[];
}

export interface DocCategory {
  slug: string;
  title: string;
  description: string;
  topics: { slug: string; title: string }[];
}

export const DOCS_CATEGORIES: DocCategory[] = [
  {
    slug: "getting-started",
    title: "Getting Started",
    description: "Installation, portable execution, and workstation architecture.",
    topics: [
      { slug: "overview", title: "Workstation Architecture & Setup" },
      { slug: "vault-explorer", title: "Vaults & FTS5 Indexing" },
    ],
  },
  {
    slug: "workstations",
    title: "Document Workstations",
    description: "Specialized environments for reading, editing, and analyzing documents.",
    topics: [
      { slug: "pdf-and-tts", title: "PDF Reader & Universal TTS" },
      { slug: "markdown-editor", title: "Markdown & Plain Text Editor" },
      { slug: "csv-table", title: "CSV Table Workstation" },
      { slug: "office-viewers", title: "Office Docs (DOCX, XLSX, PPTX)" },
      { slug: "html-and-web", title: "HTML Live Editor & Web Panel" },
    ],
  },
  {
    slug: "shortcuts",
    title: "Keyboard Reflexes",
    description: "Master hotkeys for frictionless navigation and window control.",
    topics: [
      { slug: "master-index", title: "Master Shortcut & Command Index" },
    ],
  },
  {
    slug: "security-and-data",
    title: "Data Sovereignty & Security",
    description: "Atomic file writing, background draft recovery, and local storage.",
    topics: [
      { slug: "atomic-writes", title: "Atomic Writes & Auto-Save" },
      { slug: "local-storage", title: "Local Storage & Zero Telemetry" },
    ],
  },
  {
    slug: "troubleshooting",
    title: "Troubleshooting & Support",
    description: "Resolving system voices, web engine setup, and developer feedback.",
    topics: [
      { slug: "faq-and-support", title: "FAQ & Developer Support" },
    ],
  },
];

export const DOCS_TOPICS: DocTopic[] = [
  {
    slug: "overview",
    title: "Workstation Architecture & Setup",
    category: "Getting Started",
    categorySlug: "getting-started",
    eyebrow: "Architecture Reference",
    description: "Overview of the EleViewer local-first study workspace, portable execution, and core capabilities.",
    sections: [
      {
        id: "core-philosophy",
        title: "Local-First Document Processing",
        paragraphs: [
          "EleViewer is a lightweight Windows document editor and study workstation supporting DOCX, XLSX, PPTX, MD, TXT, CSV, HTML/HTM, and PDF files within a unified tabbed interface.",
          "Unlike traditional cloud-tethered office suites, EleViewer executes completely offline. All document rendering, full-text indexing, and file modifications occur directly on your local CPU and storage drive without transmitting data to external servers."
        ],
        notice: {
          type: "note",
          label: "Zero Installation Required",
          message: "EleViewer distributes as a single 16 MB portable Windows executable (.exe). No administrative privileges or Windows installers are required to run the workstation."
        }
      },
      {
        id: "system-requirements",
        title: "System Specifications & Requirements",
        paragraphs: [
          "The workstation is engineered for high performance on minimal hardware specifications, ensuring smooth operation on standard student laptops and workstations."
        ],
        table: {
          headers: ["Specification", "Requirement / Detail"],
          rows: [
            ["Operating System", "Windows 10 / Windows 11 (64-bit)"],
            ["Executable Size", "~16 MB Standalone Portable Binary"],
            ["Memory Footprint", "< 150 MB RAM during normal operation"],
            ["Network Requirement", "100% Offline / No internet required"],
            ["License", "GNU General Public License v3.0 (GPLv3)"]
          ]
        }
      },
      {
        id: "factory-pattern",
        title: "File Routing & Factory Pattern",
        paragraphs: [
          "Internally, EleViewer implements a factory design pattern for document routing. When you open a file via the Quick Switcher or native OS dialog, file_handler.py inspects the file signature and extension, routing it directly into the appropriate high-performance viewer or editor module."
        ]
      }
    ]
  },
  {
    slug: "vault-explorer",
    title: "Vaults & FTS5 Indexing",
    category: "Getting Started",
    categorySlug: "getting-started",
    eyebrow: "Project Management",
    description: "How to register local study directories and utilize background SQLite FTS5 full-text search.",
    sections: [
      {
        id: "vault-configuration",
        title: "Registering Study Vaults",
        paragraphs: [
          "A Vault in EleViewer is any local folder on your computer containing study materials, coursework, or project documents. You can register multiple vaults and switch between them instantly.",
          "To configure your vaults: Press Alt + V to open the sidebar, click the Settings icon (Alt + S), and navigate to Vault Configuration to add or remove local folder paths."
        ],
        notice: {
          type: "tip",
          label: "Multi-Vault Switching",
          message: "Use the dropdown selector at the top of the Vault Explorer sidebar to switch active project directories without restarting the application."
        }
      },
      {
        id: "fts5-indexing",
        title: "Background SQLite FTS5 Indexer",
        paragraphs: [
          "When you register a vault folder, EleViewer launches an asynchronous off-thread indexer (vault_indexer.py) that scans your document library.",
          "Text contents from Markdown notes, plain text files, and code scripts are ingested into an optimized SQLite FTS5 (Full-Text Search 5) database stored locally in your Windows AppData directory.",
          "This index enables instantaneous sub-second search results when using the Quick Switcher (Ctrl + Q) or Vault Search tools, regardless of how many hundreds of files reside in your folders."
        ]
      }
    ]
  },
  {
    slug: "pdf-and-tts",
    title: "PDF Reader & Universal TTS",
    category: "Document Workstations",
    categorySlug: "workstations",
    eyebrow: "Reading Tools",
    description: "Continuous PDF scrolling, zoom controls, persistent bookmarks, and integrated Read Aloud speech synthesis.",
    sections: [
      {
        id: "pdf-navigation",
        title: "High-Speed PDF Viewing",
        paragraphs: [
          "The PDF workstation is built for reading lengthy academic papers and lecture slides. It features smooth continuous scrolling, fit-to-page / fit-to-width toolbar toggles, and direct keyboard navigation using Arrow keys, PageUp, and PageDown."
        ]
      },
      {
        id: "universal-tts",
        title: "Universal Text-to-Speech (Read Aloud)",
        paragraphs: [
          "EleViewer integrates native Windows speech synthesis across all document formats. Press F9 or click the Speaker icon in the toolbar to activate Read Aloud.",
          "If you highlight a specific text paragraph before pressing F9, the speech engine reads only your selected passage. If no text is selected, it reads continuously from your current document position.",
          "You can adjust speech velocity dynamically using the reading rate slider located directly on the top toolbar."
        ],
        notice: {
          type: "important",
          label: "Windows Speech Engines",
          message: "TTS relies on Windows native speech packages (pyttsx3). If Read Aloud is silent, verify in Windows OS Settings -> Time & Language -> Speech that an English voice package is installed and enabled."
        }
      },
      {
        id: "persistent-bookmarks",
        title: "Persistent Document Bookmarks (`Ctrl + D`)",
        paragraphs: [
          "Never lose your reading position in a 400-page textbook. Press Ctrl + D anywhere in a PDF or text document to drop a persistent bookmark.",
          "Bookmarks record your exact page number, scroll line, and file checksum. Toggle the Bookmarks Panel (Ctrl + Alt + B) to jump back to any bookmarked position instantly across browser sessions."
        ]
      }
    ]
  },
  {
    slug: "markdown-editor",
    title: "Markdown & Plain Text Editor",
    category: "Document Workstations",
    categorySlug: "workstations",
    eyebrow: "Authoring Environment",
    description: "Split-screen Markdown editing, live rendering, interactive edit modes, and XSS sanitization.",
    sections: [
      {
        id: "split-screen-editing",
        title: "Live Rendered Split-Screen Workstation",
        paragraphs: [
          "The Markdown workstation provides a dual-pane editing environment: a syntax-highlighted editor on the left and a debounced, real-time rendered HTML preview on the right.",
          "The rendering engine natively supports GitHub-Flavored Markdown (GFM), including tables, task checklists, blockquotes, code fences, and inline styling."
        ]
      },
      {
        id: "interactive-edit-modes",
        title: "Interactive Preview Edit Modes",
        paragraphs: [
          "You can interact directly with the rendered preview to edit text without manually scrolling through markdown symbols:",
          "1. Double-Click Preview: Enters Plain-Text Edit Mode, temporarily hiding markdown syntax tokens for clean, distraction-free prose editing.",
          "2. Triple-Click Preview: Enters Full Syntax Edit Mode, exposing all underlying formatting tags for precision structural adjustments."
        ]
      },
      {
        id: "xss-sanitization",
        title: "HTML XSS Sanitization Pipeline",
        paragraphs: [
          "To protect against malicious code execution when opening downloaded notes from untrusted sources, all rendered Markdown and HTML previews pass through a strict bleach XSS sanitization pipeline.",
          "Potentially harmful script tags, iframe injections, and unknown event handlers are stripped automatically before rendering."
        ]
      }
    ]
  },
  {
    slug: "csv-table",
    title: "CSV Table Workstation",
    category: "Document Workstations",
    categorySlug: "workstations",
    eyebrow: "Data Analysis",
    description: "Dual Table Grid View vs. Raw Text View, interactive cell editing, and delimiter overrides.",
    sections: [
      {
        id: "dual-view-grid",
        title: "Table Grid View ⇄ Raw Text View",
        paragraphs: [
          "The CSV Workstation gives you complete control over tabular datasets, experimental logs, and data spreadsheets by providing two synchronized interfaces:",
          "1. Table Grid View: An interactive spreadsheet grid allowing visual cell navigation, row sorting, and structured inspection.",
          "2. Raw Text View: A syntax-highlighted raw text editor for direct string manipulation and regex replacements.",
          "Edits performed in either view synchronize instantaneously without data loss or re-indexing delays."
        ],
        notice: {
          type: "tip",
          label: "Non-Destructive Formatting",
          message: "EleViewer preserves custom cell encapsulation, quotes, and non-standard line breaks non-destructively when saving CSV files."
        }
      },
      {
        id: "cell-and-structure-editing",
        title: "Interactive Cell & Structure Editing",
        paragraphs: [
          "In Grid View, double-click any individual cell to modify its value directly.",
          "Right-click on any column header or row index to summon structural controls: insert rows above/below, insert columns left/right, or delete selected rows instantly."
        ]
      },
      {
        id: "delimiter-overrides",
        title: "Custom Delimiter Overrides",
        paragraphs: [
          "Work with datasets exported from different global systems by forcing custom column delimiters via the top toolbar.",
          "Supported delimiter overrides include Comma (,), Tab (\\t), Semicolon (;), and Pipe (|)."
        ]
      }
    ]
  },
  {
    slug: "office-viewers",
    title: "Office Docs (DOCX, XLSX, PPTX)",
    category: "Document Workstations",
    categorySlug: "workstations",
    eyebrow: "Native Inspection",
    description: "Standalone native viewing and inspection for Microsoft Word, Excel, and PowerPoint files without external software.",
    sections: [
      {
        id: "native-office-parsing",
        title: "Standalone Office Parsing",
        paragraphs: [
          "EleViewer natively extracts, parses, and renders Microsoft Office document formats locally without requiring Microsoft Office, Office 365, or LibreOffice installed on your machine.",
          "This lightweight inspection allows students and researchers to review coursework and data spreadsheets instantly on low-resource laptops."
        ]
      },
      {
        id: "supported-office-formats",
        title: "Supported Office Capabilities",
        table: {
          headers: ["Format", "File Extension", "Workstation Capabilities"],
          rows: [
            ["Word Document", ".docx", "Full text rendering, headings hierarchy, table formatting, lists, and read-aloud TTS compatibility."],
            ["Excel Workbook", ".xlsx", "Multi-sheet workbook tab navigation, data row inspection, grid viewing, and rapid text searching."],
            ["PowerPoint Presentation", ".pptx", "Slide-by-slide text inspection, bullet point extraction, and sequential reading flow."]
          ]
        }
      }
    ]
  },
  {
    slug: "html-and-web",
    title: "HTML Live Editor & Web Panel",
    category: "Document Workstations",
    categorySlug: "workstations",
    eyebrow: "Web Research",
    description: "Split-screen HTML syntax authoring, 1-click browser migration, persistent URLs, and link interception.",
    sections: [
      {
        id: "html-live-editor",
        title: "HTML Live Authoring Workstation",
        paragraphs: [
          "When opening local .html or .htm files, EleViewer launches a split-screen web development workstation. Author HTML syntax on the left pane and observe debounced real-time visual rendering on the right pane.",
          "Click the Migrate to Web Panel button in the toolbar to promote a local HTML document into an interactive, full-featured browser tab session."
        ]
      },
      {
        id: "obsidian-web-panel",
        title: "Integrated Web Browser Panel (`Ctrl + T`)",
        paragraphs: [
          "Press Ctrl + T to launch an integrated web browser panel directly alongside your study notes without breaking workflow context.",
          "The Web Panel features URL persistence across application restarts, dedicated back/forward navigation controls, and 1-click bookmarking.",
          "You can configure your default home URL (e.g., Wikipedia, Google Scholar, or your university portal) directly in the Settings Dialog (Alt + S)."
        ]
      },
      {
        id: "hyperlink-interception",
        title: "Global Hyperlink Interception",
        paragraphs: [
          "To maintain a distraction-free Sovereignty Workstation environment, EleViewer intercepts hyperlink clicks across all document viewers.",
          "When you click a web URL or local file link inside a PDF, Markdown note, or Word document, EleViewer automatically routes and opens the target inside a new internal workspace tab or Web Panel instead of launching external system browsers."
        ]
      }
    ]
  },
  {
    slug: "master-index",
    title: "Master Shortcut & Command Index",
    category: "Keyboard Reflexes",
    categorySlug: "shortcuts",
    eyebrow: "Reflex Reference",
    description: "Complete exhaustive tabular reference of all keyboard shortcuts and workstation commands.",
    sections: [
      {
        id: "navigation-shortcuts",
        title: "File Navigation & Vault Commands",
        table: {
          headers: ["Shortcut", "Command Name", "Technical Description"],
          rows: [
            ["Ctrl + Q", "Quick Switcher", "Summons fuzzy search dialog to filter and open vault files instantly."],
            ["Alt + V", "Toggle Vault Sidebar", "Expands or collapses left-hand directory tree for full-screen focus."],
            ["Ctrl + N", "New File Picker", "Creates new Markdown, TXT, CSV, or HTML file in active directory."],
            ["Ctrl + O", "Open External File", "Launches OS file dialog to open documents outside registered vaults."],
            ["Ctrl + S", "Save File", "Executes atomic write to commit active buffer changes to disk."],
            ["Ctrl + Shift + S", "Save As", "Saves current active buffer under a new file path or extension."]
          ]
        }
      },
      {
        id: "tab-shortcuts",
        title: "Tab & Window Management",
        table: {
          headers: ["Shortcut", "Command Name", "Technical Description"],
          rows: [
            ["Ctrl + T", "New Web Tab", "Launches integrated web browser panel in a new workspace tab."],
            ["Ctrl + W", "Close Tab", "Closes active document or web tab and releases buffer memory."],
            ["Ctrl + Shift + T", "Reopen Closed Tab", "Restores most recently closed tab with exact scroll and zoom state."],
            ["Ctrl + Alt + B", "Toggle Bookmarks Panel", "Opens or closes right-hand persistent bookmark manager sidebar."]
          ]
        }
      },
      {
        id: "reading-shortcuts",
        title: "Reading, Search & Study Reflexes",
        table: {
          headers: ["Shortcut", "Command Name", "Technical Description"],
          rows: [
            ["F9", "Universal Read Aloud", "Toggles text-to-speech engine for full document or text selection."],
            ["Ctrl + D", "Bookmark Position", "Drops persistent bookmark at current scroll line or PDF page number."],
            ["Ctrl + F", "Find in Document", "Opens in-page search bar to highlight matching text in active tab."],
            ["Ctrl + H", "Find and Replace", "Opens find and replace bar for batch string substitutions in editors."]
          ]
        }
      },
      {
        id: "system-shortcuts",
        title: "System & Global Utilities",
        table: {
          headers: ["Shortcut", "Command Name", "Technical Description"],
          rows: [
            ["Alt + E", "System-Wide Quick Note", "Global Windows hotkey: Brings EleViewer to front and opens scratchpad from anywhere in OS."],
            ["Alt + S", "Open Settings Dialog", "Opens workspace configuration for themes, vaults, and preferences."],
            ["F1", "Reference Manual", "Opens official built-in technical reference documentation in a new tab."]
          ]
        }
      }
    ]
  },
  {
    slug: "atomic-writes",
    title: "Atomic Writes & Auto-Save",
    category: "Data Sovereignty & Security",
    categorySlug: "security-and-data",
    eyebrow: "Crash Protection",
    description: "Technical engineering behind 60-second background draft saving and atomic zero-byte corruption prevention.",
    sections: [
      {
        id: "draft-auto-save",
        title: "60-Second Off-Thread Draft Auto-Save",
        paragraphs: [
          "To prevent data loss during intensive writing sessions, EleViewer implements an automated draft snapshot engine.",
          "When modifying files in the Markdown, Plain Text, CSV, or HTML workstations, a background QThread worker silently serializes your unsaved buffer to disk every 60 seconds.",
          "Because auto-saving executes entirely on background concurrency threads, the main UI event loop never blocks, ensuring zero typing latency or interface freezing."
        ]
      },
      {
        id: "atomic-write-engineering",
        title: "Atomic Write Corruption Prevention",
        paragraphs: [
          "Standard text editors save files by opening the target path directly and overwriting data stream bytes sequentially. If a laptop battery drains or Windows crashes midway through this operation, the file truncates into a 0-byte corrupted file, destroying hours of coursework.",
          "EleViewer eliminates this vulnerability by enforcing an Atomic Write saving pattern across all file operations:"
        ],
        code: {
          language: "python",
          code: `# Technical representation of EleViewer's atomic write pattern
def atomic_write(target_path: Path, content: str) -> None:
    temp_path = target_path.with_suffix(".tmp_save")
    try:
        # 1. Write entire buffer to a temporary file on the same disk partition
        with open(temp_path, "w", encoding="utf-8") as f:
            f.write(content)
            f.flush()
            os.fsync(f.fileno()) # Force OS kernel to flush physical disk cache
        
        # 2. Execute instantaneous atomic file replacement in single OS clock cycle
        os.replace(temp_path, target_path)
    except Exception as e:
        if temp_path.exists():
            temp_path.unlink()
        raise e`
        },
        notice: {
          type: "important",
          label: "Absolute Data Integrity",
          message: "Because os.replace executes atomically at the filesystem kernel level, your original document remains 100% untouched until the new file write is physically verified on disk."
        }
      }
    ]
  },
  {
    slug: "local-storage",
    title: "Local Storage & Zero Telemetry",
    category: "Data Sovereignty & Security",
    categorySlug: "security-and-data",
    eyebrow: "Privacy Architecture",
    description: "Reference guide to local Windows AppData file structures, symlink guards, and zero-telemetry guarantees.",
    sections: [
      {
        id: "appdata-directory-structure",
        title: "Local Disk Directory Structure",
        paragraphs: [
          "In adherence to data sovereignty principles, EleViewer stores all application state, search indexes, and user preferences locally within your Windows user profile.",
          "No data is ever stored in proprietary cloud formats or hidden system partitions."
        ],
        table: {
          headers: ["File Path (%APPDATA%\\EleViewer\\)", "Data Stored", "Technical Function"],
          rows: [
            ["settings.json", "User Preferences", "Stores active theme, custom accent color, registered vaults, and web home URL."],
            ["session.json", "Session State", "Records open tabs, scroll line coordinates, PDF page numbers, and zoom levels."],
            ["vault_index.db", "SQLite FTS5 Database", "High-speed full-text search index for all documents in registered vaults."],
            ["recent_files.json", "File History", "Tracks recently opened document paths and persistent bookmark coordinates."],
            ["drafts/", "Orphaned Snapshots", "Directory storing 60-second background auto-save buffers for crash recovery."]
          ]
        }
      },
      {
        id: "symlink-traversal-guards",
        title: "Symlink & Path Traversal Guards",
        paragraphs: [
          "When indexing vaults or handling file links, EleViewer enforces strict canonical root validation.",
          "Symlinks and directory shortcuts are resolved and verified against registered workspace boundaries, preventing malicious path traversal attacks from escaping your designated study folders."
        ]
      },
      {
        id: "zero-telemetry-guarantee",
        title: "Absolute Zero Telemetry Guarantee",
        paragraphs: [
          "EleViewer contains zero telemetry SDKs, zero usage tracking scripts, and zero advertising networks. The application makes no background network requests to third-party analytics servers.",
          "When submitting feedback or error logs via the opt-in developer dialog (Help -> Submit Feedback), an automated regex scrubbing algorithm strips all Windows usernames, home directory paths (~), and personal identifiers before transmission."
        ]
      }
    ]
  },
  {
    slug: "faq-and-support",
    title: "FAQ & Developer Support",
    category: "Troubleshooting & Support",
    categorySlug: "troubleshooting",
    eyebrow: "Troubleshooting Reference",
    description: "Actionable resolutions for common system questions, speech engine setup, and developer feedback submission.",
    sections: [
      {
        id: "tts-troubleshooting",
        title: "Why is Universal Read Aloud (`F9`) silent?",
        paragraphs: [
          "EleViewer uses native Windows speech synthesis (pyttsx3) to read documents offline without API charges.",
          "If pressing F9 does not produce audio: Open Windows OS Settings -> Time & Language -> Speech -> Manage Voices. Verify that an English voice package (such as Microsoft David, Zira, or Mark) is installed and selected as default. Verify system audio mute controls and check the reading speed slider on EleViewer's top toolbar."
        ]
      },
      {
        id: "draft-recovery-faq",
        title: "How do I recover text after an unexpected laptop shutdown?",
        paragraphs: [
          "If your laptop power drains while editing an unsaved document, simply re-launch EleViewer.",
          "During startup, session_manager.py inspects %APPDATA%\\EleViewer\\drafts\\ for orphaned auto-save buffers. If detected, EleViewer presents a recovery prompt allowing you to restore your unsaved text directly into active editor tabs."
        ]
      },
      {
        id: "webengine-setup",
        title: "Why does the Web Panel display 'WebEngine Not Available'?",
        paragraphs: [
          "If you are running EleViewer from source script (python main.py) instead of the pre-compiled standalone .exe release, the Web Panel requires the official Qt WebEngine library.",
          "Run the following command in your terminal to install the bindings: pip install PySide6-WebEngine, then restart the application."
        ]
      },
      {
        id: "developer-feedback",
        title: "How do I report bugs or submit feature ideas?",
        paragraphs: [
          "EleViewer evolves directly from student and developer feedback. To submit a bug report or feature request:",
          "1. Click Help -> Submit Feedback in the top workstation menu.",
          "2. Describe the feature or friction point in the dialog.",
          "3. Click Submit. Your message is transmitted securely (with all personal file paths and usernames stripped) directly to the developer's GitHub backlog."
        ],
        notice: {
          type: "note",
          label: "Open Source Repository",
          message: `You can also inspect source code, review releases, or open issues directly on our official GitHub repository at ${GITHUB_URL}.`
        }
      }
    ]
  }
];

export function getDocTopicBySlug(slug: string): DocTopic | undefined {
  return DOCS_TOPICS.find((t) => t.slug === slug);
}

export function getDocCategoryBySlug(slug: string): DocCategory | undefined {
  return DOCS_CATEGORIES.find((c) => c.slug === slug);
}
