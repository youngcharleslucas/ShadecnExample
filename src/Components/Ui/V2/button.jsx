import * as React from "react"
import { cva } from "class-variance-authority"
import { Slot } from "radix-ui"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "theme-v2 inline-flex shrink-0 items-center justify-center gap-2 rounded-[var(--radius-full)] border-[length:var(--component-border-width)] border-border text-sm font-medium whitespace-nowrap transition-all outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:     "bg-primary text-on-primary hover:brightness-95",
        destructive: "bg-destructive text-destructive-foreground hover:brightness-95",
        outline:     "bg-transparent text-primary border border-outline hover:bg-primary/10",
        secondary:   "bg-secondary-container text-on-secondary-container hover:brightness-95",
        ghost:       "bg-transparent text-on-surface hover:bg-surface-container",
        link:        "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        xs:      "h-6 gap-1 px-2 text-xs",
        sm:      "h-8 gap-1.5 px-3",
        lg:      "h-10 px-6",
        icon:    "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({ className, variant = "default", size = "default", asChild = false, ...props }) {
  const Comp = asChild ? Slot.Root : "button"
  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
