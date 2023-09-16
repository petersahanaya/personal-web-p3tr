import './globals.css'
import type { Metadata } from 'next'
import { Work_Sans, Bebas_Neue, Inter } from 'next/font/google'

const WorkSans = Work_Sans({
  fallback: ['sans-serif'],
  subsets: ['latin'],
  weight: ['400', '200', '300', '500', '700', '800'],
})

const inter = Inter({
  fallback: ['sans-serif'],
  subsets: ['cyrillic'],
  weight: ['400', '200', '300'],
})

const BebasNeue = Bebas_Neue({
  subsets: ['latin'],
  fallback: ['sans-serif'],
  weight: ['400'],
})

export const metadata: Metadata = {
  title: 'P3TR - Personal',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={` ${WorkSans.className} ${BebasNeue.className}`}
      >
        {children}
      </body>
    </html>
  )
}
