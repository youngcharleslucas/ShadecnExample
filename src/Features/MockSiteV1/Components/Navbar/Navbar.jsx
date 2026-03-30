import { Button } from "@ui-v1/button"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@ui-v1/navigation-menu"
import { ThemeSwitcher } from "@/Shared/ThemeSwitcher/ThemeSwitcher"

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-outline-variant bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="size-7 rounded-[var(--radius-full)] bg-primary" />
          <span className="font-bold text-foreground">Sunrise</span>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuLink href="#features" className="text-sm">Features</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#pricing" className="text-sm">Pricing</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="#testimonials" className="text-sm">Testimonials</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button variant="ghost" size="sm">Sign in</Button>
          <Button size="sm">Get started</Button>
        </div>
      </div>
    </header>
  )
}
