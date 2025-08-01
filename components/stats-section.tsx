"use client"

import { TrendingUp, Users, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: Users,
    number: "50+",
    label: "Projects Delivered",
    description: "Successful AI implementations across industries",
  },
  {
    icon: TrendingUp,
    number: "98%",
    label: "Client Satisfaction",
    description: "Consistently exceeding expectations",
  },
  {
    icon: Clock,
    number: "2M+",
    label: "Hours Automated",
    description: "Time saved through intelligent automation",
  },
  {
    icon: Award,
    number: "$50M+",
    label: "Cost Savings Generated",
    description: "Measurable ROI for our clients",
  },
]

export function StatsSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Our
            <span className="block font-medium">Impact</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak to the transformative power of our AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl mb-6 group-hover:bg-gray-900 transition-colors duration-300">
                <stat.icon className="w-8 h-8 text-gray-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
              <div className="text-gray-600 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
