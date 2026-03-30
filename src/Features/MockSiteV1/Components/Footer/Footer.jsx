import { Separator } from "@ui-v1/separator"

const footerLinks = {
  Product: ["Features", "Pricing", "Changelog", "Roadmap"],
  Company: ["About", "Blog", "Careers", "Press"],
  Legal: ["Privacy", "Terms", "Security", "Cookies"],
}

export function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-12">
      <Separator className="mb-10" />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="size-6 rounded-[var(--radius-full)] bg-primary" />
            <span className="font-bold text-foreground">Sunrise</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Building the tools teams need to ship with confidence.
          </p>
        </div>
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <h4 className="mb-4 text-sm font-semibold text-foreground">{group}</h4>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <Separator className="mt-10 mb-6" />
      <p className="text-center text-xs text-muted-foreground">
        © 2026 Sunrise, Inc. All rights reserved.
      </p>
    </footer>
  )
}
