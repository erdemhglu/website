import { Metadata } from "next"
import AboutContent from "@/components/AboutContent"
import { getAboutPhotos } from "@/lib/aboutPhotos"

export const metadata: Metadata = {
  title: "About Me | Erdem Hacısalihoğlu",
  description: "Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.",
  creator: "Erdem Hacısalihoğlu",
  publisher: "Erdem Hacısalihoğlu",
  alternates: {
    canonical: "/about",
  },
}

export default function AboutPage() {
  const photos = getAboutPhotos()
  return <AboutContent photos={photos} />
}
