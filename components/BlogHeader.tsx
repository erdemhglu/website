"use client"

import Link from "next/link"
import { Rss } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageToggle } from "@/components/LanguageToggle"
import { useLanguage } from "@/components/LanguageProvider"

const copy = {
  de: {
    posts: "Beitraege",
    site: "erdem.hacisalihoglu.eu",
    rssLabel: "RSS-Feed",
  },
  en: {
    posts: "Posts",
    site: "erdem.hacisalihoglu.eu",
    rssLabel: "RSS feed",
  },
}

type BlogHeaderProps = {
  showRss?: boolean
}

export default function BlogHeader({ showRss = false }: BlogHeaderProps) {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <header className="border-b border-gray-200 dark:border-gray-800 py-4 md:py-6">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          <Link
            href="/blog"
            className="text-lg md:text-xl font-medium hover:text-gray-600 dark:hover:text-gray-300 transition-colors font-mono"
          >
            Erdem Hacısalihoğlu
          </Link>
          <div className="flex items-center space-x-2 md:space-x-4">
            <nav className="flex items-center space-x-4 md:space-x-8 text-xs md:text-sm font-mono">
              <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {text.posts}
              </Link>
              <Link href="/" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                {text.site}
              </Link>
              {showRss && (
                <Link href="/rss.xml" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors" aria-label={text.rssLabel}>
                  <Rss className="w-4 h-4" />
                </Link>
              )}
            </nav>
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
