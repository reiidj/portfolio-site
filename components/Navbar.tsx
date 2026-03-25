'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ThemeToggle } from '@/components/ThemeToggle'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/90 dark:bg-stone-900/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-700/80 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between"
        aria-label="Primary navigation"
      >
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-stone-900 dark:text-stone-100 hover:text-stone-600 dark:hover:text-stone-300 transition-colors"
        >
          Rei Djemf Rivera
        </Link>

        {/* Center links */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {navLinks.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors tracking-wide"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Status indicator + theme toggle */}
        <div className="flex items-center gap-4">
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
      </nav>
    </header>
  )
}