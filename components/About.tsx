const specialties = [
  {
    label: 'Backend and API Engineering',
    description:
      'Designing secure, scalable server-side logic and RESTful APIs. Experience building backend systems with Python (Flask) and Java, and connecting them to robust databases including PostgreSQL, MySQL, and Firebase.',
  },
  {
    label: 'Applied Machine Learning',
    description:
      'Bridging the gap between advanced AI models and user-facing apps. Extensive experience engineering real-time AI inference pipelines using PyTorch and Hugging Face Spaces, ensuring seamless API communication and live data synchronization.',
  },
  {
    label: 'Full-Stack and Systems Architecture',
    description:
      'Thinking in systems to connect robust backends to dynamic client interfaces. Experience managing state, API consumption, and schema design across Next.js web applications, Flutter mobile apps, and C# environments.',
  },
  {
    label: 'DevOps and Deployment',
    description:
      'Taking applications from local development to production. Proficient in Git version control and deploying robust backends, live APIs, and web applications using modern hosting platforms like Render and Hugging Face.',
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
            {/* Top Row: Photo + Headline */}
            <div className="flex flex-col sm:flex-row items-center sm:items-stretch gap-6 sm:gap-8 mb-8">
              
              {/* Profile photo with corner borders */}
              <div className="relative shrink-0 w-32 h-32 sm:w-36 sm:h-36">
                {/* The photo */}
                <img
                  src="/Personal_Image.jpg"
                  alt="A Photo of Rei Djemf Rivera"
                  className="w-full h-full object-cover object-top grayscale rounded-sm"
                />

                {/* Top-left corner */}
                <span className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-stone-400 dark:border-stone-500" />
                {/* Top-right corner */}
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 border-t-2 border-r-2 border-stone-400 dark:border-stone-500" />
                {/* Bottom-left corner */}
                <span className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-b-2 border-l-2 border-stone-400 dark:border-stone-500" />
                {/* Bottom-right corner */}
                <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-stone-400 dark:border-stone-500" />
              </div>

              {/* Headline vertically aligned with the photo */}
              <div className="flex flex-col justify-center text-center sm:text-left">
                <h2
                  id="about-heading"
                  className="text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-[1.1]"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  Engineer, <br className="hidden sm:block" />
                  <span className="text-stone-500 dark:text-stone-400">not just developer.</span>
                </h2>
              </div>
            </div>

            {/* Bio text flowing underneath */}
            <div className="space-y-5 text-stone-500 dark:text-stone-400 font-light leading-relaxed">
              <p>
                I'm a graduating Computer Science student at PUP Manila with
                hands-on experience building full-stack applications from the
                ground up. My primary focus is on backend architecture — designing
                relational databases, engineering RESTful APIs, and managing server
                deployments, with experience in multi-team collaboration using Git.
              </p>
              <p>
                My background spans both sides of the stack. While I am capable on the frontend 
                with Next.js and Flutter, I thrive when working under the hood with Python and Java 
                to solve complex logic and data problems. I specialize in bridging the gap between 
                advanced AI models and user-facing applications, such as deploying live 
                PyTorch inference pipelines and managing real-time data synchronization. 
                I write code that's meant to be scaled, read, and maintained.
              </p>
              <p>
                I'm actively looking for my first full-time engineering role
                where I can contribute to a real product, work alongside
                experienced engineers, and keep growing.
              </p>
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