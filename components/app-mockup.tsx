"use client"

import { useState } from "react"
import {
  FileText,
  FileSpreadsheet,
  File,
  Folder,
  FolderOpen,
  Bookmark,
  Volume2,
  Search,
  CheckCircle2,
} from "lucide-react"

const tabs = [
  { id: "md", name: "biology-notes.md", icon: FileText, type: "md" },
  { id: "pdf", name: "lecture-04.pdf", icon: File, type: "pdf" },
  { id: "xlsx", name: "lab-data.xlsx", icon: FileSpreadsheet, type: "xlsx" },
  { id: "docx", name: "essay-draft.docx", icon: FileText, type: "docx" },
]

const vaultItems = [
  { id: "md", name: "biology-notes.md", icon: FileText, depth: 1 },
  { id: "pdf", name: "lecture-04.pdf", icon: File, depth: 1 },
  { id: "xlsx", name: "lab-data.xlsx", icon: FileSpreadsheet, depth: 1 },
  { id: "docx", name: "essay-draft.docx", icon: FileText, depth: 1 },
]

export function AppMockup() {
  const [activeTabId, setActiveTabId] = useState("md")

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0]

  return (
    <div
      className="overflow-hidden rounded-xl border border-border bg-[#1e1e1e] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.8)] transition-all duration-300"
      role="region"
      aria-label="Interactive EleViewer App Previewer"
    >
      {/* Title bar */}
      <div className="flex items-center justify-between border-b border-[#333] bg-[#252526] px-4 py-2">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="font-mono text-[11px] text-[#888]">
          EleViewer — {currentTab.name}
        </span>
        <div className="flex items-center gap-3 text-[#888]">
          <Search className="h-3.5 w-3.5 hover:text-white transition-colors cursor-pointer" />
          <Bookmark className="h-3.5 w-3.5 hover:text-white transition-colors cursor-pointer" />
          <Volume2 className="h-3.5 w-3.5 text-accent animate-pulse" />
        </div>
      </div>

      {/* Tab bar */}
      <div className="flex border-b border-[#333] bg-[#252526] overflow-x-auto">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`flex items-center gap-1.5 border-r border-[#333] px-3.5 py-2 font-mono text-[11px] transition-colors cursor-pointer ${
                isActive
                  ? "bg-[#1e1e1e] text-white border-t-2 border-t-accent"
                  : "bg-[#2d2d2d] text-[#999] hover:bg-[#252526] hover:text-white"
              }`}
            >
              <tab.icon className={`h-3.5 w-3.5 ${isActive ? "text-accent" : ""}`} />
              <span className="hidden sm:inline">{tab.name}</span>
              <span className="sm:hidden">{tab.name.split(".").pop()}</span>
            </button>
          )
        })}
      </div>

      <div className="flex min-h-[320px]">
        {/* Vault sidebar */}
        <div className="hidden w-44 shrink-0 border-r border-[#333] bg-[#252526] py-2 md:block select-none">
          <div className="flex items-center gap-1 px-3 pb-2 font-mono text-[10px] uppercase tracking-widest text-[#777]">
            <FolderOpen className="h-3 w-3 text-accent" />
            <span>Vault</span>
          </div>
          <div className="py-1 text-[11px] font-medium text-[#aaa] px-4">
            📁 Semester 2
          </div>
          {vaultItems.map((item) => {
            const isActive = item.id === activeTabId
            return (
              <button
                key={item.id}
                onClick={() => setActiveTabId(item.id)}
                className={`w-full flex items-center gap-2 py-1.5 text-[11px] transition-colors ${
                  isActive ? "bg-[#2d2d2d] text-white font-semibold" : "text-[#999] hover:text-white hover:bg-[#202020]"
                }`}
                style={{ paddingLeft: `${16 + item.depth * 10}px` }}
              >
                <item.icon className={`h-3 w-3 shrink-0 ${isActive ? "text-accent" : ""}`} />
                <span className="truncate">{item.name}</span>
              </button>
            )
          })}
        </div>

        {/* Editor pane */}
        <div className="min-w-0 flex-1 bg-[#1e1e1e] p-5 font-mono text-[12px] leading-relaxed select-text">
          {activeTabId === "md" && (
            <div className="animate-in fade-in duration-200">
              <p className="text-[#6cb6ff] font-bold text-[14px]"># Cell Respiration — Week 4</p>
              <p className="mt-3 text-[#e0e0e0]">
                Glycolysis happens in the <span className="text-white font-semibold bg-[#252526] px-1 py-0.5 rounded">cytoplasm</span> and
                produces 2 ATP net.
              </p>
              <p className="mt-3 text-[#6cb6ff] font-semibold">## Key stages</p>
              <ul className="mt-2 space-y-1 text-[#e0e0e0] list-disc list-inside">
                <li>Glycolysis → pyruvate</li>
                <li>Krebs cycle → NADH, FADH2</li>
                <li>Electron transport chain → <span className="text-accent font-bold">~34 ATP</span></li>
              </ul>
              <div className="mt-4 rounded border-l-2 border-accent bg-[#252526] p-3 text-[#777] italic">
                💡 Exam tip: Know exactly where each stage occurs in the cell.
              </div>
            </div>
          )}

          {activeTabId === "pdf" && (
            <div className="animate-in fade-in duration-200 space-y-3">
              <div className="flex items-center justify-between border-b border-[#333] pb-2 text-[#aaa]">
                <span className="font-sans text-[12px] font-semibold">Lecture 04 - Molecular Biology.pdf</span>
                <span className="text-[10px] bg-[#333] px-2 py-0.5 rounded">Page 12 / 38</span>
              </div>
              <div className="rounded bg-[#2a2a2b] p-4 text-[#ddd] font-sans leading-normal shadow-inner">
                <h4 className="text-[13px] font-bold text-white mb-2">4.2 ATP Synthase Mechanics</h4>
                <p className="text-[11px] text-[#bbb]">
                  The rotary engine mechanism of F1F0 ATP Synthase couples proton translocation across the inner mitochondrial membrane directly to conformational changes in catalytic subunits.
                </p>
              </div>
              <div className="flex items-center gap-2 text-accent text-[11px] bg-[#252526] p-2 rounded border border-[#333]">
                <Volume2 className="h-3.5 w-3.5" />
                <span>Text-To-Speech: Active reading page 12...</span>
              </div>
            </div>
          )}

          {activeTabId === "xlsx" && (
            <div className="animate-in fade-in duration-200 font-sans">
              <div className="text-[12px] font-semibold text-[#aaa] mb-2">Sheet1 — Lab Measurements</div>
              <div className="overflow-x-auto rounded border border-[#333]">
                <table className="w-full text-left text-[11px] text-[#ccc]">
                  <thead className="bg-[#252526] text-[#888] uppercase text-[9px] font-mono">
                    <tr>
                      <th className="px-3 py-1.5 border-b border-r border-[#333]">Sample ID</th>
                      <th className="px-3 py-1.5 border-b border-r border-[#333]">Temp (°C)</th>
                      <th className="px-3 py-1.5 border-b border-r border-[#333]">Rate (mmol/s)</th>
                      <th className="px-3 py-1.5 border-b border-[#333]">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#333] bg-[#1e1e1e]">
                    <tr>
                      <td className="px-3 py-1.5 border-r border-[#333] font-mono">S-101</td>
                      <td className="px-3 py-1.5 border-r border-[#333]">37.5</td>
                      <td className="px-3 py-1.5 border-r border-[#333] text-accent">4.22</td>
                      <td className="px-3 py-1.5 text-emerald-400">Valid</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1.5 border-r border-[#333] font-mono">S-102</td>
                      <td className="px-3 py-1.5 border-r border-[#333]">38.0</td>
                      <td className="px-3 py-1.5 border-r border-[#333] text-accent">5.10</td>
                      <td className="px-3 py-1.5 text-emerald-400">Valid</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-1.5 border-r border-[#333] font-mono">S-103</td>
                      <td className="px-3 py-1.5 border-r border-[#333]">41.2</td>
                      <td className="px-3 py-1.5 border-r border-[#333] text-red-400">1.04</td>
                      <td className="px-3 py-1.5 text-amber-400">Warning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTabId === "docx" && (
            <div className="animate-in fade-in duration-200 font-serif text-[#ddd] leading-relaxed p-2">
              <h3 className="font-sans font-bold text-[14px] text-white border-b border-[#333] pb-1 mb-2">
                Abstract — Final Essay Draft
              </h3>
              <p className="text-[11px] text-[#ccc]">
                This study evaluates portable desktop environments designed for high-density document workflows in academic and research settings...
              </p>
              <div className="mt-3 flex items-center gap-2 text-[10px] text-emerald-400 font-sans">
                <CheckCircle2 className="h-3 w-3" />
                <span>Word Doc format parsed cleanly without formatting loss</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between border-t border-[#333] bg-[#1e1e1e] px-4 py-1.5 font-mono text-[10px] text-[#777]">
        <span>4 tabs open · session active</span>
        <span className="hidden sm:inline">Click any tab above to switch live preview</span>
        <span>{currentTab.type} · UTF-8</span>
      </div>
    </div>
  )
}
