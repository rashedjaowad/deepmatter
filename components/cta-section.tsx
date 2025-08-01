"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MessageCircle, Calendar } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-light mb-6">
          Ready to Write Your
          <span className="block font-medium">Success Story?</span>
        </h2>
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          Join the growing list of businesses that have transformed their operations with our AI solutions. Let's
          discuss how we can help you achieve similar results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            onClick={() => (window.location.href = "/#demo")}
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Book a Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => (window.location.href = "/")}
            className="px-8 py-4 text-lg border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-white"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}
