import styles from './JourneySection.module.css'
import { useLang } from '@/components/layout/Header'

const stepsVi = [
  { num: 1, title: 'Kiểm kê KNK', desc: 'Đo lường phát thải theo GHG Protocol — Scope 1, 2, 3', chip: '✓ Báo cáo nộp Bộ TN&MT' },
  { num: 2, title: 'Phân tích rủi ro ESG', desc: 'Đánh giá rủi ro ESG đa chiều — môi trường, xã hội, quản trị', chip: '✓ Báo cáo tự động' },
  { num: 3, title: 'Chấm điểm ESG', desc: 'Xếp hạng ESG theo tiêu chuẩn riêng — so sánh ngành', chip: '✓ Rating A/B/C/D' },
  { num: 4, title: 'Chiến lược Net Zero', desc: 'Lộ trình cắt giảm cụ thể theo mốc 2025 → 2030 → 2050', chip: '✓ SBTi Certified' },
]

const stepsEn = [
  { num: 1, title: 'GHG Inventory', desc: 'Measure emissions per GHG Protocol — Scope 1, 2, 3', chip: '✓ Report for MONRE' },
  { num: 2, title: 'ESG Risk Analysis', desc: 'Multi-dimensional ESG risk assessment — environment, social, governance', chip: '✓ Automated reports' },
  { num: 3, title: 'ESG Scoring', desc: 'ESG rating by proprietary standards — industry benchmarking', chip: '✓ Rating A/B/C/D' },
  { num: 4, title: 'Net Zero Strategy', desc: 'Specific reduction roadmap: 2025 → 2030 → 2050 milestones', chip: '✓ SBTi Certified' },
]

export default function JourneySection() {
  const { lang } = useLang()
  const steps = lang === 'vi' ? stepsVi : stepsEn

  return (
    <section className={styles.journey}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-tag">{lang === 'vi' ? 'Hành trình chuyển đổi xanh' : 'Green Transformation Journey'}</p>
        <h2 className="section-title">
          {lang === 'vi'
            ? <>Kiểm kê không phải đích đến,<br/>mà là điểm khởi hành</>
            : <>Inventory is not the destination,<br/>but the starting point</>}
        </h2>
        <div className={styles.steps}>
          {steps.map((s, i) => (
            <div key={s.num} className={styles.step} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className={styles.num}>{s.num}</div>
              <h4 className={styles.stepTitle}>{s.title}</h4>
              <p className={styles.stepDesc}>{s.desc}</p>
              <span className={styles.chip}>{s.chip}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
