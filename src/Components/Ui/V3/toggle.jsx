import * as React from "react"
import { cva } from "class-variance-authority"
import { Toggle as TogglePrimitive } from "radix-ui"
import { cn } from "@/lib/utils"

const toggleVariants = cva(
  "theme-v3 inline-flex items-center justify-center gap-2 rounded-[var(--radius-medium)] border-[length:var(--component-border-width)] border-border text-sm font-medium whitespace-nowrap transition-colors outline-none hover:bg-surface-container hover:text-on-surface focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-primary-container data-[state=on]:text-on-primary-container [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        outline: "border border-outline bg-transparent hover:bg-surface-container hover:text-on-surface",
      },
      size: {
        default: "h-9 min-w-9 px-2",
        sm: "h-8 min-w-8 px-1.5",
        lg: "h-10 min-w-10 px-2.5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Toggle({ className, variant, size, ...props }) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Toggle, toggleVariants }
