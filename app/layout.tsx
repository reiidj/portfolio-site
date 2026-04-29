import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { WalkingDuck } from '@/components/WalkingDuck'

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
        
        {/* The Mallard Pattern Layer */}
        <div 
          className="fixed inset-0 -z-10 mallard-pattern opacity-[0.075] dark:opacity-[0.07] pointer-events-none" 
          aria-hidden="true"
        />
        
        <WalkingDuck /> {/* Our new friend */}

        <Navbar />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
} 