'use client'
import { useState } from 'react'

export function WalkingDuck() {
  const [isScared, setIsScared] = useState(false);

  return (
    <div 
      className={`duck-container cursor-pointer group ${isScared ? 'mb-4' : 'mb-0'}`}
      onClick={() => {
        setIsScared(true);
        setTimeout(() => setIsScared(false), 800);
      }}
    >
      {/* 1. Only this wrapper and its images will flip direction */}
      <div className="duck-sprite-wrapper relative w-full h-full">
        <img src="/mallard.png" className="frame-1" alt="Mallard frame 1" />
        <img src="/mallard-walk.png" className="frame-2" alt="Mallard frame 2" />
      </div>
      
      {/* 2. The Text is outside the flip-wrapper, so it never mirrors */}
      {isScared && (
        <span className="absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] font-mono font-bold bg-white dark:bg-stone-800 px-2 py-0.5 rounded-full border border-stone-200 shadow-sm animate-bounce text-stone-900 dark:text-stone-100">
          QUACK!
        </span>
      )}
    </div>
  )
}