"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#e5e5e5] bg-[#f5f5f5]">
      <div className="container flex h-16 items-center justify-between py-4">
        <div className="flex items-center gap-6 md:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-8 w-8">
              <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  fill="#000"
                  stroke="#000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="#000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="#000"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="font-medium">Relume</span>
          </Link>
        </div>
        <nav className="hidden md:flex md:items-center md:gap-6">
          <Link href="/coming-soon" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">
            Features
          </Link>
          <Link href="/coming-soon" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">
            About
          </Link>
          <Link href="/coming-soon" className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600">
            Contact
          </Link>
          <Link href="/coming-soon">
            <Button variant="outline" className="ml-4 border-gray-300 text-gray-900 hover:bg-gray-100">
              Sign In
            </Button>
          </Link>
          <Link href="/coming-soon">
            <Button className="bg-black text-white hover:bg-gray-800">Get Started</Button>
          </Link>
        </nav>
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="container md:hidden">
          <div className="flex flex-col space-y-4 pb-4">
            <Link
              href="/coming-soon"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/coming-soon"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/coming-soon"
              className="text-sm font-medium text-gray-900 transition-colors hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col space-y-2 pt-2">
              <Link href="/coming-soon">
                <Button
                  variant="outline"
                  className="w-full justify-start border-gray-300 text-gray-900 hover:bg-gray-100"
                >
                  Sign In
                </Button>
              </Link>
              <Link href="/coming-soon">
                <Button className="w-full justify-start bg-black text-white hover:bg-gray-800">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

