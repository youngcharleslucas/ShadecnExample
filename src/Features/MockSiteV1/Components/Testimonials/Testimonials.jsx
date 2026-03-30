import { Card, CardContent, CardHeader } from "@ui-v1/card"
import { Avatar, AvatarFallback } from "@ui-v1/avatar"

const testimonials = [
  {
    quote: "Sunrise transformed how our team ships features. We went from 2-week cycles to shipping daily.",
    name: "Sarah Chen",
    role: "CTO at Acme Corp",
    initials: "SC",
  },
  {
    quote: "The analytics dashboard alone saved us 10 hours a week of manual reporting. Incredible product.",
    name: "Marcus Rivera",
    role: "Head of Engineering",
    initials: "MR",
  },
  {
    quote: "Migration was seamless. The support team held our hand through every step.",
    name: "Priya Patel",
    role: "VP Product",
    initials: "PP",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="mb-2 text-center text-3xl font-bold text-on-surface">Loved by teams</h2>
      <p className="mb-12 text-center text-muted-foreground">See what our customers are saying.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <Card key={t.name}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-on-surface">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">"{t.quote}"</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
