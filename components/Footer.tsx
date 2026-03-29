const contactLinks = [
  { label: 'GitHub', href: 'https://github.com/reiidj' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/djemf/' },
  { label: 'Email', href: 'mailto:reidjemfrivera@gmail.com' },
  { label: 'Resume', href: '/resume.pdf' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contact"
      className="border-t border-stone-200 dark:border-stone-800"
      aria-label="Site footer"
    >
      {/* Contact CTA strip */}
      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end">
          <div>
            <p
              className="text-xs tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 mb-4"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Contact
            </p>
            <h2
              className="text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Let's build
              <br />
              something together.
            </h2>
          </div>
          <div className="md:text-right">
            <p className="text-stone-500 dark:text-stone-400 font-light mb-6 max-w-xs md:ml-auto">
              I'm currently open to full-time positions and contract
              opportunities. Say hello.
            </p>
            <a
              href="mailto:reidjemfrivera@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm tracking-wide hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors rounded-sm"
            >
              Send a message
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-stone-200 dark:border-stone-800">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-stone-400 dark:text-stone-500 tracking-wide"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            © {year} Rei Djemf Rivera
          </p>

          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6" role="list">
              {contactLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                    className="text-xs text-stone-400 dark:text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors tracking-wide"
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <p
            className="text-xs text-stone-300 dark:text-stone-600 tracking-wide hidden md:block"
            style={{ fontFamily: 'var(--font-mono)' }}
          >
            Built with Next.js · Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  )
}