"use client"

import Link from "next/link"
import { Post } from "@/lib/posts"
import { ArrowUpRight } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

interface BlogPreviewProps {
  posts: Post[]
  isExpanded?: boolean
  onToggle?: () => void
  showToggleButton?: boolean
}

export default function BlogPreview({
  posts,
  isExpanded,
  onToggle,
  showToggleButton = true,
}: BlogPreviewProps) {
  const { language } = useLanguage()

  const copy = {
    de: {
      toggleOpen: "Blog lesen",
      toggleClose: "Ausblenden",
      viewAll: "Alle Beitraege →",
      locale: "de-DE",
    },
    en: {
      toggleOpen: "Read the blog",
      toggleClose: "Hide",
      viewAll: "All posts →",
      locale: "en-US",
    },
  } as const

  const text = copy[language]
  const expanded = isExpanded ?? false

  const handleToggle = () => {
    if (onToggle) onToggle()
  }

  const previewPosts = posts.slice(0, 5)

  return (
    <>
      {showToggleButton && (
        <button
          onClick={handleToggle}
          className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors font-sans border border-neutral-200 rounded-lg px-4 py-2 mb-8"
        >
          {expanded ? text.toggleClose : text.toggleOpen}
        </button>
      )}

      <div className="divide-y divide-neutral-100">
        {previewPosts.map((post, i) => (
          <article key={post.slug} className="group py-5 first:pt-0">
            <Link href={`/blog/posts/${post.slug}`} className="flex items-start gap-6 md:gap-10">
              <span className="text-xs text-neutral-300 font-sans tabular-nums pt-1 select-none w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-4 mb-1">
                  <h3 className="font-display text-lg text-neutral-900 group-hover:text-neutral-500 transition-colors">
                    {post.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 text-neutral-300 group-hover:text-neutral-900 transition-colors shrink-0" />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <time className="text-xs text-neutral-400 font-sans">
                    {new Date(post.date).toLocaleDateString(text.locale, { timeZone: "Europe/Berlin" })}
                  </time>
                  <span className="text-xs text-neutral-300 font-sans">{post.readTime}</span>
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="text-[11px] text-neutral-400 font-sans border border-neutral-200 rounded-full px-2.5 py-0.5">
                      {tag.toLowerCase()}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length > 0 && (
        <div className="mt-8 pt-6 border-t border-neutral-100">
          <Link
            href="/blog"
            className="text-sm text-neutral-400 hover:text-neutral-900 transition-colors font-sans"
          >
            {text.viewAll}
          </Link>
        </div>
      )}
    </>
  )
}
