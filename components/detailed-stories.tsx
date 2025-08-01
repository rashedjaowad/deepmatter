"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Building2, Users, Target, Zap, TrendingUp } from "lucide-react"

const detailedStories = [
  {
    id: 1,
    company: "TechFlow Solutions",
    industry: "Technology",
    challenge: "Customer Service Overload",
    solution: "AI-Powered Customer Service Assistant",
    results: {
      efficiency: "300% increase in query handling",
      cost: "60% reduction in support costs",
      satisfaction: "95% customer satisfaction rate",
      time: "Response time reduced from 24h to 2 minutes",
    },
    description:
      "TechFlow Solutions was struggling with an overwhelming volume of customer inquiries that their support team couldn't handle efficiently. Long response times were hurting customer satisfaction and the company's reputation.",
    implementation:
      "We developed a sophisticated AI chatbot with natural language processing capabilities that could understand complex technical queries and provide accurate, contextual responses. The system was integrated with their existing CRM and knowledge base.",
    outcome:
      "The AI assistant now handles 80% of customer inquiries automatically, allowing the human support team to focus on complex issues. Customer satisfaction scores improved dramatically, and the company saved over $200,000 annually in support costs.",
    icon: Users,
    color: "bg-blue-500",
  },
  {
    id: 2,
    company: "Global Manufacturing Corp",
    industry: "Manufacturing",
    challenge: "Inventory Management Inefficiencies",
    solution: "Predictive Analytics Platform",
    results: {
      cost: "40% reduction in inventory costs",
      waste: "65% reduction in waste",
      accuracy: "98% demand forecasting accuracy",
      efficiency: "50% improvement in supply chain efficiency",
    },
    description:
      "Global Manufacturing Corp faced significant challenges with inventory management across multiple facilities, leading to overstock situations, waste, and increased operational costs.",
    implementation:
      "We implemented a machine learning-powered predictive analytics platform that analyzes historical data, market trends, and external factors to optimize inventory levels and predict demand patterns.",
    outcome:
      "The company achieved remarkable cost savings and operational efficiency improvements. The system now automatically adjusts inventory levels and provides early warnings for potential supply chain disruptions.",
    icon: Building2,
    color: "bg-green-500",
  },
  {
    id: 3,
    company: "Education First Foundation",
    industry: "Non-Profit",
    challenge: "Limited Educational Resources",
    solution: "AI Content Generation System",
    results: {
      reach: "10x increase in program reach",
      cost: "80% reduction in content creation costs",
      quality: "95% teacher satisfaction with materials",
      impact: "50,000+ students benefited",
    },
    description:
      "Education First Foundation needed to create personalized learning materials for underserved communities but lacked the resources to develop content at scale.",
    implementation:
      "We built an AI system that generates customized educational content based on curriculum requirements, student learning levels, and local context. The system creates worksheets, lesson plans, and interactive materials.",
    outcome:
      "The foundation can now serve 10 times more students with the same budget. Teachers report high satisfaction with the quality and relevance of AI-generated materials, and student engagement has increased significantly.",
    icon: Target,
    color: "bg-purple-500",
  },
]

export function DetailedStories() {
  return (
    <section id="detailed-stories" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            Detailed
            <span className="block font-medium">Case Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Deep dive into how our AI solutions transformed these businesses and delivered measurable results.
          </p>
        </div>

        <div className="space-y-16">
          {detailedStories.map((story, index) => (
            <Card key={story.id} className="overflow-hidden border-0 shadow-xl">
              <CardContent className="p-0">
                <div className={`grid grid-cols-1 lg:grid-cols-2 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                  {/* Content Side */}
                  <div className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 ${story.color} rounded-xl flex items-center justify-center`}>
                        <story.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900">{story.company}</h3>
                        <Badge variant="secondary" className="mt-1">
                          {story.industry}
                        </Badge>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-red-500" />
                          Challenge
                        </h4>
                        <p className="text-gray-600">{story.description}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <Zap className="w-5 h-5 mr-2 text-blue-500" />
                          Solution
                        </h4>
                        <p className="text-gray-600">{story.implementation}</p>
                      </div>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                          <TrendingUp className="w-5 h-5 mr-2 text-green-500" />
                          Outcome
                        </h4>
                        <p className="text-gray-600">{story.outcome}</p>
                      </div>
                    </div>
                  </div>

                  {/* Results Side */}
                  <div
                    className={`bg-gray-50 p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <h4 className="text-xl font-semibold text-gray-900 mb-6">Key Results</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {Object.entries(story.results).map(([key, value]) => (
                        <div key={key} className="text-center p-4 bg-white rounded-lg shadow-sm">
                          <div className="text-2xl font-bold text-gray-900 mb-1">{value.split(" ")[0]}</div>
                          <div className="text-sm text-gray-600 capitalize">
                            {value.split(" ").slice(1).join(" ")} {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            onClick={() => (window.location.href = "/#demo")}
            className="bg-gray-900 hover:bg-gray-800 text-white"
          >
            Start Your Success Story
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
