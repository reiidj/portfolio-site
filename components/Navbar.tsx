'use client'

import Link from 'next/link'
import { ThemeToggle } from '@/components/ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-stone-50 dark:bg-stone-950 border-b border-stone-200/50 dark:border-stone-800/50 transition-colors duration-200">
      <nav
        className="max-w-8xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo / Name (Now Bigger and Bolder) */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        >
          Rei Djemf Rivera
        </Link>

        {/* Right Side Group (Links + Status + Toggle) */}
        <div className="flex items-center gap-8">
          
          {/* Links (Moved to the right) */}
          <ul className="hidden md:flex items-center gap-6" role="list">
            {navLinks.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className="text-sm font-medium text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors tracking-wide"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Status indicator + theme toggle */}
          <div className="flex items-center gap-4 pl-4 border-l border-stone-200 dark:border-stone-800">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs text-stone-500 dark:text-stone-400 tracking-wide hidden sm:block">
                Open to opportunities
              </span>
            </div>
            <ThemeToggle />
          </div>

        </div>
      </nav>
    </header>
  )
}