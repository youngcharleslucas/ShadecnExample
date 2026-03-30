import { Button } from "@ui-v3/button"

export function ButtonShowcase() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-on-surface">Buttons</h2>
        <p className="mt-1 text-sm text-muted-foreground">All variants and sizes of the Button component.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Variants</h3>
        <div className="flex flex-wrap gap-3">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Sizes</h3>
        <div className="flex flex-wrap items-center gap-3">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">States</h3>
        <div className="flex flex-wrap gap-3">
          <Button disabled>Disabled</Button>
          <Button variant="outline" disabled>Disabled Outline</Button>
        </div>
      </div>
    </section>
  )
}
