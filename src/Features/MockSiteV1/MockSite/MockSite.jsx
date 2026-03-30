import { Navbar } from "@/Features/MockSiteV1/Components/Navbar/Navbar"
import { Hero } from "@/Features/MockSiteV1/Components/Hero/Hero"
import { FeatureCards } from "@/Features/MockSiteV1/Components/FeatureCards/FeatureCards"
import { PricingTable } from "@/Features/MockSiteV1/Components/PricingTable/PricingTable"
import { Testimonials } from "@/Features/MockSiteV1/Components/Testimonials/Testimonials"
import { Footer } from "@/Features/MockSiteV1/Components/Footer/Footer"

export function MockSiteV1() {
  return (
    <div className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <FeatureCards />
      <PricingTable />
      <Testimonials />
      <Footer />
    </div>
  )
}
