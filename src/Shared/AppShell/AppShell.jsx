import { NavLink, Outlet } from "react-router"
import { ThemeSwitcher } from "@/Shared/ThemeSwitcher/ThemeSwitcher"

const navLinks = [
  { to: "/showcase/v1", label: "V1 Showcase" },
  { to: "/showcase/v2", label: "V2 Showcase" },
  { to: "/showcase/v3", label: "V3 Showcase" },
  { to: "/mock-site/v1", label: "Mock Site V1" },
  { to: "/mock-site/v2", label: "Mock Site V2" },
]

export function AppShell() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-outline-variant bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <NavLink to="/" className="text-sm font-semibold tracking-tight">
            shadcn Theming Showcase
          </NavLink>
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  [
                    "rounded px-3 py-1.5 text-xs font-medium transition-colors",
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:bg-surface-container hover:text-foreground",
                  ].join(" ")
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <ThemeSwitcher />
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
