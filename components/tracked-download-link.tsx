"use client"

import type { ReactNode } from "react"
import { track } from "@vercel/analytics/react"

interface TrackedDownloadLinkProps {
  href: string
  eventName: string
  className: string
  children: ReactNode
}

export function TrackedDownloadLink({
  href,
  eventName,
  className,
  children,
}: TrackedDownloadLinkProps) {
  return (
    <a
      href={href}
      onClick={() => track(eventName, { location: "download_page" })}
      className={className}
    >
      {children}
    </a>
  )
}
