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
      heading: "Beitraege.",
      searchPlaceholder: "Suche...",
      allTags: "Alle",
      allLanguages: "Alle Sprachen",
      emptySearch: (query: string) => `Keine Beitraege gefunden fuer "${query}"`,
      emptyTag: (tag: string) => `Keine Beitraege mit dem Tag "${tag}" gefunden`,
      empty: "Keine Beitraege gefunden",
      locale: "de-DE",
    },
    en: {
      heading: "Posts.",
      searchPlaceholder: "Search...",
      allTags: "All",
      allLanguages: "All languages",
      emptySearch: (query: string) => `No posts found for "${query}"`,
      emptyTag: (tag: string) => `No posts found with the tag "${tag}"`,
      empty: "No posts found",
      locale: "en-US",
    },
  } as const

  const text = copy[language]

  // Get all unique tags from posts
  const allTags = useMemo(() => {
    const tagSet = new Set<string>()
    posts.forEach(post => {
      post.tags.forEach(tag => tagSet.add(tag))
    })
    return Array.from(tagSet).sort()
  }, [posts])

  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filter by language
    if (selectedLanguage) {
      filtered = filtered.filter(post => 
        post.language === selectedLanguage
      )
    }

    // Filter by selected tag
    if (selectedTag) {
      filtered = filtered.filter(post => 
        post.tags.some(tag => tag === selectedTag)
      )
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags.some((tag) => tag.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [posts, searchQuery, selectedTag, selectedLanguage])

  return (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-medium mb-4 text-gray-900 dark:text-white">{text.heading}</h1>
        
        {/* Search Input */}
        <div className="mb-4">
          <input 
            type="text" 
            placeholder={text.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-3 py-2 border border-gray-300 dark:border-gray-700 rounded text-sm w-full sm:w-64 focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
          />
        </div>

        {/* Tag Filter */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
              <button
              onClick={() => setSelectedTag(null)}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                selectedTag === null
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {text.allTags}
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-3 py-1 text-xs rounded transition-colors ${
                  selectedTag === tag
                    ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Language Filter */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedLanguage(null)}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                selectedLanguage === null
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {text.allLanguages}
            </button>
            <button
              onClick={() => setSelectedLanguage('en')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                selectedLanguage === 'en'
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setSelectedLanguage('de')}
              className={`px-3 py-1 text-xs rounded transition-colors ${
                selectedLanguage === 'de'
                  ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              DE
            </button>
          </div>
        </div>
      </div>

      {/* Posts List */}
      <div className="space-y-6">
        {filteredPosts.length === 0 ? (
          <div className="text-gray-500 dark:text-gray-400 text-center py-8">
            {searchQuery ? (
              <>{text.emptySearch(searchQuery)}</>
            ) : selectedTag ? (
              <>{text.emptyTag(selectedTag)}</>
            ) : (
              <>{text.empty}</>
            )}
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article key={post.slug} className="group">
              <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                <time className="text-sm text-gray-500 dark:text-gray-400 font-mono shrink-0 sm:w-20">
                  {new Date(post.date).toLocaleDateString(text.locale, { timeZone: "Europe/Berlin" })}
                </time>
                <div className="flex-1">
                  <h2 className="text-lg font-medium mb-2">
                    <Link 
                      href={`/blog/posts/${post.slug}`} 
                      className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    {post.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs rounded text-gray-700 dark:text-gray-300 whitespace-nowrap"
                      >
                        {tag.toLowerCase().replace(/\s+/g, ' ')}
                      </span>
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{post.readTime}</p>
                </div>
              </div>
            </article>
          ))
        )}
      </div>
    </>
  )
}
