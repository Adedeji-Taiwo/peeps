import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import PeepProvider from '@/context/peep.context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Peep App',
  description: 'An Application for user data',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative bg-bg`}>
        <PeepProvider>
          {children}
        </PeepProvider>
      </body>
    </html>
  )
}
