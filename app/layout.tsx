import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
})

const SITE_URL = 'https://flagman1casino.vercel.app/'

export const metadata: Metadata = {
  title: 'Flagman Casino — официальный сайт, рабочее зеркало и игра онлайн на деньги',
  description:
    'Flagman Casino — официальный сайт и рабочее зеркало. Играйте онлайн в слоты и настольные игры. Флагман казино: регистрация, бонусы, быстрые выплаты и поддержка 24/7.',
  keywords: [
    'flagman casino',
    'flagman casino официальный сайт',
    'flagman casino зеркало',
    'flagman casino официальный',
    'флагман казино официальный сайт',
    'флагман казино',
    'flagman casino играть',
    'флагман казино зеркало рабочее',
    'flagman казино',
    'флагман казино онлайн',
    'флагман казино официальный',
    'флагман казино играть',
    'флагман казино зеркало',
  ],
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: 'Flagman Casino — официальный сайт, рабочее зеркало и игра онлайн',
    description:
      'Flagman Casino — официальный сайт и рабочее зеркало. Играйте онлайн в слоты и настольные игры. Флагман казино: бонусы и быстрые выплаты.',
    siteName: 'Flagman Casino',
    locale: 'ru_RU',
    images: [
      {
        url: `${SITE_URL}images/flagman-hero.jpg`,
        width: 1200,
        height: 630,
        alt: 'Flagman Casino — официальный сайт',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flagman Casino — официальный сайт, рабочее зеркало и игра онлайн',
    description:
      'Flagman Casino — официальный сайт и рабочее зеркало. Играйте онлайн в слоты и настольные игры.',
    images: [`${SITE_URL}images/flagman-hero.jpg`],
  },
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#0b3b2e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Дополнительные пользовательские теги можно вставлять сюда */}
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
