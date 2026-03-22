'use client'
import { useState, useMemo } from 'react'
import styles from './blog.module.css'
import Header, { LangContext, useLang } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/* ── Data ── */
const postsVi = [
  { id: 1, title: 'Việt Nam tăng tốc lộ trình Net Zero thông qua các dự án năng lượng tái tạo quy mô lớn', excerpt: 'Những bước đi chiến lược trong chuyển đổi năng lượng quốc gia đang tạo nền tảng xanh mới cho các tập đoàn đa quốc gia.', cat: 'Tin tức', date: '15 Tháng 5, 2024', time: '8 phút đọc', img: '/images/blog/wind-turbines.png', featured: true },
  { id: 2, title: 'Quy định mới về trách nhiệm mở rộng của nhà sản xuất (EPR)', excerpt: 'Tìm hiểu các doanh nghiệp Việt thích ứng với các yêu cầu phân loại và tái chế bao bì bắt buộc từ năm...', cat: 'Văn bản pháp lý', date: '12 Tháng 5, 2024', time: '5 phút đọc', img: '/images/blog/green-field.png' },
  { id: 3, title: 'Tín chỉ Carbon: Cơ hội mới cho ngành nông nghiệp bền vững', excerpt: 'Thị trường carbon tự nguyện đang ra hướng đi mới giúp nông dân tăng thu nhập từ việc bảo tồn tín...', cat: 'Tin tức', date: '10 Tháng 5, 2024', time: '6 phút đọc', img: '/images/blog/carbon-market.png' },
  { id: 4, title: 'Nghị định 06/2022: Doanh nghiệp nào phải kiểm kê KNK?', excerpt: 'Tìm hiểu danh sách các ngành và quy mô doanh nghiệp bắt buộc kiểm kê khí nhà kính theo NĐ 06/2022/NĐ-CP...', cat: 'Văn bản pháp lý', date: '20/03/2026', time: '5 phút đọc', img: '/images/blog/esg-audit.png' },
  { id: 5, title: 'GHG Protocol: Hướng dẫn phân loại Scope 1, 2, 3', excerpt: 'Scope 1 trực tiếp, Scope 2 gián tiếp năng lượng, Scope 3 gián tiếp chuỗi giá trị — phân biệt và ví dụ cụ thể...', cat: 'Kiến thức', date: '18/03/2026', time: '7 phút đọc', img: '/images/blog/solar-panels.png' },
  { id: 6, title: 'Thị trường carbon Việt Nam: Lộ trình & Cơ hội', excerpt: 'Việt Nam đặt mục tiêu vận hành sàn giao dịch tín chỉ carbon vào 2028 — doanh nghiệp cần chuẩn bị gì?', cat: 'Tin tức ESG', date: '15/03/2026', time: '4 phút đọc', img: '/images/blog/forest-net-zero.png' },
]
const postsEn = [
  { id: 1, title: 'Vietnam Accelerates Net Zero Roadmap Through Large-Scale Renewable Energy Projects', excerpt: 'Strategic steps in national energy transition create a new green foundation for multinational corporations.', cat: 'News', date: 'May 15, 2024', time: '8 min read', img: '/images/blog/wind-turbines.png', featured: true },
  { id: 2, title: 'New Regulations on Extended Producer Responsibility (EPR)', excerpt: 'Learn how Vietnamese enterprises are adapting to mandatory packaging classification and recycling requirements...', cat: 'Legal Documents', date: 'May 12, 2024', time: '5 min read', img: '/images/blog/green-field.png' },
  { id: 3, title: 'Carbon Credits: A New Opportunity for Sustainable Agriculture', excerpt: 'The voluntary carbon market is creating new pathways to help farmers increase income through conservation...', cat: 'News', date: 'May 10, 2024', time: '6 min read', img: '/images/blog/carbon-market.png' },
  { id: 4, title: 'Decree 06/2022: Which Enterprises Must Inventory GHG?', excerpt: 'Learn which industries and enterprise sizes are required to inventory greenhouse gases under Decree 06...', cat: 'Legal Documents', date: '20/03/2026', time: '5 min read', img: '/images/blog/esg-audit.png' },
  { id: 5, title: 'GHG Protocol: Guide to Scope 1, 2, 3 Classification', excerpt: 'Scope 1 direct, Scope 2 indirect energy, Scope 3 indirect value chain — differences and specific examples...', cat: 'Knowledge', date: '18/03/2026', time: '7 min read', img: '/images/blog/solar-panels.png' },
  { id: 6, title: 'Vietnam Carbon Market: Roadmap & Opportunities', excerpt: 'Vietnam targets operating carbon credit exchange by 2028 — what should enterprises prepare?', cat: 'ESG News', date: '15/03/2026', time: '4 min read', img: '/images/blog/forest-net-zero.png' },
]

const legalDocsVi = [
  { number: 'Nghị định 06/2022/NĐ-CP', type: 'NGHỊ ĐỊNH', year: '2022', desc: 'Quy định chi tiết các giải pháp phát triển kiềm chế và bảo vệ tầng ô-zôn.', issuer: 'Chính phủ' },
  { number: 'Thông tư 01/2022/TT-BTNMT', type: 'THÔNG TƯ', year: '2022', desc: 'Chi tiết thi hành Luật Bảo vệ môi trường về ứng phó với biến đổi khí hậu.', issuer: 'Bộ TN&MT' },
  { number: 'QĐ 01/2022/QĐ-TTg', type: 'QUYẾT ĐỊNH', year: '2022', desc: 'Danh mục các cơ sở phát thải kết nhà kính phải kiểm kê phát thải khí nhà kính.', issuer: 'Thủ tướng' },
]

