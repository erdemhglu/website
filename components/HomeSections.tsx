"use client"

import BlogPreview from "@/components/BlogPreview"
import PortfolioSection, { type GithubRepo, type ProjectGroup } from "@/components/PortfolioSection"
import { Post } from "@/lib/posts"
import { useLanguage } from "@/components/LanguageProvider"

type ActiveSection = "blog" | "portfolio" | null

type HomeSectionsProps = {
  posts: Post[]
  repos: GithubRepo[]
  groups: ProjectGroup[]
}

export default function HomeSections({ posts, repos, groups }: HomeSectionsProps) {
  const { language } = useLanguage()

  const copy = {
    de: {
      blogHeading: "Blog",
      blogSub: "Neueste Beitraege",
    },
    en: {
      blogHeading: "Blog",
      blogSub: "Recent posts",
    },
  } as const

  const text = copy[language]

  return (
    <div className="space-y-0">
      <section className="min-h-[100svh] snap-start flex items-center py-4 sm:py-8 md:h-auto md:min-h-[100svh] md:overflow-visible">
        <div className="w-full px-4 h-full min-h-0 md:h-auto">
          <PortfolioSection repos={repos} groups={groups} />
        </div>
      </section>

      <section id="blog" className="min-h-[100svh] snap-start flex items-center border-t border-gray-200 dark:border-gray-800 py-6 sm:py-8">
        <div className="w-full px-4">
          <div className="mb-6">
            <h2 className="text-xl md:text-2xl font-light text-gray-900 dark:text-white">{text.blogHeading}</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 font-light">{text.blogSub}</p>
          </div>

          <div>
            <BlogPreview posts={posts} isExpanded={true} showToggleButton={false} />
          </div>
        </div>
      </section>
    </div>
  )
}
