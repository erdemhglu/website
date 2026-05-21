import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkGfm from 'remark-gfm'
import remarkHtml from 'remark-html'
import { rehype } from 'rehype'
import rehypeHighlight from 'rehype-highlight'

const postsDirectory = path.join(process.cwd(), 'content/posts')

// Calculate reading time based on word count
function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)
  return `${minutes} min read`
}

export interface Post {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readTime: string
  language?: string
  content?: string
}

export async function getAllPosts(): Promise<Post[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)

      // Calculate reading time from content if not provided in frontmatter
      const readTime = matterResult.data.readTime || calculateReadingTime(matterResult.content)

      return {
        slug,
        title: matterResult.data.title,
        date: matterResult.data.date,
        excerpt: matterResult.data.excerpt,
        tags: matterResult.data.tags,
        readTime: readTime,
        language: matterResult.data.language || 'en',
      }
    })

  // Sort posts by date
  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    // Convert markdown to HTML with syntax highlighting
    const processedContent = await remark()
      .use(remarkGfm) // GitHub Flavored Markdown
      .use(remarkHtml)
      .process(matterResult.content)
    
    // Apply syntax highlighting with rehype
    const htmlWithHighlighting = await rehype()
      .use(rehypeHighlight)
      .process(processedContent.toString())
    
    const contentHtml = htmlWithHighlighting.toString()

    // Calculate reading time from content if not provided in frontmatter
    const readTime = matterResult.data.readTime || calculateReadingTime(matterResult.content)

    return {
      slug,
      title: matterResult.data.title,
      date: matterResult.data.date,
      excerpt: matterResult.data.excerpt,
      tags: matterResult.data.tags,
      readTime: readTime,
      language: matterResult.data.language || 'en',
      content: contentHtml,
    }
  } catch (error) {
    return null
  }
}

export async function getAllSlugs(): Promise<string[]> {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''))
}
