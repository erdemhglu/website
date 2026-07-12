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

// German is the default for any German-speaking locale (de-DE, de-AT, de-CH, ...); everywhere else defaults to English.
function detectDefaultLanguage(): Language {
  if (typeof navigator === "undefined") return "en"

  const locales = navigator.languages && navigator.languages.length > 0 ? navigator.languages : [navigator.language]

  return locales.some((locale) => locale?.toLowerCase().startsWith("de")) ? "de" : "en"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem(storageKey) : null
    if (stored === "de" || stored === "en") {
      setLanguage(stored)
    } else {
      setLanguage(detectDefaultLanguage())
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
