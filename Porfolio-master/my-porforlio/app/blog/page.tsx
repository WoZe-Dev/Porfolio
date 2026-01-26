export const dynamic = 'force-dynamic'
export const revalidate = 0 // Désactiver le cache

import matter from "gray-matter";
import path from "path";
import fs from "fs";
import Link from "next/link";
import { Clock, Calendar, FileText } from "lucide-react";
import { NavbarDemo } from "@/components/navbar-menu";

// Types
type Post = {
  slug: string;
  title: string;
  subtitle: string;
  displayDate?: string;
  createdAt: string;
  readingTime?: string;
  published: boolean;
};

function isValidDate(dateString: string): boolean {
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}

async function getPosts(): Promise<Post[]> {
  const postsDir = path.join(process.cwd(), "content", "posts");
  const files = fs.readdirSync(postsDir);

  const posts = files
    .map((file) => {
      const filePath = path.join(postsDir, file);
      const rawContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(rawContent);

      // Utiliser publishDate en priorité, puis date, sinon la date actuelle
      const dateToShow = data.publishDate || data.date || new Date().toISOString();

      // Important: Ne pas utiliser ...data car il contient date qui peut être undefined
      return {
        slug: file.replace(/\.md$/, ""),
        title: data.title,
        subtitle: data.subtitle,
        tags: data.tags,
        category: data.category,
        published: data.published,
        publishDate: data.publishDate,
        readingTime: data.readingTime,
        displayDate: dateToShow,  // Nouvelle clé pour eviter les conflits
        createdAt: dateToShow, // Utiliser la même date
      };
    })
    .filter((post: any) => post.published);

  return posts as Post[];
}

export default async function BlogPage() {
  const posts = await getPosts();

  const postsByYear: Record<string, Post[]> = posts.reduce((acc, post) => {
    const dateToUse = (post.displayDate && isValidDate(post.displayDate)) ? post.displayDate : post.createdAt;
    const postDate = new Date(dateToUse);
    const year = isNaN(postDate.getTime())
      ? "Inconnue"
      : postDate.getFullYear().toString();

    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(post);
    return acc;
  }, {} as Record<string, Post[]>);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-neutral-700 dark:text-neutral-500">
      <NavbarDemo />

      <main className="container mx-auto">
        <div className="flex flex-col gap-3 w-full max-w-[90ch] mx-auto p-6 md:py-13">
          {Object.entries(postsByYear)
            .sort(([yearA], [yearB]) => Number(yearB) - Number(yearA))
            .map(([year, yearPosts]) => (
              <section key={year} className="space-y-6">
                {yearPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="group flex flex-col justify-between gap-2 md:flex-row md:items-start md:gap-6"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h2 className="flex items-center gap-2 text-lg font-bold text-neutral-700 group-hover:text-neutral-900 dark:text-neutral-500 dark:group-hover:text-neutral-300 md:text-xl">
                          <FileText className="w-[1em] h-[1em] flex-shrink-0" />
                          <span className="truncate">{post.title}</span>
                        </h2>
                      </div>
                      <p className="mt-1 text-neutral-500 line-clamp-2 group-hover:text-neutral-700 dark:group-hover:text-neutral-400">
                        {post.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-neutral-600 dark:text-neutral-400 md:flex-col md:items-end md:gap-2">
                      <time 
                        dateTime={post.displayDate || post.createdAt}
                        className="flex items-center gap-2 md:flex-row-reverse"
                      >
                        <Calendar className="w-[1em] h-[1em]" />
                        {new Date(post.displayDate || post.createdAt).toLocaleDateString('fr-FR', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </time>
                      {post.readingTime && (
                        <span className="flex items-center gap-2 md:flex-row-reverse">
                          <Clock className="w-[1em] h-[1em]" />
                          {post.readingTime}
                        </span>
                      )}
                    </div>
                  </Link>
                ))}
              </section>
            ))}
        </div>
      </main>
    </div>
  );
}