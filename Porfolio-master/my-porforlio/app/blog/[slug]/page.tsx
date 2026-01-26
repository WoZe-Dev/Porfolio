import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeStringify from 'rehype-stringify'
import { NavbarDemo } from "@/components/navbar-menu"
import { Clock, Calendar, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'

export const dynamic = 'force-dynamic'
export const revalidate = 0

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
    <header className="relative pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),transparent)]
        dark:bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.900),transparent)] opacity-20" />
      
      <div className="max-w-4xl mx-auto">
        <Link 
          href="/blog" 
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-zinc-100 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour à tous les articles
        </Link>

        <div className="space-y-6">
          {/* Tags */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1  back-tags text-indigo-200 rounded-full
                    border border-indigo-800  transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Title */}
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className=" font-bold text-gray-900 dark:text-gray-100">
              {subtitle}
            </p>
          )}

          {/* Metadata */}
          <div className="flex flex-wrap gap-6 text-sm text-zinc-400 pt-4 border-t border-zinc-800">
            {date && (
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{date}</span>
              </div>
            )}
            {readingTime && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{readingTime} read</span>
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
        <article
          className="prose prose-zinc dark:prose-invert prose-headings:font-bold prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-p:text-base prose-a:text-indigo-600 dark:prose-a:text-indigo-300"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {/* Article Footer */}
        <div className="mt-16 pt-8 border-t border-zinc-800"></div>
      </div>
    </main>
  )
}

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black gap-4">
      <div className="w-16 h-16 bg-red-950/50 rounded-full flex items-center justify-center">
        <span className="text-2xl">🤔</span>
      </div>
      <h1 className="text-4xl font-bold text-red-500">Article Not Found</h1>
      <p className="text-zinc-400"></p>
      <Link 
        href="/blog" 
        className="mt-4 px-6 py-2 bg-zinc-900 text-zinc-300 rounded-full hover:bg-zinc-800 transition-colors"
      >
        Back to Blog
      </Link>
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

  // Formater la date si elle existe
  let formattedDate = ''
  if (data.publishDate) {
    const date = new Date(data.publishDate)
    formattedDate = date.toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } else if (data.date) {
    formattedDate = data.date
  }

  const metadata: BlogPostMetadata = {
    title: data.title || 'Untitled Article',
    subtitle: data.subtitle || '',
    date: formattedDate,
    readingTime: data.readingTime || '',
    tags: Array.isArray(data.tags) ? data.tags : []
  }

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm) // optionnel mais conseillé
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw) // <-- Ajoute ce plugin juste après remarkRehype
    .use(rehypeStringify, { allowDangerousHtml: true })
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
    <div className="min-h-screen bg-black bg-white dark:bg-black text-white">
      <NavbarDemo />
      <PostHeader metadata={metadata} />
      <PostContent html={content} />
    </div>
  )
}
