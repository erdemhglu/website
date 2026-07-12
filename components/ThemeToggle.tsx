"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const { language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button className="w-8 h-8 rounded-md border border-gray-300 bg-white flex items-center justify-center">
        <div className="w-4 h-4" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="w-8 h-8 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 flex items-center justify-center transition-colors"
      aria-label={language === "de" ? "Thema wechseln" : "Toggle theme"}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="h-4 w-4 text-gray-700 dark:text-gray-300" />
      ) : (
        <Moon className="h-4 w-4 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  )
}
