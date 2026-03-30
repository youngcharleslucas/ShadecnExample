import * as React from "react"
import { cn } from "@/lib/utils"

function Textarea({ className, ...props }) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "theme-v2 w-full min-h-16 rounded-[var(--radius-medium)] border-[length:var(--component-border-width)] border-border bg-input px-3 py-2 text-sm text-foreground shadow-none transition-colors outline-none resize-y",
        "placeholder:text-muted-foreground",
        "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-invalid:border-destructive aria-invalid:ring-destructive/20",
        className
      )}
      {...props}
    />
  )
}

export { Textarea }
