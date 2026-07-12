import fs from 'fs'
import path from 'path'

const aboutPhotosDirectory = path.join(process.cwd(), 'public/aboutme')
const imageExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif'])

export type AboutPhotoCaption = {
  de: string
  en: string
  // Rendered inside a `data-nosnippet` span, appended after the main caption —
  // keeps named third parties out of search snippets without hiding them from the page.
  namesNoIndex?: {
    de: string
    en: string
  }
}

export type AboutPhoto = {
  src: string
  caption?: AboutPhotoCaption
}

// Add an entry here (keyed by filename in public/aboutme) to caption a photo.
// Photos without an entry are shown without a caption.
const captions: Record<string, AboutPhotoCaption> = {
  'about-1.webp': {
    de: 'Abschlussrede beim naturwissenschaftlichen Workshop',
    en: 'Closing speech at the science workshop',
  },
  'about-2.webp': {
    de: 'Technik-Club auf der Schul-Informationsmesse',
    en: 'Technology club at the high school info fair',
    namesNoIndex: {
      de: ' (mit Arda Turan, Eren Uysal, Onur Eltuğral, Poyraz Ali Kalyoncu)',
      en: ' (with Arda Turan, Eren Uysal, Onur Eltuğral, Poyraz Ali Kalyoncu)',
    },
  },
  'about-3.webp': {
    de: 'Präsentation beim Hackathon',
    en: 'Presentation at the hackathon',
  },
  'about-4.webp': {
    de: 'Abschlussfoto des Hackathons',
    en: 'Closing photo of the hackathon',
  },
}

export function getAboutPhotos(): AboutPhoto[] {
  if (!fs.existsSync(aboutPhotosDirectory)) return []

  return fs
    .readdirSync(aboutPhotosDirectory)
    .filter((fileName) => imageExtensions.has(path.extname(fileName).toLowerCase()))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((fileName) => ({
      src: `/aboutme/${fileName}`,
      caption: captions[fileName],
    }))
}
