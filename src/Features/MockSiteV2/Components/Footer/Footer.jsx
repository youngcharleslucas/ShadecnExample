import { Separator } from "@ui-v2/separator"

export function Footer() {
  return (
    <footer className="mx-auto max-w-7xl px-6 py-6">
      <Separator className="mb-6" />
      <div className="flex flex-col items-center justify-between gap-2 sm:flex-row">
        <p className="text-xs text-muted-foreground">© 2026 SteelOps, Inc. All rights reserved.</p>
        <div className="flex gap-4 text-xs text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Status</a>
        </div>
      </div>
    </footer>
  )
}
