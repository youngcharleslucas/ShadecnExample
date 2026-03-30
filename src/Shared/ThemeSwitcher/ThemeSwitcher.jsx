import { SunIcon, MoonIcon } from "lucide-react"
import { useTheme } from "@/Shared/ThemeProvider/ThemeProvider"

export function ThemeSwitcher() {
  const { mode, toggleMode } = useTheme()

  return (
    <button
      onClick={toggleMode}
      aria-label={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="inline-flex size-9 items-center justify-center rounded-[var(--radius-medium)] transition-colors hover:bg-surface-container"
    >
      {mode === "dark" ? (
        <SunIcon className="size-4" />
      ) : (
        <MoonIcon className="size-4" />
      )}
    </button>
  )
}
