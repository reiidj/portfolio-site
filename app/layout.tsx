import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/Navbar'
import { WalkingDuck } from '@/components/WalkingDuck'

export const metadata: Metadata = {
  title: 'Rei Djemf Rivera | Full Stack Developer & PUP Computer Science Graduate',
  description:
    'Rei Djemf Rivera is a Full Stack Developer and Computer Science graduate from PUP Manila, specializing in Next.js, React, TypeScript, PostgreSQL, and modern web applications.',
  keywords: ['Rei Djemf Rivera', 'Rei Rivera portfolio', 'Rei Djemf Rivera web developer', 'PUP Computer Science portfolio'],
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