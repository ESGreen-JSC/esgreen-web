'use client'
import { useState, useEffect, useMemo, useCallback } from 'react'
import styles from './blog.module.css'
import Header, { LangContext, useLang } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { fetchPosts, fetchLegalDocs } from '@/sanity/fetch'
import { urlFor } from '@/sanity/image'
import type { BlogPost, LegalDocument } from '@/sanity/types'

/* ── 3 fixed sections in order ── */
const SECTIONS_VI = ['Tin tức', 'Kiến thức', 'Văn bản pháp lý']
const SECTIONS_EN = ['News', 'Knowledge', 'Legal Documents']

/* ── Map Sanity categoryTitle → section bucket ── */
const CAT_MAP_VI: Record<string, string> = {
  'Tin tức': 'Tin tức',
  'Kiến thức': 'Kiến thức',
  'Chủ đề chuyên sâu': 'Kiến thức',
  'Văn bản pháp lý': 'Văn bản pháp lý',
}

/* ── Fallback data ── */
const fallbackPostsVi = [
  { id: '1', title: 'Việt Nam tăng tốc lộ trình Net Zero thông qua các dự án năng lượng tái tạo quy mô lớn', excerpt: 'Những bước đi chiến lược trong chuyển đổi năng lượng quốc gia đang tạo nền tảng xanh mới cho các tập đoàn đa quốc gia.', cat: 'Tin tức', date: '15 Tháng 5, 2024', time: '8 phút đọc', img: '/images/blog/wind-turbines.png', slug: '#' },
  { id: '3', title: 'Tín chỉ Carbon: Cơ hội mới cho ngành nông nghiệp bền vững', excerpt: 'Thị trường carbon tự nguyện đang mở ra hướng đi mới giúp nông dân tăng thu nhập từ việc bảo tồn rừng...', cat: 'Tin tức', date: '10 Tháng 5, 2024', time: '6 phút đọc', img: '/images/blog/carbon-market.png', slug: '#' },
  { id: '5', title: 'GHG Protocol: Hướng dẫn phân loại Scope 1, 2, 3', excerpt: 'Scope 1 trực tiếp, Scope 2 gián tiếp năng lượng, Scope 3 gián tiếp chuỗi giá trị — phân biệt và ví dụ cụ thể...', cat: 'Kiến thức', date: '18/03/2026', time: '7 phút đọc', img: '/images/blog/solar-panels.png', slug: '#' },
  { id: '6', title: 'Thị trường carbon Việt Nam: Lộ trình & Cơ hội', excerpt: 'Việt Nam đặt mục tiêu vận hành sàn giao dịch tín chỉ carbon vào 2028 — doanh nghiệp cần chuẩn bị gì?', cat: 'Kiến thức', date: '15/03/2026', time: '4 phút đọc', img: '/images/blog/forest-net-zero.png', slug: '#' },
  { id: '2', title: 'Quy định mới về trách nhiệm mở rộng của nhà sản xuất (EPR)', excerpt: 'Tìm hiểu các doanh nghiệp Việt thích ứng với các yêu cầu phân loại và tái chế bao bì bắt buộc từ năm...', cat: 'Văn bản pháp lý', date: '12 Tháng 5, 2024', time: '5 phút đọc', img: '/images/blog/green-field.png', slug: '#' },
  { id: '4', title: 'Nghị định 06/2022: Doanh nghiệp nào phải kiểm kê KNK?', excerpt: 'Tìm hiểu danh sách các ngành và quy mô doanh nghiệp bắt buộc kiểm kê khí nhà kính theo NĐ 06/2022/NĐ-CP...', cat: 'Văn bản pháp lý', date: '20/03/2026', time: '5 phút đọc', img: '/images/blog/esg-audit.png', slug: '#' },
]
const fallbackPostsEn = [
  { id: '1', title: 'Vietnam Accelerates Net Zero Roadmap Through Large-Scale Renewable Energy Projects', excerpt: 'Strategic steps in national energy transition create a new green foundation for multinational corporations.', cat: 'News', date: 'May 15, 2024', time: '8 min read', img: '/images/blog/wind-turbines.png', slug: '#' },
  { id: '3', title: 'Carbon Credits: A New Opportunity for Sustainable Agriculture', excerpt: 'The voluntary carbon market is creating new pathways to help farmers increase income through conservation...', cat: 'News', date: 'May 10, 2024', time: '6 min read', img: '/images/blog/carbon-market.png', slug: '#' },
  { id: '5', title: 'GHG Protocol: Guide to Scope 1, 2, 3 Classification', excerpt: 'Scope 1 direct, Scope 2 indirect energy, Scope 3 indirect value chain — differences and specific examples...', cat: 'Knowledge', date: '18/03/2026', time: '7 min read', img: '/images/blog/solar-panels.png', slug: '#' },
  { id: '6', title: 'Vietnam Carbon Market: Roadmap & Opportunities', excerpt: 'Vietnam targets operating carbon credit exchange by 2028 — what should enterprises prepare?', cat: 'Knowledge', date: '15/03/2026', time: '4 min read', img: '/images/blog/forest-net-zero.png', slug: '#' },
  { id: '2', title: 'New Regulations on Extended Producer Responsibility (EPR)', excerpt: 'Learn how Vietnamese enterprises are adapting to mandatory packaging classification and recycling requirements...', cat: 'Legal Documents', date: 'May 12, 2024', time: '5 min read', img: '/images/blog/green-field.png', slug: '#' },
  { id: '4', title: 'Decree 06/2022: Which Enterprises Must Inventory GHG?', excerpt: 'Learn which industries and enterprise sizes are required to inventory greenhouse gases under Decree 06...', cat: 'Legal Documents', date: '20/03/2026', time: '5 min read', img: '/images/blog/esg-audit.png', slug: '#' },
]

