import Link from "next/link"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"

import { PricingSection } from "@/components/pricing-section"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="w-full py-5 bg-white">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8">
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                <defs>
                  <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="logo-a">
                    <stop stopColor="#FFF" stopOpacity=".299" offset="0%" />
                    <stop stopColor="#3B82F6" stopOpacity="0" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="18.74%" y1="60.664%" x2="96.093%" y2="0%" id="logo-b">
                    <stop stopColor="#EAB308" offset="0%" />
                    <stop stopColor="#FACC15" offset="100%" />
                  </linearGradient>
                  <linearGradient x1="58.569%" y1="46.95%" x2="0%" y2="39.409%" id="logo-c">
                    <stop stopColor="#3B82F6" offset="0%" />
                    <stop stopColor="#2563EB" offset="100%" />
                  </linearGradient>
                </defs>
                <rect fill="url(#logo-a)" width="32" height="32" rx="16" />
                <path
                  d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                  fill="#2563EB"
                />
                <path
                  d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                  fill="url(#logo-c)"
                />
                <path
                  d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                  fill="url(#logo-b)"
                />
              </svg>
            </div>
          </Link>
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="text-gray-800 hover:bg-gray-100">
              Sign In
            </Button>
            <Button className="bg-blue-500 text-white hover:bg-blue-600">Register</Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <HeroSection />
        <FeaturesSection />
  
        <PricingSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

