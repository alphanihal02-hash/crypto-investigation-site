// app/about/page.tsx
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "About Coincandid | Crypto Investigation & Blockchain Forensics",
  description:
    "Coincandid is a crypto investigation and blockchain forensics firm helping victims, businesses and lawyers trace funds, analyse scams and understand cryptocurrency transactions.",
  openGraph: {
    title: "About Coincandid | Crypto Investigation & Blockchain Forensics",
    description:
      "Learn about Coincandid, a specialist crypto investigation and blockchain forensics company providing scam analysis, wallet tracing and evidence reports.",
    url: "https://coincandid.com/about",
    siteName: "Coincandid",
    type: "website",
  },
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Coincandid",
    url: "https://coincandid.com",
    description:
      "Crypto investigation and blockchain forensics services, including scam analysis, wallet tracing and digital asset reports.",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "support@coincandid.com",
    },
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-12 space-y-8">
      {/* SEO: structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">
          About Coincandid
        </h1>
        <p className="text-lg font-medium">
          Truth on the Blockchain.
        </p>
        <p className="text-muted-foreground">
          Coincandid is a dedicated{" "}
          <strong>crypto investigation and blockchain forensics</strong> firm
          that helps individuals, businesses and legal teams analyse suspicious
          transactions, understand scams and build clear, evidence-based cases.
        </p>
      </header>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Who We Are
        </h2>
        <p>
          We specialise in <strong>cryptocurrency fraud investigation</strong>,
          wallet tracing and digital asset intelligence. By combining legal
          awareness with technical blockchain analysis, Coincandid delivers
          reports that are easy to understand yet detailed enough for lawyers,
          regulators and law enforcement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          What We Do
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>On-chain <strong>crypto scam and fraud analysis</strong></li>
          <li>Wallet and transaction tracing across multiple blockchains</li>
          <li>Case summaries and <strong>investigation reports</strong> for legal use</li>
          <li>High-level risk reviews for businesses dealing with crypto</li>
        </ul>
        <p>
          If you&apos;ve lost money in a scam, interacted with a risky exchange,
          or need clarity on complex transactions, Coincandid provides
          independent, investigation-focused support.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Our Mission
        </h2>
        <p>
          Our mission is simple: bring transparency and accountability to the
          crypto space. We believe every victim deserves a clear explanation of
          what happened on-chain and what options may exist going forward.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          How to Start an Investigation
        </h2>
        <p>
          To begin, submit the details of your case through our secure form.
          Share transaction hashes, wallet addresses, platform names and any
          other information you have. We review each case and respond with
          possible next steps.
        </p>
        <p>
          You can open a case here:{" "}
          <Link href="/case/submit" className="underline font-medium">
            Submit a Case with Coincandid
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-semibold">
          Contact Coincandid
        </h2>
        <p>
          For general enquiries, collaboration, or media requests, email us at{" "}
          <a href="mailto:support@coincandid.com" className="underline">
            support@coincandid.com
          </a>
          .
        </p>
      </section>
    </main>
  )
}
