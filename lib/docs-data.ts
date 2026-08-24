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
    title: "Start studying",
    description: "Open your first file, try Read Aloud, and set up a local course folder.",
    topics: [
      { slug: "overview", title: "Your first study session" },
      { slug: "vault-explorer", title: "Course folders & file search" },
    ],
  },
  {
    slug: "workstations",
    title: "Read, write, and organize",
    description: "Open readings and notes, listen aloud, save your place, and keep common course formats together.",
    topics: [
      { slug: "pdf-and-tts", title: "Read PDFs & listen aloud" },
      { slug: "markdown-editor", title: "Markdown & Plain Text Editor" },
      { slug: "csv-table", title: "CSV Table Editor & Viewer" },
      { slug: "office-viewers", title: "Office Docs (DOCX, XLSX, PPTX)" },
      { slug: "html-and-web", title: "HTML Live Editor & Web Panel" },
    ],
  },
  {
    slug: "shortcuts",
    title: "Shortcuts for later",
    description: "Learn the few shortcuts that make opening, finding, and returning to study files faster.",
    topics: [
      { slug: "master-index", title: "Shortcut reference" },
    ],
  },
  {
    slug: "security-and-data",
    title: "Files and privacy",
    description: "Understand where EleViewer stores settings and drafts, how recovery works, and why your documents stay local.",
    topics: [
      { slug: "atomic-writes", title: "Atomic Writes & Auto-Save" },
      { slug: "local-storage", title: "Local Storage & Zero Telemetry" },
    ],
  },
  {
    slug: "troubleshooting",
    title: "When something needs fixing",
    description: "Solve Read Aloud, browser-panel, and document issues, or send feedback to the developer.",
    topics: [
      { slug: "faq-and-support", title: "FAQ & Developer Support" },
    ],
  },
];

