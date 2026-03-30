import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@ui-v2/table"
import { Badge } from "@ui-v2/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@ui-v2/avatar"
import { Separator } from "@ui-v2/separator"

const tableData = [
  { name: "Alice Johnson", role: "Engineer", status: "Active", avatar: "AJ" },
  { name: "Bob Smith", role: "Designer", status: "Away", avatar: "BS" },
  { name: "Carol White", role: "Manager", status: "Inactive", avatar: "CW" },
]

const statusVariant = { Active: "default", Away: "secondary", Inactive: "outline" }

export function DataDisplayShowcase() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-on-surface">Data Display</h2>
        <p className="mt-1 text-sm text-muted-foreground">Tables, badges, avatars, and separators.</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Badge Variants</h3>
        <div className="flex flex-wrap gap-2">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Avatars</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-muted-foreground">Table</h3>
        <Table>
          <TableCaption>Team members list</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Member</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tableData.map((row) => (
              <TableRow key={row.name}>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Avatar size="sm">
                      <AvatarFallback>{row.avatar}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{row.name}</span>
                  </div>
                </TableCell>
                <TableCell>{row.role}</TableCell>
                <TableCell>
                  <Badge variant={statusVariant[row.status] || "default"}>{row.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
