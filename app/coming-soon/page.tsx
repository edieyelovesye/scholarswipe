'use client'

import Link from 'next/link'

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#191919] relative overflow-hidden">
      {/* Solid background - removed gradient */}
      <div className="absolute inset-0 bg-[#191919]"></div>
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px] mix-blend-overlay opacity-20"></div>
      
      {/* Curved line patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#ffffff10_1px,transparent_1px)] [background-size:32px_32px] [transform:skew(-12deg)] blur-[0.5px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(-45deg,#ffffff10_1px,transparent_1px)] [background-size:32px_32px] [transform:skew(12deg)] blur-[0.5px]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff15_1px,transparent_1px)] [background-size:20px_20px]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-blue-500 px-4 py-1.5 mb-6 backdrop-blur-sm shadow-lg">
              <span className="text-sm font-medium text-white">Coming Soon</span>
            </div>
            <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl">
              Something Amazing<br />is Coming
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-xl text-white leading-relaxed">
              We're crafting an innovative AI-powered scholarship platform that will revolutionize how students discover and secure their educational funding opportunities.
            </p>
          </div>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center text-lg font-medium text-white hover:text-yellow-400 transition-colors duration-300"
            >
              <span className="mr-2">←</span> Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}