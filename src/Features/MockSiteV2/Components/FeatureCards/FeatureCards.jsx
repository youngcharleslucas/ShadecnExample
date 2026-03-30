import { Card, CardContent, CardHeader, CardTitle } from "@ui-v2/card"
import { Badge } from "@ui-v2/badge"
import { TrendingUpIcon, TrendingDownIcon, ActivityIcon, ServerIcon } from "lucide-react"

const kpis = [
  { label: "Total Requests", value: "2.4M", change: "+12%", trend: "up", icon: ActivityIcon },
  { label: "Avg Response Time", value: "124ms", change: "-8%", trend: "up", icon: TrendingUpIcon },
  { label: "Error Rate", value: "0.03%", change: "-0.01%", trend: "up", icon: TrendingDownIcon },
  { label: "Active Servers", value: "42", change: "+3", trend: "up", icon: ServerIcon },
]

export function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {kpis.map((kpi) => (
          <Card key={kpi.label}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.label}</CardTitle>
                <kpi.icon className="size-4 text-muted-foreground" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-end gap-2">
                <span className="text-2xl font-bold text-on-surface">{kpi.value}</span>
                <Badge variant="secondary" className="mb-0.5 text-xs">{kpi.change}</Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
