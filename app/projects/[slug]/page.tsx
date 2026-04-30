import Link from 'next/link'
import { notFound } from 'next/navigation'

// 1. IMPORT YOUR DATA
const projectsData = [
  {
    slug: 'a-eye',
    name: 'A-Eye: A Cataract maturity classification app',
    type: 'Mobile App',
    description: 'Deployed and developed a functional mobile app for cataract maturity classification using Flutter, and huggingface API.',
    tags: ['Flutter','Dart','Firebase','Android Studio','PyTorch', 'Huggingface'],
    githubUrl: 'https://github.com/reiidj/a-eye',
    fullOverview: 'A-Eye is a deep learning–driven system designed to assess anterior eye image maturity by combining a custom PyTorch model with a mobile-first Flutter interface. The core of the project is a modified MobileViT architecture enhanced with radial tokenization, allowing the model to better capture circular and region-specific patterns found in eye images, which traditional grid-based tokenization tends to miss. The pipeline processes raw eye images through preprocessing, tokenization, and feature extraction before producing a maturity score, with careful handling of data flow to ensure consistency between training and inference. One of the main challenges was aligning the theoretical model design with practical implementation, particularly in structuring the radial tokenizer and maintaining correct tensor transformations across multiple stages. Another critical issue was bridging the gap between the PyTorch backend and the Flutter frontend, requiring model optimization, export, and efficient API or on-device inference integration to ensure real-time usability. The project emphasizes both model accuracy and deployment feasibility, balancing computational cost with performance so the system remains responsive on mobile devices while still delivering meaningful predictions.',
    imageUrl: '/a-eye-poster.jpg',
    videoUrl: '/a-eye-demo.mp4',
  },
  {
    slug: 'phishing-please',
    name: 'Phishing Please',
    type: 'Game App',
    description: 'Deployed and developed a live phishing awareness game with complete flow scene, game mechanics, backend logic, and UI design.',
    tags: ['Unity','C#'],
    githubUrl: 'https://github.com/reiidj/Phishing-Please',
    fullOverview: '“Phishing Please” is a point-and-click educational game developed in Unity that teaches users how to identify email phishing attacks through interactive gameplay. The experience is structured across seven progressively difficult levels, each introducing more sophisticated phishing techniques such as spoofed domains, misleading links, urgent language, and subtle visual inconsistencies. Players analyze simulated emails and make decisions by clicking on elements they believe indicate a threat, reinforcing pattern recognition and critical evaluation skills. The core mechanics revolve around event-driven interactions, UI-based feedback, and a scoring system that tracks accuracy and progression, requiring careful handling of game state, input detection, and level transitions. One of the main challenges was designing levels that gradually increase in complexity without overwhelming the player, while still accurately reflecting real-world phishing scenarios. Another key aspect was implementing clear feedback loops so players understand why an action is correct or incorrect, turning mistakes into learning moments. The entire system was built and coded end-to-end, including gameplay logic, UI flow, and difficulty scaling, resulting in a functional serious game that blends cybersecurity education with engaging interaction.',
    imageUrl: '/phishing-poster.png',
    videoUrl: '/phishing-demo.mp4',
  },
]

export default async function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  // Unwrap the params (Next.js 15 requirement)
  const resolvedParams = await params;
  const project = projectsData.find((p) => p.slug === resolvedParams.slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen pt-24 pb-32">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Navigation: Back Button */}
        <div className="mb-12">
          <Link 
            href="/#projects" 
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
          >
            ← Back to Portfolio
          </Link>
        </div>

        {/* HERO MEDIA SHOWCASE */}
        <div className="w-full mb-12 flex items-center justify-center">
          
          {project.videoUrl ? (
            /* Adaptive Video Player */
            <video
              src={project.videoUrl}
              poster={project.imageUrl}
              autoPlay
              loop
              muted
              playsInline
              /* w-auto: Forces the element to shrink-wrap perfectly around the video.
                max-h-[70vh]: Caps the height so it fits on screen.
                Borders and shadows are now applied directly to the video tag!
              */
              className="w-auto max-h-[70vh] rounded-md border border-stone-200 dark:border-stone-800 shadow-sm"
            />
          ) : (
            /* Fallback Placeholder (Still keeps the full-width box since there is no video to hug) */
            <div className="w-full aspect-video rounded-md overflow-hidden border border-stone-200 dark:border-stone-800 bg-stone-100 dark:bg-stone-900 flex flex-col items-center justify-center gap-3 text-stone-400 dark:text-stone-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 opacity-50">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
              </svg>
              <span className="font-mono text-sm uppercase tracking-widest">
                Media Pending
              </span>
            </div>
          )}

        </div>

        {/* Project Header */}
        <header className="mb-16">
          <p className="text-emerald-600 dark:text-emerald-400 font-mono text-sm mb-4 uppercase tracking-wider">
            {project.type}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-stone-100 mb-6 leading-tight">
            {project.name}
          </h1>
          <p className="text-lg text-stone-600 dark:text-stone-400 leading-relaxed mb-8">
            {project.description}
          </p>
          
          <div className="flex gap-4">
            <a 
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm font-medium rounded-sm hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors"
            >
              View Repository
            </a>
          </div>
        </header>

        <hr className="border-stone-200 dark:border-stone-800 mb-16" />

        {/* Project Content Body */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_250px] gap-16">
          <div className="space-y-6 text-stone-700 dark:text-stone-300 leading-relaxed">
            <h2 className="text-2xl font-bold text-stone-900 dark:text-stone-100">Overview</h2>
            <p>
              {project.fullOverview}
            </p>
          </div>

          <div>
            <h3 className="text-sm tracking-widest uppercase text-stone-400 dark:text-stone-500 mb-6 font-mono">
              Technologies Used
            </h3>
            <ul className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <li 
                  key={tag}
                  className="text-xs px-3 py-1.5 bg-stone-100 dark:bg-stone-900 border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 rounded-sm font-mono"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </main>
  )
}