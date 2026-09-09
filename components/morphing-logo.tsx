import React from "react"

export function MorphingLogo({ size = 128 }: { size?: number }) {
  return (
    <div className="relative inline-flex items-center justify-center rounded-2xl border border-border bg-panel p-8 shadow-sm">
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ overflow: 'visible' }}
      >
        <rect width="32" height="32" rx="7" fill="#1c1c1c" />
        <rect x="0.5" y="0.5" width="31" height="31" rx="6.5" stroke="#2c2c2c" />
        
        {/* Top bar */}
        <rect className="morph-top" x="9" y="9" width="14" height="3" rx="1.5" fill="#f2f2f0" />
        
        {/* Middle bar */}
        <rect className="morph-mid" x="11" y="14.5" width="10" height="3" rx="1.5" fill="#6cb6ff" />
        
        {/* Bottom bar */}
        <rect className="morph-bot" x="9" y="20" width="14" height="3" rx="1.5" fill="#f2f2f0" />
      </svg>
    </div>
  )
}
