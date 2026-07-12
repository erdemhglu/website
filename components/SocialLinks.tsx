"use client"

import { Radio } from "lucide-react"
import { SiGithub, SiSignal, SiWhatsapp, SiTelegram } from "@icons-pack/react-simple-icons"

export default function SocialLinks() {
  return (
    <div className="flex flex-col gap-2">
    <div className="flex flex-wrap gap-2">

      {/* GitHub */}
      <a
        href="https://github.com/erdemhglu/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-sm font-sans text-neutral-700 dark:text-neutral-300 hover:border-neutral-900 dark:hover:border-neutral-400 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200"
      >
        <span className="text-neutral-900 dark:text-neutral-100"><SiGithub size={16} /></span>
        GitHub
      </a>

      {/* LinkedIn — LinkedIn blue icon, always visible */}
      <a
        href="https://www.linkedin.com/in/erdem-hacisalihoglu/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-900 text-sm font-sans text-neutral-700 dark:text-neutral-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-200"
      >
        <span style={{ color: "#0A66C2" }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.99h5V24H0V8.99zM8.5 8.99h4.79v2.04h.07c.67-1.27 2.31-2.61 4.76-2.61 5.09 0 6.03 3.35 6.03 7.7V24h-5V16.5c0-1.79-.03-4.09-2.5-4.09-2.5 0-2.88 1.95-2.88 3.97V24h-5V8.99z" />
          </svg>
        </span>
        LinkedIn
      </a>

      {/* Signal — Signal blue icon, always visible */}
      <a
        href="https://signal.me/#u/erdemhglu.01"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-900 text-sm font-sans text-neutral-700 dark:text-neutral-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-200"
      >
        <span style={{ color: "#3A76F0" }}><SiSignal size={16} /></span>
        Signal
      </a>

      {/* WhatsApp — green */}
      <a
        href="https://wa.me/16154485074"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-green-200 dark:border-green-900 text-sm font-sans text-neutral-700 dark:text-neutral-300 hover:bg-green-50 dark:hover:bg-green-950 hover:border-green-400 dark:hover:border-green-700 transition-all duration-200"
      >
        <span style={{ color: "#25D366" }}><SiWhatsapp size={16} /></span>
        WhatsApp
      </a>

      {/* Telegram — Telegram blue */}
      <a
        href="https://t.me/erdemhglu"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-blue-200 dark:border-blue-900 text-sm font-sans text-neutral-700 dark:text-neutral-300 hover:bg-blue-50 dark:hover:bg-blue-950 hover:border-blue-400 dark:hover:border-blue-700 transition-all duration-200"
      >
        <span style={{ color: "#26A5E4" }}><SiTelegram size={16} /></span>
        Telegram
      </a>
    </div>

    <div className="flex flex-wrap gap-2">
      {/* QRZ.com — ham radio callsign */}
      <a
        href="https://www.qrz.com/db/DJ1EH"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-amber-200 dark:border-amber-900 text-sm font-sans text-neutral-700 dark:text-neutral-300 hover:bg-amber-50 dark:hover:bg-amber-950 hover:border-amber-400 dark:hover:border-amber-700 transition-all duration-200"
      >
        <Radio size={16} className="text-amber-600 dark:text-amber-400" />
        QRZ · DJ1EH
      </a>

      {/* Email */}
      <a
        href="mailto:erdem@hacisalihoglu.de"
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 dark:border-neutral-700 text-sm font-sans text-neutral-700 dark:text-neutral-300 hover:border-neutral-400 dark:hover:border-neutral-500 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all duration-200"
      >
        erdem@hacisalihoglu.de
      </a>
    </div>
    </div>
  )
}
