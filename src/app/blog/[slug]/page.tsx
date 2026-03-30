'use client'

import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { PortableText } from '@portabletext/react'
import Header, { LangContext, useLang } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { fetchPostBySlug, fetchPostsByCategory } from '@/sanity/fetch'
import { urlFor } from '@/sanity/image'
import type { BlogPost } from '@/sanity/types'
import styles from './post.module.css'

/* ── Section nav config ── */
const SECTIONS_VI = ['Tin tức', 'Kiến thức', 'Văn bản pháp lý']
const SECTION_SLUGS_VI: Record<string, string> = {
  'Tin tức': 'Tin-tức',
  'Kiến thức': 'Kiến-thức',
  'Văn bản pháp lý': 'Văn-bản-pháp-lý',
}
const SECTIONS_EN = ['News', 'Knowledge', 'Legal Documents']
const SECTION_SLUGS_EN: Record<string, string> = {
  'News': 'News',
  'Knowledge': 'Knowledge',
  'Legal Documents': 'Legal-Documents',
}

/* ── Pre-process body: group pipe-row blocks into markdownTable ── */
function preprocessBody(body: unknown[]): unknown[] {
  if (!Array.isArray(body)) return body
  const result: unknown[] = []
  let i = 0
  while (i < body.length) {
    const block = body[i] as Record<string, unknown>
    const children = Array.isArray(block.children) ? block.children : []
    const firstText = (children[0] as Record<string, unknown>)?.text
    if (block._type === 'block' && typeof firstText === 'string' && firstText.trim().startsWith('|')) {
      const rows: string[] = []
      while (i < body.length) {
        const b = body[i] as Record<string, unknown>
        const ch = Array.isArray(b.children) ? b.children : []
        const t = (ch[0] as Record<string, unknown>)?.text
        if (b._type === 'block' && typeof t === 'string' && t.trim().startsWith('|')) {
          rows.push(t.trim())
          i++
        } else break
      }
      result.push({ _type: 'markdownTable', _key: `tbl-${result.length}`, rows })
    } else {
      result.push(block)
      i++
    }
  }
  return result
}

/* ── Parse inline URLs from plain text ── */
function renderTextWithLinks(text: string, key: string | number): React.ReactNode {
  const parts = text.split(/(\/[\w/-]+|[\w.+-]+@[\w-]+\.[a-z]{2,})/g)
  if (parts.length === 1) return text
  return (
    <span key={key}>
      {parts.map((part, j) => {
        if (/^\/[\w/-]+$/.test(part)) {
          return <a key={j} href={part} className={styles.ptLink}>{part}</a>
        }
        if (/[\w.+-]+@[\w-]+\.[a-z]{2,}/.test(part)) {
          return <a key={j} href={`mailto:${part}`} className={styles.ptLink}>{part}</a>
        }
        return part
      })}
    </span>
  )
}

