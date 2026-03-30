import { cn } from "@/lib/utils"

function Skeleton({ className, ...props }) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "theme-v3 animate-pulse rounded-[var(--radius-medium)] bg-muted",
        className
      )}
      {...props}
    />
  )
}

export { Skeleton }
