"use client"

import { useState } from "react"
import BlogPreview from "@/components/BlogPreview"
import PortfolioSection, { GithubRepo, ProjectGroup } from "@/components/PortfolioSection"
import { Post } from "@/lib/posts"
import { useLanguage } from "@/components/LanguageProvider"

type ActiveSection = "blog" | "portfolio" | null

type HomeSectionsProps = {
  posts: Post[]
  repos: GithubRepo[]
  groups: ProjectGroup[]
}

export default function HomeSections({ posts, repos, groups }: HomeSectionsProps) {
  const [activeSection, setActiveSection] = useState<ActiveSection>(null)
  const { language } = useLanguage()

  const copy = {
    de: {
      blogOpen: "Blog lesen",
      blogClose: "Blogbeitraege ausblenden",
      portfolio: "Portfolio",
      portfolioClose: "Portfolio ausblenden",
    },
    en: {
      blogOpen: "Read the blog",
      blogClose: "Hide blog posts",
      portfolio: "Portfolio",
      portfolioClose: "Hide portfolio",
    },
  } as const

  const text = copy[language]

  const toggleSection = (section: ActiveSection) => {
    setActiveSection((current) => (current === section ? null : section))
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap justify-center gap-3">
        <button
          type="button"
          onClick={() => toggleSection("blog")}
          className={`px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-light text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white transition-all duration-200 ${
            activeSection === "blog" ? "bg-gray-50 dark:bg-gray-900" : ""
          }`}
        >
          {activeSection === "blog" ? text.blogClose : text.blogOpen}
        </button>
        <button
          type="button"
          onClick={() => toggleSection("portfolio")}
          className={`px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-light text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white transition-all duration-200 ${
            activeSection === "portfolio" ? "bg-gray-50 dark:bg-gray-900" : ""
          }`}
        >
          {activeSection === "portfolio" ? text.portfolioClose : text.portfolio}
        </button>
      </div>

      {activeSection === "portfolio" && (
        <PortfolioSection repos={repos} groups={groups} />
      )}

      <BlogPreview
        posts={posts}
        isExpanded={activeSection === "blog"}
        onToggle={() => toggleSection("blog")}
        showToggleButton={false}
      />
    </div>
  )
}
