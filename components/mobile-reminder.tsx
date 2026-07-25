"use client"

import { Share, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export function MobileReminder() {
  const [canShare, setCanShare] = useState(false)

  useEffect(() => {
    // Check if the Web Share API is available on the current device
    if (typeof navigator !== "undefined" && typeof navigator.share === "function") {
      setCanShare(true)
    }
  }, [])

  const handleShare = async () => {
    try {
      await navigator.share({
        title: "EleViewer - Portable Student Document Workspace",
        text: "Download EleViewer (Free Portable Document Workspace) on your laptop later!",
        url: "https://eleviewer.vercel.app/"
      })
    } catch (err) {
      console.log("Share prompt dismissed natively:", err)
    }
  }

  return (
    <div className="mx-auto mt-8 block max-w-sm sm:hidden rounded-xl border border-border bg-panel p-5 text-left shadow-sm">
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
        💡 Desktop App Only
      </div>
      <h3 className="mb-2 text-xl font-semibold text-foreground">
        Browsing on your phone?
      </h3>
      <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
        EleViewer is a lightweight, portable workspace for your PC. Send the link to your laptop now to try it out later.
      </p>

      <div className="flex flex-col gap-3">
        {canShare && (
          <button
            onClick={handleShare}
            className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Share className="h-4 w-4" />
            Push to my Laptop / Devices
          </button>
        )}

        <a
          href="mailto:?subject=⚡️ Download EleViewer on your PC/Laptop&body=Hey! You opened this link while on mobile to download EleViewer later on your computer.%0A%0A📥 Desktop Download Link: https://eleviewer.vercel.app%0A%0A🛸 Core Workspace Features:%0A- 100% Free & Open-Source under GNU GPLv3%0A- Read PDF, Word, Excel, and Markdown side-by-side%0A- Portable .exe (No installation or system admin permissions required)"
          className={`flex h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors ${!canShare
              ? 'bg-primary text-primary-foreground hover:opacity-90'
              : 'border border-border bg-transparent text-foreground hover:bg-panel'
            }`}
        >
          <Mail className="h-4 w-4" />
          Email the Link to Myself
        </a>
      </div>
    </div>
  )
}
