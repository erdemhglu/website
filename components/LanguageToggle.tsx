"use client"

import { useEffect, useState } from "react"
import { useLanguage } from "@/components/LanguageProvider"

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="h-7 w-16 rounded-lg border border-neutral-200 bg-white" />
  }

  return (
    <div className="inline-flex flex-row items-stretch rounded-lg border border-neutral-200 overflow-hidden bg-white font-sans">
      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={`px-3 py-1 text-xs font-medium text-center transition-colors ${
          language === "de"
            ? "bg-neutral-900 text-white"
            : "text-neutral-500 hover:bg-neutral-50"
        }`}
        aria-pressed={language === "de"}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-3 py-1 text-xs font-medium text-center transition-colors ${
          language === "en"
            ? "bg-neutral-900 text-white"
            : "text-neutral-500 hover:bg-neutral-50"
        }`}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
