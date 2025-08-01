"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The AI solution completely transformed how we handle customer inquiries. Our team can now focus on strategic initiatives while the AI handles routine questions flawlessly.",
    author: "Sarah Chen",
    role: "VP of Operations",
    company: "TechFlow Solutions",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=SC",
  },
  {
    quote:
      "The predictive analytics platform has been a game-changer for our inventory management. We've eliminated waste and improved our bottom line significantly.",
    author: "Michael Rodriguez",
    role: "Supply Chain Director",
    company: "Global Manufacturing Corp",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=MR",
  },
  {
    quote:
      "As a non-profit, every dollar counts. This AI solution helped us reach 10 times more students with the same budget. The impact has been incredible.",
    author: "Dr. Amanda Foster",
    role: "Executive Director",
    company: "Education First Foundation",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=AF",
  },
  {
    quote:
      "The implementation was smooth and the results exceeded our expectations. Our loan processing time has been cut in half while maintaining accuracy.",
    author: "James Wilson",
    role: "Chief Technology Officer",
    company: "Financial Services Group",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=JW",
  },
  {
    quote:
      "The energy management system has helped us reduce our carbon footprint while saving costs. It's a win-win for our business and the environment.",
    author: "Lisa Park",
    role: "Sustainability Director",
    company: "Green Energy Corp",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=LP",
  },
  {
    quote:
      "The personalized shopping experience powered by AI has increased our conversion rates by 45%. Our customers love the tailored recommendations.",
    author: "David Kim",
    role: "E-commerce Manager",
    company: "Retail Dynamics",
    rating: 5,
    avatar: "/placeholder.svg?height=60&width=60&text=DK",
  },
]

export function TestimonialsGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            What Our
            <span className="block font-medium">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear directly from the leaders who have transformed their businesses with our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-200" />
                  <blockquote className="text-gray-700 leading-relaxed pl-6">"{testimonial.quote}"</blockquote>
                </div>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
