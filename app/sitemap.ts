import type { MetadataRoute } from "next"
import { posts } from "@/data/posts"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://coincandid.com"
  const routes: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    { url: `${base}/case/submit`, lastModified: new Date() },
    { url: `${base}/case/thanks`, lastModified: new Date() },
  ]
  const blogRoutes = posts.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.date),
  }))
  return [...routes, ...blogRoutes]
}
