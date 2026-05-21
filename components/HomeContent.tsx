"use client"

import { Mail, Radio } from "lucide-react"
import { SiGithub, SiSignal } from "@icons-pack/react-simple-icons"
import { ThemeToggle } from "@/components/ThemeToggle"
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
    roles: {
      radio: "Radioamateur",
      developer: "Softwareentwickler",
    },
    about: "Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.",
  },
  en: {
    roles: {
      radio: "Ham radio operator",
      developer: "Software developer",
    },
    about: "Computer science undergraduate with a strong interest in ham radio, PCB design, and web and systems programming.",
  },
} satisfies Record<Language, {
  roles: { radio: string; developer: string }
  about: string
}>

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

  const currentCopy = copy[language]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white font-mono transition-colors">
      <div className="fixed top-6 right-6 z-10 flex items-center gap-2">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-4xl w-full text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white tracking-tight">
              Erdem Hacisalihoglu
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-2 text-lg text-gray-500 dark:text-gray-400 font-light">
              <span>{currentCopy.roles.radio}</span>
              <span className="inline-flex items-center justify-center gap-2 px-3 py-1 border border-gray-200 dark:border-gray-800 rounded-md text-xs text-gray-600 dark:text-gray-400">
                <Radio className="h-3.5 w-3.5" aria-hidden="true" />
                <span>DL/TA2EDH</span>
              </span>
              <span>&amp; {currentCopy.roles.developer}</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light max-w-xl mx-auto">
              {currentCopy.about}
            </p>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/erdemhglu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              aria-label="GitHub"
            >
              <SiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/erdem-hacisalihoglu/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.99h5V24H0V8.99zM8.5 8.99h4.79v2.04h.07c.67-1.27 2.31-2.61 4.76-2.61 5.09 0 6.03 3.35 6.03 7.7V24h-5V16.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.97V24h-5V8.99z" />
              </svg>
            </a>
            <a
              href="https://signal.me/#u/erdemhglu.01"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              aria-label="Signal"
            >
              <SiSignal size={24} />
            </a>
            <a
              href="mailto:erdem@hacisalihoglu.de"
              className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          <HomeSections posts={posts} repos={githubRepos} groups={projectGroups} />
        </div>
      </div>
    </div>
  )
}
