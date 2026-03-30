'use client'
import { useState, useEffect } from 'react'
import styles from './BlogSection.module.css'
import { useLang } from '@/components/layout/Header'
import { fetchPosts } from '@/sanity/fetch'
import { urlFor } from '@/sanity/image'
import type { BlogPost } from '@/sanity/types'

/* ── Category order: Tin tức → Kiến thức → Văn bản pháp lý ── */
const CATS_VI = ['Tin tức', 'Kiến thức', 'Văn bản pháp lý']
const CATS_EN = ['News', 'Knowledge', 'Legal Documents']

/* ── Map Sanity categoryTitle → UI bucket ── */
const CAT_MAP_VI: Record<string, string> = {
  'Tin tức': 'Tin tức',
  'Kiến thức': 'Kiến thức',
  'Chủ đề chuyên sâu': 'Kiến thức',
  'Văn bản pháp lý': 'Văn bản pháp lý',
}
const CAT_MAP_EN: Record<string, string> = {
  'News': 'News',
  'Knowledge': 'Knowledge',
  'Legal Documents': 'Legal Documents',
}

/* ── Static fallbacks per category ── */
const FALLBACK_VI: Record<string, CardData> = {
  'Tin tức': {
    title: 'Thị trường carbon Việt Nam: Lộ trình & Cơ hội',
    excerpt: 'Việt Nam đặt mục tiêu vận hành sàn giao dịch tín chỉ carbon vào 2028 — doanh nghiệp cần chuẩn bị gì?',
    cat: 'Tin tức',
    date: '15/03/2026',
    time: '4 phút',
    img: '/images/blog/carbon-market.png',
    slug: '/blog/',
  },
  'Kiến thức': {
    title: 'GHG Protocol: Hướng dẫn phân loại Scope 1, 2, 3',
    excerpt: 'Scope 1 trực tiếp, Scope 2 gián tiếp năng lượng, Scope 3 gián tiếp chuỗi giá trị — phân biệt và ví dụ cụ thể...',
    cat: 'Kiến thức',
    date: '18/03/2026',
    time: '7 phút',
    img: '/images/blog/solar-panels.png',
    slug: '/blog/',
  },
  'Văn bản pháp lý': {
    title: 'Nghị định 06/2022: Doanh nghiệp nào phải kiểm kê KNK?',
    excerpt: 'Tìm hiểu danh sách các ngành và quy mô doanh nghiệp bắt buộc kiểm kê khí nhà kính theo NĐ 06/2022/NĐ-CP...',
    cat: 'Văn bản pháp lý',
    date: '20/03/2026',
    time: '5 phút',
    img: '/images/blog/esg-audit.png',
    slug: '/blog/',
  },
}
const FALLBACK_EN: Record<string, CardData> = {
  'News': {
    title: 'Vietnam Carbon Market: Roadmap & Opportunities',
    excerpt: 'Vietnam targets operating carbon credit exchange by 2028 — what should enterprises prepare?',
    cat: 'News',
    date: '15/03/2026',
    time: '4 min',
    img: '/images/blog/carbon-market.png',
    slug: '/blog/',
  },
  'Knowledge': {
    title: 'GHG Protocol: Guide to Scope 1, 2, 3 Classification',
    excerpt: 'Scope 1 direct, Scope 2 indirect energy, Scope 3 indirect value chain — differences and specific examples...',
    cat: 'Knowledge',
    date: '18/03/2026',
    time: '7 min',
    img: '/images/blog/solar-panels.png',
    slug: '/blog/',
  },
  'Legal Documents': {
    title: 'Decree 06/2022: Which enterprises must inventory GHG?',
    excerpt: 'Learn which industries and enterprise sizes are required to inventory greenhouse gases under Decree 06...',
    cat: 'Legal Documents',
    date: '20/03/2026',
    time: '5 min',
    img: '/images/blog/esg-audit.png',
    slug: '/blog/',
  },
}

interface CardData {
  title: string
  excerpt: string
  cat: string
  date: string
  time: string
  img: string
  slug: string
}

const cardStyles = [
  { catBg: '#D2EDBC', catColor: '#1A3D13' },
  { catBg: '#EDF7E6', catColor: '#295B20' },
  { catBg: '#D2EDBC', catColor: '#2E7D32' },
]

function formatDate(isoDate: string, lang: string): string {
  try {
    const d = new Date(isoDate)
    return d.toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
      day: 'numeric', month: 'long', year: 'numeric',
    })
  } catch {
    return isoDate
  }
}

export default function BlogSection() {
  const { lang } = useLang()
  const vi = lang === 'vi'
  const cats = vi ? CATS_VI : CATS_EN
  const fallback = vi ? FALLBACK_VI : FALLBACK_EN

  const [cards, setCards] = useState<CardData[]>(cats.map(c => fallback[c]))

  useEffect(() => {
    setCards(cats.map(c => fallback[c]))
    fetchPosts(lang).then((posts: BlogPost[]) => {
      if (!posts.length) return
      const catMap = vi ? CAT_MAP_VI : CAT_MAP_EN
      // latest post per bucket (posts are already ordered by publishedAt desc)
      const latest: Record<string, BlogPost> = {}
      for (const post of posts) {
        const bucket = catMap[post.categoryTitle] || post.categoryTitle
        if (!latest[bucket]) latest[bucket] = post
      }
      setCards(cats.map(cat => {
        const post = latest[cat]
        if (!post) return fallback[cat]
        let img = '/images/blog/default.png'
        if (post.thumbnail) img = urlFor(post.thumbnail).width(600).height(400).url()
        else if (post.thumbnailUrl) img = post.thumbnailUrl
        return {
          title: post.title,
          excerpt: post.excerpt || '',
          cat,
          date: formatDate(post.publishedAt, lang),
          time: vi ? '5 phút' : '5 min',
          img,
          slug: `/blog/${post.slug?.current || ''}`,
        }
      }))
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang])

  return (
    <section id="blog" className={styles.blog}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-tag">{vi ? 'Tin tức & Kiến thức ESG' : 'ESG News & Knowledge'}</p>
        <h2 className="section-title">{vi ? 'Blog ESGreen' : 'ESGreen Blog'}</h2>
        <div className={styles.grid}>
          {cards.map((p, i) => (
            <a
              key={i}
              href={p.slug}
              className={styles.card}
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <div className={styles.thumb}>
                <img src={p.img} alt={p.title} className={styles.thumbImg} />
              </div>
              <div className={styles.body}>
                <span
                  className={styles.cat}
                  style={{ background: cardStyles[i].catBg, color: cardStyles[i].catColor }}
                >
                  {p.cat}
                </span>
                <h4 className={styles.title}>{p.title}</h4>
                <p className={styles.excerpt}>{p.excerpt}</p>
                <div className={styles.meta}>
                  <span>{p.date}</span>
                  <span>·</span>
                  <span>{p.time} {vi ? 'đọc' : 'read'}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <a href="/blog/" className="btn-green-outline">
            {vi ? 'Xem tất cả bài viết →' : 'View all articles →'}
          </a>
        </div>
      </div>
    </section>
  )
}
