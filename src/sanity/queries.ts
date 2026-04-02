import { groq } from 'next-sanity'

// ── Blog Posts ──
export const POSTS_QUERY = groq`
  *[_type == "blogPost" && status == "published" && locale == $locale] | order(publishedAt desc) {
    _id,
    title,
    slug,
    thumbnail,
    thumbnailUrl,
    excerpt,
    "categoryTitle": category->title,
    "categorySlug": category->slug.current,
    tags,
    publishedAt,
    author,
    featured,
    locale
  }
`

export const FEATURED_POSTS_QUERY = groq`
  *[_type == "blogPost" && status == "published" && featured == true && locale == $locale] | order(publishedAt desc) [0...3] {
    _id,
    title,
    slug,
    thumbnail,
    excerpt,
    "categoryTitle": category->title,
    publishedAt,
    author,
    locale
  }
`

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "blogPost" && slug.current == $slug && status == "published"][0] {
    _id,
    title,
    slug,
    thumbnail,
    thumbnailUrl,
    excerpt,
    body,
    "categoryTitle": category->title,
    "categorySlug": category->slug.current,
    tags,
    publishedAt,
    author,
    locale,
    seo
  }
`

export const POSTS_BY_CATEGORY_QUERY = groq`
  *[_type == "blogPost" && status == "published" && locale == $locale && category->slug.current == $categorySlug] | order(publishedAt desc) {
    _id,
    title,
    slug,
    thumbnail,
    excerpt,
    "categoryTitle": category->title,
    publishedAt,
    author,
    locale
  }
`

// ── Categories ──
export const CATEGORIES_QUERY = groq`
  *[_type == "category" && locale == $locale] | order(title asc) {
    _id,
    title,
    slug,
    description,
    locale
  }
`

// ── Legal Documents ──
export const LEGAL_DOCS_QUERY = groq`
  *[_type == "legalDocument"] | order(issuedDate desc) {
    _id,
    title,
    slug,
    documentNumber,
    issuedDate,
    issuingAuthority,
    documentType,
    excerpt,
    excerptEn,
    "fileUrl": file.asset->url
  }
`

// ── Product Brochures ──
export const BROCHURES_QUERY = groq`
  *[_type == "productBrochure" && status == "published" && locale == $locale] | order(product asc) {
    _id,
    title,
    product,
    "fileUrl": file.asset->url,
    version,
    locale
  }
`
