const projects = [
  {
    name: 'A-Eye: A Cataract maturity classification app',
    description: 'Deployed and developed a functional mobile app for cataract maturity classification using Flutter, and huggingface API.',
    tags: ['Flutter','Dart','Firebase','Android Studio','PyTorch', 'Huggingface'],
    href: 'https://github.com/reiidj/a-eye',
  },
  {
    name: 'Phishing Please',
    description: 'Deployed and developed a live phishing awareness game with complete flow scene, game mechanics, backend logic, and UI design.',
    tags: ['Unity','C#'],
    href: 'https://github.com/reiidj/Phishing-Please',
  },
]

export function Projects() {
  return (
    <section id="projects" className="border-t border-stone-200 dark:border-stone-800 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 mb-16"
          style={{ fontFamily: 'var(--font-mono)' }}>
          Projects
        </p>
        <h2 className="text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-16 leading-tight"
          style={{ fontFamily: 'var(--font-serif)' }}>
          Things I've built.
        </h2>
        <ul className="space-y-0">
          {projects.map((project) => (
            <li key={project.name}
              className="group py-8 border-t border-stone-200 dark:border-stone-800 last:border-b last:border-stone-200 last:dark:border-stone-800">
              <a href={project.href} target="_blank" rel="noopener noreferrer"
                className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100 mb-2
                    group-hover:text-stone-600 dark:group-hover:text-stone-300 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-sm text-stone-500 dark:text-stone-400 font-light max-w-lg">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 shrink-0">
                  {project.tags.map((tag) => (
                    <span key={tag}
                      className="text-xs px-3 py-1 border border-stone-200 dark:border-stone-700
                        text-stone-500 dark:text-stone-400 rounded-sm"
                      style={{ fontFamily: 'var(--font-mono)' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}