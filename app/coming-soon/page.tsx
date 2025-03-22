'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const targetDate = new Date('April 5, 2024');
    const currentDate = new Date();
    
    // Calculate the difference in milliseconds
    const difference = targetDate.getTime() - currentDate.getTime();
    
    // Convert to days, hours, minutes, seconds
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    return {
      days: Math.max(0, days),
      hours: Math.max(0, hours),
      minutes: Math.max(0, minutes),
      seconds: Math.max(0, seconds)
    };
  })

  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail('')
    }
  }

  return (
    <div className="min-h-screen bg-[#191919] relative overflow-hidden">
      {/* Solid background - removed gradient */}
      <div className="absolute inset-0 bg-[#191919]"></div>
      
      {/* Glass morphism overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px] mix-blend-overlay opacity-20"></div>
      
      {/* Mesh pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>

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

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 max-w-3xl mx-auto">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div key={unit} className="transform hover:scale-105 transition-transform duration-300">
                <div className="rounded-2xl bg-white/5 backdrop-blur-lg p-6 border border-white/10 shadow-xl hover:bg-white/10 transition-all duration-300">
                  <div className="text-4xl font-bold text-white">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm font-medium text-white uppercase tracking-wider mt-2">{unit}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-md mx-auto w-full">
            {!isSubscribed ? (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-auto rounded-lg border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-400 backdrop-blur-lg focus:border-purple-500 focus:ring-purple-500 transition-all duration-300"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-black text-white hover:bg-gray-800 rounded-lg px-8 py-3 font-medium transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Notify Me
                </Button>
              </form>
            ) : (
              <div className="rounded-2xl bg-green-500/20 p-6 backdrop-blur-lg border border-green-500/20">
                <p className="text-lg font-medium text-green-400">
                  Thanks for subscribing! We'll keep you updated on our progress.
                </p>
              </div>
            )}
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