import * as React from "react"
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
} from "lucide-react"
import { Toaster as Sonner } from "sonner"

function useColorMode() {
  const [isDark, setIsDark] = React.useState(
    () => document.documentElement.classList.contains("dark")
  )

  React.useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"))
    })
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })
    return () => observer.disconnect()
  }, [])

  return isDark ? "dark" : "light"
}

function Toaster({ ...props }) {
  const theme = useColorMode()

  return (
    <Sonner
      theme={theme}
      className="toaster group theme-v1"
      icons={{
        success: <CircleCheckIcon className="size-4" />,
        info: <InfoIcon className="size-4" />,
        warning: <TriangleAlertIcon className="size-4" />,
        error: <OctagonXIcon className="size-4" />,
        loading: <Loader2Icon className="size-4 animate-spin" />,
      }}
      style={{
        "--normal-bg": "var(--card)",
        "--normal-text": "var(--foreground)",
        "--normal-border": "var(--outline-variant)",
        "--border-radius": "var(--radius-medium)",
      }}
      {...props}
    />
  )
}

export { Toaster }
