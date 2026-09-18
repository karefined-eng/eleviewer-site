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
    description: "Open your first file, try the reader voice, and set up your study folders.",
    topics: [
      { slug: "overview", title: "Your first study sesh" },
      { slug: "vault-explorer", title: "Course folders & fast file search" },
    ],
  },
  {
    slug: "workstations",
    title: "Read, write, and organize",
    description: "Open your readings, take notes, and keep all your course stuff together without the headache.",
    topics: [
      { slug: "pdf-and-tts", title: "PDF Read Aloud and bookmarks" },
      { slug: "markdown-editor", title: "Markdown notes editor" },
      { slug: "csv-table", title: "Spreadsheets without the headache" },
      { slug: "office-viewers", title: "Open Word and PowerPoint without Office" },
      { slug: "html-and-web", title: "Side-by-side web browsing" },
    ],
  },
  {
    slug: "shortcuts",
    title: "Shortcuts for later",
    description: "The cheat codes to opening, finding, and moving through your study files faster.",
    topics: [
      { slug: "master-index", title: "Cheat codes (Keyboard shortcuts)" },
    ],
  },
  {
    slug: "security-and-data",
    title: "Files and privacy",
    description: "Understand how we save your stuff so you never lose an essay, and why your documents stay completely private.",
    topics: [
      { slug: "atomic-writes", title: "Auto-save & crash protection" },
      { slug: "local-storage", title: "Local storage and file privacy" },
    ],
  },
  {
    slug: "troubleshooting",
    title: "When things glitch",
    description: "How to fix the reader voice, sort out bugs, or send feedback straight to the developer.",
    topics: [
      { slug: "faq-and-support", title: "FAQ and troubleshooting help" },
    ],
  },
];

