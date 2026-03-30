import styles from './DifferentiatorsSection.module.css'
import { useLang } from '@/components/layout/Header'

const cardsVi = [
  { title: 'Pháp lý', stat: 'NĐ 06/2022 compliant', desc: 'Phần mềm đáp ứng đúng yêu cầu kiểm kê KNK theo quy định Chính phủ Việt Nam — từ phân loại nguồn phát thải đến xuất báo cáo nộp Bộ TN&MT.' },
  { title: 'Công nghệ', stat: 'AI-powered platform', desc: 'Nền tảng tích hợp AI, tự động hóa quy trình thu thập dữ liệu, tính toán hệ số phát thải, và sinh báo cáo — giảm sai sót, tăng tốc độ.' },
  { title: 'Chiến lược', stat: 'SBTi & Net Zero ready', desc: 'Không chỉ kiểm kê, ESGreen giúp doanh nghiệp xây lộ trình giảm phát thải, đặt mục tiêu Net Zero theo khung Science Based Targets.' },
]

const cardsEn = [
  { title: 'Legal', stat: 'Decree 06/2022 compliant', desc: 'Software meets all GHG inventory requirements under Vietnamese government regulations — from emission source classification to reporting.' },
  { title: 'Technology', stat: 'AI-powered platform', desc: 'AI-integrated platform automating data collection, emission factor calculation, and report generation — reducing errors, increasing speed.' },
  { title: 'Strategy', stat: 'SBTi & Net Zero ready', desc: 'Beyond inventory, ESGreen helps enterprises build emission reduction roadmaps and set Net Zero targets aligned with Science Based Targets.' },
]

// Modern SVG icons
const icons = [
  // Legal / Scale icon
  <svg key="legal" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18"/>
    <path d="M5 7l7-4 7 4"/>
    <path d="M5 7l-2 8h4c1.1 0 2-.9 2-2L5 7z"/>
    <path d="M19 7l2 8h-4c-1.1 0-2-.9-2-2l4-6z"/>
    <rect x="9" y="19" width="6" height="2" rx="1"/>
  </svg>,
  // Technology / Circuit icon
  <svg key="tech" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2"/>
    <rect x="9" y="9" width="6" height="6" rx="1"/>
    <path d="M9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 15h3M1 9h3M1 15h3"/>
  </svg>,
  // Strategy / Target icon
  <svg key="strategy" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/>
    <circle cx="12" cy="12" r="6"/>
    <circle cx="12" cy="12" r="2"/>
    <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
  </svg>,
]

export default function DifferentiatorsSection() {
  const { lang } = useLang()
  const cards = lang === 'vi' ? cardsVi : cardsEn

  return (
    <section className={styles.diff}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-tag">{lang === 'vi' ? 'Điểm khác biệt' : 'Differentiators'}</p>
        <h2 className="section-title">
          {lang === 'vi' ?  <>Cầu nối giữa pháp luật,<br/>công nghệ và chiến lược</> : <>Bridging law,<br/>technology and strategy</>}
        </h2>
        <div className={styles.grid}>
          {cards.map((c, i) => (
            <div key={i} className={styles.card} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className={styles.icon}>{icons[i]}</div>
              <h4>{c.title}</h4>
              <div className={styles.stat}>{c.stat}</div>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.cta} data-aos="fade-up" data-aos-delay="200">
          <p>{lang === 'vi'
            ? 'Bắt đầu triển khai ESG cùng ESGreen — nền tảng được xây dựng theo tiêu chuẩn quốc tế, kết hợp công nghệ và chuyên môn để đồng hành cùng doanh nghiệp.'
            : 'Over 150 enterprises trust ESGreen on their green transition journey. Start today — our expert team with 18–29 years of experience is ready to partner with you.'}
          </p>
          <a href="#contact" className="btn-primary btn-shimmer">{lang === 'vi' ? 'Bắt đầu ngay' : 'Get Started'}</a>
        </div>
      </div>
    </section>
  )
}
