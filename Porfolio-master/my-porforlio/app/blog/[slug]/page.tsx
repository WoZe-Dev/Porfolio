import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'

// Types
interface BlogPostMetadata {
  title: string
  subtitle?: string
  date: string
  readingTime: string
  tags: string[]
}

// Rehype Pretty Code Options
const rehypePrettyCodeOptions = {
  theme: 'github-dark',
  onVisitLine(node: any) {
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
  onVisitHighlightedLine(node: any) {
    node.properties.className.push('highlighted')
  },
  onVisitHighlightedWord(node: any) {
    node.properties.className = ['word']
  },
}

// Components
function PostHeader({ metadata }: { metadata: BlogPostMetadata }) {
  const { title, subtitle, date, readingTime, tags } = metadata

  return (
    <header className="pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-sm bg-zinc-900 text-zinc-400 rounded-full
                  border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && <p className="text-xl text-zinc-400">{subtitle}</p>}

          {/* Metadata */}
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400 pt-4">
            {date && (
              <div className="flex items-center gap-2">
                <span>{date}</span>
              </div>
            )}
            {readingTime && (
              <div className="flex items-center gap-2">
                <span>{readingTime}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

function PostContent({ html }: { html: string }) {
  return (
    <main className="px-4 pb-24">
      <div className="max-w-4xl mx-auto">
        <div className="prose prose-invert prose-lg max-w-none
          prose-h2:text-2xl prose-h2:font-semibold prose-h2:tracking-tight
          prose-p:text-zinc-400 prose-p:leading-relaxed
          prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-code:text-zinc-200
          prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-zinc-800
          prose-blockquote:border-l-4 prose-blockquote:border-blue-500
          prose-blockquote:bg-zinc-900/50 prose-blockquote:px-6 prose-blockquote:py-4
          prose-li:text-zinc-400
          prose-img:rounded-lg prose-img:shadow-xl"
        >
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
    </main>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <h1 className="text-4xl font-bold text-red-500">Article Not Found</h1>
    </div>
  )
}

// Helper function
async function getBlogPost(slug: string): Promise<{
  metadata: BlogPostMetadata
  content: string
} | null> {
  const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.md`)
  
  if (!fs.existsSync(filePath)) {
    return null
  }

  const rawContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(rawContent)

  const metadata: BlogPostMetadata = {
    title: data.title || 'Untitled Article',
    subtitle: data.subtitle || '',
    date: data.date || '',
    readingTime: data.readingTime || '',
    tags: Array.isArray(data.tags) ? data.tags : []
  }

  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypePrettyCode, rehypePrettyCodeOptions)
    .use(rehypeStringify)
    .process(content)

  return {
    metadata,
    content: result.toString()
  }
}

// Main Page Component
export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return <NotFound />
  }

  const { metadata, content } = post

  return (
    <div className="min-h-screen bg-black text-white">
      <PostHeader metadata={metadata} />
      <PostContent html={content} />
    </div>
  )
}