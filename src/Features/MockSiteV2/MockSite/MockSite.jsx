import { Navbar } from "@/Features/MockSiteV2/Components/Navbar/Navbar"
import { Hero } from "@/Features/MockSiteV2/Components/Hero/Hero"
import { FeatureCards } from "@/Features/MockSiteV2/Components/FeatureCards/FeatureCards"
import { PricingTable } from "@/Features/MockSiteV2/Components/PricingTable/PricingTable"
import { Testimonials } from "@/Features/MockSiteV2/Components/Testimonials/Testimonials"
import { Footer } from "@/Features/MockSiteV2/Components/Footer/Footer"

export function MockSiteV2() {
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
