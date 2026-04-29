import Link from 'next/link'

// Updated data structure to include 'type' and 'slug'
const projects = [
  {
    slug: 'a-eye', // This creates the URL: /projects/a-eye
    name: 'A-Eye: A Cataract maturity classification app',
    type: 'Mobile App', // The new classification placeholder
    description: 'Deployed and developed a functional mobile app for cataract maturity classification using Flutter, and huggingface API.',
    tags: ['Flutter','Dart','Firebase','Android Studio','PyTorch', 'Huggingface'],
    githubUrl: 'https://github.com/reiidj/a-eye', // Renamed to separate from internal routing
  },
  {
    slug: 'phishing-please', // This creates the URL: /projects/phishing-please
    name: 'Phishing Please',
    type: 'Game App',
    description: 'Deployed and developed a live phishing awareness game with complete flow scene, game mechanics, backend logic, and UI design.',
    tags: ['Unity','C#'],
    githubUrl: 'https://github.com/reiidj/Phishing-Please',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Label */}
        <p className="text-xs tracking-[0.2em] uppercase text-stone-400 dark:text-stone-500 mb-16" style={{ fontFamily: 'var(--font-mono)' }}>
          Projects
        </p>
        
        <h2 className="text-4xl md:text-5xl text-stone-900 dark:text-stone-100 mb-16 leading-tight" style={{ fontFamily: 'var(--font-serif)' }}>
          Things I've built.
        </h2>

        {/* Added a subtle background to the list container. 
            'bg-stone-50/50' allows some ducks to peek through slightly 
            while 'backdrop-blur' keeps the text crisp.
        */}
        <ul className="space-y-4"> 
          {projects.map((project) => (
            <li 
              key={project.name} 
              className="group p-8 rounded-xl border border-stone-200 dark:border-stone-800 
                         bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-sm
                         hover:bg-white dark:hover:bg-stone-900 
                         transition-all duration-300 hover:shadow-xl hover:shadow-stone-200/50 dark:hover:shadow-none"
            >
              
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                {/* Left Side: Info & Links */}
                <div className="flex flex-col gap-3 max-w-xl">
                  
                  <div className="flex items-center gap-3">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-stone-900 dark:text-stone-500 dark:hover:text-stone-100 transition-colors"
                      title="View Source on GitHub"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <h3 className="text-xl font-medium text-stone-900 dark:text-stone-100">
                      {project.name}
                    </h3>
                  </div>

                  <p className="text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 font-semibold" style={{ fontFamily: 'var(--font-mono)' }}>
                    {project.type}
                  </p>

                  <p className="text-sm text-stone-600 dark:text-stone-400 font-light leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-stone-900 dark:text-stone-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group/btn"
                    >
                      Read Project Details
                      <ArrowRightIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Side: Tags */}
                <div className="flex flex-wrap gap-2 shrink-0 md:max-w-[350px] lg:max-w-[400px] justify-start md:justify-end mt-4 md:mt-0">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="text-[10px] px-2 py-1 bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400 rounded-md"
                      style={{ fontFamily: 'var(--font-mono)' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// --- Inline SVGs ---
function GithubIcon({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /> </svg> ) }
function ArrowRightIcon({ className }: { className?: string }) { return ( <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}> <path d="M5 12h14M12 5l7 7-7 7" /> </svg> ) }