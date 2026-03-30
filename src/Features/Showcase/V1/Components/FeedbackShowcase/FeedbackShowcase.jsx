import { Alert, AlertDescription, AlertTitle } from "@ui-v1/alert"
import { Progress } from "@ui-v1/progress"
import { Skeleton } from "@ui-v1/skeleton"
import { Button } from "@ui-v1/button"
import { Toaster } from "@ui-v1/sonner"
import { toast } from "sonner"
import { InfoIcon, CheckCircleIcon, AlertTriangleIcon, XCircleIcon } from "lucide-react"

export function FeedbackShowcase() {
  return (
    <section className="space-y-6">
      <Toaster />
      <div>
        <h2 className="text-xl font-semibold text-on-surface">Feedback</h2>
        <p className="mt-1 text-sm text-muted-foreground">Alerts, progress indicators, skeleton loaders, and toasts.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Alerts</h3>
        <Alert>
          <InfoIcon className="size-4" />
          <AlertTitle>Info</AlertTitle>
          <AlertDescription>This is an informational alert message.</AlertDescription>
        </Alert>
        <Alert variant="success">
          <CheckCircleIcon className="size-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>Your changes have been saved successfully.</AlertDescription>
        </Alert>
        <Alert variant="warning">
          <AlertTriangleIcon className="size-4" />
          <AlertTitle>Warning</AlertTitle>
          <AlertDescription>Please review before proceeding.</AlertDescription>
        </Alert>
        <Alert variant="destructive">
          <XCircleIcon className="size-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>Something went wrong. Please try again.</AlertDescription>
        </Alert>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Progress</h3>
        <div className="space-y-2">
          <Progress value={30} />
          <Progress value={60} />
          <Progress value={90} />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Skeleton</h3>
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-20 w-full" />
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">Toast / Sonner</h3>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm" onClick={() => toast("Default toast message")}>
            Default Toast
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.success("Operation successful!")}>
            Success Toast
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.error("Something went wrong!")}>
            Error Toast
          </Button>
          <Button variant="outline" size="sm" onClick={() => toast.warning("Warning: check this out")}>
            Warning Toast
          </Button>
        </div>
      </div>
    </section>
  )
}
