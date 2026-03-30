import { Button } from "@ui-v1/button"
import { Badge } from "@ui-v1/badge"

export function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 text-center">
      <Badge variant="secondary" className="mb-6">Now in public beta</Badge>
      <h1 className="mx-auto max-w-3xl text-5xl font-bold leading-tight tracking-tight text-on-surface">
        Build products your users will <span className="text-primary">love</span>
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
        Sunrise helps teams move faster with a unified design system, real-time collaboration, and intelligent automation.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Button size="lg">Start for free</Button>
        <Button size="lg" variant="outline">Watch demo</Button>
      </div>
      <div className="mt-16 rounded-[var(--radius-large)] border border-outline-variant bg-surface-container-high p-8">
        <div className="h-64 rounded-[var(--radius-medium)] bg-surface-container flex items-center justify-center">
          <span className="text-muted-foreground text-sm">Product screenshot</span>
        </div>
      </div>
    </section>
  )
}
