# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev           # Start development server on http://localhost:3000

# Production
npm run build         # Build for production
npm start            # Start production server

# Code Quality
npm run lint          # Run ESLint
```

## Architecture Overview

This is a personal portfolio website built with Next.js 14 using the App Router architecture. It features a blog system with admin capabilities and a custom markdown rendering system.

### Key Architectural Patterns

**Hybrid Rendering Strategy:**
- Static pages for portfolio sections (home, experience, projects)
- Dynamic blog pages with ISR (force-dynamic) for real-time content updates
- Server-side authentication for admin routes

**Authentication Flow:**
- NextAuth.js with credentials provider for admin access
- Auth configuration centralized in `lib/authOptions.ts` (imported by both API routes and middleware)
- Middleware protects `/connexions` and `/connexions/posts/*` routes
- Admin credentials stored in environment variables (ADMIN_EMAIL, ADMIN_PASSWORD, NEXTAUTH_SECRET)

**Blog Content Management:**
- Markdown files stored in `content/posts/` directory
- Gray-matter for frontmatter parsing (title, subtitle, tags, category, published, publishDate)
- Admin can create/edit posts via `/connexions` interface
- Posts filtered by `published: true` for public display
- File-based CMS with server-side file operations in API routes

**Component Architecture:**
- UI components in `components/` and `components/ui/`
- Page-specific components colocated in `app/` subdirectories
- Client/Server component split: styled-components require 'use client' directive
- Styled-components registry in `lib/registry.tsx` handles SSR hydration

### Important Files

**Configuration:**
- `lib/authOptions.ts` - Central NextAuth configuration (used by API routes and pages)
- `middleware.ts` - Route protection for admin pages
- `next.config.mjs` - Image optimization config, removes console logs in production
- `tailwind.config.ts` - Custom animations (aurora), color palette flattening

**Content System:**
- `app/blog/page.tsx` - Blog listing with year grouping
- `app/blog/[slug]/page.tsx` - Individual blog post rendering with syntax highlighting
- `app/connexions/posts/new/page.tsx` - Create new posts (admin only)
- `app/connexions/posts/[slug]/EditPostForm.tsx` - Edit existing posts (admin only)
- `app/api/admin/posts/route.ts` - List posts, create new drafts
- `app/api/admin/posts/[slug]/route.ts` - Read, update, delete specific posts

**Styling:**
- `lib/registry.tsx` - Styled-components SSR setup (required for hydration)
- Uses both Tailwind CSS and styled-components
- Dark mode support via `content/ThemeContext.tsx`

## Path Aliases

The project uses `@/*` to reference root-level directories:
```typescript
import { Component } from "@/components/Component"
import { authOptions } from "@/lib/authOptions"
```

## Environment Variables

Required for authentication:
```
ADMIN_EMAIL=
ADMIN_PASSWORD=
NEXTAUTH_SECRET=
```

## Deployment

The project includes `ecosystem.config.js` for PM2 process management in production. Memory is limited to 500M with old space size of 512MB.
