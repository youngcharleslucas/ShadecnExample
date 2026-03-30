import { Link } from "react-router"

const pages = [
  {
    group: "Showcase Pages",
    links: [
      { to: "/showcase/v1", label: "V1 — Warm Sunrise", desc: "Amber/gold palette, pill shapes, no borders" },
      { to: "/showcase/v2", label: "V2 — Cool Steel", desc: "Indigo palette, sharp square corners, no borders" },
      { to: "/showcase/v3", label: "V3 — Neon Blueprint", desc: "Cyan/coral palette, chamfered corners, visible outlines" },
    ],
  },
  {
    group: "Mock Site Pages",
    links: [
      { to: "/mock-site/v1", label: "Mock Site V1 — SaaS Landing", desc: "Full SaaS landing page using V1 warm theme" },
      { to: "/mock-site/v2", label: "Mock Site V2 — Dev Dashboard", desc: "Developer dashboard using V2 cool steel theme" },
    ],
  },
]

export function HomePage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-2 text-3xl font-bold tracking-tight text-foreground">
        shadcn/ui Theming Showcase
      </h1>
      <p className="mb-12 text-muted-foreground">
        Demonstrating M3 token-driven theming with three distinct visual themes, each applied to the same shadcn/ui component library.
      </p>

      {pages.map((section) => (
        <section key={section.group} className="mb-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            {section.group}
          </h2>
          <div className="grid gap-3">
            {section.links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="group flex flex-col gap-1 rounded border border-outline-variant bg-surface-container-low p-4 transition-colors hover:border-outline hover:bg-surface-container"
              >
                <span className="font-medium text-foreground">{link.label}</span>
                <span className="text-sm text-muted-foreground">{link.desc}</span>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
