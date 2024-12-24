import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import fs from 'fs'
import path from 'path'

function slugify(str) {
  return str
    .toString()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
}

export async function POST(req) {
  const session = await getServerSession(authOptions)
  if (!session || session.user.role !== 'admin') {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 })
  }

  const { title, subtitle, description, tags, category, published } = await req.json()
  const slug = slugify(title)

  const frontMatter = 
`---
title: "${title}"
subtitle: "${subtitle}"
tags: [${tags.map((t) => `"${t}"`).join(',')}]
category: "${category}"
published: ${published}
---

${description}
`

  const filePath = path.join(process.cwd(), 'content', 'posts', `${slug}.md`)
  fs.writeFileSync(filePath, frontMatter, 'utf-8')

  return NextResponse.json({ success: true })
}
