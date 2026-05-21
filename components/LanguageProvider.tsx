"use client"

import { createContext, useContext, useEffect, useMemo, useState } from "react"

type Language = "de" | "en"

type LanguageContextValue = {
  language: Language
  setLanguage: (language: Language) => void
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const storageKey = "site-language"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("de")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null
    if (stored === "de" || stored === "en") {
      setLanguage(stored)
    }
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    window.localStorage.setItem(storageKey, language)
    document.documentElement.lang = language
  }, [language, mounted])

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage(language === "de" ? "en" : "de"),
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider")
  }
  return context
}

export type { Language }
