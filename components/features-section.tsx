import { Zap, Shield, BarChart, Users, Code, Layers } from "lucide-react"

export function FeaturesSection() {
  return (
    <section id="features" className="w-full py-20 bg-blue-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm text-white">Discover</div>
            <h2 className="text-3xl font-bold tracking-tighter text-white md:text-4xl">
            Unlock Your Scholarship Potential Today
            </h2>
            <p className="mx-auto max-w-[700px] text-xl text-blue-50">
            Our platform connects you with scholarships tailored to your unique profile. Experience a seamless journey towards funding your education.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          <div className="flex flex-col space-y-3 rounded-lg border border-blue-400 bg-white p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Tailored Scholarships Just for You</h3>
            <p className="text-gray-600">Receive scholarship matches that align with your goals.</p>
          </div>
          <div className="flex flex-col space-y-3 rounded-lg border border-blue-400 bg-white p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Maximize Your Chances of Winning Scholarships</h3>
            <p className="text-gray-600">Increase your odds with our data-driven insights.</p>
          </div>
          <div className="flex flex-col space-y-3 rounded-lg border border-blue-400 bg-white p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
              <BarChart className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900">Effortless Application Process</h3>
            <p className="text-gray-600">Apply for scholarships with just a few clicks.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

