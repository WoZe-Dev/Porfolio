// app/admin/posts/[slug]/EditPostForm.tsx
"use client";

import { useState } from "react";
import MarkdownIt from "markdown-it";
import MdEditor from "react-markdown-editor-lite";
import "react-markdown-editor-lite/lib/index.css";

const mdParser = new MarkdownIt();

// Nettoie une liste de tags saisie dans un <input>
const cleanTags = (raw: string): string[] =>
  raw
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);

// Convertir une date ISO en format YYYY-MM-DD pour l'input date
const formatDateForInput = (isoDate: string | null): string => {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export default function EditPostForm({
  slug,
  initialData = {},
}: {
  slug: string;
  initialData?: Record<string, any>;
}) {
  /* ---------------- états ---------------- */
  const [title, setTitle]             = useState(initialData.title ?? "");
  const [subtitle, setSubtitle]       = useState(initialData.subtitle ?? "");
  const [description, setDescription] = useState(initialData.description ?? "");
  const [tags, setTags]               = useState(
    Array.isArray(initialData.tags)
      ? initialData.tags.join(", ")
      : initialData.tags ?? "",
  );
  const [category, setCategory]       = useState(initialData.category ?? "");
  const [published, setPublished]     = useState<boolean>(!!initialData.published);
  const [publishDate, setPublishDate] = useState<string>(
    formatDateForInput(initialData.publishDate) || formatDateForInput(new Date().toISOString())
  );

  /* --------------- handlers -------------- */
  async function handleUpdate(e: React.FormEvent) {
    e.preventDefault();
    
    // Convertir la date YYYY-MM-DD en ISO string (à midi UTC pour éviter les problèmes de fuseau horaire)
    const dateISO = publishDate ? new Date(publishDate + 'T12:00:00.000Z').toISOString() : new Date().toISOString();
    
    console.log("📅 Date sélectionnée (format input):", publishDate);
    console.log("📅 Date convertie (ISO):", dateISO);
    
    await fetch(`/api/admin/posts/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        subtitle,
        description,
        tags: cleanTags(tags),
        category,
        published,
        publishDate: dateISO,
      }),
    }).then((r) => r.ok && (window.location.href = "/connexions"));
  }

  async function handleDelete() {
    if (!confirm("Êtes-vous sûr de vouloir supprimer cet article ?")) return;
    await fetch(`/api/admin/posts/${slug}`, { method: "DELETE" }).then(
      (r) => r.ok && (window.location.href = "/connexions"),
    );
  }

  /* ----------------- UI ------------------ */
  return (
    <main className="p-8 max-w-lg">
      <h1 className="text-2xl font-bold mb-4">Édition de l’article</h1>

      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          className="border w-full p-2"
          placeholder="Titre"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
          className="border w-full p-2"
          placeholder="Sous-titre"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />

        <MdEditor
          style={{ height: 300 }}
          value={description}
          renderHTML={(t) => mdParser.render(t)}
          onChange={({ text }) => setDescription(text)}
        />

        <input
          className="border w-full p-2"
          placeholder="Tags (séparés par des virgules)"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <input
          className="border w-full p-2"
          placeholder="Catégorie"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <div>
          <label className="block mb-2 text-sm font-medium">Date de publication</label>
          <input
            type="date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            className="border w-full p-2 rounded"
            required
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