export const DOCS_TOPICS: DocTopic[] = [
  {
    slug: "overview",
    title: "Start here: your first study session",
    category: "Getting Started",
    categorySlug: "getting-started",
    eyebrow: "Beginner Guide",
    description: "Download EleViewer, open your first course file, try Read Aloud, and set up a local course folder.",
    sections: [
      {
        id: "core-philosophy",
        title: "Open a file and start studying",
        paragraphs: [
          "EleViewer is a portable Windows study workspace for PDFs, Word documents, PowerPoint slides, spreadsheets, Markdown, CSV, HTML, and plain-text notes.",
          "Download the portable .exe, open a course file with Ctrl+O, and keep reading, listening, and taking notes in one window. Your documents stay on your computer, and no account is required."
        ],
        notice: {
          type: "note",
          label: "Zero Installation Required",
          message: "EleViewer distributes as a single ~212 MB portable Windows executable (.exe). No administrative privileges or Windows installers are required to run the application."
        }
      },
      {
        id: "system-requirements",
        title: "What you need",
        paragraphs: [
          "EleViewer is built for Windows student laptops and shared computers. It runs as a portable application, so you can try it without installing a traditional Windows package."
        ],
        table: {
          headers: ["Specification", "Requirement / Detail"],
          rows: [
            ["Operating System", "Windows 10 / Windows 11 (64-bit)"],
            ["Executable Size", "~212 MB Standalone Portable Binary"],
            ["Memory Footprint", "< 150 MB RAM during normal operation"],
            ["Network Requirement", "100% Offline / No internet required"],
            ["License", "GNU General Public License v3.0 (GPLv3)"]
          ]
        }
      },
      {
        id: "first-actions",
        title: "Three useful first actions",
        paragraphs: [
          "Press F9 while a PDF is open to show the Read Aloud controls. Select a passage first if you want EleViewer to read only that section.",
          "Press Alt + V to show the Vault sidebar, then add a course folder in Settings. Press Ctrl + Q later to find files without searching through folders."
        ]
      }
    ]
  },
  {
    slug: "vault-explorer",
    title: "Course folders & file search",
    category: "Getting Started",
    categorySlug: "getting-started",
    eyebrow: "Stay Organized",
    description: "Keep your course files together, search them quickly, and return to the same study session later.",
    sections: [
      {
        id: "vault-configuration",
        title: "Add a course folder",
        paragraphs: [
          "A vault is simply a local folder containing your readings, assignments, and notes. You can add more than one folder and switch between them when you change courses.",
          "Press Alt + V to show the sidebar, open Settings with Alt + S, and add your course folder under the vault settings."
        ],
        notice: {
          type: "tip",
          label: "Multi-Vault Switching",
          message: "Use the dropdown selector at the top of the Vault Explorer sidebar to switch active project directories without restarting the application."
        }
      },
      {
        id: "fts5-indexing",
        title: "Find a file when you need it",
        paragraphs: [
          "After you add a vault, EleViewer indexes supported local files in the background. The index is stored locally with your application data.",
          "Press Ctrl + Q to search recent and pinned files, or use the Vault Search tools when you want to search across your course folders."
        ]
      }
    ]
  },
  {
    slug: "pdf-and-tts",
    title: "Read PDFs and listen aloud",
    category: "Document Readers & Viewers",
    categorySlug: "workstations",
    eyebrow: "Reading Tools",
    description: "Open a PDF, save your place, and use Windows Read Aloud when you want to study hands-free.",
    sections: [
      {
        id: "pdf-navigation",
        title: "Keep your place in a long reading",
        paragraphs: [
          "Use continuous scrolling, fit-to-page or fit-to-width controls, and the Arrow, Page Up, and Page Down keys to move through papers and lecture slides. Add a bookmark when you want to return to a page later."
        ]
      },
      {
        id: "universal-tts",
        title: "Use Read Aloud",

        paragraphs: [
          "Press F9 or click the Speaker icon to show the Read Aloud controls in a supported document.",
          "Select a passage before pressing F9 to read only that passage. With no selection, EleViewer reads from the current document position.",
          "Use the reading-rate control to make the voice easier to follow while you walk, commute, or rest your eyes."
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
    category: "Document Readers & Viewers",
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
    title: "CSV Table Editor & Viewer",
    category: "Document Readers & Viewers",
    categorySlug: "workstations",
    eyebrow: "Data Analysis",
    description: "Dual Table Grid View vs. Raw Text View, interactive cell editing, and delimiter overrides.",
    sections: [
      {
        id: "dual-view-grid",
        title: "Table Grid View ⇄ Raw Text View",
        paragraphs: [
          "The CSV editor and viewer gives you complete control over tabular datasets, experimental logs, and data spreadsheets by providing two synchronized interfaces:",
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
    category: "Document Readers & Viewers",
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
    category: "Document Readers & Viewers",
    categorySlug: "workstations",
    eyebrow: "Web Research",
    description: "Split-screen HTML syntax authoring, 1-click browser migration, persistent URLs, and link interception.",
    sections: [
      {
        id: "html-live-editor",
        title: "HTML Live Authoring Tool",
        paragraphs: [
          "When opening local .html or .htm files, EleViewer launches a split-screen live HTML development environment. Author HTML syntax on the left pane and observe debounced real-time visual rendering on the right pane.",
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
          "To maintain a distraction-free offline study environment, EleViewer intercepts hyperlink clicks across all document viewers.",
          "When you click a web URL or local file link inside a PDF, Markdown note, or Word document, EleViewer automatically routes and opens the target inside a new internal workspace tab or Web Panel instead of launching external system browsers."
        ]
      }
    ]
  },
  {
    slug: "master-index",
    title: "Shortcut reference",
    category: "Shortcuts for later",
    categorySlug: "shortcuts",
    eyebrow: "Shortcuts to learn later",
    description: "A complete reference for opening, finding, reading, and organizing files faster.",
    sections: [
      {
        id: "navigation-shortcuts",
        title: "File Navigation & Vault Commands",
        table: {
          headers: ["Shortcut", "Action", "What it does"],
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
          headers: ["Shortcut", "Action", "What it does"],
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
          headers: ["Shortcut", "Action", "What it does"],
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
          headers: ["Shortcut", "Action", "What it does"],
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
    category: "Files and privacy",
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
    category: "Files and privacy",
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