export const DOCS_TOPICS: DocTopic[] = [
  {
    slug: "overview",
    title: "Start here: your first study sesh",
    category: "Getting Started",
    categorySlug: "getting-started",
    eyebrow: "Beginner Guide",
    description: "Download the app, drop in your first course file, test out the voice reader, and set up your study folder.",
    sections: [
      {
        id: "core-philosophy",
        title: "Just open a file and vibe",
        paragraphs: [
          "EleViewer is basically your all-in-one study hub for Windows. It handles PDFs, Word docs, PowerPoints, spreadsheets, and regular text notes—all in one place.",
          "Literally just download it, press Ctrl+O to open your syllabus, and start reading or taking notes. Your files stay on your laptop, and you don't even need to make an account. Total win."
        ],
        notice: {
          type: "note",
          label: "Zero Install Required",
          message: "You literally don't have to install anything. It's just one file you download and double-click to run. Perfect for school computers where they block you from installing apps."
        }
      },
      {
        id: "system-requirements",
        title: "Vibe check: what you need",
        paragraphs: [
          "EleViewer is built for Windows student laptops. Since it doesn't need to be installed, you can just run it off a flash drive if you want."
        ],
        table: {
          headers: ["What it is", "The details"],
          rows: [
            ["Works on", "Windows 10 and Windows 11"],
            ["File size", "Super small (~135 MB)"],
            ["Memory", "Barely uses any RAM so your laptop won't sound like an airplane"],
            ["Internet", "100% offline. Study at a cafe with no Wi-Fi, no problem."],
            ["Cost", "Free forever"]
          ]
        }
      },
      {
        id: "first-actions",
        title: "Three things to try right now",
        paragraphs: [
          "1. Press F9 when you have a PDF open to make it read the text to you. (Highlight a paragraph first if you only want it to read that part).",
          "2. Press Alt+V to open the sidebar, then add your main school folder in Settings.",
          "3. Press Ctrl+Q anytime to instantly search through your files without clicking through five different folders."
        ]
      }
    ]
  },
  {
    slug: "vault-explorer",
    title: "Course folders & fast file search",
    category: "Getting Started",
    categorySlug: "getting-started",
    eyebrow: "Stay Organized",
    description: "Keep your classes organized, search through them super fast, and pick up right where you left off.",
    sections: [
      {
        id: "vault-configuration",
        title: "Pin your course folder",
        paragraphs: [
          "Think of a 'vault' as just the folder on your laptop where you dump all your school stuff. You can add a different folder for each class and swap between them.",
          "Press Alt+V to pop open the sidebar, hit Alt+S for Settings, and link your folder. Boom, everything is right there."
        ],
        notice: {
          type: "tip",
          label: "Switching Classes",
          message: "Use the dropdown at the top of the sidebar to instantly swap between your different class folders. No loading screens."
        }
      },
      {
        id: "fts5-indexing",
        title: "Find any file, no cap",
        paragraphs: [
          "Once you add your folder, EleViewer memorizes where everything is in the background.",
          "Just hit Ctrl+Q to pull up the search bar, type a few letters of the file you want, and hit Enter. It literally saves you from digging through folders."
        ]
      }
    ]
  },
  {
    slug: "pdf-and-tts",
    title: "PDF Read Aloud and bookmarks",
    category: "Document Readers & Viewers",
    categorySlug: "workstations",
    eyebrow: "Reading Tools",
    description: "Open a PDF, save your spot, and make your laptop read the textbook to you while you chill.",
    sections: [
      {
        id: "pdf-navigation",
        title: "Never lose your spot",
        paragraphs: [
          "Scroll through your giant textbook PDFs smoothly. You can zoom in to fit the page, and if you need to stop, just drop a bookmark so you don't lose your mind trying to find page 42 later."
        ]
      },
      {
        id: "universal-tts",
        title: "Storytime (Read Aloud)",
        paragraphs: [
          "Press F9 or click the little Speaker icon when you're looking at a document.",
          "Highlight a paragraph and press F9 to only read that specific part. If you don't highlight anything, it just starts reading from where you're looking.",
          "You can adjust the speed too—speed it up if you're cramming, or slow it down to actually absorb the information."
        ],
        notice: {
          type: "important",
          label: "No voice?",
          message: "If it's totally silent, make sure Windows actually has an English voice installed. Go to Windows Settings -> Time & Language -> Speech and check your voices."
        }
      },
      {
        id: "persistent-bookmarks",
        title: "Drop a pin (`Ctrl + D`)",
        paragraphs: [
          "Reading a 400-page textbook is an L. Losing your page is a bigger L. Press Ctrl+D anywhere to drop a bookmark.",
          "It saves your exact page and scroll position. Just open the Bookmarks Panel (Ctrl+Alt+B) tomorrow and click it to jump right back. Period."
        ]
      }
    ]
  },
  {
    slug: "markdown-editor",
    title: "Markdown notes editor",
    category: "Document Readers & Viewers",
    categorySlug: "workstations",
    eyebrow: "Authoring Environment",
    description: "Clean split-screen note taking, instant previews, and safe file handling.",
    sections: [
      {
        id: "split-screen-editing",
        title: "The split-screen aesthetic",
        paragraphs: [
          "When you take notes, you get this super clean dual-screen setup. Type your raw text on the left, and watch it instantly format itself into beautiful, organized notes on the right.",
          "It supports tables, checklists, bold text, and code blocks perfectly."
        ]
      },
      {
        id: "interactive-edit-modes",
        title: "Edit by clicking",
        paragraphs: [
          "You don't even have to look at the raw text if you don't want to:",
          "1. Double-click the formatted preview to enter a clean, distraction-free typing mode.",
          "2. Triple-click to see all the formatting symbols if you need to fix a bullet point."
        ]
      },
      {
        id: "xss-sanitization",
        title: "Safe from sketchy files",
        paragraphs: [
          "If you download some random study guide from the internet, don't stress. The app automatically strips out any sneaky viruses or sketchy hidden scripts before it even shows you the file. Stay toxic-free."
        ]
      }
    ]
  },
  {
    slug: "csv-table",
    title: "Spreadsheets without the headache",
    category: "Document Readers & Viewers",
    categorySlug: "workstations",
    eyebrow: "Data Analysis",
    description: "Look at CSV data as a clean table or raw text, and edit it instantly.",
    sections: [
      {
        id: "dual-view-grid",
        title: "Table view vs Raw view",
        paragraphs: [
          "Spreadsheets can be messy. We give you two ways to look at them:",
          "1. Table View: Looks like a normal, clean spreadsheet where you can see your rows and columns nicely.",
          "2. Raw Text View: Just the raw text if you need to copy-paste a huge chunk of data.",
          "Whatever you change in one view instantly updates the other."
        ],
        notice: {
          type: "tip",
          label: "It doesn't break your formatting",
          message: "If your professor gave you a spreadsheet with weird quotes or line breaks, we keep it exactly how it was when you save it."
        }
      },
      {
        id: "cell-and-structure-editing",
        title: "Easy editing",
        paragraphs: [
          "In the Table view, just double-click any box to change the text inside it.",
          "Right-click on the top headers to easily add new columns, delete rows, or shift things around."
        ]
      }
    ]
  },
  {
    slug: "office-viewers",
    title: "Opening Word & PowerPoint (No Office needed)",
    category: "Document Readers & Viewers",
    categorySlug: "workstations",
    eyebrow: "Native Inspection",
    description: "Open Word docs, Excel sheets, and PowerPoints completely free.",
    sections: [
      {
        id: "native-office-parsing",
        title: "Read Microsoft files for free",
        paragraphs: [
          "Don't have a Microsoft Office subscription? Who cares. EleViewer opens your school's Word documents, Excel sheets, and PowerPoints directly.",
          "It's super lightweight, meaning it opens them instantly even if your laptop is struggling."
        ]
      },
      {
        id: "supported-office-formats",
        title: "What it can open",
        table: {
          headers: ["File type", "Extension", "What you can do"],
          rows: [
            ["Word", ".docx", "Read the text, view tables, and use the read-aloud voice."],
            ["Excel", ".xlsx", "Swap between tabs, read rows, and search for data."],
            ["PowerPoint", ".pptx", "Look through slides one by one and read the bullet points."]
          ]
        }
      }
    ]
  },
  {
    slug: "html-and-web",
    title: "Side-by-side web browsing",
    category: "Document Readers & Viewers",
    categorySlug: "workstations",
    eyebrow: "Web Research",
    description: "Browse the internet right next to your notes without getting distracted.",
    sections: [
      {
        id: "obsidian-web-panel",
        title: "The Web Panel (`Ctrl + T`)",
        paragraphs: [
          "Press Ctrl+T to pop open a mini web browser right next to your study notes. You don't have to constantly Alt+Tab back and forth between your essay and Wikipedia.",
          "It remembers what page you were on if you close the app, and you can set your default homepage in Settings (Alt+S) to your school's portal."
        ]
      },
      {
        id: "hyperlink-interception",
        title: "Keeps you focused",
        paragraphs: [
          "To stop you from getting distracted by opening regular Chrome and ending up on YouTube, clicking a link in your notes opens it safely inside the app's side-by-side web panel instead."
        ]
      }
    ]
  },
  {
    slug: "master-index",
    title: "Cheat codes (Keyboard shortcuts)",
    category: "Shortcuts for later",
    categorySlug: "shortcuts",
    eyebrow: "Shortcuts to learn later",
    description: "The ultimate cheat sheet for moving faster and studying better.",
    sections: [
      {
        id: "navigation-shortcuts",
        title: "Finding files",
        table: {
          headers: ["Shortcut", "Action", "What it does"],
          rows: [
            ["Ctrl + Q", "Quick Search", "Instantly search for any file in your folder."],
            ["Alt + V", "Sidebar", "Hides or shows the folder sidebar on the left."],
            ["Ctrl + N", "New Note", "Make a brand new note right now."],
            ["Ctrl + S", "Save", "Saves your current file manually (though we auto-save anyway)."]
          ]
        }
      },
      {
        id: "tab-shortcuts",
        title: "Managing tabs",
        table: {
          headers: ["Shortcut", "Action", "What it does"],
          rows: [
            ["Ctrl + T", "Open Web", "Opens the side-by-side web browser."],
            ["Ctrl + W", "Close Tab", "Closes whatever you're looking at."],
            ["Ctrl + Shift + T", "Undo Close", "Accidentally closed a tab? Press this to bring it back exactly how it was."],
            ["Ctrl + Alt + B", "Bookmarks", "Opens the bookmarks menu on the right."]
          ]
        }
      },
      {
        id: "reading-shortcuts",
        title: "Reading & Studying",
        table: {
          headers: ["Shortcut", "Action", "What it does"],
          rows: [
            ["F9", "Read Aloud", "Makes the laptop read your reading out loud."],
            ["Ctrl + D", "Bookmark", "Saves your exact spot so you don't lose it."],
            ["Ctrl + F", "Find", "Search for a specific word on the page."]
          ]
        }
      },
      {
        id: "system-shortcuts",
        title: "App controls",
        table: {
          headers: ["Shortcut", "Action", "What it does"],
          rows: [
            ["Alt + E", "Quick Note", "Press this from ANYWHERE on your computer to instantly open a scratchpad to write something down."],
            ["Alt + S", "Settings", "Change your theme, colors, and folders."]
          ]
        }
      }
    ]
  },
  {
    slug: "atomic-writes",
    title: "Auto-save & crash protection",
    category: "Files and privacy",
    categorySlug: "security-and-data",
    eyebrow: "Crash Protection",
    description: "Never lose an essay to a dead laptop battery again.",
    sections: [
      {
        id: "draft-auto-save",
        title: "60-second auto-save (literally a lifesaver)",
        paragraphs: [
          "POV: You've been typing for three hours and your laptop just dies. Huge L. But don't stress!",
          "EleViewer is literally saving your work in the background every 60 seconds without you even noticing. No lag, no freezing. When you boot back up, your notes will be right there waiting for you. No cap."
        ]
      },
      {
        id: "atomic-write-engineering",
        title: "How we prevent corrupted files",
        paragraphs: [
          "Normally, if your computer crashes at the exact millisecond you press 'Save', the file gets corrupted into zero bytes and you lose everything.",
          "We use a super safe saving trick: we write your changes to a secret temporary file first. Once it's 100% safely written, we swap it with the real file. Your original file is totally safe until the new save is completely finished."
        ],
        notice: {
          type: "important",
          label: "Zero corruption",
          message: "Your files are safe. Period."
        }
      }
    ]
  },
  {
    slug: "local-storage",
    title: "Privacy check: Your files stay yours",
    category: "Files and privacy",
    categorySlug: "security-and-data",
    eyebrow: "Privacy Architecture",
    description: "Why you never have to worry about us looking at your notes.",
    sections: [
      {
        id: "appdata-directory-structure",
        title: "Where is my stuff?",
        paragraphs: [
          "Everything stays on your laptop. We don't upload your notes to the cloud, we don't lock your files in some proprietary format, and we don't hold your data hostage.",
          "All your settings and bookmarks just stay in a hidden folder on your Windows account."
        ]
      },
      {
        id: "zero-telemetry-guarantee",
        title: "Zero tracking. Seriously.",
        paragraphs: [
          "EleViewer has absolutely zero tracking, zero ads, and zero analytics. It literally doesn't even talk to the internet unless you tell the web browser panel to go to a website.",
          "Even if you click 'Send Feedback' to report a bug, we automatically scrub your computer's username from the log before sending it to us so you stay completely anonymous."
        ]
      }
    ]
  },
  {
    slug: "faq-and-support",
    title: "FAQ & Help (When things glitch)",
    category: "Troubleshooting & Support",
    categorySlug: "troubleshooting",
    eyebrow: "Troubleshooting Reference",
    description: "How to fix the voice reader or complain to the developer.",
    sections: [
      {
        id: "tts-troubleshooting",
        title: "Why is the Read Aloud totally silent?",
        paragraphs: [
          "If F9 isn't doing anything, Windows probably doesn't have a voice installed for it to use.",
          "Go to Windows Settings -> Time & Language -> Speech -> Manage Voices. Make sure an English voice (like Microsoft Zira or David) is installed. Also make sure your laptop isn't muted!"
        ]
      },
      {
        id: "draft-recovery-faq",
        title: "My laptop died! How do I get my essay back?",
        paragraphs: [
          "Just open the app again. If we caught your essay in the 60-second auto-save, a big prompt will pop up asking if you want to recover your unsaved draft. Click yes, and you're good to go."
        ]
      },
      {
        id: "developer-feedback",
        title: "I found a bug. Who do I complain to?",
        paragraphs: [
          "We love feedback. If something is annoying you, click Help -> Submit Feedback at the top of the app.",
          "Type out what's glitching and hit submit. It goes straight to the developer's to-do list."
        ],
        notice: {
          type: "note",
          label: "Open Source",
          message: `The app is completely open source, so you can also report bugs on our GitHub at ${GITHUB_URL}.`
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
