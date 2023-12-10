import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Poppins } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: 'Movies Database',
  description: 'movie database using themoviedb.org',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
