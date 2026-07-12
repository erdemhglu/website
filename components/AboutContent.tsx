"use client"

import { useState } from "react"
import { useLanguage, type Language } from "@/components/LanguageProvider"
import type { AboutPhoto } from "@/lib/aboutPhotos"

const copy = {
  de: {
    heading: "Über mich",
    intro:
      "Ich bin Erdem, Bachelorstudent der Informatik. Mich interessieren vor allem Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.",
    journeyHeading: "Werdegang",
    journey: [
      "Mit 12 Jahren (2017) habe ich angefangen zu programmieren – wobei ich in den Jahren noch nicht wirklich viel gemacht habe. Auf einem Minecraft-Server, den ich mit einem Freund betrieben habe, habe ich Java-Code für Plugins verändert, den ich kaum verstanden habe.",
      "2019 war das Jahr, in dem ich richtig mit dem Programmieren angefangen habe. Die erste Sprache, die ich von Grund auf gelernt habe, war JavaScript – eigentlich wollte ich damit in die Webentwicklung einsteigen, aber das, was mit Node.js möglich war, hat mich so sehr interessiert, dass sich mein Einstieg in die Webentwicklung etwas verzögert hat. (Außerdem liegt mir Webdesign einfach nicht, und es ist wirklich schwer.)",
      "2020 habe ich einen Discord-Bot für türkische Nutzer entwickelt, der mit Lavalink Audio gestreamt hat (Ritim Bot). Er hat gut an Fahrt aufgenommen und rund 500 Server bedient, danach habe ich das Projekt aber eingestellt, um mich auf die Schule zu konzentrieren. (Es war ein kostenloses Projekt, und die türkische Community war beim Spenden eher zurückhaltend – es gab keinerlei Einnahmen.) Seit 2021 entwickle ich in meinen Augen professionell Software.",
      "Meine Amateurfunklizenz habe ich zuerst in der Türkei erworben, mit dem Rufzeichen TA2EDH — das entspricht dort der höchsten Lizenzklasse A. In Deutschland besitze ich das Rufzeichen DJ1EH. Als lizenzierter Funkamateur beschäftige ich mich mit HF-Technik, Antennenbau und eigenen PCB-Designs.",
      "In der Schule habe ich den Technik-Club der Schule geleitet und meine Schule bei Hack Club angemeldet – damit waren wir das erste türkische Chapter der Community. Beim landesweiten TÜBİTAK-Wettbewerb für unbemannte Flugsysteme an Gymnasien war ich Kapitän meines Teams. Ich habe die erste Hackathon-Veranstaltung für Gymnasiasten in der Türkei organisiert. Bei einem naturwissenschaftlichen Workshop für Schüler habe ich das IT-Team geleitet, und da es an meiner Schule kein IT-Team gab, habe ich ein vollautomatisches E-Mail-Verwaltungssystem sowie ein Vernetzungssystem für meine Schule geschrieben.",
      "Aktuell arbeite ich eher an kleineren Projekten und stelle mein Studium in den Vordergrund. (Wer weiß, vielleicht werde ich irgendwann noch Akademiker.)",
    ],
    close: "Schliessen",
  },
  en: {
    heading: "About Me",
    intro:
      "I'm Erdem, a computer science undergraduate. My main interests are amateur radio, PCB design, and web and systems programming.",
    journeyHeading: "Journey",
    journey: [
      "I started programming at 12 years old (in 2017) — though back then I wasn't really doing much of anything. On a Minecraft server my friend and I ran, I'd tweak Java code for plugins that I barely understood.",
      "2019 was the year I properly started learning to program. The first language I learned from scratch was JavaScript — I was actually learning it to get into web development, but what you could do with Node.js interested me so much that getting into web dev got pushed back a bit. (Also, web design just isn't for me, and it's really hard.)",
      "In 2020 I built a Discord bot aimed at Turkish users that streamed audio using Lavalink (Ritim Bot). It gained good traction, serving 500 servers, but I shut the project down afterward to focus on high school. (It was a free project, and the Turkish community was hesitant to donate — there was no income from it at all.) Since 2021 I've been developing software in what I'd consider a professional capacity.",
      "I first got my amateur radio license in Turkey, with the callsign TA2EDH — the equivalent of the country's highest license class, A. In Germany, I hold the callsign DJ1EH. As a licensed amateur radio operator, I work with RF technology, antenna building, and my own PCB designs.",
      "In high school I led the school's technology club and got my school registered with Hack Club, making us the first Turkish chapter of the community. I competed in TÜBİTAK's national high-school UAV competition as team captain. I organized Turkey's first hackathon for high school students. I led the IT team for a science workshop aimed at high schoolers, and since my school didn't have an IT team, I wrote a fully automated email management system and an engagement network for my school.",
      "These days I'm building smaller projects and prioritizing university life. (Who knows, maybe I'll end up in academia someday.)",
    ],
    close: "Close",
  },
} satisfies Record<
  Language,
  {
    heading: string
    intro: string
    journeyHeading: string
    journey: string[]
    close: string
  }
>

type AboutContentProps = {
  photos: AboutPhoto[]
}

export default function AboutContent({ photos }: AboutContentProps) {
  const { language } = useLanguage()
  const [activePhoto, setActivePhoto] = useState<AboutPhoto | null>(null)
  const t = copy[language]

  return (
    <div className="min-h-[100dvh] bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 font-sans">
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <h1 className="font-display text-3xl md:text-4xl text-neutral-900 dark:text-neutral-100 mb-8">
          {t.heading}
        </h1>

        <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10">
          {t.intro}
        </p>

        <h2 className="font-display text-xl md:text-2xl text-neutral-900 dark:text-neutral-100 mb-4">
          {t.journeyHeading}
        </h2>
        <div className="space-y-4 mb-10">
          {t.journey.map((paragraph) => (
            <p key={paragraph} className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {photos.length > 0 && (
          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory -mx-1 px-1">
            {photos.map((photo) => (
              <figure key={photo.src} className="shrink-0 w-64 sm:w-80 snap-start space-y-2">
                <button type="button" onClick={() => setActivePhoto(photo)} className="block w-full group">
                  <div className="aspect-[5/4] overflow-hidden rounded-xl border border-neutral-100 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900">
                    <img
                      src={photo.src}
                      alt={photo.caption?.[language] ?? ""}
                      className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </button>
                {photo.caption && (
                  <figcaption className="text-xs text-neutral-400 dark:text-neutral-500 font-sans">
                    {photo.caption[language]}
                    {photo.caption.namesNoIndex && (
                      <span data-nosnippet>{photo.caption.namesNoIndex[language]}</span>
                    )}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        )}
      </div>

      {/* ── Lightbox ── */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={() => setActivePhoto(null)}
        >
          <div className="relative w-full max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              onClick={() => setActivePhoto(null)}
              className="absolute right-3 top-3 rounded-lg bg-white/10 px-3 py-1.5 text-xs text-white hover:bg-white/20 transition-colors font-sans backdrop-blur-sm"
            >
              {t.close}
            </button>
            <div className="overflow-hidden rounded-2xl">
              <img
                src={activePhoto.src}
                alt={activePhoto.caption?.[language] ?? ""}
                className="h-auto w-full max-h-[85vh] object-contain"
              />
            </div>
            {activePhoto.caption && (
              <p className="text-center text-xs text-white/60 font-sans mt-3">
                {activePhoto.caption[language]}
                {activePhoto.caption.namesNoIndex && (
                  <span data-nosnippet>{activePhoto.caption.namesNoIndex[language]}</span>
                )}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
