"use client"

import BlogPreview from "@/components/BlogPreview"
import PortfolioSection, { type GithubRepo, type ProjectGroup } from "@/components/PortfolioSection"
import { Post } from "@/lib/posts"
import { useLanguage } from "@/components/LanguageProvider"

type HomeSectionsProps = {
  posts: Post[]
  repos: GithubRepo[]
  groups: ProjectGroup[]
}

export default function HomeSections({ posts, repos, groups }: HomeSectionsProps) {
  const { language } = useLanguage()

  const copy = {
    de: {
      blogHeading: "Schreiben",
      blogSub: "Neueste Beitraege",
    },
    en: {
      blogHeading: "Writing",
      blogSub: "Recent posts",
    },
  } as const

  const text = copy[language]

  return (
    <div>
      {/* Portfolio / Work section */}
      <PortfolioSection repos={repos} groups={groups} />

      {/* Blog section */}
      <section id="blog" className="pt-16 pb-8">
        <div className="flex items-center gap-4 mb-10">
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-300 dark:text-neutral-600 font-sans select-none">02</span>
          <div className="flex-1 h-px bg-neutral-100 dark:bg-neutral-800" />
          <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-sans">{text.blogHeading}</span>
        </div>

        <h2 className="font-display text-2xl md:text-3xl text-neutral-900 dark:text-neutral-100 mb-8">
          {text.blogSub}
        </h2>

        <BlogPreview posts={posts} isExpanded={true} showToggleButton={false} />
      </section>
    </div>
  )
}
