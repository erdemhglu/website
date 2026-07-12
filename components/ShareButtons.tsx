"use client"

import { useState } from "react"
import type { SVGProps } from "react"
import { Link as LinkIcon, Check } from "lucide-react"
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
      label: "Teilen",
      twitter: "Auf X (Twitter) teilen",
      linkedin: "Auf LinkedIn teilen",
      copyLabel: "Link kopieren",
      copied: "Kopiert",
    },
    en: {
      label: "Share",
      twitter: "Share on X (Twitter)",
      linkedin: "Share on LinkedIn",
      copyLabel: "Copy link",
      copied: "Copied",
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
    } catch {
      /* ignore */
    }
  }

  return (
    <div className="flex items-center gap-4 py-6 my-8 border-t border-b border-neutral-100 dark:border-neutral-800">
      <span className="text-xs tracking-[0.15em] uppercase text-neutral-400 dark:text-neutral-500 font-sans mr-2">
        {text.label}
      </span>

      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text.twitter}
        className="w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
      >
        <TwitterIcon className="h-3.5 w-3.5" />
      </a>

      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={text.linkedin}
        className="w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
      >
        <LinkedinIcon className="h-3.5 w-3.5" />
      </a>

      <button
        onClick={copyToClipboard}
        aria-label={text.copyLabel}
        className="w-8 h-8 flex items-center justify-center border border-neutral-200 dark:border-neutral-700 rounded-lg text-neutral-400 dark:text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 hover:border-neutral-400 dark:hover:border-neutral-500 transition-colors"
      >
        {copied
          ? <Check className="h-3.5 w-3.5 text-green-600" />
          : <LinkIcon className="h-3.5 w-3.5" />
        }
      </button>

      {copied && (
        <span className="text-xs text-neutral-400 dark:text-neutral-500 font-sans">{text.copied}</span>
      )}
    </div>
  )
}
