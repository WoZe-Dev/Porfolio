import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import EditPostForm from './EditPostForm' // On importe le composant client

interface Props {
  params: {
    slug: string
  }
}

export default function EditPostPage({ params }: Props) {
  const { slug } = params
  const postsDir = path.join(process.cwd(), 'content', 'posts')
  const filePath = path.join(postsDir, `${slug}.md`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const rawContent = fs.readFileSync(filePath, 'utf-8')
  const { data, content } = matter(rawContent)
  const initialTags = Array.isArray(data.tags) ? data.tags.join(', ') : ''

  // On passe les données au composant client
  return (
    <EditPostForm
      slug={slug}
      initialData={{ ...data, description: content, tags: initialTags }}
    />
  )
}