const categoriesVi = ['Tất cả', 'Tin tức', 'Kiến thức', 'Văn bản pháp lý', 'Tin tức ESG']
const categoriesEn = ['All', 'News', 'Knowledge', 'Legal Documents', 'ESG News']

/* ── Component ── */
function BlogContent() {
  const { lang } = useLang()
  const vi = lang === 'vi'
  const [activeCat, setActiveCat] = useState(0)
  const [search, setSearch] = useState('')

  const cats = vi ? categoriesVi : categoriesEn
  const allPosts = vi ? postsVi : postsEn

  const filtered = useMemo(() => {
    let list = allPosts
    if (activeCat > 0) {
      list = list.filter(p => p.cat === cats[activeCat])
    }
    if (search.trim()) {
      const q = search.toLowerCase()
      list = list.filter(p => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q))
    }
    return list
  }, [activeCat, search, allPosts, cats])

  const featured = allPosts.find(p => p.featured)

  return (
    <div className={styles.blogPage}>
      <div className={styles.hero}>
        <p className={styles.tag}>{vi ? 'KNOWLEDGE HUB' : 'KNOWLEDGE HUB'}</p>
        <h1>{vi ? 'Tin tức & Kiến thức ESG' : 'ESG News & Insights'}</h1>
        <p className={styles.subtitle}>{vi ? 'Cập nhật những chuyển động mới nhất về kinh tế xanh, lộ trình khử carbon và các tiêu chuẩn ESG quốc tế tại Việt Nam.' : 'Stay updated on the latest green economy trends, decarbonization roadmaps and international ESG standards in Vietnam.'}</p>
        <div className={styles.tabs}>
          {cats.map((c, i) => (
            <button key={c} className={`${styles.tab} ${activeCat === i ? styles.tabActive : ''}`} onClick={() => setActiveCat(i)}>{c}</button>
          ))}
        </div>
      </div>

      <div className={`container ${styles.main}`}>
        <div className={styles.content}>
          {/* Featured */}
          {activeCat === 0 && featured && (
            <>
              <h2 className={styles.sectionTitle}>{vi ? 'Tin tức mới nhất' : 'Latest News'} <a href="#" className={styles.viewAll}>{vi ? 'Xem tất cả →' : 'View all →'}</a></h2>
              <div className={styles.featured}>
                <div className={styles.featuredImg}><img src={featured.img} alt={featured.title} /></div>
                <div className={styles.featuredBody}>
                  <span className={styles.badge}>{featured.cat}</span>
                  <span className={styles.date}>{featured.date}</span>
                  <h3>{featured.title}</h3>
                  <p>{featured.excerpt}</p>
                  <a href="#" className={styles.readMore}>{vi ? 'Đọc chi tiết →' : 'Read more →'}</a>
                </div>
              </div>
            </>
          )}

          {/* Grid */}
          <div className={styles.grid}>
            {filtered.filter(p => !p.featured || activeCat > 0).map(p => (
              <div key={p.id} className={styles.card}>
                <div className={styles.cardImg}><img src={p.img} alt={p.title} /></div>
                <div className={styles.cardBody}>
                  <span className={styles.date}>{p.date}</span>
                  <h4>{p.title}</h4>
                  <p>{p.excerpt}</p>
                  <span className={styles.time}>{p.time}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Deep topics */}
          {activeCat === 0 && (
            <>
              <h2 className={styles.sectionTitle} style={{ marginTop: 48 }}>{vi ? 'Chủ đề chuyên sâu' : 'Deep Topics'}</h2>
              <div className={styles.deepGrid}>
                {allPosts.slice(3).map(p => (
                  <div key={p.id} className={styles.deepCard}>
                    <div className={styles.deepImg}><img src={p.img} alt={p.title} /><span className={styles.deepBadge}>{p.cat}</span></div>
                    <h5>{p.title}</h5>
                    <span className={styles.time}>⏱ {p.time}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.searchBox}>
            <h4>🔍 {vi ? 'Tìm kiếm' : 'Search'}</h4>
            <input type="text" placeholder={vi ? 'Nhập từ khóa bài viết...' : 'Search articles...'} value={search} onChange={e => setSearch(e.target.value)} />
          </div>

          <div className={styles.legalLib}>
            <h4>{vi ? 'Thư viện Pháp lý' : 'Legal Library'}</h4>
            {legalDocsVi.map((d, i) => (
              <div key={i} className={styles.legalCard}>
                <div className={styles.legalTop}>
                  <span className={styles.legalType}>{d.type}</span>
                  <span className={styles.legalYear}>{d.year}</span>
                </div>
                <h5>{d.number}</h5>
                <p>{d.desc}</p>
                <div className={styles.legalBottom}>
                  <span>🏛 {d.issuer}</span>
                  <a href="#">📄 {vi ? 'Tải về (PDF)' : 'Download (PDF)'}</a>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.newsletter}>
            <h4>{vi ? 'Đăng ký bản tin ESG hàng tuần' : 'Subscribe to Weekly ESG Newsletter'}</h4>
            <p>{vi ? 'Nhận những phân tích độc quyền và cập nhật chính sách trực tiếp qua email của bạn.' : 'Get exclusive analysis and policy updates delivered directly to your inbox.'}</p>
            <input type="email" placeholder={vi ? 'Email của bạn' : 'Your email'} />
            <button className={styles.nlBtn}>{vi ? 'Đăng ký ngay' : 'Subscribe now'}</button>
          </div>
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
