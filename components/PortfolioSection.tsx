"use client"

import { useState } from "react"
import { useLanguage } from "@/components/LanguageProvider"

export type GithubRepo = {
  name: string
  description: string
  href: string
  tags: string[]
  website?: string
}

export type ProjectPhoto = {
  src: string
  alt: string
  title: string
}

export type ProjectGroup = {
  name: string
  photos: ProjectPhoto[]
  website?: string
  description?: string
  closedSource?: boolean
}

type PortfolioSectionProps = {
  repos: GithubRepo[]
  groups: ProjectGroup[]
}

export default function PortfolioSection({ repos, groups }: PortfolioSectionProps) {
  const [activeGroupIndex, setActiveGroupIndex] = useState<number | null>(null)
  const [activePhoto, setActivePhoto] = useState<ProjectPhoto | null>(null)
  const { language } = useLanguage()

  const copy = {
    de: {
      heading: "Portfolio",
      subheading: "GitHub-Repositories und Projektfotos.",
      repoHeading: "GitHub-Repos",
      repoEmpty: "Keine Repositories gefunden.",
      repoNoDescription: "Keine Beschreibung vorhanden.",
      website: "Website besuchen",
      closedSource: "Closed-Source-Projekte",
      emptyGroups: "Lege Bilder in `public/portfolio` ab und trage sie in `projectGroups` ein.",
      noImage: "Kein Bild",
      closedSourceTag: "Geschlossene Quelle",
      close: "Schliessen",
    },
    en: {
      heading: "Portfolio",
      subheading: "GitHub repositories and project photos.",
      repoHeading: "GitHub repos",
      repoEmpty: "No repositories found.",
      repoNoDescription: "No description available.",
      website: "Visit website",
      closedSource: "Closed-source projects",
      emptyGroups: "Add images to `public/portfolio` and list them in `projectGroups`.",
      noImage: "No image",
      closedSourceTag: "Closed source",
      close: "Close",
    },
  } as const

  const text = copy[language]

  return (
    <section className="pt-6">
      <div className="text-left space-y-6">
        <div>
          <h2 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white">{text.heading}</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-light">
            {text.subheading}
          </p>
        </div>

        <div className="space-y-6">
          {/* GitHub Repositories */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 bg-white dark:bg-gray-900/50">
            <h3 className="text-lg font-light mb-4">{text.repoHeading}</h3>
            {repos.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {text.repoEmpty}
              </p>
            ) : (
              <div className="flex items-stretch gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
                {repos.map((repo) => (
                  <article
                    key={repo.href}
                    className="min-w-[320px] max-w-[420px] w-full snap-start flex"
                  >
                    <a
                      href={repo.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full rounded-md border border-gray-200 dark:border-gray-800 p-4 hover:border-gray-300 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <span className="text-base font-medium text-gray-900 dark:text-white">
                          {repo.name}
                        </span>
                        <span className="text-xs text-gray-400">github.com</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
                        {repo.description || text.repoNoDescription}
                      </p>
                      {repo.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3">
                          {repo.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-600 dark:text-gray-400"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </a>
                    {repo.website && (
                      <a
                        href={repo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex text-xs text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        {text.website}
                      </a>
                    )}
                  </article>
                ))}
              </div>
            )}
          </div>

          {/* Project Images */}
          <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-5 bg-white dark:bg-gray-900/50">
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-lg font-light">{text.closedSource}</h3>
            </div>

            {groups.length === 0 ? (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                {text.emptyGroups}
              </p>
            ) : (
              <div className="mt-4">
                <div className="flex items-stretch gap-4 overflow-x-auto pb-2 snap-x snap-mandatory">
                  {groups.map((group, index) => (
                    <article
                      key={group.name}
                      className="min-w-[280px] max-w-[360px] w-full snap-start flex"
                    >
                      <div className="w-full">
                        <button
                          type="button"
                          onClick={() => setActiveGroupIndex(index)}
                          className="block w-full text-left"
                        >
                          <div className="aspect-[16/9] overflow-hidden rounded-md border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                            {group.photos[0] ? (
                              <img
                                src={group.photos[0].src}
                                alt={group.photos[0].alt}
                                className="h-full w-full object-cover"
                                loading="lazy"
                              />
                            ) : (
                              <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                                {text.noImage}
                              </div>
                            )}
                          </div>
                          <div className="mt-2 space-y-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className="text-sm text-gray-700 dark:text-gray-300">
                                {group.name}
                              </span>
                              {group.closedSource && (
                                <span className="text-[10px] text-gray-500 dark:text-gray-400">
                                  {text.closedSourceTag}
                                </span>
                              )}
                            </div>
                            {group.description && (
                              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-3">
                                {group.description}
                              </p>
                            )}
                          </div>
                        </button>
                        {group.website && (
                          <a
                            href={group.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-2 inline-flex text-xs text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {text.website}
                          </a>
                        )}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {activeGroupIndex !== null && groups[activeGroupIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-4xl rounded-lg bg-white dark:bg-gray-900 p-6">
            <button
              type="button"
              onClick={() => setActiveGroupIndex(null)}
              className="absolute right-4 top-4 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            >
              {text.close}
            </button>
            <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              {groups[activeGroupIndex].name}
            </h4>
            {groups[activeGroupIndex].description && (
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {groups[activeGroupIndex].description}
              </p>
            )}
            {groups[activeGroupIndex].website && (
              <a
                href={groups[activeGroupIndex].website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex text-xs text-blue-600 dark:text-blue-400 hover:underline mb-4"
              >
                {text.website}
              </a>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[70vh] overflow-y-auto pr-1">
              {groups[activeGroupIndex].photos.map((photo) => (
                <figure key={photo.src} className="space-y-2">
                  <button
                    type="button"
                    onClick={() => setActivePhoto(photo)}
                    className="block w-full"
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-md border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800">
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                  </button>
                  <figcaption className="text-xs text-gray-600 dark:text-gray-400">
                    {photo.title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      )}

      {activePhoto && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative w-full max-w-5xl">
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute right-2 top-2 rounded-md bg-black/60 px-3 py-1 text-xs text-white hover:bg-black/80"
            >
              {text.close}
            </button>
            <div className="overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800 bg-black">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
