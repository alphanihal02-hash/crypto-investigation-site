"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X } from "lucide-react"

const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/case/submit", label: "Submit Case" },
  { href: "/blog", label: "Blog" },
]

export function SiteHeader() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6 md:py-4">

        {/* Logo + Text */}
        <Link
          href="/"
          className="group inline-flex items-center gap-3"
          aria-label="CoinCandid home"
        >
          {/* Light Mode Logo */}
          <Image
            src="/images/coincandid-logo-light.png"
            alt="CoinCandid logo"
            width={56}
            height={56}
            className="h-10 w-auto md:h-12 dark:hidden"
          />

          {/* Dark Mode Logo */}
          <Image
            src="/images/coincandid-logo-dark.png"
            alt="CoinCandid logo"
            width={56}
            height={56}
            className="hidden h-10 w-auto md:h-12 dark:block"
          />

          {/* Logo Text */}
          <span className="text-lg md:text-xl font-semibold text-black dark:text-white">
            CoinCandid
          </span>
        </Link>

        {/* Tablet + Desktop Navigation */}
        <nav className="hidden items-center gap-2 md:flex" aria-label="Main Navigation">
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

        {/* Right side buttons */}
        <div className="flex items-center gap-2">

          <ThemeToggle />

          {/* Submit button for Tablet/Desktop */}
          <Button
            asChild
            className="hidden md:inline-flex text-sm text-white bg-chart-1"
          >
            <Link href="/case/submit">Submit case</Link>
          </Button>

          {/* Mobile Hamburger Menu */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {open && (
        <div className="border-t md:hidden bg-background">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3">
            {nav.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === item.href
                  : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2 text-base transition-colors",
                    active
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}

            {/* Submit case button on mobile */}
            <Button
              asChild
              className="mt-2 w-full text-base text-white bg-chart-1"
            >
              <Link href="/case/submit" onClick={() => setOpen(false)}>
                Submit case
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
