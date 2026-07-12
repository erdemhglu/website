"use client"

import { useLanguage } from "@/components/LanguageProvider"
import { TagPill } from "@/components/TagPill"

const languages = ["JavaScript", "TypeScript", "Java", "Go", "Rust", "C++", "Python", "Scala", "Haskell", "SQL", "C"]

const technologies = [
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Spring Boot",
  "Supabase",
  "MongoDB",
  "Docker",
  "Tailwind CSS",
  "Cloudflare Workers",
]

function PillList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => (
        <TagPill key={item} tag={item} size="lg" />
      ))}
    </div>
  )
}

export default function SkillsSection() {
  const { language } = useLanguage()

  const copy = {
    de: {
      heading: "Skills",
      languagesHeading: "Programmiersprachen",
      technologiesHeading: "Technologien",
    },
    en: {
      heading: "Skills",
      languagesHeading: "Languages I can write",
      technologiesHeading: "Technologies I can use",
    },
  } as const

  const text = copy[language]

  return (
    <section className="pt-16 pb-8">
      <div className="flex items-center gap-4 mb-10">
        <span className="text-xs tracking-[0.2em] uppercase text-neutral-300 dark:text-neutral-600 font-sans select-none">02</span>
        <div className="flex-1 h-px bg-neutral-100 dark:bg-neutral-800" />
        <span className="text-xs tracking-[0.2em] uppercase text-neutral-400 dark:text-neutral-500 font-sans">{text.heading}</span>
      </div>

      <div className="space-y-8">
        <div>
          <h3 className="font-display text-lg text-neutral-900 dark:text-neutral-100 mb-4">
            {text.languagesHeading}
          </h3>
          <PillList items={languages} />
        </div>

        <div>
          <h3 className="font-display text-lg text-neutral-900 dark:text-neutral-100 mb-4">
            {text.technologiesHeading}
          </h3>
          <PillList items={technologies} />
        </div>
      </div>
    </section>
  )
}
