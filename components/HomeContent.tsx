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
      radio: "Funkamateur",
      developer: "Softwareentwickler",
    },
    about: "Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.",
  },
  en: {
    roles: {
      radio: "Amateur radio operator",
      developer: "Software developer",
    },
    about: "A computer science undergraduate with a strong interest in amateur radio, PCB design, web development, and systems programming.",
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
    <div className="h-screen overflow-y-auto snap-y snap-mandatory scroll-smooth bg-white dark:bg-black text-gray-900 dark:text-white font-mono transition-colors">
      <div className="fixed top-6 right-6 z-10 hidden items-center gap-2 sm:flex">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="fixed top-3 right-3 z-10 flex flex-col items-end gap-2 sm:hidden">
        <LanguageToggle />
        <ThemeToggle />
      </div>

      <div className="flex flex-col">
        <header className="h-screen snap-start flex items-center justify-center p-6">
          <div className="max-w-4xl w-full">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10">
            <div className="flex-shrink-0">
              <img
                src="/erdem.jpg"
                alt="Erdem Hacısalihoğlu"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-gray-200 dark:border-gray-700"
              />
            </div>

            <div className="text-center md:text-left space-y-4">
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 dark:text-white tracking-tight">
                Erdem Hacısalihoğlu
              </h1>

              <div className="text-lg text-gray-500 dark:text-gray-400 font-light mb-2">
                <span className="mr-2">{currentCopy.roles.radio}</span>
                <span className="inline-flex items-center justify-center gap-2 px-2 py-0.5 border border-gray-200 dark:border-gray-800 rounded-md text-xs text-gray-600 dark:text-gray-400 mr-2">
                  <Radio className="h-3.5 w-3.5" aria-hidden="true" />
                  <a href="https://ans.bundesnetzagentur.de/Amateurfunk/Rufzeichen.aspx" target="_blank" rel="noopener noreferrer">DJ1EH</a>
                </span>
                <span>&amp; {currentCopy.roles.developer}</span>
              </div>

              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg font-light max-w-xl md:max-w-none mx-auto md:mx-0">
                {currentCopy.about}
              </p>

              <div className="mt-3 text-sm text-gray-600 dark:text-gray-400 mb-2">
                <span className="font-medium mr-2">Contact</span>
                <a href="mailto:erdem@hacisalihoglu.de" className="underline hover:text-blue-600 dark:hover:text-blue-400">erdem@hacisalihoglu.de</a>
              </div>

              <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
                <a
                  href="https://github.com/erdemhglu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md text-gray-400 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
                >
                  <SiGithub size={20} />
                  <span className="text-sm">GitHub</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/erdem-hacisalihoglu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md text-gray-400 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.99h5V24H0V8.99zM8.5 8.99h4.79v2.04h.07c.67-1.27 2.31-2.61 4.76-2.61 5.09 0 6.03 3.35 6.03 7.7V24h-5V16.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.97V24h-5V8.99z" />
                  </svg>
                  <span className="text-sm">LinkedIn</span>
                </a>

                <a
                  href="https://signal.me/#u/erdemhglu.01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 border border-gray-200 dark:border-gray-800 rounded-md text-gray-400 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors duration-200"
                >
                  <SiSignal size={20} />
                  <span className="text-sm">Signal</span>
                </a>
              </div>

              
              
            </div>
          </div>

          </div>
        </header>

        <main className="w-full px-6 pb-12">
          <div className="max-w-4xl w-full mx-auto">
            <HomeSections posts={posts} repos={githubRepos} groups={projectGroups} />
          </div>
        </main>
      </div>
    </div>
  )
}
