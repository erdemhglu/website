"use client"

import Link from "next/link"
import ReadingProgress from "@/components/ReadingProgress"
import ShareButtons from "@/components/ShareButtons"
import BlogHeader from "@/components/BlogHeader"
import { useLanguage } from "@/components/LanguageProvider"
import type { Post } from "@/lib/posts"

const copy = {
  de: {
    published: "Veroeffentlicht am",
    tags: "Stichwoerter:",
    back: "← Zurueck zu Beitraegen",
    locale: "de-DE",
  },
  en: {
    published: "Published on",
    tags: "Tags:",
    back: "← Back to posts",
    locale: "en-US",
  },
}

type PostPageClientProps = {
  post: Post
  postUrl: string
}

export default function PostPageClient({ post, postUrl }: PostPageClientProps) {
  const { language } = useLanguage()
  const text = copy[language]

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <ReadingProgress />
      <BlogHeader />

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <article>
          <header className="mb-8">
            <h1 className="text-2xl md:text-3xl font-medium mb-4 leading-tight text-gray-900 dark:text-white">
              {post.title}
            </h1>
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4 font-mono">
              <span>
                {text.published} {new Date(post.date).toLocaleDateString(text.locale, { timeZone: "Europe/Berlin" })}
              </span>
              <span className="hidden sm:inline">::</span>
              <span>{post.readTime}</span>
              <span className="hidden sm:inline">::</span>
              <div className="flex items-center gap-2">
                <span>{text.tags}</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-blue-600 dark:text-blue-400 hover:underline cursor-pointer whitespace-nowrap">
                      {tag.toLowerCase().replace(/\s+/g, "_")}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </header>

          <ShareButtons title={post.title} url={postUrl} />

          <div
            className="prose prose-lg max-w-none
              prose-headings:font-medium prose-headings:text-gray-900 dark:prose-headings:text-white
              prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
              prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
              prose-strong:text-gray-900 dark:prose-strong:text-white prose-strong:font-medium
              prose-code:text-sm prose-code:bg-gray-100 dark:prose-code:bg-gray-900 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-gray-800 dark:prose-code:text-gray-200
              prose-pre:bg-gray-50 dark:prose-pre:bg-black prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-800 prose-pre:text-sm
              prose-blockquote:border-l-gray-300 dark:prose-blockquote:border-l-gray-600 prose-blockquote:text-gray-600 dark:prose-blockquote:text-gray-400
              prose-ul:text-gray-700 dark:prose-ul:text-gray-300 prose-ol:text-gray-700 dark:prose-ol:text-gray-300
              prose-li:text-gray-700 dark:prose-li:text-gray-300 prose-li:my-1
              prose-hr:border-gray-200 dark:prose-hr:border-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <Link
            href="/blog"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            {text.back}
          </Link>
        </div>
      </main>
    </div>
  )
}
