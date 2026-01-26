export const dynamic = 'force-dynamic'

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default async function AdminPage() {
  const postsDir = path.join(process.cwd(), 'content', 'posts')
  let posts: any[] = []

  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir)
    posts = files.map(file => {
      const rawContent = fs.readFileSync(path.join(postsDir, file), 'utf-8')
      const { data } = matter(rawContent)
      return {
        slug: file.replace(/\.md$/, ''),
        ...data
      }
    })
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <header className="flex items-center justify-between-admin mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Tableau de Bord</h1>
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-gray-600 hover:text-gray-800">Retour au site</Link>
          <Link href="/connexions/posts/new" className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-500">
            Nouvel article
          </Link>
        </div>
      </header>

      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4 text-gray-700">Mes Articles</h2>
        {posts.length === 0 ? (
          <p className="text-gray-600">Aucun article trouvé.</p>
        ) : (
          <table className="w-full-admin text-left border-collapse">
            <thead>
              <tr className="bg-gray-50">
                <th className="py-3 px-4 font-medium text-gray-700 border-b">Titre</th>
                <th className="py-3 px-4 font-medium text-gray-700 border-b">Publié</th>
                <th className="py-3 px-4 font-medium text-gray-700 border-b">Catégorie</th>
                <th className="py-3 px-4 font-medium text-gray-700 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post: any) => (
                <tr key={post.slug} className="hover:bg-gray-50 transition">
                  <td className="py-3 px-4 border-b font-semibold text-gray-800">{post.title || <i>Sans titre</i>}</td>
                  <td className="py-3 px-4 border-b">
                    {post.published ? (
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded">
                        Publié
                      </span>
                    ) : (
                      <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded">
                        Brouillon
                      </span>
                    )}
                  </td>
                  <td className="py-3 px-4 border-b">
                    {post.category || <span className="text-gray-500 italic">Aucune</span>}
                  </td>
                  <td className="py-3 px-4 border-b">
                    <Link 
                      href={`/connexions/posts/${post.slug}`} 
                      className="text-blue-600 hover:text-blue-800 text-sm font-medium transition"
                    >
                      Éditer
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  )
}
