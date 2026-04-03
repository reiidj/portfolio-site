import Link from 'next/link'

export function Hero() {
  const techStack = ['Next.js', 'Laravel', 'Python', 'Unity / C#']

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
    {/* Intro Accent */}
    <p className="text-lg font-mono text-stone-900 dark:text-stone-100 mb-6 tracking-wide uppercase">
      Manila, Philippines
    </p>

      {/* Headline (Name with a solid color) */}
      <h1
        id="hero-heading"
        className="font-mono text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-stone-900 dark:text-stone-100 pb-2"
      >
        Rei Djemf Rivera
      </h1>

      {/* Main Title */}
      <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 font-medium max-w-2xl mb-8">
        Computer Science Student & Full-Stack Developer @ PUP Manila 2026
      </p>

      {/* Tech Stack Pills (Shows exactly what you do) */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="px-4 py-1.5 text-xs font-mono rounded-full bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Action Area (Socials + Resume) */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mt-4">
        
        {/* Resume Button - Now with a subtle glow on hover */}
        <Link
          href="/CV_RIVERA.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 px-8 py-3 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm font-semibold rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
        >
          {/* Hover glow effect */}
          <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/30 opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <span className="relative">View Resume</span>
          <ArrowUpRight className="relative w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>

        {/* Vertical divider visible only on desktop */}
        <div className="hidden sm:block w-px h-8 bg-stone-300 dark:bg-stone-700" />

        {/* Social Links */}
        <div className="flex items-center gap-5">
          {socialLinks.map(({ label, href, icon }) => (
            <Link
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 bg-stone-100 dark:bg-stone-900 rounded-full border border-transparent hover:border-stone-300 dark:hover:border-stone-700 transition-all"
              aria-label={label}
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Inline SVG Components (Keep these exactly the same as before) ---
function LinkedinIcon({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /> <rect x="2" y="9" width="4" height="12" /> <circle cx="4" cy="4" r="2" /> </svg> ) }
function GithubIcon({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> </svg> ) }
function MailIcon({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /> <polyline points="22,6 12,13 2,6" /> </svg> ) }
function ArrowUpRight({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <line x1="7" y1="17" x2="17" y2="7" /> <polyline points="7 7 17 7 17 17" /> </svg> ) }