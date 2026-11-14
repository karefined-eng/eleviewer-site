// ==UserScript==
// @name         EleViewer Auto-Fill Submission Forms
// @namespace    https://eleviewer.vercel.app
// @version      1.0
// @description  Auto-fill EleViewer submission data on listing platforms
// @author       karefined-eng
// @match        https://www.g2.com/products/new
// @match        https://www.capterra.com/vendors/signup
// @match        https://alternativeto.net/software/add/
// @match        https://www.producthunt.com/products/new
// @match        https://sourceforge.net/projects/register/
// @match        https://www.softpedia.com/developers/add-program.php
// @match        https://www.mgeek.com/files/submit/
// @match        https://filehippo.com/submit-software/
// @match        https://www.fosshub.com/submit.html
// @grant        GM_setClipboard
// @grant        GM_xmlhttpRequest
// ==/UserScript==

const ELEVIEWER_DATA = {
  name: "EleViewer",
  tagline: "Free portable Windows study workspace — open DOCX, XLSX, PPTX, PDF, MD, CSV, HTML, TXT without Office",
  shortDescription: "EleViewer is a ~135MB portable Windows app that opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT files without Microsoft Office. Includes built-in PDF text-to-speech, vault sidebar, session restore, and zero telemetry.",
  mediumDescription: "EleViewer is a free, open-source portable Windows study workspace. It opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT files in one ~135MB executable — no Microsoft Office, no installer, no admin rights, no account. Built-in PDF text-to-speech uses native Windows voices (SAPI) for hands-free reading. Features include a vault sidebar for course folders, session restore, split-screen web browser, quick switcher (Ctrl+Q), and persistent bookmarks. Zero telemetry, fully offline, GPLv3 licensed.",
  longDescription: "EleViewer solves a specific problem: students and researchers juggle several heavy apps just to read a PDF, write notes, and view a Word document or spreadsheet. It brings those workflows into one ~135MB portable Windows executable with built-in text-to-speech for PDFs.\n\nFile Support: Opens & edits DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT — all in one workspace.\n\nReading & Study Tools:\n- PDF text-to-speech — reads lectures/PDFs aloud for hands-free studying using native Windows SAPI voices (works offline)\n- Persistent bookmarks — never lose your place, even in 400-page textbooks\n- Split-screen web browser — press Ctrl+T to research side-by-side with your documents\n\nOrganization:\n- Vault sidebar — one-click access to course folders\n- Quick switcher — fuzzy file search like VSCode (Ctrl+Q)\n- Session restore — reopens all tabs right where you left off\n\nSpecs:\n- ~135 MB, single portable .exe — no traditional installation needed\n- No account, no telemetry — files stay local\n- Windows 10 & 11 (64-bit)\n- GPLv3 open source\n- SHA256: 0FA547D30B6A88C35D7F35A0EDF36145493734A17317D87DB5506ED20544C393",
  website: "https://eleviewer.vercel.app",
  download: "https://eleviewer.vercel.app/download",
  github: "https://github.com/karefined-eng/eleviewer",
  version: "1.3.6",
  size: "~135 MB",
  sha256: "0FA547D30B6A88C35D7F35A0EDF36145493734A17317D87DB5506ED20544C393",
  license: "GPL-3.0",
  categories: "Document Management, Education Software, Productivity Software",
  features: [
    "Portable single .exe — no installer, no admin rights required",
    "Opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, TXT",
    "PDF text-to-speech with native Windows SAPI voices (offline)",
    "Vault sidebar for organizing course folders",
    "Session restore — reopens tabs and reading positions",
    "Split-screen web browser panel (Ctrl+T)",
    "Quick switcher — fuzzy search recent files (Ctrl+Q)",
    "Persistent bookmarks across sessions",
    "Zero telemetry, fully offline, no account needed",
    "GPLv3 open source — auditable, modifiable, redistributable"
  ],
  tags: ["portable", "offline", "text-to-speech", "student", "no-telemetry", "open-source", "no-admin", "windows", "pdf-reader", "docx-viewer"]
}

