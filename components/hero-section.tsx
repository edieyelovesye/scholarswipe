"use client"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function HeroSection() {
  const [videoModalOpen, setVideoModalOpen] = useState(false)

  return (
    <section className="relative overflow-hidden py-20 bg-white">
      {/* Background gradient */}
      {/* <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2">
        <div className="h-[500px] w-[1200px] rounded-full bg-gradient-to-r from-blue-500/20 via-yellow-500/20 to-blue-500/20 blur-3xl"></div>
      </div> */}

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-4 md:space-y-6 max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tighter text-gray-900 sm:text-5xl md:text-6xl">
            Discover Scholarships Tailored Just for You
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-gray-600">
            Our AI-powered platform simplifies your scholarship search, matching you with opportunities that fit your unique profile. 
            tart your journey towards funding your education today!
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-3">
            <Button className="h-12 px-8 bg-blue-500 text-white hover:bg-blue-600">Find →</Button>
            <Button variant="outline" className="h-12 px-8 border-yellow-500 text-yellow-600 hover:bg-yellow-50">
              Learn More
            </Button>
          </div>

          {/* <div className="relative mt-10 w-full max-w-5xl overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/placeholder.svg?height=600&width=1200"
              width={1200}
              height={600}
              alt="Product demo"
              className="w-full object-cover brightness-75 filter"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setVideoModalOpen(true)}
                className="group flex items-center gap-2 rounded-full bg-black/30 px-4 py-2 text-white backdrop-blur-sm transition-all hover:bg-black/50"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 transition-transform group-hover:scale-110">
                  <Play className="h-4 w-4 fill-current" />
                </span>
                <span>Watch Demo · 3:47</span>
              </button>
            </div>
          </div> */}
        </div>
      </div>

      {/* {videoModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -right-4 -top-4 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
              onClick={() => setVideoModalOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="aspect-video w-full bg-black">
              <div className="flex h-full items-center justify-center">
                <p className="text-white">Video would play here</p>
              </div>
            </div>
          </div>
        </div>
      )} */}
    </section>
  )
}

