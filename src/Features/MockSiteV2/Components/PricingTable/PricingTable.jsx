import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@ui-v2/table"
import { Badge } from "@ui-v2/badge"
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@ui-v2/pagination"

const deployments = [
  { id: "dep-001", service: "api-gateway", env: "production", status: "Running", version: "v2.4.1", time: "2m ago" },
  { id: "dep-002", service: "auth-service", env: "production", status: "Running", version: "v1.8.0", time: "15m ago" },
  { id: "dep-003", service: "data-pipeline", env: "staging", status: "Deploying", version: "v3.1.0-rc1", time: "1h ago" },
  { id: "dep-004", service: "web-frontend", env: "production", status: "Running", version: "v5.2.3", time: "3h ago" },
  { id: "dep-005", service: "worker-queue", env: "staging", status: "Failed", version: "v0.9.2", time: "5h ago" },
]

const statusVariant = { Running: "default", Deploying: "secondary", Failed: "destructive" }
const envVariant = { production: "outline", staging: "secondary" }

export function PricingTable() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-8">
      <h2 className="mb-4 text-sm font-semibold text-muted-foreground uppercase tracking-widest">Deployments</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Service</TableHead>
            <TableHead>Environment</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Version</TableHead>
            <TableHead>Last Deploy</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {deployments.map((dep) => (
            <TableRow key={dep.id}>
              <TableCell className="font-medium">{dep.service}</TableCell>
              <TableCell>
                <Badge variant={envVariant[dep.env] || "outline"}>{dep.env}</Badge>
              </TableCell>
              <TableCell>
                <Badge variant={statusVariant[dep.status] || "default"}>{dep.status}</Badge>
              </TableCell>
              <TableCell className="font-mono text-xs">{dep.version}</TableCell>
              <TableCell className="text-muted-foreground">{dep.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationLink href="#" isActive>1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </section>
  )
}
