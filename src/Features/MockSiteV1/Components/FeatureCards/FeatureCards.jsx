import { Card, CardContent, CardHeader, CardTitle } from "@ui-v3/card"
import { ZapIcon, ShieldIcon, BarChart3Icon } from "lucide-react"
import { VERSIONS } from "@/Shared/VersionHook/VersionHook"

const features = [
  {
    icon: ZapIcon,
    title: "Lightning Fast",
    description: "Deploy in seconds with our optimized infrastructure. No downtime, no headaches.",
  },
  {
    icon: ShieldIcon,
    title: "Enterprise Security",
    description: "SOC2 Type II certified. Your data is encrypted at rest and in transit.",
  },
  {
    icon: BarChart3Icon,
    title: "Advanced Analytics",
    description: "Real-time insights and custom dashboards to track what matters most.",
  },
]

export function FeatureCards() {
  return (
    <section id="features" className={`${VERSIONS.V3} mx-auto max-w-6xl px-6 py-16`}>
      <h2 className="mb-2 text-center text-3xl font-bold text-on-surface">Everything you need</h2>
      <p className="mb-12 text-center text-muted-foreground">Built for teams who move fast and break nothing.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <div className="mb-2 inline-flex size-10 items-center justify-center rounded-[var(--radius-large)] bg-primary-container">
                <feature.icon className="size-5 text-on-primary-container" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
