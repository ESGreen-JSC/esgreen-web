export interface SanitySlug {
  _type: 'slug'
  current: string
}

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
}

export interface BlogPost {
  _id: string
  title: string
  slug: SanitySlug
  thumbnail: SanityImage
  thumbnailUrl?: string
  excerpt?: string
  body?: unknown[]
  categoryTitle: string
  categorySlug: string
  tags?: string[]
  publishedAt: string
  author?: string
  featured?: boolean
  locale: 'vi' | 'en'
  seo?: {
    metaTitle?: string
    metaDescription?: string
    ogImage?: SanityImage
  }
}

export interface Category {
  _id: string
  title: string
  slug: SanitySlug
  description?: string
  locale: 'vi' | 'en'
}

export interface LegalDocument {
  _id: string
  title: string
  slug: SanitySlug
  documentNumber: string
  issuedDate: string
  issuingAuthority: string
  documentType: 'decree' | 'circular' | 'decision' | 'guideline' | 'other'
  excerpt?: string
  fileUrl: string
  locale: 'vi' | 'en'
}

export interface ProductBrochure {
  _id: string
  title: string
  product: 'ghg-inventory' | 'esg-rating' | 'net-zero'
  fileUrl: string
  version?: string
  locale: 'vi' | 'en'
}
