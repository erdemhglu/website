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
    return <div className="h-8 w-16 rounded-md border border-gray-300 bg-white" />
  }

  return (
    <div className="inline-flex items-center rounded-md border border-gray-300 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-900">
      <button
        type="button"
        onClick={() => setLanguage("de")}
        className={`px-2.5 py-1 text-xs font-medium transition-colors ${
          language === "de"
            ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
        }`}
        aria-pressed={language === "de"}
        aria-label="Deutsch"
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 text-xs font-medium transition-colors ${
          language === "en"
            ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
            : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
        }`}
        aria-pressed={language === "en"}
        aria-label="English"
      >
        EN
      </button>
    </div>
  )
}
