"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Newspaper, Layers, UserRound, Rss } from "lucide-react"
import { SiGithub } from "@icons-pack/react-simple-icons"
import { ThemeToggle } from "@/components/ThemeToggle"
import { LanguageToggle } from "@/components/LanguageToggle"
import { useLanguage } from "@/components/LanguageProvider"

const copy = {
  de: {
    about:
      "Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.",
    blog: "Blog",
    projects: "Projekte",
    aboutNav: "Über mich",
    rss: "RSS-Feed",
    openSource: "Open Source · GPLv3",
    menu: "Menü",
    close: "Schliessen",
  },
  en: {
    about:
      "A computer science undergraduate with a strong interest in amateur radio, PCB design, web development, and systems programming.",
    blog: "Blog",
    projects: "Projects",
    aboutNav: "About Me",
    rss: "RSS feed",
    openSource: "Open Source · GPLv3",
    menu: "Menu",
    close: "Close",
  },
} as const

type SidebarCopy = (typeof copy)[keyof typeof copy]

function navLinkClass(active: boolean) {
  return `flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-sans transition-colors ${
    active
      ? "bg-neutral-100 text-neutral-900 dark:bg-neutral-800 dark:text-neutral-100"
      : "text-neutral-500 hover:bg-neutral-50 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
  }`
}

function SidebarBody({
  text,
  pathname,
  onNavigate,
}: {
  text: SidebarCopy
  pathname: string
  onNavigate?: () => void
}) {
  return (
    <div className="flex flex-col h-full px-5 py-6">
      <Link href="/" onClick={onNavigate} className="flex items-center gap-3 mb-4">
        <img src="/erdem.webp" alt="Erdem Hacısalihoğlu" className="w-9 h-9 rounded-full object-cover" />
        <span className="font-display text-base text-neutral-900 dark:text-neutral-100">
          Erdem Hacısalihoğlu
        </span>
      </Link>

      <div className="flex items-center gap-2 mb-5">
        <ThemeToggle />
        <LanguageToggle />
      </div>

      <p className="text-xs text-neutral-500 dark:text-neutral-400 leading-relaxed font-sans mb-6">
        {text.about}
      </p>

      <div className="h-px bg-neutral-100 dark:bg-neutral-800 mb-4" />

      <nav className="flex flex-col gap-1">
        <Link
          href="/blog"
          onClick={onNavigate}
          className={navLinkClass(pathname === "/blog" || pathname.startsWith("/blog/"))}
        >
          <Newspaper className="w-4 h-4" />
          {text.blog}
        </Link>
        <Link href="/#projects" onClick={onNavigate} className={navLinkClass(false)}>
          <Layers className="w-4 h-4" />
          {text.projects}
        </Link>
        <Link href="/about" onClick={onNavigate} className={navLinkClass(pathname === "/about")}>
          <UserRound className="w-4 h-4" />
          {text.aboutNav}
        </Link>
      </nav>

      <div className="mt-auto flex flex-col">
        <a
          href="https://github.com/erdemhglu/website"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100 transition-colors font-sans"
        >
          <SiGithub size={14} />
          {text.openSource}
        </a>
        <a
          href="/rss.xml"
          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-neutral-400 hover:text-neutral-900 dark:text-neutral-500 dark:hover:text-neutral-100 transition-colors font-sans"
          aria-label={text.rss}
        >
          <Rss className="w-3.5 h-3.5" />
          {text.rss}
        </a>
      </div>
    </div>
  )
}

export default function Sidebar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <>
      {/* Mobile top bar */}
      <div className="md:hidden fixed inset-x-0 top-0 z-40 h-14 flex items-center justify-between px-4 border-b border-neutral-100 dark:border-neutral-800 bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm">
        <Link href="/" className="flex items-center gap-2">
          <img src="/erdem.webp" alt="Erdem Hacısalihoğlu" className="w-7 h-7 rounded-full object-cover" />
          <span className="font-display text-sm text-neutral-900 dark:text-neutral-100">
            Erdem Hacısalihoğlu
          </span>
        </Link>
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
          aria-label={text.menu}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)}>
          <div
            className="w-72 h-full bg-white dark:bg-neutral-950 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end px-4 pt-4">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-300"
                aria-label={text.close}
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <SidebarBody text={text} pathname={pathname} onNavigate={() => setOpen(false)} />
          </div>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:sticky md:top-0 md:h-screen md:w-72 md:shrink-0 border-r border-neutral-100 dark:border-neutral-800 bg-white dark:bg-neutral-950">
        <SidebarBody text={text} pathname={pathname} />
      </aside>
    </>
  )
}
