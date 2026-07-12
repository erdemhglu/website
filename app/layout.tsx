import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { LanguageProvider } from '@/components/LanguageProvider'
import Sidebar from '@/components/Sidebar'
import './globals.css'

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const robotoDisplay = Roboto({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

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
  metadataBase: new URL('https://erdemhacisalihoglu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Erdem Hacısalihoğlu',
    description: 'Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.',
    url: 'https://erdemhacisalihoglu.com',
    siteName: 'Erdem Hacısalihoğlu',
    locale: 'en_US',
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
    <html lang="en" className={`${robotoDisplay.variable} ${roboto.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Erdem Hacısalihoğlu",
              "jobTitle": "Software Developer",
              "description": "Bachelorstudent der Informatik mit starkem Interesse an Amateurfunk, Leiterplatten-Design (PCB) sowie Web- und Systemprogrammierung.",
              "url": "https://erdemhacisalihoglu.com",
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
      <body className="bg-white dark:bg-neutral-950" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="md:flex">
              <Sidebar />
              <div className="min-w-0 flex-1 pt-14 md:pt-0">{children}</div>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
