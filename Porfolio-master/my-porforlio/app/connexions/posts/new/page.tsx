// app/admin/posts/new/page.tsx
import EditPostForm from "../[slug]/EditPostForm";

/* Métadonnées SEO – ce fichier n’est PAS « use client » */
export const metadata = {
  title: "Nouvel article",
  description: "Créer un nouvel article de blog",
};

/* Wrapper serveur – aucune prop obligatoire */
export default function NewPostPage() {
  return <EditPostForm slug="new" initialData={{}} />;
}
