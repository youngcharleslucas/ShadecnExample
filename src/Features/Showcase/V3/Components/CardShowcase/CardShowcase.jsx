import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@ui-v3/card"
import { Button } from "@ui-v3/button"
import { Badge } from "@ui-v3/badge"

export function CardShowcase() {
  return (
    <section className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-on-surface">Cards</h2>
        <p className="mt-1 text-sm text-muted-foreground">Card layouts for content containers.</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Basic Card</CardTitle>
            <CardDescription>A simple card with header and content.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Card content goes here. This can include any type of content.</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Card with Footer</CardTitle>
            <CardDescription>Includes action buttons in the footer.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">This card includes a footer with action buttons.</p>
          </CardContent>
          <CardFooter className="flex gap-2">
            <Button size="sm">Confirm</Button>
            <Button size="sm" variant="outline">Cancel</Button>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>With Badge</CardTitle>
              <Badge>New</Badge>
            </div>
            <CardDescription>A card with a status badge.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Cards can contain badges and other inline elements.</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
