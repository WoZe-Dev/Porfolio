import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import fs from "fs"
import path from "path"

function slugify(str: string) {
  return str
    .toString()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
}

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 })
  }

  try {
    const { title, subtitle, description, tags, category, published } = await req.json()
    
    // Vérifier si tags est un tableau. Si c’est une chaîne, le code suivant échouera.
    // Si vous écrivez des tags séparés par des virgules côté client, transformez-les d’abord en tableau:
    let tagsArray: string[]
    if (typeof tags === 'string') {
      tagsArray = tags.split(',').map((t: string) => t.trim()).filter(Boolean)
    } else {
      tagsArray = Array.isArray(tags) ? tags : []
    }

    const slug = slugify(title)
    const frontMatter =
`---
title: "${title}"
subtitle: "${subtitle}"
tags: [${tagsArray.map((t: string) => `"${t}"`).join(',')}]
category: "${category}"
published: ${published}
---

${description}
`

    const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.md`)

    // Vérifier que content/posts existe
    if (!fs.existsSync(path.join(process.cwd(), 'content', 'posts'))) {
      fs.mkdirSync(path.join(process.cwd(), 'content', 'posts'), { recursive: true })
    }

    fs.writeFileSync(filePath, frontMatter, 'utf-8')

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error("Erreur lors de la création de l'article :", err)
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 })
  }
}
