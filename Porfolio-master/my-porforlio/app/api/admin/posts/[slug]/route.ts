import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/authOptions";
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

export async function PUT(req: Request, { params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 })
  }

  const { title, subtitle, description, tags, category, published, publishDate } = await req.json()
  
  // Debug: voir ce qui est reçu
  console.log("=== API PUT /api/admin/posts/[slug] ===")
  console.log("publishDate reçu:", publishDate)
  console.log("Type:", typeof publishDate)
  
  const slug = slugify(title)
  const postsDir = path.join(process.cwd(), 'content', 'posts')
  if (!fs.existsSync(postsDir)) {
    fs.mkdirSync(postsDir, { recursive: true })
  }

  const frontMatter = 
`---
title: "${title}"
subtitle: "${subtitle}"
tags: [${tags.map((t: string) => `"${t}"`).join(',')}]
category: "${category}"
published: ${published}
publishDate: "${publishDate}"
---

${description}
`

  const oldFilePath = path.join(postsDir, `${params.slug}.md`)
  const newFilePath = path.join(postsDir, `${slug}.md`)

  // Si le slug a changé, on supprime l'ancien fichier
  if (params.slug !== slug && fs.existsSync(oldFilePath)) {
    fs.unlinkSync(oldFilePath)
  }

  fs.writeFileSync(newFilePath, frontMatter, 'utf-8')

  return NextResponse.json({ success: true })
}

export async function DELETE(req: Request, { params }: { params: { slug: string } }) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 })
  }

  const postsDir = path.join(process.cwd(), 'content', 'posts')
  const filePath = path.join(postsDir, `${params.slug}.md`)

  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath)
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
}
