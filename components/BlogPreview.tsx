"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Post } from "@/lib/posts"
import { ArrowRight, Calendar, Clock } from "lucide-react"
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
  const [internalExpanded, setInternalExpanded] = useState(false)
  const [showPosts, setShowPosts] = useState(false)
  const [renderExpanded, setRenderExpanded] = useState(false)
  const { language } = useLanguage()
  const expanded = isExpanded ?? internalExpanded

  const copy = {
    de: {
      toggleOpen: "Blog lesen",
      toggleClose: "Blogbeitraege ausblenden",
      readMore: "Weiterlesen",
      viewAll: "Alle Beitraege anzeigen",
      locale: "de-DE",
    },
    en: {
      toggleOpen: "Read the blog",
      toggleClose: "Hide blog posts",
      readMore: "Read more",
      viewAll: "View all posts",
      locale: "en-US",
    },
  } as const

  const text = copy[language]

  useEffect(() => {
    let openTimer: ReturnType<typeof setTimeout> | null = null
    let closeTimer: ReturnType<typeof setTimeout> | null = null

    if (expanded) {
      setRenderExpanded(true)
      openTimer = setTimeout(() => setShowPosts(true), 200)
    } else {
      setShowPosts(false)
      closeTimer = setTimeout(() => setRenderExpanded(false), 300)
    }

    return () => {
      if (openTimer) clearTimeout(openTimer)
      if (closeTimer) clearTimeout(closeTimer)
    }
  }, [expanded])

  const toggleExpanded = () => {
    if (onToggle) {
      onToggle()
      return
    }

    setInternalExpanded((prev) => !prev)
  }

  const previewPosts = posts.slice(0, 4)

  return (
    <>
      {/* Blog Button */}
      {showToggleButton && (
        <div className="flex justify-center">
          <button
            onClick={toggleExpanded}
            className={`px-6 py-2 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-light text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white transition-all duration-200 ${
              expanded ? 'bg-gray-50 dark:bg-gray-900' : ''
            }`}
          >
            {expanded ? text.toggleClose : text.toggleOpen}
          </button>
        </div>
      )}

      {/* Expandable Blog Preview */}
      {renderExpanded && (
        <div className="mt-8 w-full max-w-4xl mx-auto">
          <div
            className={`transition-all duration-300 ease-in-out ${
              showPosts ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            {/* Posts Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 px-4 md:px-0">
              {previewPosts.map((post, index) => (
                <article
                  key={post.slug}
                  className={`group border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg dark:hover:shadow-gray-900/20 transition-all duration-300 hover:border-gray-300 dark:hover:border-gray-600 bg-white dark:bg-gray-900/50 ${
                    showPosts ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ 
                    transitionDelay: showPosts ? `${index * 100}ms` : '0ms'
                  }}
                >
                  <Link href={`/blog/posts/${post.slug}`} className="block h-full">
                    <div className="flex flex-col h-full">
                      {/* Post meta */}
                      <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-3">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString(text.locale, { timeZone: "Europe/Berlin" })}</span>
                        <span>•</span>
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>

                      {/* Post title */}
                      <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {post.title}
                      </h3>

                      {/* Post excerpt */}
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-grow leading-relaxed">
                        {post.excerpt.length > 150 ? `${post.excerpt.substring(0, 150)}...` : post.excerpt}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-600 dark:text-gray-400"
                          >
                            {tag.toLowerCase()}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs rounded text-gray-600 dark:text-gray-400">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Read more indicator */}
                      <div className="flex items-center text-sm text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                        <span>{text.readMore}</span>
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center pb-8 px-4 md:px-0">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-8 py-3 border border-gray-300 dark:border-gray-700 rounded-md text-sm font-light text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-gray-900 dark:hover:text-white transition-all duration-200"
              >
                {text.viewAll}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
