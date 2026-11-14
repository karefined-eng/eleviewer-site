import { submissionKit } from "./submission-kit"

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, "\"")
    .replace(/'/g, "'")
}

function toMarkdownBullets(items: string[]): string {
  return items.map(i => `- ${i}`).join("\n")
}

function toNumberedList(items: string[]): string {
  return items.map((i, idx) => `${idx + 1}. ${i}`).join("\n")
}

export function toG2() {
  const p = submissionKit.product
  const f = submissionKit.features
  const a = submissionKit.targetAudience
  return {
    platform: "G2",
    url: "https://www.g2.com/products/eleviewer/reviews",
    fields: {
      product_name: p.name,
      tagline: p.tagline,
      description: p.description.long,
      website: p.website,
      pricing_model: "Free",
      categories: "Document Management, Education Software, Productivity Software",
      features: f.join("; "),
      target_market: a.join(", "),
      operating_systems: p.platforms.join(", "),
      license: p.license,
      version: p.version,
      file_size: p.size,
      sha256: p.sha256
    }
  }
}

export function toCapterra() {
  const p = submissionKit.product
  const f = submissionKit.features
  const a = submissionKit.targetAudience
  return {
    platform: "Capterra",
    url: "https://www.capterra.com/p/2718369/EleViewer/",
    fields: {
      product_name: p.name,
      short_description: p.description.short,
      long_description: p.description.long,
      website: p.website,
      pricing: "Free",
      deployment: "On-premise (portable)",
      operating_system: "Windows",
      category: "Document Management Software",
      features: f.join("|"),
      target_audience: a.join("; "),
      license_type: "Open Source (GPLv3)",
      current_version: p.version,
      file_size: p.size
    }
  }
}

export function toAlternativeTo() {
  const p = submissionKit.product
  const f = submissionKit.features
  return {
    platform: "AlternativeTo",
    url: "https://alternativeto.net/software/eleviewer/",
    fields: {
      name: p.name,
      description: p.description.medium,
      website: p.website,
      license: "GPL-3.0",
      platforms: ["Windows"],
      tags: p.tags,
      alternatives: Object.keys(submissionKit.comparisons),
      features: f
    }
  }
}

export function toProductHunt() {
  const p = submissionKit.product
  return {
    platform: "Product Hunt",
    url: "https://www.producthunt.com/products/eleviewer",
    fields: {
      name: p.name,
      tagline: p.tagline,
      description: p.description.medium,
      website: p.website,
      topics: ["Windows", "Productivity", "Education", "Open Source", "Developer Tools"],
      maker: p.author.name,
      maker_url: p.author.url
    }
  }
}

export function toSourceForge() {
  const p = submissionKit.product
  return {
    platform: "SourceForge",
    url: "https://sourceforge.net/projects/eleviewer/",
    fields: {
      name: p.name,
      short_description: p.description.short,
      full_description: p.description.long,
      homepage: p.website,
      download_url: p.download,
      license: "GNU General Public License v3 (GPLv3)",
      operating_system: "Windows 10, Windows 11",
      programming_language: "TypeScript/React (frontend), Rust/Tauri (desktop)",
      categories: ["Document Viewers", "Education", "Office/Business"],
      tags: p.tags.join(", "),
      version: p.version,
      file_size: p.size,
      sha256: p.sha256
    }
  }
}

export function toSoftpedia() {
  const p = submissionKit.product
  const f = submissionKit.features
  return {
    platform: "Softpedia",
    url: "https://www.softpedia.com/get/Office-tools/Document-Viewers/EleViewer.shtml",
    fields: {
      name: p.name,
      version: p.version,
      description: p.description.medium,
      license: "GPLv3",
      file_size: p.size,
      developer: p.author.name,
      developer_url: p.author.url,
      homepage: p.website,
      download_url: p.download,
      os: "Windows 10 64 bit / Windows 11",
      category: "Office Tools > Document Viewers",
      features: f.join("\n"),
      whats_new: "See releases: " + p.releases
    }
  }
}

export function toMajorGeeks() {
  const p = submissionKit.product
  return {
    platform: "MajorGeeks",
    url: "https://www.mgeek.com/files/details/eleviewer/",
    fields: {
      title: `${p.name} v${p.version}`,
      description: p.description.medium,
      author: p.author.name,
      homepage: p.website,
      download: p.download,
      license: "Freeware (GPLv3)",
      file_size: p.size,
      os: "Windows 10 / Windows 11 (64-bit)",
      category: "Document Viewer",
      sha256: p.sha256
    }
  }
}

