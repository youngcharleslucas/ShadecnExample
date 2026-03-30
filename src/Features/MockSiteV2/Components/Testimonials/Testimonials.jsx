import { useState } from "react"
import { Button } from "@ui-v2/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@ui-v2/sheet"
import { Badge } from "@ui-v2/badge"
import { Separator } from "@ui-v2/separator"
import { ScrollArea } from "@ui-v2/scroll-area"

const logs = [
  { time: "14:32:01", level: "INFO", message: "Request processed: GET /api/v2/users (200 OK, 45ms)" },
  { time: "14:32:00", level: "INFO", message: "Cache hit: user:profile:42" },
  { time: "14:31:58", level: "WARN", message: "Rate limit threshold: 80% of 10000/min" },
  { time: "14:31:55", level: "ERROR", message: "Database timeout: query exceeded 5000ms" },
  { time: "14:31:54", level: "INFO", message: "Deployment complete: auth-service v1.8.0" },
  { time: "14:31:50", level: "INFO", message: "Health check passed: all 42 nodes responding" },
  { time: "14:31:45", level: "WARN", message: "Memory usage: worker-03 at 87% capacity" },
  { time: "14:31:40", level: "INFO", message: "SSL certificate renewed: *.steelops.io" },
]

const levelVariant = { INFO: "secondary", WARN: "outline", ERROR: "destructive" }

export function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">System Logs</h2>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="sm">View live logs</Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[500px] sm:max-w-[500px]">
            <SheetHeader>
              <SheetTitle>Live System Logs</SheetTitle>
              <SheetDescription>Real-time log stream from all services.</SheetDescription>
            </SheetHeader>
            <ScrollArea className="h-[calc(100vh-120px)] mt-4">
              <div className="space-y-2 p-4 font-mono text-xs">
                {logs.concat(logs).map((log, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <span className="text-muted-foreground shrink-0">{log.time}</span>
                    <Badge variant={levelVariant[log.level] || "secondary"} className="shrink-0 text-xs">
                      {log.level}
                    </Badge>
                    <span className="text-foreground">{log.message}</span>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </SheetContent>
        </Sheet>
      </div>
      <div className="rounded-[var(--radius-small)] border border-outline-variant bg-surface-container-low p-4 font-mono text-xs space-y-2">
        {logs.slice(0, 5).map((log, i) => (
          <div key={i} className="flex items-start gap-2">
            <span className="text-muted-foreground shrink-0">{log.time}</span>
            <Badge variant={levelVariant[log.level] || "secondary"} className="shrink-0 text-xs">{log.level}</Badge>
            <span className="text-foreground">{log.message}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
