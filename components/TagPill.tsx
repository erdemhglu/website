export const tagColors: Record<string, string> = {
  "TypeScript":          "bg-blue-50 text-blue-600 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  "JavaScript":          "bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-950 dark:text-yellow-300 dark:border-yellow-800",
  "Python":              "bg-sky-50 text-sky-600 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800",
  "Haskell":             "bg-violet-50 text-violet-600 border-violet-200 dark:bg-violet-950 dark:text-violet-300 dark:border-violet-800",
  "React Native":        "bg-cyan-50 text-cyan-600 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800",
  "React":               "bg-cyan-50 text-cyan-600 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800",
  "Next.js":             "bg-neutral-900 text-white border-neutral-900 dark:bg-neutral-100 dark:text-neutral-900 dark:border-neutral-100",
  "Tailwind CSS":        "bg-teal-50 text-teal-600 border-teal-200 dark:bg-teal-950 dark:text-teal-300 dark:border-teal-800",
  "Supabase":            "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
  "Cloudflare Workers":  "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  "WooCommerce":         "bg-purple-50 text-purple-600 border-purple-200 dark:bg-purple-950 dark:text-purple-300 dark:border-purple-800",
  "Payment Gateway":     "bg-green-50 text-green-600 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  "iOS":                 "bg-blue-50 text-blue-500 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  "Expo":                "bg-neutral-100 text-neutral-700 border-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-600",
  "Jupyter Notebook":    "bg-orange-50 text-orange-600 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  "Data Analysis":       "bg-orange-50 text-orange-500 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  "Distributed Systems": "bg-indigo-50 text-indigo-600 border-indigo-200 dark:bg-indigo-950 dark:text-indigo-300 dark:border-indigo-800",
  "Monitoring":          "bg-green-50 text-green-600 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",

  // Languages
  "Java":                "bg-orange-50 text-orange-700 border-orange-200 dark:bg-orange-950 dark:text-orange-300 dark:border-orange-800",
  "Go":                  "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950 dark:text-cyan-300 dark:border-cyan-800",
  "Rust":                "bg-red-50 text-red-700 border-red-200 dark:bg-red-950 dark:text-red-300 dark:border-red-800",
  "C++":                 "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950 dark:text-blue-300 dark:border-blue-800",
  "C":                   "bg-neutral-100 text-neutral-700 border-neutral-300 dark:bg-neutral-800 dark:text-neutral-300 dark:border-neutral-600",
  "Scala":               "bg-rose-50 text-rose-600 border-rose-200 dark:bg-rose-950 dark:text-rose-300 dark:border-rose-800",
  "SQL":                 "bg-slate-50 text-slate-600 border-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-600",

  // Technologies
  "Vue.js":              "bg-emerald-50 text-emerald-600 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800",
  "Node.js":             "bg-green-50 text-green-600 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  "Spring Boot":         "bg-lime-50 text-lime-700 border-lime-200 dark:bg-lime-950 dark:text-lime-300 dark:border-lime-800",
  "MongoDB":             "bg-green-50 text-green-700 border-green-200 dark:bg-green-950 dark:text-green-300 dark:border-green-800",
  "Docker":              "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950 dark:text-sky-300 dark:border-sky-800",
}

const sizeClasses = {
  sm: "text-[11px] px-2.5 py-0.5",
  lg: "text-sm px-3.5 py-1.5",
} as const

export function TagPill({ tag, size = "sm" }: { tag: string; size?: keyof typeof sizeClasses }) {
  const cls = tagColors[tag] ?? "bg-white text-neutral-400 border-neutral-200 dark:bg-neutral-900 dark:text-neutral-500 dark:border-neutral-700"
  return (
    <span className={`font-sans border rounded-full ${sizeClasses[size]} ${cls}`}>
      {tag}
    </span>
  )
}
