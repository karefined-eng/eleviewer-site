import React from "react"

export function TumblingBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Tumble bar 1 (Left) */}
      <svg
        className="tumble-bar tumble-fast absolute left-[15%]"
        width="14" height="40"
        viewBox="0 0 14 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="14" height="40" rx="4" fill="var(--color-accent)" opacity="0.1" />
      </svg>
      
      {/* Tumble bar 2 (Center-Right) */}
      <svg
        className="tumble-bar tumble-slow absolute left-[75%]"
        width="20" height="60"
        viewBox="0 0 20 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="60" rx="6" fill="var(--color-muted-foreground)" opacity="0.05" />
      </svg>

      {/* Tumble bar 3 (Far Right) */}
      <svg
        className="tumble-bar tumble-medium absolute left-[85%]"
        width="10" height="30"
        viewBox="0 0 10 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="10" height="30" rx="3" fill="var(--color-accent)" opacity="0.08" />
      </svg>
      
      {/* Tumble bar 4 (Center-Left) */}
      <svg
        className="tumble-bar tumble-reverse absolute left-[30%]"
        width="16" height="45"
        viewBox="0 0 16 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="16" height="45" rx="5" fill="var(--color-muted-foreground)" opacity="0.06" />
      </svg>
    </div>
  )
}
