import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-100px)] flex flex-col items-center justify-center px-6 text-center">
      
      {/* 404 Glitch/Mono Text */}
      <p 
        className="text-sm font-bold text-stone-400 dark:text-stone-500 mb-6 tracking-widest uppercase"
        style={{ fontFamily: 'var(--font-mono)' }}
      >
        Error 404
      </p>

      {/* Main Heading */}
      <h1 
        className="text-5xl md:text-6xl font-extrabold text-stone-900 dark:text-stone-100 mb-6 leading-tight"
        style={{ fontFamily: 'var(--font-serif)' }}
      >
        Page not found.
      </h1>

      {/* Subtext */}
      <p className="text-lg text-stone-600 dark:text-stone-400 max-w-md mx-auto mb-10 leading-relaxed">
        It looks like the project or page you are looking for doesn't exist, or it might have been moved.
      </p>

      {/* Return Home Button */}
      <Link 
        href="/"
        className="inline-flex items-center gap-2 px-8 py-3 bg-stone-900 dark:bg-stone-100 text-stone-50 dark:text-stone-900 text-sm font-medium rounded-sm hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors"
      >
        Return to Home
      </Link>
      
    </main>
  )
}