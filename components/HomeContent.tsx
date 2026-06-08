"use client"

import { Radio } from "lucide-react"
import { SiGithub, SiSignal, SiWhatsapp } from "@icons-pack/react-simple-icons"
import { LanguageToggle } from "@/components/LanguageToggle"
import HomeSections from "@/components/HomeSections"
import type { GithubRepo, ProjectGroup } from "@/components/PortfolioSection"
import type { Post } from "@/lib/posts"
import { useLanguage, type Language } from "@/components/LanguageProvider"

type LocalizedString = Record<Language, string>

type LocalizedRepo = Omit<GithubRepo, "description"> & {
  description: LocalizedString
}

type LocalizedProjectGroup = Omit<ProjectGroup, "description"> & {
  description?: LocalizedString
}

type HomeContentProps = {
  posts: Post[]
  repos: LocalizedRepo[]
  groups: LocalizedProjectGroup[]
}

const copy = {
  de: {
    roles: { radio: "Funkamateur", developer: "Softwareentwickler" },
    about: "Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.",
    scrollHint: "Projekte & Blog ↓",
  },
  en: {
    roles: { radio: "Amateur radio operator", developer: "Software developer" },
    about: "A computer science undergraduate with a strong interest in amateur radio, PCB design, web development, and systems programming.",
    scrollHint: "Projects & Blog ↓",
  },
} satisfies Record<Language, { roles: { radio: string; developer: string }; about: string; scrollHint: string }>

export default function HomeContent({ posts, repos, groups }: HomeContentProps) {
  const { language } = useLanguage()

  const githubRepos: GithubRepo[] = repos.map((repo) => ({
    ...repo,
    description: repo.description[language],
  }))

  const projectGroups: ProjectGroup[] = groups.map((group) => ({
    ...group,
    description: group.description ? group.description[language] : undefined,
  }))

  const t = copy[language]

  return (
    <div className="min-h-[100dvh] overflow-y-auto overflow-x-hidden bg-white text-neutral-900 font-sans">

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="min-h-[100dvh] flex flex-col px-6 sm:px-12 md:px-20 py-8">

        {/* Top bar */}
        <div className="flex items-center justify-between mb-auto">
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 font-sans select-none">
            erdem.hacisalihoglu.eu
          </span>
          <LanguageToggle />
        </div>

        {/* Main: name + photo */}
        <div className="flex-1 flex items-center py-12 md:py-16">
          <div className="w-full flex flex-col md:flex-row md:items-end md:justify-between gap-10">

            {/* Name block */}
            <div className="flex-1 min-w-0">
              <h1 className="font-display text-[clamp(3.8rem,11vw,9.5rem)] leading-[0.88] tracking-tight">
                <span className="text-neutral-900">Erdem</span><br />
                  Hacısalihoğlu
              </h1>

              <div className="mt-8 flex flex-wrap gap-2">
                {/* Funkamateur — amber/orange */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-200 bg-amber-50 text-xs text-amber-700 font-sans tracking-wide">
                  <Radio className="w-3 h-3" />
                  {t.roles.radio} · DJ1EH
                </span>
                {/* Softwareentwickler — indigo */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200 bg-sky-50 text-xs text-sky-700 font-sans tracking-wide">
                  {t.roles.developer}
                </span>
              </div>
            </div>

            {/* Photo */}
            <div className="flex-shrink-0 self-start md:self-end">
              <img
                src="/erdem.jpg"
                alt="Erdem Hacısalihoğlu"
                className="w-40 h-40 sm:w-52 sm:h-52 md:w-64 md:h-64 rounded-2xl object-cover transition-all duration-500"
              />
            </div>
          </div>
        </div>

        {/* Bottom: bio + links */}
        <div className="border-t border-neutral-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
          <p className="text-base md:text-lg text-neutral-600 leading-relaxed font-sans max-w-lg">
            {t.about}
          </p>

          <div className="flex flex-col gap-5 md:items-end">
            <div className="flex flex-wrap gap-2">

              {/* GitHub */}
              <a
                href="https://github.com/erdemhglu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 text-sm font-sans text-neutral-700 hover:border-neutral-900 hover:bg-neutral-50 transition-all duration-200"
              >
                <span className="text-neutral-900"><SiGithub size={16} /></span>
                GitHub
              </a>

              {/* LinkedIn — LinkedIn blue icon, always visible */}
              <a
                href="https://www.linkedin.com/in/erdem-hacisalihoglu/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 text-sm font-sans text-neutral-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200"
              >
                <span style={{ color: "#0A66C2" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.99h5V24H0V8.99zM8.5 8.99h4.79v2.04h.07c.67-1.27 2.31-2.61 4.76-2.61 5.09 0 6.03 3.35 6.03 7.7V24h-5V16.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.97V24h-5V8.99z" />
                  </svg>
                </span>
                LinkedIn
              </a>

              {/* Signal — Signal blue icon, always visible */}
              <a
                href="https://signal.me/#u/erdemhglu.01"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 text-sm font-sans text-neutral-700 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200"
              >
                <span style={{ color: "#3A76F0" }}><SiSignal size={16} /></span>
                Signal
              </a>

              {/* WhatsApp — green */}
              <a
                href="https://wa.me/4915123570220"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-200 text-sm font-sans text-neutral-700 hover:bg-green-50 hover:border-green-400 transition-all duration-200"
              >
                <span style={{ color: "#25D366" }}><SiWhatsapp size={16} /></span>
                WhatsApp
              </a>

              {/* QRZ.com — ham radio callsign */}
              <a
                href="https://www.qrz.com/db/DJ1EH"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-200 text-sm font-sans text-neutral-700 hover:bg-amber-50 hover:border-amber-400 transition-all duration-200"
              >
                <Radio size={16} className="text-amber-600" />
                QRZ · DJ1EH
              </a>

              {/* Email */}
              <a
                href="mailto:erdem@hacisalihoglu.de"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 text-sm font-sans text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50 transition-all duration-200"
              >
                erdem@hacisalihoglu.de
              </a>
            </div>

            <span className="text-xs text-neutral-300 tracking-widest select-none font-sans">
              {t.scrollHint}
            </span>
          </div>
        </div>
      </section>

      {/* ── SECTIONS ─────────────────────────────────────── */}
      <main className="w-full px-6 sm:px-12 md:px-20 pb-16">
        <div className="max-w-5xl mx-auto">
          <HomeSections posts={posts} repos={githubRepos} groups={projectGroups} />
        </div>
      </main>
    </div>
  )
}
