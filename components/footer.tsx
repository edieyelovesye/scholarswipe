import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 py-16">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 group transition-transform duration-200 hover:scale-105">
              <div className="h-10 w-10">
                <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <defs>
                    <linearGradient x1="0%" y1="32.443%" x2="104.18%" y2="50%" id="logo-footer-a">
                      <stop stopColor="#FFF" stopOpacity=".299" offset="0%" />
                      <stop stopColor="#3B82F6" stopOpacity="0" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="18.74%" y1="60.664%" x2="96.093%" y2="0%" id="logo-footer-b">
                      <stop stopColor="#EAB308" offset="0%" />
                      <stop stopColor="#FACC15" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="58.569%" y1="46.95%" x2="0%" y2="39.409%" id="logo-footer-c">
                      <stop stopColor="#3B82F6" offset="0%" />
                      <stop stopColor="#2563EB" offset="100%" />
                    </linearGradient>
                  </defs>
                  <rect fill="url(#logo-footer-a)" width="32" height="32" rx="16" />
                  <path
                    d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                    fill="#2563EB"
                  />
                  <path
                    d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                    fill="url(#logo-footer-c)"
                  />
                  <path
                    d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                    fill="url(#logo-footer-b)"
                  />
                </svg>
              </div>
              <span className="font-bold text-xl text-white group-hover:text-yellow-400 transition-colors duration-200">ScholarSwipe</span>
            </Link>
            <p className="mt-6 text-base text-white/90 max-w-xs leading-relaxed">
            Our AI-powered platform simplifies your scholarship search, matching you with opportunities that fit your unique profile. Start your journey towards funding your education today!
            </p>
            <div className="mt-6 flex space-x-4">
              <Link href="/coming-soon" className="text-white hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="/coming-soon" className="text-white hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="/coming-soon" className="text-white hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="/coming-soon" className="text-white hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="/coming-soon" className="text-white hover:text-yellow-400 transition-colors duration-200 transform hover:scale-110">
                <Github className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Scholarship Tools</h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Product
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Help & Support</h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Support Center
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Scholarship Tips
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Community Forum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-6">About Us</h3>
            <ul className="space-y-4 text-base">
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link href="/coming-soon" className="text-white/90 hover:text-yellow-400 transition-colors duration-200 inline-block transform hover:translate-x-1">
                  License
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-blue-500/30 pt-8 text-center text-sm text-white/90">
          <p>© ScholarSwipe. All rights reserved. Made with ❤️ by <Link href="https://instagram.com/29faded" className="text-white hover:text-yellow-400 transition-colors duration-200">@29faded</Link></p>
        </div>
      </div>
    </footer>
  )
}

