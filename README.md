# EleViewer Website

This is the marketing and landing site for [EleViewer](https://github.com/karefined-eng/eleviewer), a lightweight, portable document editor and study workspace for Windows. 

EleViewer solves a very specific problem for students: juggling 4 separate heavy apps just to read a PDF, write some notes, and view a Word document. It bundles it all into one 16MB portable executable with built-in text-to-speech for PDFs.

## 🔗 Links
- **Live Website**: [eleviewer.vercel.app](https://eleviewer.vercel.app)
- **App Source Code**: [karefined-eng/eleviewer](https://github.com/karefined-eng/eleviewer)
- **Download**: [Latest Release](https://github.com/karefined-eng/eleviewer/releases)

## 📚 What is EleViewer?

### 📁 File Support
Opens & edits **DOCX, XLSX, PDF, MD, TXT and HTML** — all in one workspace.

### 🔊 Reading & Study Tools
- **PDF text-to-speech** — reads lectures/PDFs aloud for hands-free studying.
- **Persistent bookmarks** — never lose your place, even in 400-page textbooks.

### 🗂️ Organization
- **Vault sidebar** — one-click access to course folders.
- **Quick switcher** — fuzzy file search like VSCode.
- **Session restore** — reopens all tabs right where you left off.

### 💻 Specs
- 16 MB, single portable `.exe` — no install needed.
- No account, no telemetry — files stay local.

## 🛠️ Development

Built with Next.js, React, and Tailwind CSS.

### Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Deployment on Netlify / Vercel

1. Commit this repository to GitHub.
2. Log in to [Netlify](https://app.netlify.com/) or Vercel.
3. Import the `eleviewer-site` repository.
4. The platform will auto-detect Next.js and handle the build command (`npm run build`) automatically.
