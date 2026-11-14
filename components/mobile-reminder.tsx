"use client"

import { Share, Mail } from "lucide-react"
import { useState, useEffect } from "react"

export function MobileReminder() {
  const [canShare, setCanShare] = useState(false)
  const [isMobileDevice, setIsMobileDevice] = useState(false)

  useEffect(() => {
    // 1. Strict User-Agent detection: only show on actual mobile devices (iPhone, Android, iPad, etc.)
    // This ensures desktop users NEVER see this component, even if they resize their browser window.
    if (typeof navigator !== "undefined") {
      const mobileCheck = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
      setIsMobileDevice(mobileCheck)

      // 2. Check if the Web Share API is available on this mobile device
      if (typeof navigator.share === "function") {
        setCanShare(true)
      }
    }
  }, [])

  // If not browsing on a verified mobile device, render nothing!
  if (!isMobileDevice) {
    return null
  }

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
    <div className="mx-auto mt-8 block max-w-sm rounded-xl border border-border bg-panel p-5 text-left shadow-sm">
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
            Send to my laptop
          </button>
        )}

        <a
          href="mailto:?subject=Download EleViewer on your Windows PC&body=You opened EleViewer on your phone. Download it later on your Windows computer:%0A%0Ahttps://eleviewer.vercel.app/download%0A%0AFree and open source. The per-user installer does not require administrator permissions."
          className={`flex h-11 w-full items-center justify-center gap-2 rounded-lg text-sm font-medium transition-colors ${!canShare
              ? 'bg-primary text-primary-foreground hover:opacity-90'
              : 'border border-border bg-transparent text-foreground hover:bg-panel'
            }`}
        >
          <Mail className="h-4 w-4" />
          Email me the link
        </a>
      </div>
    </div>
  )
}
