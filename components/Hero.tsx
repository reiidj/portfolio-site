import Link from 'next/link'

export function Hero() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/djemf/', icon: <LinkedinIcon className="w-5 h-5" /> },
    { label: 'GitHub', href: 'https://github.com/reiidj', icon: <GithubIcon className="w-5 h-5" /> },
    { label: 'Email', href: 'mailto:reidjemfrivera@gmail.com', icon: <MailIcon className="w-5 h-5" /> },
  ]

  return (
    <section
      className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center max-w-4xl mx-auto px-6 pt-16 pb-24 text-center"
      aria-labelledby="hero-heading"
    >
      {/* Intro Accent: Adjusted spacing for better rhythm */}
      <p className="text-sm font-mono text-stone-600 dark:text-stone-400 mb-4 tracking-widest uppercase font-semibold">
        Manila, Philippines
      </p>

      {/* Headline: Cleaned up spacing and ensured high contrast */}
      <h1
        id="hero-heading"
        className="font-mono text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4 text-stone-900 dark:text-stone-50"
      >
        Rei Djemf Rivera
      </h1>

      {/* Main Title: Increased contrast for readability */}
      <p className="text-lg md:text-xl text-stone-700 dark:text-stone-300 font-medium max-w-2xl mb-8 leading-relaxed">
        Computer Science Student & Software Engineer @ PUP Manila 2026
      </p>

      {/* Action Area: Introduced a primary 'View Projects' CTA alongside the Resume */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-2 w-full sm:w-auto">
        
        {/* Primary CTA: View Projects */}
        <Link
          href="#projects"
          className="group relative flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm font-bold rounded-full transition-all hover:bg-stone-800 dark:hover:bg-stone-200 active:scale-95 shadow-md hover:shadow-lg"
        >
          <span>View Projects</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>

        {/* Secondary CTA: View Resume (Outlined for visual hierarchy) */}
        <Link
          href="/CV_RIVERA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-stone-900 dark:text-stone-100 text-sm font-bold rounded-full border-2 border-stone-900 dark:border-stone-100 transition-all hover:bg-stone-100 dark:hover:bg-stone-900 active:scale-95"
        >
          <span>Resume</span>
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      {/* Social Links: Moved below the main CTAs to reduce friction, increased contrast */}
      <div className="flex items-center gap-6 mt-12 pt-8 border-t border-stone-200 dark:border-stone-800">
        {socialLinks.map(({ label, href, icon }) => (
          <Link
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-stone-600 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-50 transition-colors focus:outline-none focus:ring-2 focus:ring-stone-500 rounded-lg"
            aria-label={label}
          >
            {icon}
          </Link>
        ))}
      </div>
    </section>
  )
}

// --- Inline SVG Components ---
function LinkedinIcon({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" /> </svg> ) }
function GithubIcon({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> </svg> ) }
function MailIcon({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /> <polyline points="22,6 12,13 2,6" /> </svg> ) }
function ArrowUpRight({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <line x1="7" y1="17" x2="17" y2="7" /> <polyline points="7 7 17 7 17 17" /> </svg> ) }
function ArrowRight({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <line x1="5" y1="12" x2="19" y2="12" /> <polyline points="12 5 19 12 12 19" /> </svg> ) }