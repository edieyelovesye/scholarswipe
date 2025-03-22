import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-gray-100 to-gray-200">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-600 shadow-sm transition-all duration-200 hover:bg-blue-200 hover:text-blue-700">About Us</div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">Our Approach to Design</h2>
            <p className="text-gray-600 md:text-xl leading-relaxed">
              We believe in the power of minimalism. By stripping away the unnecessary, we create space for what truly
              matters. Our design philosophy is centered around simplicity, functionality, and elegance.
            </p>
            <div className="space-y-2">
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                <p className="text-gray-600 font-medium">Focus on user experience</p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                <p className="text-gray-600 font-medium">Attention to detail</p>
              </div>
              <div className="flex items-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-500"></div>
                <p className="text-gray-600 font-medium">Performance-driven development</p>
              </div>
            </div>
            <Button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg transition-all duration-200 transform hover:scale-105">Learn More About Us</Button>
          </div>
          <div className="flex items-center justify-center">
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-lg">
              <div className="aspect-square w-full max-w-md">
                <div className="flex h-full w-full items-center justify-center bg-gray-100 p-6">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-40 w-40 text-blue-500 transform transition-transform duration-500 hover:scale-110"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2L2 7L12 12L22 7L12 2Z"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 17L12 22L22 17"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 12L12 17L22 12"
                      stroke="currentColor"
                      strokeWidth="1"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

