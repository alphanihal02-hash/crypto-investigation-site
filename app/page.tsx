import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Search, FileText, CheckCircle2, ArrowRight } from 'lucide-react'
import { posts } from "@/data/posts"
import { BlogCard } from "@/components/blog-card"
import type { ReactElement } from "react"

export default function HomePage() {
  return (
    <div>
      <section className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h1 className="text-balance text-4xl font-semibold tracking-tight md:text-5xl">
                CoinCandid: Crypto Investigations, Asset Tracing & Legal Support
              </h1>
              <p className="mt-4 text-pretty text-muted-foreground leading-relaxed">
                We help individuals, law firms, and enterprises investigate crypto fraud, trace assets, and prepare
                evidence for legal action. Confidential, fast, and professional.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button className="text-white bg-chart-1" asChild>
                  <Link href="/case/submit">Submit your case</Link>
                </Button>
                <Button asChild variant="secondary">
                  <Link href="/blog">Read our blog</Link>
                </Button>
              </div>
              <p className="mt-3 text-sm text-muted-foreground">Confidential review within 24–48 hours.</p>
            </div>
            <div>
              <Card className="border-primary/20">
                <CardContent className="p-6">
                  <div className="grid gap-4">
                    <Stat label="Cases reviewed" value="2,400+" />
                    <Stat label="Chains covered" value="30+" />
                    <Stat label="Avg. response time" value="< 24h" />
                  </div>
                </CardContent>
              </Card>
              <div className="mt-6 rounded-lg border bg-card/50 p-4 text-sm text-muted-foreground">
                {"Note: We are not a law firm. We provide investigative analysis and legal support documentation."}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="services" className="border-b bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex items-end justify-between gap-4">
            <h2 id="services" className="text-2xl font-semibold">
              Services
            </h2>
            <div className="hidden text-sm text-muted-foreground md:block">
              Built for individuals, counsel, and enterprises.
            </div>
          </div>

          {/* capability chips */}
          <ul className="mt-3 flex flex-wrap gap-2 text-xs text-muted-foreground">
            <li className="rounded-full border bg-card px-3 py-1">DeFi</li>
            <li className="rounded-full border bg-card px-3 py-1">NFTs</li>
            <li className="rounded-full border bg-card px-3 py-1">Bridges</li>
            <li className="rounded-full border bg-card px-3 py-1">Mixers</li>
            <li className="rounded-full border bg-card px-3 py-1">CeFi</li>
            <li className="rounded-full border bg-card px-3 py-1">Cross-chain</li>
          </ul>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <ServiceCard
              title="Crypto Asset Tracing"
              description="Follow funds across chains and services using on-chain analytics and high-confidence attribution."
              icon={Search}
              features={[
                "Cross-chain flow reconstruction",
                "Entity labeling & risk clusters",
                "Exchange touchpoints identification",
              ]}
            />
            <ServiceCard
              title="Incident & Fraud Investigation"
              description="Full casework for scams, phishing, hacks, wallet compromise, and insider threats."
              icon={Shield}
              features={[
                "Triage & scope in <24h",
                "TTPs and exploit path analysis",
                "Preservation of on-chain evidence",
              ]}
            />
            <ServiceCard
              title="Legal Support & Reports"
              description="Clear documentation, exhibits, and declarations suitable for law enforcement and counsel."
              icon={FileText}
              features={["Court-ready exhibits", "Chain-of-custody notes", "LE & counsel collaboration"]}
            />
          </div>
        </div>
      </section>

      <section aria-labelledby="process" className="border-b bg-gradient-to-b from-background via-secondary/20 to-background">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="text-center mb-12">
            <h2 id="process" className="text-3xl md:text-4xl font-semibold tracking-tight">
              How it works
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              From submission to findings, we guide you through a clear, transparent process.
            </p>
          </div>

          {/* Horizontal connector line for desktop */}
          <div className="relative">
            {/* Horizontal connector line for desktop */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-primary to-primary/0" />

            <ol className="grid gap-6 md:grid-cols-3">
              <li className="relative group">
                <div className="flex flex-col items-center md:items-start">
                  {/* Step number circle */}
                  <div className="relative z-10 size-24 rounded-full text-background flex items-center justify-center font-bold text-2xl shadow-lg group-hover:shadow-xl transition-shadow bg-chart-1">
                    <span className="text-white">1</span>
                  </div>

                  {/* Step content card */}
                  <div className="mt-6 md:ml-0 text-center md:text-left w-full">
                    <h3 className="text-lg font-semibold">Submit your case</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Fill out our confidential form with details, wallet addresses, and any evidence you have. We keep all submissions encrypted and private.
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <li>✓ Wallet addresses & transactions</li>
                      <li>✓ Timeline of events</li>
                      <li>✓ Any relevant evidence</li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="relative group">
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative z-10 size-24 rounded-full text-background flex items-center justify-center font-bold text-2xl shadow-lg group-hover:shadow-xl transition-shadow bg-chart-1">
                    <span className="text-white">2</span>
                  </div>

                  <div className="mt-6 md:ml-0 text-center md:text-left w-full">
                    <h3 className="text-lg font-semibold">Analyst review</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Our team triages your case, assesses scope, estimates timeline and costs, and contacts you with next steps—typically within 24–48 hours.
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <li>✓ Case assessment</li>
                      <li>✓ Scope & timeline</li>
                      <li>✓ Direct contact</li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="relative group">
                <div className="flex flex-col items-center md:items-start">
                  <div className="relative z-10 size-24 rounded-full text-background flex items-center justify-center font-bold text-2xl shadow-lg group-hover:shadow-xl transition-shadow bg-chart-1">
                    <span className="text-white">3</span>
                  </div>

                  <div className="mt-6 md:ml-0 text-center md:text-left w-full">
                    <h3 className="text-lg font-semibold">Investigation & reports</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Receive detailed findings with clear documentation, exhibits, and legal-ready reports suitable for law enforcement or counsel.
                    </p>
                    <ul className="mt-3 space-y-2 text-xs text-muted-foreground">
                      <li>✓ On-chain analysis</li>
                      <li>✓ Court-ready exhibits</li>
                      <li>✓ Chain-of-custody notes</li>
                    </ul>
                  </div>
                </div>
              </li>
            </ol>
          </div>

          <div className="mt-12 text-center">
            <Button className="text-white bg-chart-1" asChild size="lg">
              <Link href="/case/submit">Start a confidential submission</Link>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              All submissions encrypted. No commitment required.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="insights" className="border-b">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="flex items-center justify-between gap-4">
            <h2 id="insights" className="text-2xl font-semibold">
              Latest Crypto Investigation Insights
            </h2>
            <Button asChild variant="ghost" className="text-primary">
              <Link href="/blog" aria-label="Go to CoinCandid blog">
                View all
              </Link>
            </Button>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {/* In a real app you might fetch recent posts; here we statically import three */}
            <BlogPreview />
          </div>
        </div>
      </section>

      <section aria-labelledby="cta" className="bg-secondary/30">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="rounded-xl border bg-card p-6 md:p-10">
            <h2 id="cta" className="text-balance text-2xl font-semibold md:text-3xl">
              Ready to talk? Submit your case to CoinCandid
            </h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our team reviews every case. We’ll contact you if we need additional details. Your data is kept
              confidential.
            </p>
            <div className="mt-6">
              <Button className="text-white bg-chart-1" asChild>
                <Link href="/case/submit">Submit your case</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border p-4">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
    </div>
  )
}

function ServiceCard({
  title,
  description,
  icon: Icon,
  features,
}: { title: string; description: string; icon: ReactElement; features: string[] }) {
  return (
    <div className="group relative rounded-xl border bg-background p-5 transition-colors hover:border-primary/40 hover:shadow-sm">
      <div className="flex items-start gap-3">
        <div className="grid size-10 place-content-center rounded-md bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden="true" />
        </div>
        <div>
          <div className="text-lg font-semibold">{title}</div>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{description}</p>
        </div>
      </div>
      <ul className="mt-4 grid gap-2">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="mt-0.5 size-4 text-primary" aria-hidden="true" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <Link
          href="/case/submit"
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          aria-label={`Start a case for ${title}`}
        >
          Start a case
          <ArrowRight className="ml-1 size-4" aria-hidden="true" />
        </Link>
      </div>
    </div>
  )
}

function BlogPreview() {
  const [first, ...rest] = posts
  return (
    <>
      <FeaturedBlogCardComponent post={first} />
      {rest.slice(0, 2).map((p) => (
        <BlogCard key={p.slug} post={p} />
      ))}
    </>
  )
}

function FeaturedBlogCardComponent({ post }: { post: (typeof posts)[number] }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border bg-card hover:shadow-sm md:col-span-2">
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.imageAlt || post.title}
        className="aspect-[16/9] w-full object-cover transition-transform group-hover:scale-[1.02]"
      />
      <div className="p-6">
        <div className="text-xs text-muted-foreground">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
        </div>
        <h3 className="mt-1 text-xl font-semibold">{post.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4">
          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center text-sm font-medium hover:underline text-primary"
          >
            Read the analysis
            <span className="sr-only">{` about ${post.title}`}</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
