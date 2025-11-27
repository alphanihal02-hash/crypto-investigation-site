import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Post } from "@/data/posts"

export function BlogCard({ post }: { post: Post }) {
  return (
    <Card className="h-full overflow-hidden">
      {/* Top image */}
      <img
        src={post.image || "/placeholder.svg"}
        alt={post.imageAlt || post.title}
        className="aspect-[16/9] w-full object-cover"
      />
      <CardHeader>
        <CardTitle className="text-lg">{post.title}</CardTitle>
        <div className="text-xs text-muted-foreground">
          <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{post.excerpt}</p>
        <div className="mt-4">
          <Link href={`/blog/${post.slug}`} className="text-sm font-medium text-primary hover:underline">
            Read more
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
