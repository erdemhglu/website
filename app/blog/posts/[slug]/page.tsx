import { getPostBySlug, getAllSlugs } from "@/lib/posts"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import PostPageClient from "@/components/PostPageClient"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    return {
      title: "Beitrag nicht gefunden",
      description: "Der angeforderte Beitrag konnte nicht gefunden werden.",
    }
  }

  return {
    title: `${post.title}`,
    creator: 'Erdem Hacisalihoglu',
    publisher: 'Erdem Hacisalihoglu',
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: "Erdem Hacisalihoglu" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: ["Erdem Hacisalihoglu"],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function PostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const postUrl = `https://erdem.hacisalihoglu.eu/blog/posts/${slug}`

  return <PostPageClient post={post} postUrl={postUrl} />
}

export async function generateStaticParams() {
  const slugs = await getAllSlugs()
  return slugs.map((slug) => ({
    slug,
  }))
}