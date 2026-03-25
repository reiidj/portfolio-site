import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'

export const metadata: Metadata = {
  title: 'Rei Djemf Rivera — Full-Stack Developer',
  description:
    'Full-stack web developer specializing in scalable web applications, clean APIs, and thoughtful user interfaces.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-stone-50 dark:bg-stone-950 text-stone-900 dark:text-stone-100 antialiased transition-colors duration-200">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}