const fallbackLegalDocs = [
  { number: 'Nghị định 06/2022/NĐ-CP', type: 'NGHỊ ĐỊNH', year: '2022', desc: 'Quy định chi tiết các giải pháp phát triển kiểm soát phát thải khí nhà kính và bảo vệ tầng ô-zôn.', issuer: 'Chính phủ' },
  { number: 'Thông tư 01/2022/TT-BTNMT', type: 'THÔNG TƯ', year: '2022', desc: 'Chi tiết thi hành Luật Bảo vệ môi trường về ứng phó với biến đổi khí hậu.', issuer: 'Bộ TN&MT' },
  { number: 'QĐ 13/2024/QĐ-TTg', type: 'QUYẾT ĐỊNH', year: '2024', desc: 'Danh mục 2.166 cơ sở phát thải khí nhà kính phải thực hiện kiểm kê KNK.', issuer: 'Thủ tướng' },
]

/* ── Normalize Sanity post → UI format ── */
interface UIPost {
  id: string
  title: string
  excerpt: string
  cat: string
  date: string
  time: string
  img: string
  slug: string
}

function formatDate(isoDate: string, locale: string): string {
  try {
    const d = new Date(isoDate)
    return d.toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
      day: 'numeric', month: 'long', year: 'numeric',
    })
  } catch {
    return isoDate
  }
}

function sanityPostToUI(post: BlogPost, lang: string): UIPost {
  const readTime = lang === 'vi' ? '5 phút đọc' : '5 min read'
  let img = '/images/blog/default.png'
  if (post.thumbnail) img = urlFor(post.thumbnail).width(600).height(400).url()
  else if (post.thumbnailUrl) img = post.thumbnailUrl
  return {
    id: post._id,
    title: post.title,
    excerpt: post.excerpt || '',
    cat: CAT_MAP_VI[post.categoryTitle] || post.categoryTitle || '',
    date: formatDate(post.publishedAt, lang),
    time: readTime,
    img,
    slug: `/blog/${post.slug?.current || ''}`,
  }
}

/* ── Blog Content ── */
function BlogNewsletter({ vi }: { vi: boolean }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email) return
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email }),
      })
      if (res.ok) { setStatus('ok'); setEmail('') } else setStatus('err')
    } catch { setStatus('err') }
  }
  return (
    <div className={styles.newsletter}>
      <h4>{vi ? 'Đăng ký bản tin ESG hàng tuần' : 'Subscribe to Weekly ESG Newsletter'}</h4>
      <p>{vi ? 'Nhận những phân tích độc quyền và cập nhật chính sách trực tiếp qua email của bạn.' : 'Get exclusive analysis and policy updates delivered directly to your inbox.'}</p>
      {status === 'ok' ? (
        <p style={{ color: '#6DC043', fontWeight: 600 }}>{vi ? '✓ Đăng ký thành công!' : '✓ Subscribed!'}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="email" required placeholder={vi ? 'Email của bạn' : 'Your email'} value={email} onChange={e => setEmail(e.target.value)} />
          {status === 'err' && <p style={{ color: '#e53e3e', fontSize: 13, margin: '4px 0' }}>{vi ? 'Có lỗi, thử lại.' : 'Error, retry.'}</p>}
          <button type="submit" disabled={status === 'sending'} className={styles.nlBtn}>
            {status === 'sending' ? (vi ? 'Đang gửi...' : 'Sending...') : (vi ? 'Đăng ký ngay' : 'Subscribe now')}
          </button>
        </form>
      )}
    </div>
  )
}

