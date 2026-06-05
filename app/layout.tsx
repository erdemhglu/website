import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/LanguageProvider'
import './globals.css'

export const metadata: Metadata = {
  title: 'Erdem Hacısalihoğlu',
  description: 'Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.',
  keywords: [
    'erdem',
    'radio amateur',
    'software developer',
    'computer science',
    'applied physics',
    'hamradio',
    'PCB design',
    'web programming',
    'system programming'
  ],
  authors: [{ name: 'Erdem Hacısalihoğlu' }],
  creator: 'Erdem Hacısalihoğlu',
  publisher: 'Erdem Hacısalihoğlu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://erdem.hacisalihoglu.eu'), // Update with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Erdem Hacısalihoğlu',
    description: 'Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.',
    url: 'https://erdem.hacisalihoglu.eu', // Update with your actual domain
    siteName: 'Erdem Hacısalihoğlu',
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Erdem Hacısalihoğlu',
    description: 'Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <head>
        <style>{`
html {
  font-family: ${GeistMono.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Erdem Hacısalihoğlu",
              "jobTitle": "Software Developer",
              "description": "Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.",
              "url": "https://erdem.hacisalihoglu.eu", // Update with your actual domain
              "knowsAbout": [
                "Computer Science",
                "Ham Radio",
                "PCB Design",
                "Web Programming",
                "System Programming"
              ],
              "alumniOf": {
                "@type": "Organization",
                "name": "Technische Universität Dortmund"
              }
            })
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