/* ── Render markdown table rows ── */
function MarkdownTable({ rows }: { rows: string[] }) {
  const isSeparator = (r: string) => /^\|[-|\s:]+\|$/.test(r.replace(/\s/g, ''))
  const dataRows = rows.filter(r => !isSeparator(r))
  if (dataRows.length === 0) return null
  const parseRow = (row: string) =>
    row.split('|').slice(1, -1).map(c => c.trim())
  const headers = parseRow(dataRows[0])
  const bodyRows = dataRows.slice(1)
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.ptTable}>
        <thead>
          <tr>
            {headers.map((h, i) => (
              <th key={i} className={styles.ptTh}>{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {bodyRows.map((row, ri) => (
            <tr key={ri} className={styles.ptTr}>
              {parseRow(row).map((cell, ci) => (
                <td key={ci} className={styles.ptTd}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

type RawSpan = { _type: string; _key?: string; text?: string; marks?: string[] }
type RawBlock = { _key?: string; children?: RawSpan[] }

/* ── Portable Text components ── */
const ptComponents = {
  types: {
    urlImage: ({ value }: { value: { url?: string; alt?: string; caption?: string } }) => (
      <figure className={styles.ptFigure}>
        <img
          src={value.url || ''}
          alt={value.alt || ''}
          className={styles.ptImg}
          loading="lazy"
        />
        {value.caption && (
          <figcaption className={styles.ptCaption}>{value.caption}</figcaption>
        )}
      </figure>
    ),
    markdownTable: ({ value }: { value: { rows: string[] } }) => (
      <MarkdownTable rows={value.rows} />
    ),
  },
  block: {
    h2: ({ children }: { children?: React.ReactNode }) => (
      <h2 className={styles.ptH2}>{children}</h2>
    ),
    h3: ({ children }: { children?: React.ReactNode }) => (
      <h3 className={styles.ptH3}>{children}</h3>
    ),
    blockquote: ({ value }: { value?: RawBlock }) => {
      const spans = value?.children || []
      return (
        <blockquote className={styles.ptBlockquote}>
          {spans.map((span, i) => {
            if (span._type !== 'span') return null
            const text = span.text || ''
            const isStrong = span.marks?.includes('strong')
            const content = renderTextWithLinks(text, i)
            return isStrong
              ? <strong key={span._key || i} className={styles.ptStrong}>{content}</strong>
              : <span key={span._key || i}>{content}</span>
          })}
        </blockquote>
      )
    },
    normal: ({ children }: { children?: React.ReactNode }) => (
      <p className={styles.ptP}>{children}</p>
    ),
  },
  marks: {
    strong: ({ children }: { children?: React.ReactNode }) => (
      <strong className={styles.ptStrong}>{children}</strong>
    ),
    em: ({ children }: { children?: React.ReactNode }) => (
      <em>{children}</em>
    ),
    link: ({ value, children }: { value?: { href?: string }; children?: React.ReactNode }) => (
      <a href={value?.href || '#'} className={styles.ptLink}>
        {children}
      </a>
    ),
  },
  list: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <ul className={styles.ptUl}>{children}</ul>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <ol className={styles.ptOl}>{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children?: React.ReactNode }) => (
      <li className={styles.ptLi}>{children}</li>
    ),
    number: ({ children }: { children?: React.ReactNode }) => (
      <li className={styles.ptLi}>{children}</li>
    ),
  },
}

function formatDate(isoDate: string): string {
  try {
    const d = new Date(isoDate)
    return d.toLocaleDateString('vi-VN', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch {
    return isoDate
  }
}

/* ── Post Content ── */
function PostContent() {
  const { lang } = useLang()
  const params = useParams()
  const slug = typeof params.slug === 'string' ? params.slug : Array.isArray(params.slug) ? params.slug[0] : ''

  const [post, setPost] = useState<BlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    fetchPostBySlug(slug).then((data) => {
      if (data) {
        setPost(data)
        // Fetch related posts in the same category
        if (data.categorySlug) {
          fetchPostsByCategory(data.locale, data.categorySlug).then((related) => {
            setRelatedPosts(related.filter(p => p.slug?.current !== slug))
          })
        }
      } else {
        setNotFound(true)
      }
      setLoading(false)
    })
  }, [slug])

  if (loading) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.loading}>
          <div className={styles.spinner} />
          <p>{lang === 'vi' ? 'Đang tải bài viết...' : 'Loading article...'}</p>
        </div>
      </main>
    )
  }

  if (notFound || !post) {
    return (
      <main className={styles.wrapper}>
        <div className={styles.notFound}>
          <h1>404</h1>
          <p>{lang === 'vi' ? 'Không tìm thấy bài viết.' : 'Article not found.'}</p>
          <a href="/blog/" className={styles.backBtn}>
            ← {lang === 'vi' ? 'Quay lại Blog' : 'Back to Blog'}
          </a>
        </div>
      </main>
    )
  }

  const thumbnailUrl = post.thumbnail
    ? urlFor(post.thumbnail).width(1200).height(630).url()
    : post.thumbnailUrl || null

  return (
    <main className={styles.wrapper}>
      {/* Breadcrumb */}
      <div className={`container ${styles.breadcrumb}`}>
        <a href="/">ESGreen</a>
        <span>›</span>
        <a href="/blog/">{lang === 'vi' ? 'Blog' : 'Blog'}</a>
        <span>›</span>
        <span>{post.categoryTitle}</span>
      </div>

      <article className={`container ${styles.article}`}>
        {/* Header */}
        <header className={styles.articleHeader}>
          <div className={styles.meta}>
            {post.categoryTitle && (
              <span className={styles.category}>{post.categoryTitle}</span>
            )}
            {post.tags?.map((tag) => (
              <span key={tag} className={styles.tag}>{tag}</span>
            ))}
          </div>

          <h1 className={styles.title}>{post.title}</h1>

          {post.excerpt && (
            <p className={styles.excerpt}>{post.excerpt}</p>
          )}

          <div className={styles.byline}>
            <span className={styles.author}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
              {post.author || 'ESGreen'}
            </span>
            <span className={styles.date}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              {formatDate(post.publishedAt)}
            </span>
            <span className={styles.readTime}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
              {lang === 'vi' ? '5 phút đọc' : '5 min read'}
            </span>
          </div>
        </header>

        {/* Thumbnail */}
        {thumbnailUrl && (
          <div className={styles.thumbnail}>
            <img src={thumbnailUrl} alt={post.title} />
          </div>
        )}

        {/* Body */}
        <div className={styles.body}>
          {post.body && Array.isArray(post.body) && post.body.length > 0 ? (
            <PortableText
              value={preprocessBody(post.body) as Parameters<typeof PortableText>[0]['value']}
              components={ptComponents}
            />
          ) : (
            <p className={styles.ptP}>{post.excerpt}</p>
          )}
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <div className={styles.ctaBox}>
            <p className={styles.ctaTitle}>
              {lang === 'vi'
                ? 'Doanh nghiệp bạn cần hỗ trợ kiểm kê KNK?'
                : 'Does your business need GHG inventory support?'}
            </p>
            <p className={styles.ctaSub}>
              {lang === 'vi'
                ? 'ESGreen cung cấp nền tảng tự động, đúng chuẩn NĐ 06/2022 — sẵn sàng nộp Bộ TN&MT.'
                : 'ESGreen provides an automated platform compliant with Decree 06/2022 — ready to submit to MONRE.'}
            </p>
            <a href="/#contact" className={styles.ctaBtn}>
              {lang === 'vi' ? 'Nhận tư vấn miễn phí →' : 'Get free consultation →'}
            </a>
          </div>
        </div>

        {/* Tags */}
        {post.tags && post.tags.length > 0 && (
          <div className={styles.tagList}>
            <span className={styles.tagLabel}>{lang === 'vi' ? 'Từ khóa:' : 'Tags:'}</span>
            {post.tags.map((tag) => (
              <span key={tag} className={styles.tagChip}>{tag}</span>
            ))}
          </div>
        )}

        {/* Related posts */}
        {relatedPosts.length > 0 && (
          <div className={styles.relatedSection}>
            <h3 className={styles.relatedTitle}>
              {lang === 'vi' ? 'Bài viết liên quan' : 'Related articles'}
            </h3>
            <ul className={styles.relatedList}>
              {relatedPosts.map((rp) => (
                <li key={rp._id} className={styles.relatedItem}>
                  <a href={`/blog/${rp.slug?.current}`} className={styles.relatedLink}>
                    {rp.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Section navigation */}
        {(() => {
          const vi = lang === 'vi'
          const sections = vi ? SECTIONS_VI : SECTIONS_EN
          const slugMap = vi ? SECTION_SLUGS_VI : SECTION_SLUGS_EN
          // Map current post category to section bucket
          const CAT_MAP: Record<string, string> = {
            'Tin tức': 'Tin tức', 'Kiến thức': 'Kiến thức',
            'Chủ đề chuyên sâu': 'Kiến thức', 'Văn bản pháp lý': 'Văn bản pháp lý',
            'News': 'News', 'Knowledge': 'Knowledge', 'Legal Documents': 'Legal Documents',
          }
          const currentSection = CAT_MAP[post.categoryTitle] || ''
          const otherSections = sections.filter(s => s !== currentSection)
          if (otherSections.length === 0) return null
          return (
            <div className={styles.sectionNav}>
              <span className={styles.sectionNavLabel}>
                {vi ? 'Khám phá thêm:' : 'Explore more:'}
              </span>
              {otherSections.map(s => (
                <a
                  key={s}
                  href={`/blog/#section-${slugMap[s]}`}
                  className={styles.sectionNavBtn}
                >
                  {s} →
                </a>
              ))}
            </div>
          )
        })()}

        {/* Back */}
        <div className={styles.backWrap}>
          <a href="/blog/" className={styles.backBtn}>
            ← {lang === 'vi' ? 'Quay lại Blog' : 'Back to Blog'}
          </a>
        </div>
      </article>
    </main>
  )
}

export default function BlogPostPage() {
  const [lang, setLang] = useState('vi')
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />
      <PostContent />
      <Footer />
    </LangContext.Provider>
  )
}
