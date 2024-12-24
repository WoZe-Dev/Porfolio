import matter from "gray-matter";
import path from "path";
import fs from "fs";
import Link from "next/link";
import { Clock } from "lucide-react";

// Types
type Post = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  createdAt: string;
  readingTime?: string;
  published: boolean;
};

// Fonction pour vérifier si une date est valide
function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

// Fonction pour récupérer les articles côté serveur
async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const rawContent = fs.readFileSync(filePath, "utf-8");
      const { data, content } = matter(rawContent);

      const stat = fs.statSync(filePath); // Obtenir les métadonnées du fichier
      const createdAt = data.createdAt || stat.birthtime.toISOString(); // Date de création si elle n'est pas définie dans les données front matter

      return {
        slug: file.replace(/\.md$/, ""),
        ...data,
        createdAt, // Ajouter la date de création
      };
    })
    .filter((post: any) => post.published);

  return posts as Post[];
}

export default async function BlogPage() {
  // Charger les articles
  const posts = await getPosts();

  // Groupement des articles par année
  const postsByYear = posts.reduce((acc: any, post: Post) => {
    const year = new Date(post.date).getFullYear();
    if (!acc[year]) acc[year] = [];
    acc[year].push(post);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-black text-gray-300">
      {/* Header */}
      <header className="border-b border-gray-800">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <h1 className="text-5xl font-bold text-white mb-6">Blog</h1>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {Object.entries(postsByYear)
          .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
          .map(([year, yearPosts]) => (
            <section key={year} className="mb-16">
              <h2 className="text-3xl font-bold text-white mb-8">{year}</h2>
              <div className="space-y-8">
                {yearPosts.map((post) => (
                  <article key={post.slug} className="group">
                    <Link href={`/blog/${post.slug}`} className="block">
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{post.subtitle}</p>
                        <div className="flex items-center gap-3 text-sm text-gray-500">
                          <time>
                            Créé :{" "}
                            {isValidDate(post.createdAt)
                              ? new Date(post.createdAt).toLocaleDateString("fr-FR", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })
                              : "Inconnue"}
                          </time>
                          <span>|</span>
                          <time>
                            Publié :{" "}
                            {isValidDate(post.date)
                              ? new Date(post.date).toLocaleDateString("fr-FR", {
                                  day: "numeric",
                                  month: "long",
                                  year: "numeric",
                                })
                              : "Inconnue"}
                          </time>
                          {post.readingTime && (
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {post.readingTime}
                            </span>
                          )}
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>
            </section>
          ))}
      </main>
    </div>
  );
}
