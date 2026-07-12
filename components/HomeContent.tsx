"use client"

import Link from "next/link"
import { Radio } from "lucide-react"
import HomeSections from "@/components/HomeSections"
import SocialLinks from "@/components/SocialLinks"
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
    greeting: "Hallo, ich bin Erdem!",
    roles: { radio: "Funkamateur", developer: "Softwareentwickler" },
    about: "Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.",
    aboutLink: "Über mich →",
  },
  en: {
    greeting: "Hey, I'm Erdem!",
    roles: { radio: "Amateur radio operator", developer: "Software developer" },
    about: "A computer science undergraduate with a strong interest in amateur radio, PCB design, web development, and systems programming.",
    aboutLink: "About Me →",
  },
} satisfies Record<Language, { greeting: string; roles: { radio: string; developer: string }; about: string; aboutLink: string }>

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
    <div className="min-h-[100dvh] overflow-x-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 md:px-16 py-12 md:py-16">

        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="flex flex-col-reverse md:flex-row md:items-start md:justify-between gap-8 mb-12">
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-4xl md:text-5xl text-neutral-900 dark:text-neutral-100 mb-4">
              {t.greeting}
            </h1>

            <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-sans max-w-xl mb-4">
              {t.about}
            </p>

            <Link
              href="/about"
              className="inline-flex text-sm text-neutral-900 dark:text-neutral-100 underline underline-offset-2 hover:text-neutral-500 dark:hover:text-neutral-400 transition-colors font-sans mb-6"
            >
              {t.aboutLink}
            </Link>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-amber-200 dark:border-amber-900 bg-amber-50 dark:bg-amber-950 text-xs text-amber-700 dark:text-amber-300 font-sans tracking-wide">
                <Radio className="w-3 h-3" />
                {t.roles.radio} · DJ1EH
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-sky-200 dark:border-sky-900 bg-sky-50 dark:bg-sky-950 text-xs text-sky-700 dark:text-sky-300 font-sans tracking-wide">
                {t.roles.developer}
              </span>
            </div>

            <SocialLinks />
          </div>

          <img
            src="/erdem.webp"
            alt="Erdem Hacısalihoğlu"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover shrink-0"
          />
        </section>

        {/* ── SECTIONS ─────────────────────────────────────── */}
        <main className="w-full">
          <HomeSections posts={posts} repos={githubRepos} groups={projectGroups} />
        </main>
      </div>
    </div>
  )
}
