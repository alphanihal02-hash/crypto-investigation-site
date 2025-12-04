"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata = {
  title: "About CoinCandid — Crypto Fraud Investigation & Asset Tracing",
  description:
    "CoinCandid helps individuals, law firms, and enterprises investigate crypto fraud, trace digital assets, and prepare evidence for legal action. Confidential, fast, and professional.",
  keywords: [
    "crypto investigation",
    "crypto fraud",
    "blockchain investigation",
    "asset tracing",
    "cryptocurrency scam",
    "legal crypto evidence",
    "CoinCandid"
  ],
  alternates: { canonical: "https://coincandid.com/about" },
  openGraph: {
    title: "About CoinCandid — Crypto Fraud Investigation Experts",
    description:
      "We investigate crypto fraud, trace digital assets, and provide legal-grade evidence for individuals, law firms, and enterprises.",
    url: "https://coincandid.com/about",
    siteName: "CoinCandid",
    type: "website",
  },
}

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 space-y-12">
      <section>
        <h1 className="text-3xl md:text-5xl font-bold text-foreground">
          About CoinCandid
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
          We help individuals, law firms, and enterprises investigate crypto fraud,
          trace stolen digital assets, and prepare evidence for legal action —
          confidentially, accurately, and with professional urgency.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Mission</h2>
        <p className="text-muted-foreground leading-relaxed">
          Crypto crimes are rising globally, and victims are often left without support.
          Our mission is to empower victims, attorneys and enterprises with blockchain intelligence,
          forensic tracing, and legally admissible reporting.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Why Choose Us</h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
          <li>Advanced blockchain analytics & wallet tracing</li>
          <li>Legally admissible reports</li>
          <li>Confidential handling of sensitive data</li>
          <li>Specialized support for law firms</li>
          <li>Fast professional investigations</li>
        </ul>
      </section>

      <Button asChild className="bg-chart-1 text-white">
        <Link href="/case/submit">Submit your case</Link>
      </Button>
    </main>
  )
}
