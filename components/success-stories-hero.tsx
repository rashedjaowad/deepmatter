"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"

export function SuccessStoriesHero() {
  const scrollToStories = () => {
    document.getElementById("detailed-stories")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-50 to-white pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-medium mb-8">
            <TrendingUp className="w-4 h-4 mr-2" />
            Real Results, Real Impact
          </div>

          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Success
            <span className="block font-medium bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Discover how we've helped businesses across industries transform their operations, reduce costs, and
            accelerate growth through intelligent AI solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={scrollToStories}
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg"
            >
              Read Success Stories
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window.location.href = "/#demo")}
              className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50"
            >
              Start Your Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
      </div>
    </section>
  )
}
