"use client"

import { useState } from "react"
import { useLanguage } from "@/components/LanguageProvider"
import { TagPill } from "@/components/TagPill"

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
  name: string | Record<string, string>
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
      heading: "Arbeit",
      repoHeading: "Open Source",
      repoEmpty: "Keine Repositories gefunden.",
      repoNoDescription: "Keine Beschreibung vorhanden.",
      website: "Website besuchen →",
      closedSource: "Projekte",
      emptyGroups: "Lege Bilder in `public/portfolio` ab und trage sie in `projectGroups` ein.",
      noImage: "Kein Bild",
      closedSourceTag: "Closed Source",
      close: "Schliessen",
    },
    en: {
      heading: "Work",
      repoHeading: "Open Source",
      repoEmpty: "No repositories found.",
      repoNoDescription: "No description available.",
      website: "Visit website →",
      closedSource: "Projects",
      emptyGroups: "Add images to `public/portfolio` and list them in `projectGroups`.",
      noImage: "No image",
      closedSourceTag: "Closed Source",
      close: "Close",
    },
  } as const

  const text = copy[language]

  const activeGroup = activeGroupIndex !== null ? groups[activeGroupIndex] : null
  const activeDisplayName = activeGroup
    ? (typeof activeGroup.name === "string"
        ? activeGroup.name
        : (activeGroup.name as Record<string, string>)[language] || Object.values(activeGroup.name)[0])
    : ""

  return (
    <section className="pt-8 sm:pt-12">

      {/* Section label */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-xs tracking-[0.2em] uppercase text-neutral-300 dark:text-neutral-600 font-sans select-none">01</span>
        <div className="flex-1 h-px bg-neutral-100 dark:bg-neutral-800" />
        <h2 className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-sans">{text.heading}</h2>
      </div>

      <div className="space-y-16">

        {/* ── GitHub repos ── */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-8">
            {text.repoHeading}
          </h3>

          {repos.length === 0 ? (
            <p className="text-sm text-neutral-400 dark:text-neutral-500 font-sans">{text.repoEmpty}</p>
          ) : (
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory -mx-1 px-1">
              {repos.map((repo, i) => (
                <article key={repo.href} className="group snap-start shrink-0 w-72 border border-neutral-200 dark:border-neutral-800 rounded-xl p-5 hover:border-neutral-400 dark:hover:border-neutral-600 hover:shadow-sm transition-all duration-200 bg-white dark:bg-neutral-900">
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="font-display text-base text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors leading-snug">
                        {repo.name}
                      </span>
                      <span className="text-[10px] text-neutral-300 dark:text-neutral-600 font-sans shrink-0 tabular-nums mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 font-sans leading-relaxed line-clamp-3 flex-1 mb-3">
                      {repo.description || text.repoNoDescription}
                    </p>
                    {repo.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5">
                        {repo.tags.map((tag) => <TagPill key={tag} tag={tag} />)}
                      </div>
                    )}
                  </a>
                  {repo.website && (
                    <a
                      href={repo.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans"
                    >
                      {text.website}
                    </a>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>

        {/* ── Projects / Closed Source ── */}
        <div id="projects" className="scroll-mt-20">
          <h3 className="font-display text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-8">
            {text.closedSource}
          </h3>

          {groups.length === 0 ? (
            <p className="text-sm text-neutral-400 dark:text-neutral-500 font-sans">{text.emptyGroups}</p>
          ) : (
            <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory -mx-1 px-1 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:overflow-visible sm:pb-0 sm:snap-none">
              {groups.map((group, index) => {
                const displayName = typeof group.name === "string"
                  ? group.name
                  : (group.name as Record<string, string>)[language] || Object.values(group.name)[0]
                return (
                  <article key={displayName} className="shrink-0 w-72 snap-start sm:w-auto sm:shrink">
                    <button
                      type="button"
                      onClick={() => setActiveGroupIndex(index)}
                      className="block w-full text-left group"
                    >
                      <div className="aspect-[16/9] overflow-hidden rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 mb-3">
                        {group.photos[0] ? (
                          <img
                            src={group.photos[0].src}
                            alt={group.photos[0].alt}
                            className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                            loading="lazy"
                          />
                        ) : (
                          <div className="flex h-full items-center justify-center text-xs text-neutral-400 dark:text-neutral-500 font-sans">
                            {text.noImage}
                          </div>
                        )}
                      </div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="font-display text-base text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors leading-snug block">
                            {displayName}
                          </span>
                          {group.description && (
                            <p className="text-xs text-neutral-400 dark:text-neutral-500 font-sans mt-1 line-clamp-2 leading-relaxed">
                              {group.description}
                            </p>
                          )}
                        </div>
                        {group.closedSource && (
                          <span className="text-[10px] text-neutral-300 dark:text-neutral-600 font-sans border border-neutral-200 dark:border-neutral-700 rounded-full px-2 py-0.5 shrink-0 mt-0.5">
                            {text.closedSourceTag}
                          </span>
                        )}
                      </div>
                    </button>
                    {group.website && (
                      <a
                        href={group.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans"
                      >
                        {text.website}
                      </a>
                    )}
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* ── Photo gallery modal ── */}
      {activeGroup && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 md:p-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveGroupIndex(null)}
        >
          <div
            className="relative w-full max-w-4xl rounded-2xl bg-white dark:bg-neutral-900 max-h-[90vh] flex flex-col shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveGroupIndex(null)}
              className="absolute right-4 top-4 sm:right-6 sm:top-6 z-10 shrink-0 text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans border border-neutral-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm rounded-lg px-3 py-1.5"
            >
              {text.close}
            </button>

            <div className="overflow-y-auto p-6 md:p-8">
              <div className="pr-16 mb-6">
                <h4 className="font-display text-xl md:text-2xl text-neutral-900 dark:text-neutral-100">{activeDisplayName}</h4>
                {activeGroup.description && (
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 font-sans mt-1 leading-relaxed">
                    {activeGroup.description}
                  </p>
                )}
                {activeGroup.website && (
                  <a
                    href={activeGroup.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex text-xs text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans mt-2"
                  >
                    {copy[language].website}
                  </a>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeGroup.photos.map((photo) => (
                  <figure key={photo.src} className="space-y-2">
                    <button type="button" onClick={() => setActivePhoto(photo)} className="block w-full group">
                      <div className="aspect-[4/3] overflow-hidden rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-800">
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>
                    </button>
                    <figcaption className="text-xs text-neutral-400 dark:text-neutral-500 font-sans">{photo.title}</figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── Lightbox ── */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute right-3 top-3 rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition-colors font-sans backdrop-blur-sm"
            >
              {text.close}
            </button>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={activePhoto.src}
                alt={activePhoto.alt}
                className="h-auto w-full max-h-[85vh] object-contain"
              />
            </div>
            <p className="text-center text-xs text-white/60 font-sans mt-3">{activePhoto.title}</p>
          </div>
        </div>
      )}
    </section>
  )
}
