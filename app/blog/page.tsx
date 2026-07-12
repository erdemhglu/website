import { getAllPosts } from "@/lib/posts"
import PostList from "@/components/PostList"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Erdem Hacısalihoğlu",
  description: "Artikel über Algorithmen, Programmiersprachen, Typsysteme und Softwareentwicklung",
  creator: 'Erdem Hacısalihoğlu',
  publisher: 'Erdem Hacısalihoğlu',
  keywords: ["algorithmen", "programmierung", "softwareentwicklung", "datenstrukturen", "typsysteme", "informatik"],
  openGraph: {
    title: "Blog | Erdem Hacısalihoğlu",
    description: "Artikel über Algorithmen, Programmiersprachen, Typsysteme und Softwareentwicklung",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Erdem Hacısalihoğlu",
    description: "Artikel über Algorithmen, Programmiersprachen, Typsysteme und Softwareentwicklung.",
  },
}

export default async function BlogPage() {
  const blogPosts = await getAllPosts()

  return (
    <div className="min-h-[100svh] bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
      <main className="max-w-3xl mx-auto px-6 md:px-8 py-12 md:py-16">
        <PostList posts={blogPosts} />
      </main>
    </div>
  )
}
