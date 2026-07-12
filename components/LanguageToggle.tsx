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
    return <div className="h-7 w-16 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900" />
  }

  return (
    <div className="inline-flex flex-row items-stretch rounded-lg border border-neutral-200 dark:border-neutral-700 overflow-hidden bg-white dark:bg-neutral-900 font-sans">
      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={`px-3 py-1 text-xs font-medium text-center transition-colors ${
          language === "de"
            ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
            : "text-neutral-500 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800"
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
            ? "bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900"
            : "text-neutral-500 hover:bg-neutral-50 dark:text-neutral-400 dark:hover:bg-neutral-800"
        }`}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
