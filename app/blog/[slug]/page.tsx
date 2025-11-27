import { notFound } from "next/navigation"
import { posts } from "@/data/posts"

export async function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return {}
  return {
    title: `${post.title} — CoinCandid`,
    description: post.excerpt,
    alternates: { canonical: `https://coincandid.com/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url: `https://coincandid.com/blog/${post.slug}`,
      title: `${post.title} — CoinCandid`,
      description: post.excerpt,
      images: [{ url: post.image || "/images/og-default.jpg" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${post.title} — CoinCandid`,
      description: post.excerpt,
      images: [post.image || "/images/og-default.jpg"],
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = posts.find((p) => p.slug === params.slug)
  if (!post) return notFound()

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <header>
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
        </p>
        {/* Hero image */}
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.imageAlt || post.title}
          className="mt-6 aspect-[16/9] w-full rounded-lg border object-cover"
        />
      </header>
      <div className="prose mt-8 max-w-none prose-headings:mt-6 prose-h2:text-foreground prose-p:leading-relaxed">
        {post.content}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            datePublished: post.date,
            image: post.image
              ? [`https://coincandid.com${post.image}`]
              : [`https://coincandid.com/images/og-default.jpg`],
            mainEntityOfPage: `https://coincandid.com/blog/${post.slug}`,
            author: { "@type": "Organization", name: "CoinCandid" },
            publisher: {
              "@type": "Organization",
              name: "CoinCandid",
            },
            description: post.excerpt,
          }),
        }}
      />
    </article>
  )
}
