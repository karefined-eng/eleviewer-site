#!/usr/bin/env node
import { toAllPlatforms } from "../lib/platform-adapters"
import { submissionKit } from "../lib/submission-kit"
import { writeFileSync, mkdirSync, existsSync } from "fs"
import { dirname, resolve } from "path"
import { fileURLToPath } from "url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT_DIR = resolve(__dirname, "../submissions")

function ensureDir(dir: string) {
  if (!existsSync(dir)) mkdirSync(dir, { recursive: true })
}

function main() {
  ensureDir(OUT_DIR)

  const platforms = toAllPlatforms()

  for (const [key, data] of Object.entries(platforms)) {
    const outPath = resolve(OUT_DIR, `${key}.json`)
    writeFileSync(outPath, JSON.stringify(data, null, 2))
    console.log(`✓ Generated ${outPath}`)
  }

  // Also generate a human-readable markdown summary
  const md = `# EleViewer Submission Kit

Generated from single source of truth: \`lib/submission-kit.ts\`

## Product Summary
- **Name**: ${submissionKit.product.name}
- **Version**: ${submissionKit.product.version}
- **Size**: ${submissionKit.product.size}
- **SHA256**: ${submissionKit.product.sha256}
- **License**: ${submissionKit.product.license}
- **Website**: ${submissionKit.product.website}
- **Download**: ${submissionKit.product.download}
- **GitHub**: ${submissionKit.product.github}

## Platforms (${Object.keys(platforms).length})
${Object.keys(platforms).map(k => `- ${k}`).join("\n")}

## Key Features
${toMarkdownBullets(submissionKit.features)}

## Target Audience
${toMarkdownBullets(submissionKit.targetAudience)}

## Use Cases
${toMarkdownBullets(submissionKit.useCases)}

## Comparisons
${Object.entries(submissionKit.comparisons).map(([k, v]) => `### ${k}\n${v}`).join("\n\n")}

## Screenshots
${submissionKit.screenshots.map(s => `- ${s.caption}: ${s.url}`).join("\n")}

---
*Generated: ${new Date().toISOString()}*
`

  writeFileSync(resolve(OUT_DIR, "README.md"), md)
  console.log(`✓ Generated ${resolve(OUT_DIR, "README.md")}`)
}

function toMarkdownBullets(items: string[]): string {
  return items.map(i => `- ${i}`).join("\n")
}

main()