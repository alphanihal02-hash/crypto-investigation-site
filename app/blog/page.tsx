import { posts } from "@/data/posts"
import { BlogCard } from "@/components/blog-card"
import type { Metadata } from "next"
import Script from "next/script"

export const metadata: Metadata = {
  title: "Blog — CoinCandid",
  description: "Crypto investigation insights, case studies, and legal support guidance.",
  alternates: { canonical: "https://coincandid.com/blog" },
  openGraph: {
    type: "website",
    url: "https://coincandid.com/blog",
    title: "CoinCandid Blog — Crypto Investigation Insights",
    description: "Case studies, methods, and legal support guidance.",
    images: [{ url: "/images/og-default.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CoinCandid Blog — Crypto Investigation Insights",
    description: "Case studies, methods, and legal support guidance.",
    images: ["/images/og-default.jpg"],
  },
}

export default function BlogIndexPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-3xl font-semibold">CoinCandid Blog — Crypto Investigation Insights</h1>
      <p className="mt-3 text-muted-foreground">Insights from crypto investigations and legal support.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <BlogCard key={p.slug} post={p} />
        ))}
      </div>
      <Script id="blog-schema" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          name: "CoinCandid Blog",
          url: "https://coincandid.com/blog",
          description: "Crypto investigation insights, case studies, and legal support guidance.",
        })}
      </Script>
    </div>
  )
}
