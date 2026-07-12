"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Post } from "@/lib/posts"
import { useLanguage } from "@/components/LanguageProvider"

interface PostListProps {
  posts: Post[]
}

export default function PostList({ posts }: PostListProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null)
  const { language } = useLanguage()

  const copy = {
    de: {
      heading: "Beitraege",
      searchPlaceholder: "Suchen…",
      allTags: "Alle",
      allLanguages: "Alle",
      emptySearch: (q: string) => `Keine Beitraege gefunden fuer „${q}"`,
      emptyTag: (t: string) => `Keine Beitraege mit dem Tag „${t}"`,
      empty: "Keine Beitraege gefunden",
      locale: "de-DE",
    },
    en: {
      heading: "Posts",
      searchPlaceholder: "Search…",
      allTags: "All",
      allLanguages: "All",
      emptySearch: (q: string) => `No posts found for "${q}"`,
      emptyTag: (t: string) => `No posts found with tag "${t}"`,
      empty: "No posts found",
      locale: "en-US",
    },
  } as const

  const text = copy[language]

  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach(post => post.tags.forEach(tag => tagSet.add(tag)))
    return Array.from(tagSet).sort()
  }, [posts])

  const filteredPosts = useMemo(() => {
    let filtered = posts
    if (selectedLanguage) filtered = filtered.filter(p => p.language === selectedLanguage)
    if (selectedTag) filtered = filtered.filter(p => p.tags.some(t => t === selectedTag))
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase()
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      )
    }
    return filtered
  }, [posts, searchQuery, selectedTag, selectedLanguage])

  const pill = (active: boolean) =>
    `px-3 py-1 text-xs rounded-full border transition-colors font-sans ${
      active
        ? "bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:border-neutral-100"
        : "bg-white dark:bg-neutral-900 text-neutral-500 dark:text-neutral-400 border-neutral-200 dark:border-neutral-700 hover:border-neutral-400 dark:hover:border-neutral-500"
    }`

  return (
    <>
      {/* Section label */}
      <div className="flex items-center gap-4 mb-10">
        <span className="text-xs tracking-[0.2em] uppercase text-neutral-300 dark:text-neutral-600 font-sans select-none">Writing</span>
        <div className="flex-1 h-px bg-neutral-100 dark:bg-neutral-800" />
      </div>

      <h1 className="font-display text-3xl md:text-4xl text-neutral-900 dark:text-neutral-100 mb-10">{text.heading}</h1>

      {/* Filters */}
      <div className="space-y-4 mb-10">
        <input
          type="text"
          placeholder={text.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm w-full sm:w-72 focus:outline-none focus:border-neutral-400 dark:focus:border-neutral-500 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 font-sans placeholder:text-neutral-300 dark:placeholder:text-neutral-600"
        />

        <div className="flex flex-wrap gap-2">
          <button onClick={() => setSelectedTag(null)} className={pill(selectedTag === null)}>{text.allTags}</button>
          {allTags.map(tag => (
            <button key={tag} onClick={() => setSelectedTag(tag)} className={pill(selectedTag === tag)}>{tag}</button>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <button onClick={() => setSelectedLanguage(null)} className={pill(selectedLanguage === null)}>{text.allLanguages}</button>
          <button onClick={() => setSelectedLanguage("en")} className={pill(selectedLanguage === "en")}>EN</button>
          <button onClick={() => setSelectedLanguage("de")} className={pill(selectedLanguage === "de")}>DE</button>
        </div>
      </div>

      {/* Posts */}
      <div className="divide-y divide-neutral-100 dark:divide-neutral-800">
        {filteredPosts.length === 0 ? (
          <p className="text-neutral-400 dark:text-neutral-500 text-sm font-sans py-8">
            {searchQuery ? text.emptySearch(searchQuery) : selectedTag ? text.emptyTag(selectedTag) : text.empty}
          </p>
        ) : (
          filteredPosts.map((post, i) => (
            <article key={post.slug} className="group py-6 first:pt-0">
              <Link href={`/blog/posts/${post.slug}`} className="flex items-start gap-6 md:gap-10">
                <span className="text-xs text-neutral-300 dark:text-neutral-600 font-sans tabular-nums pt-1 select-none w-6 shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 mb-2">
                    <h2 className="font-display text-lg text-neutral-900 dark:text-neutral-100 group-hover:text-neutral-500 dark:group-hover:text-neutral-400 transition-colors">
                      {post.title}
                    </h2>
                    <time className="text-xs text-neutral-300 dark:text-neutral-600 font-sans shrink-0">
                      {new Date(post.date).toLocaleDateString(text.locale, { timeZone: "Europe/Berlin" })}
                    </time>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 font-sans">{post.readTime}</span>
                    {post.tags.map(tag => (
                      <span key={tag} className="text-[11px] text-neutral-400 dark:text-neutral-500 font-sans border border-neutral-200 dark:border-neutral-700 rounded-full px-2.5 py-0.5">
                        {tag.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </article>
          ))
        )}
      </div>
    </>
  )
}
