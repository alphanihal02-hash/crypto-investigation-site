import type React from "react"
export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  content: React.ReactNode
  image: string
  imageAlt?: string
}

export const posts: Post[] = [
  {
    slug: "triaging-a-crypto-incident",
    title: "How We Triage a Crypto Incident",
    date: "2025-06-01",
    excerpt: "A step-by-step overview of how CoinCandid approaches incident triage and scoping.",
    image: "/crypto-incident-triage-case-study.jpg",
    imageAlt: "Analyst dashboard illustrating crypto incident triage workflow",
    content: (
      <div>
        <h2>Overview</h2>
        <p>
          We begin by validating the incident, scoping affected assets, and establishing a clear timeline. This ensures
          we focus analysis where it matters most.
        </p>
        <h2>Data Collection</h2>
        <p>
          We collect on-chain data, exchange interactions, and any off-chain communications to build a comprehensive
          picture of the incident.
        </p>
        <h2>Reporting</h2>
        <p>Findings are compiled into a clear report with exhibits, which can be used by counsel or law enforcement.</p>
      </div>
    ),
  },
  {
    slug: "evidence-for-legal-support",
    title: "Preparing Evidence for Legal Support",
    date: "2025-07-15",
    excerpt: "Best practices for preparing evidence that supports legal action in crypto cases.",
    image: "/legal-evidence-for-crypto-cases.jpg",
    imageAlt: "Prepared exhibits and legal documentation visuals",
    content: (
      <div>
        <h2>Chain of Custody</h2>
        <p>We maintain clear data provenance and chain of custody so evidence stands up to scrutiny.</p>
        <h2>Exhibits</h2>
        <p>Exhibits include transaction traces, attribution analysis, and structured timelines.</p>
      </div>
    ),
  },
  {
    slug: "common-crypto-scams",
    title: "Common Crypto Scams and How to Respond",
    date: "2025-08-20",
    excerpt: "An overview of frequent scam patterns and immediate steps to take if you are affected.",
    image: "/crypto-scams-and-responses.jpg",
    imageAlt: "Icons representing common crypto scam patterns",
    content: (
      <div>
        <h2>Phishing and Wallet Drains</h2>
        <p>
          Be cautious with approvals and never sign unknown transactions. If affected, revoke approvals and isolate
          assets immediately.
        </p>
        <h2>Impersonation</h2>
        <p>Verify identities across multiple channels and never share seed phrases or private keys.</p>
      </div>
    ),
  },
]
