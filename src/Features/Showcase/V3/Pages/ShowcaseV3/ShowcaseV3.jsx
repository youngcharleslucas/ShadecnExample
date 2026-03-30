import { ButtonShowcase } from "@/Features/Showcase/V3/Components/ButtonShowcase/ButtonShowcase"
import { CardShowcase } from "@/Features/Showcase/V3/Components/CardShowcase/CardShowcase"
import { InputShowcase } from "@/Features/Showcase/V3/Components/InputShowcase/InputShowcase"
import { DataDisplayShowcase } from "@/Features/Showcase/V3/Components/DataDisplayShowcase/DataDisplayShowcase"
import { FeedbackShowcase } from "@/Features/Showcase/V3/Components/FeedbackShowcase/FeedbackShowcase"
import { OverlaysShowcase } from "@/Features/Showcase/V3/Components/OverlaysShowcase/OverlaysShowcase"
import { NavigationShowcase } from "@/Features/Showcase/V3/Components/NavigationShowcase/NavigationShowcase"
import { TogglesShowcase } from "@/Features/Showcase/V3/Components/TogglesShowcase/TogglesShowcase"
import { Separator } from "@ui-v3/separator"

export function ShowcaseV3() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-on-surface">V3 — Neon Blueprint</h1>
        <p className="mt-2 text-muted-foreground">
          Cyan/coral palette with asymmetric chamfered corners and 1.5px visible outlines on everything.
          All components use M3 design tokens scoped to <code className="text-xs bg-surface-container px-1 py-0.5 rounded-[var(--radius-small)]">.theme-v3</code>.
        </p>
      </div>

      <Separator />
      <ButtonShowcase />
      <Separator />
      <CardShowcase />
      <Separator />
      <InputShowcase />
      <Separator />
      <DataDisplayShowcase />
      <Separator />
      <FeedbackShowcase />
      <Separator />
      <OverlaysShowcase />
      <Separator />
      <NavigationShowcase />
      <Separator />
      <TogglesShowcase />
    </div>
  )
}