function BlogContent() {
  const { lang } = useLang()
  const vi = lang === 'vi'
  const sections = vi ? SECTIONS_VI : SECTIONS_EN

  const POSTS_PER_PAGE = 2

  const [posts, setPosts] = useState<UIPost[]>(vi ? fallbackPostsVi : fallbackPostsEn)
  const [legalDocs, setLegalDocs] = useState(fallbackLegalDocs)
  const [search, setSearch] = useState('')
  const [usingSanity, setUsingSanity] = useState(false)
  const [currentPages, setCurrentPages] = useState<Record<string, number>>({})

  useEffect(() => {
    setPosts(vi ? fallbackPostsVi : fallbackPostsEn)
    setUsingSanity(false)
    let cancelled = false

    async function loadData() {
      const [sanityPosts, sanityLegal] = await Promise.all([
        fetchPosts(lang),
        fetchLegalDocs(lang),
      ])
      if (cancelled) return

      if (sanityPosts.length > 0) {
        setPosts(sanityPosts.map(p => sanityPostToUI(p, lang)))
        setUsingSanity(true)
      }

      if (sanityLegal.length > 0) {
        const typeMap: Record<string, string> = {
          decree: 'NGHỊ ĐỊNH',
          circular: 'THÔNG TƯ',
          decision: 'QUYẾT ĐỊNH',
          guideline: 'HƯỚNG DẪN',
          other: 'KHÁC',
        }
        setLegalDocs(
          sanityLegal.map((d) => ({
            number: d.documentNumber,
            type: typeMap[d.documentType] || d.documentType,
            year: d.issuedDate ? new Date(d.issuedDate).getFullYear().toString() : '',
            desc: d.excerpt || d.title,
            issuer: d.issuingAuthority,
            fileUrl: d.fileUrl,
          }))
        )
      }
    }

    loadData()
    return () => { cancelled = true }
  }, [lang, vi])

  useEffect(() => { setSearch(''); setCurrentPages({}) }, [lang])

  const getPage = useCallback((section: string) => currentPages[section] || 1, [currentPages])
  const setPage = useCallback((section: string, page: number) => {
    setCurrentPages(prev => ({ ...prev, [section]: page }))
  }, [])

  /* ── Group posts by section ── */
  const postsBySection = useMemo(() => {
    return sections.map(section => ({
      name: section,
      posts: posts.filter(p => {
        // When using Sanity, cat is already mapped. For fallback, match directly.
        if (vi) return (CAT_MAP_VI[p.cat] || p.cat) === section
        // English: direct match
        const enMap: Record<string, string> = {
          'News': 'News', 'Knowledge': 'Knowledge', 'Legal Documents': 'Legal Documents',
        }
        return (enMap[p.cat] || p.cat) === section
      }),
    }))
  }, [posts, sections, vi])

  /* ── Search across all posts ── */
  const searchResults = useMemo(() => {
    if (!search.trim()) return null
    const q = search.toLowerCase()
    return posts.filter(p =>
      p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q)
    )
  }, [search, posts])

  return (
    <div className={styles.blogPage}>
      {/* Hero */}
      <div className={styles.hero}>
        <p className={styles.tag}>KNOWLEDGE HUB</p>
        <h1>{vi ? 'Tin tức & Kiến thức ESG' : 'ESG News & Insights'}</h1>
        <p className={styles.subtitle}>
          {vi
            ? 'Cập nhật những chuyển động mới nhất về kinh tế xanh, lộ trình khử carbon và các tiêu chuẩn ESG quốc tế tại Việt Nam.'
            : 'Stay updated on the latest green economy trends, decarbonization roadmaps and international ESG standards in Vietnam.'}
        </p>
        {/* Section anchor nav */}
        <div className={styles.tabs}>
          {sections.map(s => (
            <a key={s} href={`#section-${s.replace(/\s+/g, '-')}`} className={styles.tab}>
              {s}
            </a>
          ))}
        </div>
      </div>

      <div className={`container ${styles.main}`}>
        <div className={styles.content}>
          {/* Search results */}
          {searchResults ? (
            <div>
              <h2 className={styles.sectionTitle}>
                {vi ? `Kết quả tìm kiếm: "${search}"` : `Search results: "${search}"`}
                <button
                  onClick={() => setSearch('')}
                  style={{ fontSize: 13, fontWeight: 400, marginLeft: 12, color: 'var(--brand)', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
                >
                  {vi ? 'Xóa tìm kiếm' : 'Clear search'}
                </button>
              </h2>
              {searchResults.length === 0 ? (
                <p style={{ color: 'rgba(0,0,0,0.45)', marginBottom: 32 }}>
                  {vi ? 'Không tìm thấy bài viết nào.' : 'No articles found.'}
                </p>
              ) : (
                <div className={styles.grid}>
                  {searchResults.map(p => (
                    <a
                      key={p.id}
                      href={usingSanity && p.slug !== '#' ? p.slug : '#'}
                      className={styles.card}
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <div className={styles.cardImg}><img src={p.img} alt={p.title} /></div>
                      <div className={styles.cardBody}>
                        <span className={styles.date}>{p.date}</span>
                        <h4>{p.title}</h4>
                        <p>{p.excerpt}</p>
                        <span className={styles.time}>{p.time}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ) : (
            /* 3 category sections */
            postsBySection.map(({ name, posts: sectionPosts }) => {
              const page = getPage(name)
              const totalPgs = Math.ceil(sectionPosts.length / POSTS_PER_PAGE)
              const visible = sectionPosts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE)
              return (
                <section
                  key={name}
                  id={`section-${name.replace(/\s+/g, '-')}`}
                  className={styles.categorySection}
                >
                  <h2 className={styles.sectionTitle}>{name}</h2>
                  {sectionPosts.length === 0 ? (
                    <p className={styles.emptySection}>
                      {vi ? 'Chưa có bài viết trong mục này.' : 'No articles in this section yet.'}
                    </p>
                  ) : (
                    <>
                      <div className={styles.grid}>
                        {visible.map(p => (
                          <a
                            key={p.id}
                            href={usingSanity && p.slug !== '#' ? p.slug : '#'}
                            className={styles.card}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            <div className={styles.cardImg}><img src={p.img} alt={p.title} /></div>
                            <div className={styles.cardBody}>
                              <span className={styles.date}>{p.date}</span>
                              <h4>{p.title}</h4>
                              <p>{p.excerpt}</p>
                              <span className={styles.time}>{p.time}</span>
                            </div>
                          </a>
                        ))}
                      </div>
                      {totalPgs > 1 && (
                        <div className={styles.pagination}>
                          {Array.from({ length: totalPgs }, (_, i) => i + 1).map(n => (
                            <button
                              key={n}
                              className={`${styles.pageBtn} ${page === n ? styles.pageBtnActive : ''}`}
                              onClick={() => setPage(name, n)}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </section>
              )
            })
          )}
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <h4>🔍 {vi ? 'Tìm kiếm' : 'Search'}</h4>
            <input
              type="text"
              placeholder={vi ? 'Nhập từ khóa bài viết...' : 'Search articles...'}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className={styles.legalLib}>
            <h4>{vi ? 'Thư viện Pháp lý' : 'Legal Library'}</h4>
            {legalDocs.map((d, i) => (
              <div key={i} className={styles.legalCard}>
                <div className={styles.legalTop}>
                  <span className={styles.legalType}>{d.type}</span>
                  <span className={styles.legalYear}>{d.year}</span>
                </div>
                <h5>{d.number}</h5>
                <p>{d.desc}</p>
                <div className={styles.legalBottom}>
                  <span>🏛 {d.issuer}</span>
                  <a href={(d as { fileUrl?: string }).fileUrl || '#'}>
                    📄 {vi ? 'Tải về (PDF)' : 'Download (PDF)'}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <BlogNewsletter vi={vi} />
        </aside>
      </div>
    </div>
  )
}

export default function BlogPage() {
  const [lang, setLang] = useState('vi')
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />
      <BlogContent />
      <Footer />
    </LangContext.Provider>
  )
}
