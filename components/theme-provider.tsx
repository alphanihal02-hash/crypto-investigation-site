"use client"

import * as React from "react"
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="light"   // ⭐ default hamesha LIGHT
      enableSystem={false}  // ⭐ system theme ignore karo
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
