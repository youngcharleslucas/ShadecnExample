import { Navbar } from "@/Features/MockSiteV1/Components/Navbar/Navbar"
import { Hero } from "@/Features/MockSiteV1/Components/Hero/Hero"
import { FeatureCards } from "@/Features/MockSiteV1/Components/FeatureCards/FeatureCards"
import { PricingTable } from "@/Features/MockSiteV1/Components/PricingTable/PricingTable"
import { Testimonials } from "@/Features/MockSiteV1/Components/Testimonials/Testimonials"
import { Footer } from "@/Features/MockSiteV1/Components/Footer/Footer"
import useVersion, { VERSIONS } from "@/Shared/VersionHook/VersionHook"

export function MockSiteV1() {
  useVersion(VERSIONS.V1)
  return (
    <div className="theme-v1 bg-[#000000] text-foreground">
      <Navbar />
      <Hero />
      <FeatureCards />
      <PricingTable />
      <Testimonials />
      <Footer />
    </div>
  )
}
