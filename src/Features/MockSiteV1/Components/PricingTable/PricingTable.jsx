import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui-v1/card"
import { Button } from "@ui-v1/button"
import { Badge } from "@ui-v1/badge"
import { CheckIcon } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$9",
    description: "Perfect for individuals and small projects.",
    features: ["5 projects", "10GB storage", "Email support", "API access"],
    popular: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams with advanced needs.",
    features: ["Unlimited projects", "100GB storage", "Priority support", "Advanced analytics", "Custom domains"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$99",
    description: "For large organizations with full control.",
    features: ["Everything in Pro", "Unlimited storage", "Dedicated support", "SSO & SAML", "SLA guarantee"],
    popular: false,
  },
]

export function PricingTable() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-2 text-center text-3xl font-bold text-on-surface">Simple pricing</h2>
      <p className="mb-12 text-center text-muted-foreground">No hidden fees. Cancel anytime.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className={plan.popular ? "ring-2 ring-primary" : ""}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{plan.name}</CardTitle>
                {plan.popular && <Badge>Popular</Badge>}
              </div>
              <div className="mt-2 flex items-baseline gap-1">
                <span className="text-3xl font-bold text-on-surface">{plan.price}</span>
                <span className="text-muted-foreground">/mo</span>
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <CheckIcon className="size-4 text-primary shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                Get started
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
