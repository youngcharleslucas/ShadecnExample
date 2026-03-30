import { Toggle } from "@ui-v1/toggle"
import { ToggleGroup, ToggleGroupItem } from "@ui-v1/toggle-group"
import { BoldIcon, ItalicIcon, UnderlineIcon, AlignLeftIcon, AlignCenterIcon, AlignRightIcon } from "lucide-react"

export function TogglesShowcase() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-on-surface">Toggles</h2>
        <p className="mt-1 text-sm text-muted-foreground">Toggle buttons and toggle groups for binary and multi-select states.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Toggle Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Toggle aria-label="Bold">
            <BoldIcon className="size-4" />
          </Toggle>
          <Toggle aria-label="Italic" variant="outline">
            <ItalicIcon className="size-4" />
          </Toggle>
          <Toggle aria-label="Underline" defaultPressed>
            <UnderlineIcon className="size-4" />
          </Toggle>
          <Toggle aria-label="Disabled" disabled>
            <BoldIcon className="size-4" />
          </Toggle>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Toggle Sizes</h3>
        <div className="flex flex-wrap items-center gap-2">
          <Toggle size="sm" aria-label="Small">
            <BoldIcon className="size-4" />
          </Toggle>
          <Toggle size="default" aria-label="Default">
            <BoldIcon className="size-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Large">
            <BoldIcon className="size-4" />
          </Toggle>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Toggle Group (single)</h3>
        <ToggleGroup type="single" defaultValue="center">
          <ToggleGroupItem value="left" aria-label="Left align">
            <AlignLeftIcon className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Center align">
            <AlignCenterIcon className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Right align">
            <AlignRightIcon className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Toggle Group (multiple)</h3>
        <ToggleGroup type="multiple">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <BoldIcon className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <ItalicIcon className="size-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <UnderlineIcon className="size-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </section>
  )
}
