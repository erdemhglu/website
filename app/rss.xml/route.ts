import { getAllPosts } from '@/lib/posts'

export async function GET() {
  const posts = await getAllPosts()
  
  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Erdem Hacisalihoglu - Blog</title>
    <link>https://erdemhacisalihoglu.com</link>
    <description>Artikel über Algorithmen, Programmiersprachen, Typsysteme und Softwareentwicklung</description>
    <language>de</language>
    <atom:link href="https://erdemhacisalihoglu.com/rss.xml" rel="self" type="application/rss+xml" />
    ${posts
      .map(
        (post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>https://erdemhacisalihoglu.com/blog/posts/${post.slug}</link>
      <description>${escapeXml(post.excerpt)}</description>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <guid>https://erdemhacisalihoglu.com/blog/posts/${post.slug}</guid>
      ${post.tags.map(tag => `<category>${escapeXml(tag)}</category>`).join('\n      ')}
    </item>`
      )
      .join('')}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  })
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;'
      case '>': return '&gt;'
      case '&': return '&amp;'
      case "'": return '&apos;'
      case '"': return '&quot;'
      default: return c
    }
  })
}
