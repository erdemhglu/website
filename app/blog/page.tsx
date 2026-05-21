import { getAllPosts } from "@/lib/posts"
import PostList from "@/components/PostList"
import BlogHeader from "@/components/BlogHeader"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog | Erdem Hacisalihoglu",
  description: "Artikel über Algorithmen, Programmiersprachen, Typsysteme und Softwareentwicklung",
  creator: 'Erdem Hacisalihoglu',
  publisher: 'Erdem Hacisalihoglu',
  keywords: ["algorithmen", "programmierung", "softwareentwicklung", "datenstrukturen", "typsysteme", "informatik"],
  openGraph: {
    title: "Blog | Erdem Hacisalihoglu",
    description: "Artikel über Algorithmen, Programmiersprachen, Typsysteme und Softwareentwicklung",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Erdem Hacisalihoglu",
    description: "Artikel über Algorithmen, Programmiersprachen, Typsysteme und Softwareentwicklung.",
  },
}

export default async function BlogPage() {
  const blogPosts = await getAllPosts()

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors">
      <BlogHeader showRss />

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        <PostList posts={blogPosts} />
      </main>
    </div>
  )
}
