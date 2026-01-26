// app/api/admin/posts/route.ts
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";   // ✅ nouveau chemin
import fs from "fs";
import path from "path";

/*---------------------------------------------------------------
  Exemple : GET  – liste tous les fichiers markdown des articles
----------------------------------------------------------------*/
export async function GET() {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const postsDir = path.join(process.cwd(), "content", "posts");
  const files = fs.existsSync(postsDir) ? fs.readdirSync(postsDir) : [];

  return NextResponse.json({ files }, { status: 200 });
}

/*---------------------------------------------------------------
  Exemple : POST – crée un nouveau brouillon vide
----------------------------------------------------------------*/
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  if (!session || (session.user as any).role !== "admin") {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 });
  }

  const { title = "Nouvel article" } = await req.json();
  const slug = title
    .toString()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-");

  const postsDir = path.join(process.cwd(), "content", "posts");
  if (!fs.existsSync(postsDir)) fs.mkdirSync(postsDir, { recursive: true });

  const filePath = path.join(postsDir, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    return NextResponse.json(
      { error: "File already exists" },
      { status: 409 }
    );
  }

  fs.writeFileSync(
    filePath,
    `---\ntitle: "${title}"\nsubtitle: ""\ntags: []\ncategory: ""\npublished: false\npublishDate: "${new Date().toISOString()}"\n---\n\n`,
    "utf-8"
  );

  return NextResponse.json({ slug }, { status: 201 });
}
