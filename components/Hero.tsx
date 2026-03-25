import Link from 'next/link'

export function Hero() {
  return (
    <section
      className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-14"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-3xl">
        {/* Eyebrow */}
        <p
          className="text-xs tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 mb-8"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Full-Stack Web Developer
        </p>

        {/* Headline */}
        <h1
          id="hero-heading"
          className="text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-stone-900 dark:text-stone-100 mb-8"
          style={{ fontFamily: 'var(--font-serif)' }}
        >
          Building things
          <br />
          <em className="not-italic text-stone-400 dark:text-stone-600">for the web.</em>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-stone-500 dark:text-stone-400 font-light leading-relaxed max-w-xl mb-12">
          I design and build full-stack web applications — from relational
          databases to responsive interfaces — with a focus on clarity,
          performance, and maintainability.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm tracking-wide hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors rounded-sm"
          >
            View Projects
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 border border-stone-300 dark:border-stone-700 text-stone-700 dark:text-stone-300 text-sm tracking-wide hover:border-stone-500 dark:hover:border-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors rounded-sm"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="mt-auto pb-10 flex items-center gap-3 text-stone-400 dark:text-stone-600">
        <div className="w-px h-10 bg-stone-300 dark:bg-stone-700" />
        <span
          className="text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          Scroll
        </span>
      </div>
    </section>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  )
}