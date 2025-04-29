"use client";

import { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import DatePicker from "react-datepicker";
import "react-markdown-editor-lite/lib/index.css";
import "react-datepicker/dist/react-datepicker.css";

const mdParser = new MarkdownIt();

export default function EditPostForm({
  slug,
  initialData,
}: {
  slug: string;
  initialData: any;
}) {
  const [title, setTitle] = useState(initialData.title || "");
  const [subtitle, setSubtitle] = useState(initialData.subtitle || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [tags, setTags] = useState(
    Array.isArray(initialData.tags)
      ? initialData.tags.join(", ")
      : initialData.tags || ""
  );
  const [category, setCategory] = useState(initialData.category || "");
  const [published, setPublished] = useState(!!initialData.published);
  const [publishDate, setPublishDate] = useState<Date | null>(
    initialData.publishDate ? new Date(initialData.publishDate) : null
  );

  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch(`/api/admin/posts/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        subtitle,
        description,
        tags: tags.split(",").map((t: string) => t.trim()).filter(Boolean),
        category,
        published,
        publishDate: publishDate?.toISOString(),
      }),
    });
    if (res.ok) {
      window.location.href = "/admin";
    }
  }

  async function handleDelete() {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;
    const res = await fetch(`/api/admin/posts/${slug}`, {
      method: "DELETE",
    });
    if (res.ok) {
      window.location.href = "/admin";
    }
  }

  return (
    <main className="p-8 max-w-lg-admin">
      <h1 className="text-2xl font-bold mb-4">Édition de l’article</h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          placeholder="Titre"
          className="border w-full p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Sous-titre"
          className="border w-full p-2"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />

        {/* Éditeur Markdown */}
        <MdEditor
          style={{ height: "300px" }}
          value={description}
          renderHTML={(text) => mdParser.render(text)}
          onChange={({ text }) => setDescription(text)}
        />

        <input
          type="text"
          placeholder="Tags (séparés par des virgules)"
          className="border w-full p-2"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />
        <input
          type="text"
          placeholder="Catégorie"
          className="border w-full p-2"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <div>
          <label>Date de publication</label>
          <DatePicker
            selected={publishDate}
            onChange={(date: Date | null) => setPublishDate(date)}
            dateFormat="dd/MM/yyyy"
            className="border w-full p-2"
          />
        </div>

        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={published}
            onChange={(e) => setPublished(e.target.checked)}
          />
          <span>Publié</span>
        </label>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded">
            Mettre à jour
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            Supprimer
          </button>
        </div>
      </form>
    </main>
  );
}
