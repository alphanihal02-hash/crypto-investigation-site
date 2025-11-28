"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

const nav = [
  { href: "/", label: "Home" },
  { href: "/case/submit", label: "Submit Case" },
  { href: "/blog", label: "Blog" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const { theme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Needed so theme matches on first client render (avoids hydration issues)
  useEffect(() => {
    setMounted(true)
  }, [])

  // Before mounted, just show dark logo (or whichever you prefer)
  let logoSrc = "/images/coincandid-logo-dark.png"

  if (mounted) {
    const currentTheme = theme === "system" ? resolvedTheme : theme
    logoSrc =
      currentTheme === "light"
        ? "/images/coincandid-logo-light.png"
        : "/images/coincandid-logo-dark.png"
  }

  return (
    <header className="border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="group inline-flex items-center gap-2"
          aria-label="CoinCandid home"
        >
          <Image
            src={logoSrc}
            alt="CoinCandid logo"
            width={40}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === item.href
                : pathname.startsWith(item.href)
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex text-white bg-chart-1">
            <Link href="/case/submit">Submit case</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
