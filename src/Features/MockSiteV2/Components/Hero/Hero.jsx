import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@ui-v2/select"
import { ToggleGroup, ToggleGroupItem } from "@ui-v2/toggle-group"
import { Badge } from "@ui-v2/badge"

export function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-on-surface">Infrastructure Overview</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Last updated: <span className="text-foreground">2 minutes ago</span>
            <Badge variant="secondary" className="ml-2">Live</Badge>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Select defaultValue="7d">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1d">Last 24h</SelectItem>
              <SelectItem value="7d">Last 7 days</SelectItem>
              <SelectItem value="30d">Last 30 days</SelectItem>
              <SelectItem value="90d">Last 90 days</SelectItem>
            </SelectContent>
          </Select>
          <ToggleGroup type="single" defaultValue="chart">
            <ToggleGroupItem value="chart" aria-label="Chart view">Chart</ToggleGroupItem>
            <ToggleGroupItem value="table" aria-label="Table view">Table</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
    </section>
  )
}