export function toFileHippo() {
  const p = submissionKit.product
  return {
    platform: "FileHippo",
    url: "https://filehippo.com/download_eleviewer/",
    fields: {
      name: p.name,
      version: p.version,
      description: p.description.short,
      license: "Free (GPLv3)",
      developer: p.author.name,
      file_size: p.size,
      os: "Windows",
      category: "Document Management",
      download_url: p.download,
      sha256: p.sha256
    }
  }
}

export function toFossHub() {
  const p = submissionKit.product
  return {
    platform: "FossHub",
    url: "https://www.fosshub.com/EleViewer.html",
    fields: {
      name: p.name,
      version: p.version,
      description: p.description.medium,
      license: "GPLv3",
      homepage: p.website,
      download_url: p.download,
      file_size: p.size,
      sha256: p.sha256,
      os: "Windows",
      category: "Office / Document Viewer"
    }
  }
}

export function toChocolatey() {
  const p = submissionKit.product
  return {
    platform: "Chocolatey",
    url: "https://community.chocolatey.org/packages/eleviewer",
    nuspec: `<?xml version="1.0" encoding="utf-8"?>
<package xmlns="http://schemas.microsoft.com/packaging/2015/06/nuspec.xsd">
  <metadata>
    <id>eleviewer</id>
    <version>${p.version}</version>
    <title>${p.name}</title>
    <authors>${p.author.name}</authors>
    <owners>${p.author.name}</owners>
    <description>${escapeHtml(p.description.long)}</description>
    <projectUrl>${p.website}</projectUrl>
    <projectSourceUrl>${p.github}</projectSourceUrl>
    <licenseUrl>https://github.com/karefined-eng/eleviewer/blob/main/LICENSE</licenseUrl>
    <iconUrl>${p.website}/icon.png</iconUrl>
    <tags>${p.tags.join(" ")}</tags>
    <packageTypes>
      <packageType name="Portable" />
    </packageTypes>
  </metadata>
  <files>
    <file src="tools\\EleViewer-${p.version}-portable.exe" target="tools" />
  </files>
</package>`
  }
}

export function toScoop() {
  const p = submissionKit.product
  return {
    platform: "Scoop",
    url: "https://github.com/ScoopInstaller/Extras/blob/master/bucket/eleviewer.json",
    manifest: {
      version: p.version,
      description: p.description.short,
      homepage: p.website,
      license: "GPL-3.0-only",
      architecture: {
        "64bit": {
          url: `${p.github}/releases/download/v${p.version}/EleViewer-${p.version}-portable.exe`,
          hash: p.sha256
        }
      },
      bin: "EleViewer.exe",
      shortcuts: [
        ["EleViewer.exe", p.name]
      ],
      checkver: {
        github: "karefined-eng/eleviewer"
      },
      autoupdate: {
        architecture: {
          "64bit": {
            url: `${p.github}/releases/download/v${p.version}/EleViewer-${p.version}-portable.exe`
          }
        }
      }
    }
  }
}

export function toWinget() {
  const p = submissionKit.product
  return {
    platform: "WinGet (Microsoft Store / Winget)",
    url: "https://github.com/microsoft/winget-pkgs/tree/master/manifests/k/karefined-eng/eleviewer",
    manifest: {
      PackageIdentifier: "karefined-eng.EleViewer",
      PackageVersion: p.version,
      PackageName: p.name,
      Publisher: p.author.name,
      License: "GPL-3.0",
      LicenseUrl: `${p.github}/blob/main/LICENSE`,
      ShortDescription: p.description.short,
      Description: p.description.medium,
      Homepage: p.website,
      Tags: p.tags,
      Installers: [
        {
          Architecture: "x64",
          InstallerType: "portable",
          InstallerUrl: `${p.github}/releases/download/v${p.version}/EleViewer-${p.version}-portable.exe`,
          InstallerSha256: p.sha256
        }
      ]
    }
  }
}

export function toAllPlatforms() {
  return {
    g2: toG2(),
    capterra: toCapterra(),
    alternativeTo: toAlternativeTo(),
    productHunt: toProductHunt(),
    sourceForge: toSourceForge(),
    softpedia: toSoftpedia(),
    majorGeeks: toMajorGeeks(),
    fileHippo: toFileHippo(),
    fosshub: toFossHub(),
    chocolatey: toChocolatey(),
    scoop: toScoop(),
    winget: toWinget()
  }
}