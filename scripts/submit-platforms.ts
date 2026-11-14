import { test, expect } from '@playwright/test'
import * as fs from 'fs'
import * as path from 'path'

const SUBMISSIONS_DIR = path.resolve(__dirname, '../submissions')

interface PlatformConfig {
  name: string
  url: string
  selectors: Record<string, string>
  submitSelector: string
  loginRequired: boolean
}

const PLATFORMS: PlatformConfig[] = [
  {
    name: 'G2',
    url: 'https://www.g2.com/products/new',
    selectors: {
      product_name: 'input[name="product[name]"]',
      tagline: 'input[name="product[tagline]"]',
      description: 'textarea[name="product[description]"]',
      website: 'input[name="product[website]"]',
      categories: 'input[name="product[category_list]"]'
    },
    submitSelector: 'button[type="submit"]',
    loginRequired: true
  },
  {
    name: 'Capterra',
    url: 'https://www.capterra.com/vendors/signup',
    selectors: {
      product_name: 'input[name="product_name"]',
      short_description: 'input[name="short_description"]',
      long_description: 'textarea[name="long_description"]',
      website: 'input[name="website"]'
    },
    submitSelector: 'button[type="submit"]',
    loginRequired: true
  },
  {
    name: 'AlternativeTo',
    url: 'https://alternativeto.net/software/add/',
    selectors: {
      name: 'input[name="name"]',
      description: 'textarea[name="description"]',
      website: 'input[name="website"]',
      license: 'select[name="license"]',
      tags: 'input[name="tags"]'
    },
    submitSelector: 'button[type="submit"]',
    loginRequired: true
  },
  {
    name: 'Product Hunt',
    url: 'https://www.producthunt.com/products/new',
    selectors: {
      name: 'input[name="name"]',
      tagline: 'input[name="tagline"]',
      description: 'textarea[name="description"]',
      website: 'input[name="website"]'
    },
    submitSelector: 'button[type="submit"]',
    loginRequired: true
  },
  {
    name: 'SourceForge',
    url: 'https://sourceforge.net/projects/register/',
    selectors: {
      name: 'input[name="name"]',
      short_description: 'input[name="short_description"]',
      full_description: 'textarea[name="description"]',
      homepage: 'input[name="homepage"]',
      download_url: 'input[name="download_url"]'
    },
    submitSelector: 'button[type="submit"]',
    loginRequired: true
  },
  {
    name: 'Softpedia',
    url: 'https://www.softpedia.com/developers/add-program.php',
    selectors: {
      name: 'input[name="program_name"]',
      version: 'input[name="version"]',
      description: 'textarea[name="description"]',
      license: 'select[name="license"]',
      developer: 'input[name="developer"]',
      homepage: 'input[name="homepage"]',
      download_url: 'input[name="download_url"]'
    },
    submitSelector: 'input[type="submit"]',
    loginRequired: true
  }
]

async function fillForm(page: any, selectors: Record<string, string>, data: Record<string, string>) {
  for (const [field, selector] of Object.entries(selectors)) {
    const value = data[field]
    if (!value) continue

    const element = page.locator(selector)
    await element.waitFor({ state: 'visible', timeout: 5000 })

    const tagName = await element.evaluate((el: HTMLElement) => el.tagName.toLowerCase())
    const type = await element.getAttribute('type')

    if (tagName === 'select') {
      await element.selectOption(value)
    } else if (type === 'checkbox' || type === 'radio') {
      if (value === 'true') await element.check()
    } else {
      await element.fill(value)
    }
    console.log(`  ✓ Filled ${field}`)
  }
}

async function submitToPlatform(platform: PlatformConfig) {
  const filePath = path.join(SUBMISSIONS_DIR, `${platform.name.toLowerCase().replace(/\s+/g, '')}.json`)
  if (!fs.existsSync(filePath)) {
    console.log(`⚠ No submission file for ${platform.name}`)
    return
  }

  const submission = JSON.parse(fs.readFileSync(filePath, 'utf-8'))
  const fields = submission.fields || {}

  const browser = await (await import('playwright')).chromium.launch({ headless: false })
  const context = await browser.newContext()
  const page = await context.newPage()

  console.log(`\n🌐 Opening ${platform.name}...`)
  await page.goto(platform.url, { waitUntil: 'networkidle' })

  if (platform.loginRequired) {
    console.log(`🔐 ${platform.name} requires login. Please log in manually, then press Enter...`)
    await new Promise(resolve => process.stdin.once('data', resolve))
  }

  await fillForm(page, platform.selectors, fields)

  console.log(`📝 Form filled for ${platform.name}. Review and press Enter to submit (or Ctrl+C to skip)...`)
  await new Promise(resolve => process.stdin.once('data', resolve))

  await page.click(platform.submitSelector)
  await page.waitForLoadState('networkidle')
  console.log(`✅ Submitted to ${platform.name}`)

  await browser.close()
}

async function main() {
  console.log('🚀 EleViewer Platform Submission Automation')
  console.log('='.repeat(50))

  for (const platform of PLATFORMS) {
    try {
      await submitToPlatform(platform)
    } catch (err) {
      console.error(`❌ Failed ${platform.name}:`, err)
    }
  }

  console.log('\n✨ All done!')
  process.exit(0)
}

main().catch(console.error)