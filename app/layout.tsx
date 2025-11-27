import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Suspense } from "react"
import Script from "next/script"

export const metadata: Metadata = {
  metadataBase: new URL("https://coincandid.com"),
  title: {
    default: "CoinCandid — Crypto Investigations & Legal Support",
    template: "%s — CoinCandid",
  },
  description:
    "Professional crypto asset tracing, fraud investigations, and legal support. Submit your case confidentially with CoinCandid.",
  keywords: [
    "crypto investigations",
    "asset tracing",
    "blockchain forensics",
    "crypto fraud",
    "legal support",
    "on-chain analysis",
    "CoinCandid",
  ],
  generator: "v0.app",
  alternates: { canonical: "https://coincandid.com" },
  openGraph: {
    type: "website",
    url: "https://coincandid.com",
    siteName: "CoinCandid",
    title: "CoinCandid — Crypto Investigations & Legal Support",
    description: "Professional crypto asset tracing, fraud investigations, and legal support.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "CoinCandid — Crypto Investigations & Legal Support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoinCandid — Crypto Investigations & Legal Support",
    description: "Crypto asset tracing, fraud investigations, and legal support.",
    images: ["/images/og-default.jpg"],
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0b" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {(() => {
            /*
              same inline theme logic; now safe because it's inside <body>
              Applies .dark before hydration based on user preference or system setting
            */
            return `(function(){try{var t=localStorage.getItem('theme');var m=window.matchMedia('(prefers-color-scheme: dark)').matches;if(t==='dark'||(!t&&m)){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`
          })()}
        </Script>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:bg-primary focus:text-primary-foreground focus:px-3 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <Suspense fallback={null}>
          <SiteHeader />
        </Suspense>
        <main id="main" className="min-h-[60vh]">
          {children}
        </main>
        <Suspense fallback={null}>
          <SiteFooter />
        </Suspense>
        <Analytics />
        <Script id="org-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "CoinCandid",
            url: "https://coincandid.com",
            sameAs: [],
            description: "Professional crypto asset tracing, fraud investigations, and legal support.",
          })}
        </Script>
      </body>
    </html>
  )
}
