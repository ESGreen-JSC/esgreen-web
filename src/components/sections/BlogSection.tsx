import styles from './BlogSection.module.css'
import { useLang } from '@/components/layout/Header'

const postsVi = [
  { title: 'Nghị định 06/2022: Doanh nghiệp nào phải kiểm kê KNK?', excerpt: 'Tìm hiểu danh sách các ngành và quy mô doanh nghiệp bắt buộc kiểm kê khí nhà kính theo NĐ 06/2022/NĐ-CP...', cat: 'Văn bản pháp lý', date: '20/03/2026', time: '5 phút', img: '/images/blog/esg-audit.png', slug: 'phap-ly' },
  { title: 'GHG Protocol: Hướng dẫn phân loại Scope 1, 2, 3', excerpt: 'Scope 1 trực tiếp, Scope 2 gián tiếp năng lượng, Scope 3 gián tiếp chuỗi giá trị — phân biệt và ví dụ cụ thể...', cat: 'Kiến thức', date: '18/03/2026', time: '7 phút', img: '/images/blog/solar-panels.png', slug: 'kien-thuc' },
  { title: 'Thị trường carbon Việt Nam: Lộ trình & Cơ hội', excerpt: 'Việt Nam đặt mục tiêu vận hành sàn giao dịch tín chỉ carbon vào 2028 — doanh nghiệp cần chuẩn bị gì?', cat: 'Tin tức ESG', date: '15/03/2026', time: '4 phút', img: '/images/blog/carbon-market.png', slug: 'tin-tuc' },
]

const postsEn = [
  { title: 'Decree 06/2022: Which enterprises must inventory GHG?', excerpt: 'Learn which industries and enterprise sizes are required to inventory greenhouse gases under Decree 06...', cat: 'Legal Documents', date: '20/03/2026', time: '5 min', img: '/images/blog/esg-audit.png', slug: 'phap-ly' },
  { title: 'GHG Protocol: Guide to Scope 1, 2, 3 Classification', excerpt: 'Scope 1 direct, Scope 2 indirect energy, Scope 3 indirect value chain — differences and specific examples...', cat: 'Knowledge', date: '18/03/2026', time: '7 min', img: '/images/blog/solar-panels.png', slug: 'kien-thuc' },
  { title: 'Vietnam Carbon Market: Roadmap & Opportunities', excerpt: 'Vietnam targets operating carbon credit exchange by 2028 — what should enterprises prepare?', cat: 'ESG News', date: '15/03/2026', time: '4 min', img: '/images/blog/carbon-market.png', slug: 'tin-tuc' },
]

// Green-toned palette from ESGreen brand
const cardStyles = [
  { catBg: '#D2EDBC', catColor: '#1A3D13' },
  { catBg: '#EDF7E6', catColor: '#295B20' },
  { catBg: '#D2EDBC', catColor: '#2E7D32' },
]

export default function BlogSection() {
  const { lang } = useLang()
  const posts = lang === 'vi' ? postsVi : postsEn

  return (
    <section id="blog" className={styles.blog}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-tag">{lang === 'vi' ? 'Tin tức & Kiến thức ESG' : 'ESG News & Knowledge'}</p>
        <h2 className="section-title">{lang === 'vi' ? 'Blog ESGreen' : 'ESGreen Blog'}</h2>
        <div className={styles.grid}>
          {posts.map((p, i) => (
            <a key={i} href={`/blog/`} className={styles.card} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className={styles.thumb}>
                <img src={p.img} alt={p.title} className={styles.thumbImg} />
              </div>
              <div className={styles.body}>
                <span className={styles.cat} style={{ background: cardStyles[i].catBg, color: cardStyles[i].catColor }}>{p.cat}</span>
                <h4 className={styles.title}>{p.title}</h4>
                <p className={styles.excerpt}>{p.excerpt}</p>
                <div className={styles.meta}><span>{p.date}</span><span>·</span><span>{p.time} {lang === 'vi' ? 'đọc' : 'read'}</span></div>
              </div>
            </a>
          ))}
        </div>
        <div style={{ marginTop: 32 }}>
          <a href="/blog/" className="btn-green-outline">{lang === 'vi' ? 'Xem tất cả bài viết →' : 'View all articles →'}</a>
        </div>
      </div>
    </section>
  )
}
