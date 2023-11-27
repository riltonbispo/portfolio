import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/app/(site)/components/global/Navbar'
import Footer from '@/app/(site)/components/global/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rilton Bispo',
  description: 'Portfolio Rilton Bispo dos Santos',
  openGraph: {
    images: 'add-your-open-graph-image-url-here',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-950 text-white`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
