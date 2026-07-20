# EleViewer Website

This is the marketing and landing site for [EleViewer](https://github.com/kwadw/eleviewer). It is built with Next.js, React, and Tailwind CSS.

## Getting Started

First, install the dependencies:

```bash
npm install
# or
pnpm install
# or
yarn install
```

Then, run the development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment on Netlify

1. Commit this repository to GitHub.
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **Add new site** > **Import an existing project**.
4. Select GitHub and authorize.
5. Select the `eleviewer-site` repository.
6. Under **Build settings**:
   - **Build command**: `npm run build` (or `pnpm build`)
   - **Publish directory**: `.next` (Netlify will auto-detect Next.js and handle this automatically).
7. Click **Deploy site**.
