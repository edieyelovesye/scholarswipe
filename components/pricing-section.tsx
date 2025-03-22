import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingSection() {
  return (
    <section id="pricing" className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2 max-w-3xl">
            <div className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600">Pricing</div>
            <h2 className="text-3xl font-bold tracking-tighter text-gray-900 md:text-4xl">
              Find Your Perfect Plan
            </h2>
            <p className="mx-auto max-w-[700px] text-xl text-gray-600">
              Choose the plan that's right for you and start finding scholarships today
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-16">
          <Card className="bg-white border-gray-200 text-gray-900 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Free</CardTitle>
              <CardDescription className="text-gray-600">Ideal for students starting their scholarship journey.</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $0<span className="ml-1 text-lg font-medium text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Limited scholarship matches</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Basic filtering options</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Access to general scholarship tips</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">Community Support</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-yellow-500 text-white hover:bg-yellow-600">Get Started</Button>
            </CardFooter>
          </Card>
          <Card className="bg-white border-blue-200 text-gray-900 shadow-lg relative">
            <div className="absolute -top-4 left-0 right-0 mx-auto w-32 rounded-full bg-blue-500 py-1 text-center text-xs font-medium text-white">
              Premium
            </div>
            <CardHeader>
              <CardTitle className="text-2xl">Premium</CardTitle>
              <CardDescription className="text-gray-600">Designed for students committed to maximizing their scholarship success.</CardDescription>
              <div className="mt-4 flex items-baseline text-5xl font-bold">
                $15<span className="ml-1 text-lg font-medium text-gray-500">/month</span>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Unlimited scholarship matches</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Advanced AI-powered recommendations</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Personalized success probability score</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Save unlimited scholarships</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Priority Support</span>
                </li>
                <li className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-blue-500" />
                  <span className="text-gray-700">Exclusive scholarship insights</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-blue-500 text-white hover:bg-blue-600">Get Started</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

