"use client"

import { useEffect, useState } from "react"

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrolled = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (scrolled / height) * 100 : 0)
    }
    window.addEventListener("scroll", updateProgress)
    updateProgress()
    return () => window.removeEventListener("scroll", updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-neutral-100 z-50">
      <div
        className="h-full bg-neutral-900 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
