"use client"

import { useState } from "react"
import type { SVGProps } from "react"
import { Share2, Link as LinkIcon, Check } from "lucide-react"
import { useLanguage } from "@/components/LanguageProvider"

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26L22.8 21.75h-6.636l-5.196-6.786-5.94 6.786H1.72l7.73-8.835L1.2 2.25h6.804l4.707 6.162 5.533-6.162zm-1.16 17.52h1.834L7.3 4.114H5.35l11.734 15.656z" />
  </svg>
)

const LinkedinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
    <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.99h5V24H0V8.99zM8.5 8.99h4.79v2.04h.07c.67-1.27 2.31-2.61 4.76-2.61 5.09 0 6.03 3.35 6.03 7.7V24h-5V16.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.97V24h-5V8.99z" />
  </svg>
)

interface ShareButtonsProps {
  title: string
  url: string
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false)
  const { language } = useLanguage()

  const copy = {
    de: {
      label: "Diesen Beitrag teilen",
      twitter: "Auf Twitter teilen",
      linkedin: "Auf LinkedIn teilen",
      copy: "Link kopieren",
    },
    en: {
      label: "Share this post",
      twitter: "Share on Twitter",
      linkedin: "Share on LinkedIn",
      copy: "Copy link",
    },
  } as const

  const text = copy[language]

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
  }

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6 my-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <Share2 className="h-4 w-4" />
          <span className="font-medium">{text.label}</span>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Twitter */}
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            aria-label={text.twitter}
          >
            <TwitterIcon className="h-4 w-4" />
          </a>

          {/* LinkedIn */}
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            aria-label={text.linkedin}
          >
            <LinkedinIcon className="h-4 w-4" />
          </a>

          {/* Copy Link */}
          <button
            onClick={copyToClipboard}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            aria-label={text.copy}
          >
            {copied ? <Check className="h-4 w-4 text-green-600 dark:text-green-400" /> : <LinkIcon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </div>
  )
}
