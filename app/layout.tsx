import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Rei Djemf Rivera | Portfolio',
  description:
    'Computer Science student specializing in backend and full-stack development.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="relative bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 antialiased transition-colors duration-200">
        {/* Background layer */}
        <div className="fixed inset-0 -z-10 bg-pattern opacity-50" />

        {/* Navbar and Main content */}
        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}