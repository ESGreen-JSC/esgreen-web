import { client } from './client'
import type { BlogPost, Category, LegalDocument } from './types'
import {
  POSTS_QUERY,
  CATEGORIES_QUERY,
  LEGAL_DOCS_QUERY,
  FEATURED_POSTS_QUERY,
  POST_BY_SLUG_QUERY,
  POSTS_BY_CATEGORY_QUERY,
} from './queries'

export async function fetchPosts(locale: string): Promise<BlogPost[]> {
  if (!client) return []
  try {
    return await client.fetch<BlogPost[]>(POSTS_QUERY, { locale })
  } catch {
    return []
  }
}

export async function fetchFeaturedPosts(locale: string): Promise<BlogPost[]> {
  if (!client) return []
  try {
    return await client.fetch<BlogPost[]>(FEATURED_POSTS_QUERY, { locale })
  } catch {
    return []
  }
}

export async function fetchCategories(locale: string): Promise<Category[]> {
  if (!client) return []
  try {
    return await client.fetch<Category[]>(CATEGORIES_QUERY, { locale })
  } catch {
    return []
  }
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!client) return null
  try {
    return await client.fetch<BlogPost>(POST_BY_SLUG_QUERY, { slug })
  } catch {
    return null
  }
}

export async function fetchPostsByCategory(locale: string, categorySlug: string): Promise<BlogPost[]> {
  if (!client) return []
  try {
    return await client.fetch<BlogPost[]>(POSTS_BY_CATEGORY_QUERY, { locale, categorySlug })
  } catch {
    return []
  }
}

export async function fetchLegalDocs(locale: string): Promise<LegalDocument[]> {
  if (!client) return []
  try {
    return await client.fetch<LegalDocument[]>(LEGAL_DOCS_QUERY, { locale })
  } catch {
    return []
  }
}
