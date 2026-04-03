const specialties = [
  {
    label: 'Back-End Systems',
    description:
      'RESTful APIs, database design, authentication flows, and server-side logic built with Node.js, PostgreSQL, and Prisma.',
  },
  {
    label: 'Front-End Engineering',
    description:
      'React and Next.js applications with a focus on component architecture, performance, and accessibility.',
  },
  {
    label: 'Developer Tooling',
    description:
      'Git workflows, CI/CD pipelines, containerization, and deployment automation with Vercel and GitHub Actions.',
  },
  {
    label: 'System Design',
    description:
      'Thinking in systems — from schema design to API contracts to UI state — with long-term maintainability in mind.',
  },
]

export function About() {
  return (
    <section
      id="about"
      className="border-t border-stone-200 dark:border-stone-800 py-24 md:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Section label */}
        <p
          className="text-xs tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 mb-16"
          style={{ fontFamily: 'var(--font-mono)' }}
        >
          About
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Bio column */}
          <div>
            <h2
              id="about-heading"
              className="text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-8 leading-tight"
              style={{ fontFamily: 'var(--font-serif)' }}
            >
              Engineer, not just developer.
            </h2>

            {/* Photo + bio side by side */}
            <div className="flex gap-8 items-start mb-0">

              {/* Profile photo with corner borders */}
              <div className="relative shrink-0 w-28 h-28 sm:w-32 sm:h-32">

                {/* The photo */}
                <img
                  src="/Personal_Image.jpg"
                  alt="A Photo of Rei Djemf Rivera"
                  className="w-full h-full object-cover object-top grayscale"
                />

                {/* Top-left corner */}
                <span className="absolute -top-1.5 -left-1.5 w-4 h-4
                  border-t-2 border-l-2 border-stone-400 dark:border-stone-500" />

                {/* Top-right corner */}
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4
                  border-t-2 border-r-2 border-stone-400 dark:border-stone-500" />

                {/* Bottom-left corner */}
                <span className="absolute -bottom-1.5 -left-1.5 w-4 h-4
                  border-b-2 border-l-2 border-stone-400 dark:border-stone-500" />

                {/* Bottom-right corner */}
                <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4
                  border-b-2 border-r-2 border-stone-400 dark:border-stone-500" />
              </div>

              {/* Bio text */}
              <div className="space-y-5 text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                <p>
                  I'm a graduating computer science student with hands-on
                  experience building full-stack applications from the ground
                  up — including production deployments, schema migrations, and
                  multi-team collaboration using Git.
                </p>
                <p>
                  My background spans both sides of the stack. I care as much
                  about a well-indexed database query as a well-structured React
                  component. I write code that's meant to be read and maintained,
                  not just executed.
                </p>
                <p>
                  I'm actively looking for my first full-time engineering role
                  where I can contribute to a real product, work alongside
                  experienced engineers, and keep improving.
                </p>
              </div>
            </div>

            {/* Quick facts */}
            <div className="mt-10 pt-10 border-t border-stone-200 dark:border-stone-800 grid grid-cols-2 gap-6">
              {[
                { label: 'Location', value: 'Manila, PH · Remote OK' },
                { label: 'Education', value: 'B.S. Computer Science' },
                { label: 'Stack', value: 'TypeScript · Next.js · PostgreSQL' },
                { label: 'Status', value: 'Graduating 2026' },
              ].map(({ label, value }) => (
                <div key={label}>
                  <dt
                    className="text-xs tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-1"
                    style={{ fontFamily: 'var(--font- no)' }}
                  >
                    {label}
                  </dt>
                  <dd className="text-sm text-stone-700 dark:text-stone-300">{value}</dd>
                </div>
              ))}
            </div>
          </div>

          {/* Specialties column */}
          <div>
            <h3
              className="text-sm text-stone-400 dark:text-stone-500 mb-8 tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-mono)' }}
            >
              Specialties
            </h3>
            <ul className="space-y-0" role="list">
              {specialties.map(({ label, description }, i) => (
                <li
                  key={label}
                  className="group py-6 border-t border-stone-200 dark:border-stone-800 last:border-b last:border-stone-200 last:dark:border-stone-800"
                >
                  <div className="flex items-start gap-4">
                    <span
                      className="text-xs text-stone-300 dark:text-stone-700 mt-1 w-5 shrink-0"
                      style={{ fontFamily: 'var(--font-mono)' }}
                      aria-hidden="true"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-stone-900 dark:text-stone-100 mb-1.5">
                        {label}
                      </p>
                      <p className="text-sm text-stone-500 dark:text-stone-400 font-light leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}