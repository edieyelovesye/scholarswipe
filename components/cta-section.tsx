import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="w-full py-20 bg-[#191919]">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">Ready to Find Your Perfect Scholarship?</h2>
            <p className="mx-auto max-w-[700px] text-xl text-gray-300">
              Join thousands of students discovering and securing their educational funding opportunities with our AI-powered platform.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-3 mt-6">
            <Button className="h-12 px-8 bg-white text-[#191919] hover:bg-gray-100">Get Started</Button>
            <Button
              variant="outline"
              className="h-12 px-8 bg-yellow-500 text-white hover:bg-yellow-600 border-none"
            >
              Discover Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