const PLATFORM_SELECTORS = {
  "g2.com": {
    product_name: 'input[name="product[name]"]',
    tagline: 'input[name="product[tagline]"]',
    description: 'textarea[name="product[description]"]',
    website: 'input[name="product[website]"]',
    categories: 'input[name="product[category_list]"]'
  },
  "capterra.com": {
    product_name: 'input[name="product_name"]',
    short_description: 'input[name="short_description"]',
    long_description: 'textarea[name="long_description"]',
    website: 'input[name="website"]'
  },
  "alternativeto.net": {
    name: 'input[name="name"]',
    description: 'textarea[name="description"]',
    website: 'input[name="website"]',
    license: 'select[name="license"]',
    tags: 'input[name="tags"]'
  },
  "producthunt.com": {
    name: 'input[name="name"]',
    tagline: 'input[name="tagline"]',
    description: 'textarea[name="description"]',
    website: 'input[name="website"]'
  },
  "sourceforge.net": {
    name: 'input[name="name"]',
    short_description: 'input[name="short_description"]',
    full_description: 'textarea[name="description"]',
    homepage: 'input[name="homepage"]',
    download_url: 'input[name="download_url"]'
  },
  "softpedia.com": {
    program_name: 'input[name="program_name"]',
    version: 'input[name="version"]',
    description: 'textarea[name="description"]',
    license: 'select[name="license"]',
    developer: 'input[name="developer"]',
    homepage: 'input[name="homepage"]',
    download_url: 'input[name="download_url"]'
  }
}

function getPlatformKey(hostname: string): string | null {
  for (const [key] of Object.entries(PLATFORM_SELECTORS)) {
    if (hostname.includes(key)) return key
  }
  return null
}

function waitForElement(selector: string, timeout = 5000): Promise<HTMLElement | null> {
  return new Promise(resolve => {
    const start = Date.now()
    const check = () => {
      const el = document.querySelector(selector)
      if (el) return resolve(el)
      if (Date.now() - start > timeout) return resolve(null)
      requestAnimationFrame(check)
    }
    check()
  })
}

function fillField(el: HTMLElement, value: string) {
  if (!el) return
  const tag = el.tagName.toLowerCase()
  const type = (el as HTMLInputElement).type

  if (tag === 'select') {
    const select = el as HTMLSelectElement
    for (const opt of select.options) {
      if (opt.value.toLowerCase().includes(value.toLowerCase()) || opt.text.toLowerCase().includes(value.toLowerCase())) {
        select.value = opt.value
        select.dispatchEvent(new Event('change', { bubbles: true }))
        break
      }
    }
  } else if (type === 'checkbox' || type === 'radio') {
    ;(el as HTMLInputElement).checked = value === 'true' || value === true
    el.dispatchEvent(new Event('change', { bubbles: true }))
  } else {
    ;(el as HTMLInputElement).value = value
    el.dispatchEvent(new Event('input', { bubbles: true }))
    el.dispatchEvent(new Event('change', { bubbles: true }))
  }
}

async function autoFill() {
  const platformKey = getPlatformKey(window.location.hostname)
  if (!platformKey) {
    console.log('[EleViewer] No selector config for this domain')
    return
  }

  const selectors = PLATFORM_SELECTORS[platformKey as keyof typeof PLATFORM_SELECTORS]
  const fieldMap: Record<string, string> = {
    product_name: ELEVIEWER_DATA.name,
    name: ELEVIEWER_DATA.name,
    program_name: ELEVIEWER_DATA.name,
    tagline: ELEVIEWER_DATA.tagline,
    short_description: ELEVIEWER_DATA.shortDescription,
    description: ELEVIEWER_DATA.mediumDescription,
    long_description: ELEVIEWER_DATA.longDescription,
    full_description: ELEVIEWER_DATA.longDescription,
    website: ELEVIEWER_DATA.website,
    homepage: ELEVIEWER_DATA.website,
    download: ELEVIEWER_DATA.download,
    download_url: ELEVIEWER_DATA.download,
    github: ELEVIEWER_DATA.github,
    version: ELEVIEWER_DATA.version,
    size: ELEVIEWER_DATA.size,
    sha256: ELEVIEWER_DATA.sha256,
    license: ELEVIEWER_DATA.license,
    categories: ELEVIEWER_DATA.categories,
    tags: ELEVIEWER_DATA.tags.join(", "),
    developer: "karefined-eng"
  }

  console.log('[EleViewer] Auto-filling form for', platformKey)

  for (const [field, selector] of Object.entries(selectors)) {
    const value = fieldMap[field]
    if (!value) continue

    const el = await waitForElement(selector)
    if (el) {
      fillField(el, value)
      console.log(`[EleViewer] ✓ Filled ${field}`)
    } else {
      console.log(`[EleViewer] ⚠ Selector not found: ${selector} (${field})`)
    }
  }

  console.log('[EleViewer] Form auto-filled! Review and submit manually.')
  console.log('[EleViewer] Tip: Press Ctrl+Shift+E to re-run if needed')
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', autoFill)
} else {
  autoFill()
}

document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.shiftKey && e.key === 'E') {
    autoFill()
  }
})