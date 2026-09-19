"use client"

import { useState, useRef, useEffect } from "react"
import { Globe, File, Search } from "lucide-react"

export function SplitScreenDemo() {
  const [splitPercent, setSplitPercent] = useState(50)
  const [isDragging, setIsDragging] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = e.clientX - rect.left
      let newPercent = (x / rect.width) * 100
      if (newPercent < 20) newPercent = 20
      if (newPercent > 80) newPercent = 80
      setSplitPercent(newPercent)
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseup", handleMouseUp)
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseup", handleMouseUp)
    }
  }, [isDragging])

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <div className="mb-12 max-w-xl mx-auto text-center">
        <p className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
          The Split-Screen Workflow
        </p>
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground">
          Read on the left. Research on the right.
        </h2>
        <p className="mt-4 text-pretty text-[15px] leading-relaxed text-muted-foreground">
          Drag the center handle to see how EleViewer's built-in web browser keeps you focused without needing to switch windows.
        </p>
      </div>

      <div 
        ref={containerRef}
        className="relative flex h-[450px] w-full overflow-hidden rounded-xl border border-border bg-[#1e1e1e] shadow-2xl select-none"
      >
        {/* Left Side (PDF Reader) */}
        <div style={{ width: `${splitPercent}%` }} className="flex flex-col border-r border-[#333] h-full transition-none">
           <div className="flex items-center gap-2 border-b border-[#333] bg-[#252526] px-4 py-2 text-[#aaa]">
             <File className="h-4 w-4" />
             <span className="font-sans text-[12px] font-semibold truncate">Biology_Textbook_Ch4.pdf</span>
           </div>
           <div className="p-6 sm:p-8 h-full bg-[#1e1e1e] overflow-hidden opacity-80">
              <div className="w-3/4 h-6 bg-[#333] rounded mb-6"></div>
              <div className="w-full h-3 bg-[#2a2a2a] rounded mb-3"></div>
              <div className="w-full h-3 bg-[#2a2a2a] rounded mb-3"></div>
              <div className="w-5/6 h-3 bg-[#2a2a2a] rounded mb-8"></div>
              
              <div className="w-1/2 h-4 bg-[#333] rounded mb-4"></div>
              <div className="w-full h-3 bg-[#2a2a2a] rounded mb-3"></div>
              <div className="w-full h-3 bg-[#2a2a2a] rounded mb-3"></div>
              <div className="w-2/3 h-3 bg-[#2a2a2a] rounded mb-3"></div>
           </div>
        </div>

        {/* Drag Handle */}
        <div 
          className="absolute top-0 bottom-0 z-10 flex w-6 -ml-3 cursor-col-resize items-center justify-center group"
          style={{ left: `${splitPercent}%` }}
          onMouseDown={() => setIsDragging(true)}
          onTouchStart={() => setIsDragging(true)}
        >
          <div className={`h-12 w-1.5 rounded-full transition-colors ${isDragging ? 'bg-accent' : 'bg-[#555] group-hover:bg-[#888]'}`}></div>
        </div>

        {/* Right Side (Web Browser) */}
        <div style={{ width: `${100 - splitPercent}%` }} className="flex flex-col h-full bg-[#f8f9fa] transition-none">
           <div className="flex items-center gap-2 border-b border-gray-300 bg-gray-200 px-3 py-2 text-gray-600">
             <div className="flex gap-3 items-center w-full">
               <Globe className="h-4 w-4 shrink-0" />
               <div className="flex-1 bg-white rounded border border-gray-300 px-2 py-1 flex items-center gap-2 text-[11px]">
                  <Search className="h-3 w-3 text-gray-400" />
                  <span className="truncate">wikipedia.org/wiki/Mitochondrion</span>
               </div>
             </div>
           </div>
           <div className="p-6 sm:p-8 h-full bg-white overflow-hidden text-gray-800">
              <div role="heading" aria-level={3} className="text-2xl font-serif border-b border-gray-200 pb-2 mb-4 font-bold">Mitochondrion</div>
              <p className="text-sm leading-relaxed mb-4">
                A mitochondrion is a double-membrane-bound organelle found in most eukaryotic organisms. Mitochondria generate most of the cell's supply of adenosine triphosphate (ATP), used as a source of chemical energy.
              </p>
              <div className="float-right w-1/3 h-24 bg-gray-100 border border-gray-200 ml-4 mb-4 rounded flex items-center justify-center text-xs text-gray-400 text-center p-2 hidden sm:flex">
                Diagram
              </div>
              <p className="text-sm leading-relaxed">
                They are commonly referred to as the "powerhouses of the cell", a phrase coined by Philip Siekevitz in a 1957 article.
              </p>
           </div>
        </div>
      </div>
    </section>
  )
}
