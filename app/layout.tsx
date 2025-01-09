import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TensaiAcademy - Empowering Youth through Free Skills Training',
  description: 'Join TensaiAcademy for cutting-edge AI and tech skills training. Apply now for our first batch of TensaiDevs AI program!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

