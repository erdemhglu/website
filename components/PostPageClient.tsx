"use client"

import Link from "next/link"
import ReadingProgress from "@/components/ReadingProgress"
import ShareButtons from "@/components/ShareButtons"
import { useLanguage } from "@/components/LanguageProvider"
import type { Post } from "@/lib/posts"

const copy = {
  de: {
    published: "Veroeffentlicht",
    back: "← Alle Beitraege",
    locale: "de-DE",
  },
  en: {
    published: "Published",
    back: "← All posts",
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
    <div className="min-h-[100svh] overflow-x-hidden bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <ReadingProgress />

      <main className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <article>

          {/* Article header */}
          <header className="mb-12">
            <h1 className="font-display text-3xl md:text-4xl lg:text-5xl text-neutral-900 dark:text-neutral-100 leading-tight mb-6">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-neutral-400 dark:text-neutral-500 font-sans pb-6 border-b border-neutral-100 dark:border-neutral-800">
              <span>
                {text.published} · {new Date(post.date).toLocaleDateString(text.locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  timeZone: "Europe/Berlin",
                })}
              </span>
              <span>·</span>
              <span>{post.readTime}</span>
              {post.tags.length > 0 && (
                <>
                  <span>·</span>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-neutral-200 dark:border-neutral-700 rounded-full px-2.5 py-0.5 text-[11px] text-neutral-400 dark:text-neutral-500"
                      >
                        {tag.toLowerCase()}
                      </span>
                    ))}
                  </div>
                </>
              )}
            </div>
          </header>

          <ShareButtons title={post.title} url={postUrl} />

          {/* Article body */}
          <div
            className="
              prose prose-neutral prose-lg dark:prose-invert max-w-none
              prose-headings:font-display prose-headings:font-normal prose-headings:text-neutral-900 dark:prose-headings:text-neutral-100
              prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
              prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed prose-p:font-sans
              prose-a:text-neutral-900 dark:prose-a:text-neutral-100 prose-a:underline prose-a:underline-offset-2 hover:prose-a:text-neutral-500
              prose-strong:text-neutral-900 dark:prose-strong:text-neutral-100 prose-strong:font-medium
              prose-code:text-sm prose-code:bg-neutral-50 dark:prose-code:bg-neutral-900 prose-code:border prose-code:border-neutral-200 dark:prose-code:border-neutral-800 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:text-neutral-700 dark:prose-code:text-neutral-300 prose-code:font-normal
              prose-pre:bg-neutral-50 dark:prose-pre:bg-neutral-900 prose-pre:border prose-pre:border-neutral-200 dark:prose-pre:border-neutral-800 prose-pre:rounded-xl prose-pre:text-sm
              prose-blockquote:border-l-neutral-200 dark:prose-blockquote:border-l-neutral-700 prose-blockquote:text-neutral-500 dark:prose-blockquote:text-neutral-400 prose-blockquote:not-italic prose-blockquote:font-sans
              prose-ul:text-neutral-600 dark:prose-ul:text-neutral-400 prose-ol:text-neutral-600 dark:prose-ol:text-neutral-400 prose-li:text-neutral-600 dark:prose-li:text-neutral-400 prose-li:font-sans prose-li:my-1
              prose-hr:border-neutral-100 dark:prose-hr:border-neutral-800
              prose-img:rounded-xl prose-img:border prose-img:border-neutral-100 dark:prose-img:border-neutral-800
            "
            dangerouslySetInnerHTML={{ __html: post.content || "" }}
          />
        </article>

        {/* Footer nav */}
        <footer className="mt-16 pt-8 border-t border-neutral-100 dark:border-neutral-800">
          <Link
            href="/blog"
            className="text-sm text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors font-sans"
          >
            {text.back}
          </Link>
        </footer>
      </main>
    </div>
  )
}
