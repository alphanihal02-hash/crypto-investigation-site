"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

type Theme = "light" | "dark"

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light"
  const stored = localStorage.getItem("theme")
  if (stored === "light" || stored === "dark") return stored
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === "dark") root.classList.add("dark")
    else root.classList.remove("dark")
    localStorage.setItem("theme", theme)
  }, [theme])

  // Respect system changes when user hasn't explicitly set a preference.
  useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)")
    const handler = (e: MediaQueryListEvent) => {
      const stored = localStorage.getItem("theme")
      if (!stored) setTheme(e.matches ? "dark" : "light")
    }
    mql.addEventListener("change", handler)
    return () => mql.removeEventListener("change", handler)
  }, [])

  const nextTheme: Theme = theme === "dark" ? "light" : "dark"

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={`Switch to ${nextTheme} mode`}
      aria-pressed={theme === "dark"}
      className={className}
      onClick={() => setTheme(nextTheme)}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5" aria-hidden="true" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
