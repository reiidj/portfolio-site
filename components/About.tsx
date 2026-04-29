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
      className="relative py-24 md:py-32 border-t border-stone-200 dark:border-stone-800"
    >
      {/* 1. The Gradient Mask: 
          This creates a soft white 'glow' behind the text. 
          It's invisible to the eye but makes the ducks fade out 
          where the content is densest. */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-50/40 via-white/80 to-stone-50/40 dark:from-stone-950/40 dark:via-stone-900/80 dark:to-stone-950/40 -z-0 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 mb-16 font-mono">
          About
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Bio Column */}
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row items-center gap-8">
              <div className="relative shrink-0 w-32 h-32 sm:w-36 sm:h-36">
                <img
                  src="/Personal_Image.jpg"
                  className="w-full h-full object-cover grayscale rounded-sm"
                  alt="Rei Rivera"
                />
                {/* Keep your signature corner borders */}
                <span className="absolute -top-1.5 -left-1.5 w-4 h-4 border-t-2 border-l-2 border-stone-400" />
                <span className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-b-2 border-r-2 border-stone-400" />
              </div>
              
              <h2 className="text-4xl md:text-5xl text-stone-900 dark:text-stone-100 leading-tight font-serif">
                Engineer, <br />
                <span className="text-stone-400">not just developer.</span>
              </h2>
            </div>

            <div className="space-y-6 text-stone-600 dark:text-stone-400 font-light leading-relaxed text-lg">
              <p>
                I'm a graduating Computer Science student at PUP Manila. My focus 
                is on <span className="text-stone-900 dark:text-stone-100 font-medium">backend architecture</span> — 
                designing systems that are meant to be scaled and maintained.
              </p>
              <p>
                I specialize in bridging the gap between advanced AI models and 
                user-facing apps, deploying live PyTorch pipelines and managing 
                real-time data sync.
              </p>
            </div>
          </div>

          {/* Specialties Column */}
          <div>
            <h3 className="text-xs text-stone-400 mb-8 tracking-widest uppercase font-mono">
              Specialties
            </h3>
            <ul className="divide-y divide-stone-200/60 dark:divide-stone-800/60">
              {specialties.map(({ label, description }, i) => (
                <li key={label} className="py-6 first:pt-0">
                  <div className="flex gap-4">
                    <span className="text-[10px] text-stone-300 font-mono mt-1">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h4 className="text-stone-900 dark:text-stone-100 font-medium mb-1">
                        {label}
                      </h4>
                      <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed font-light">
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