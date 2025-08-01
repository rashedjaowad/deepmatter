import { Navigation } from "@/components/navigation"
import { SuccessStoriesHero } from "@/components/success-stories-hero"
import { DetailedStories } from "@/components/detailed-stories"
import { StatsSection } from "@/components/stats-section"
import { TestimonialsGrid } from "@/components/testimonials-grid"
import { CTASection } from "@/components/cta-section"

export default function SuccessStoriesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <SuccessStoriesHero />
      <DetailedStories />
      <TestimonialsGrid />
      <StatsSection />
      <CTASection />
    </main>
  )
}
