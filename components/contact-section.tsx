import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Get in Touch</h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              Have a question or want to work together? Send us a message and we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-lg space-y-6 mt-8">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="Your name" className="border-gray-300" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Your email" className="border-gray-300" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Your message" className="min-h-[150px] border-gray-300" />
          </div>
          <Button className="w-full bg-black text-white hover:bg-gray-800">Send Message</Button>
        </div>
      </div>
    </section>
  )
}

