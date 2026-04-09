import styles from './JourneySection.module.css'
import { useLang } from '@/components/layout/Header'

const stepsVi = [
  { num: 1, title: 'Kiểm kê KNK', desc: 'MRV phát thải KNK trực tiếp và gián tiếp', chip: '✓ Báo cáo nộp Bộ NN & MT' },
  { num: 2, title: 'Phân tích rủi ro ESG', desc: 'Đánh giá ESG đa chiều — môi trường, xã hội, quản trị', chip: '✓ Báo cáo tự động' },
  { num: 3, title: 'Chiến lược phát triển bền vững', desc: 'Xây dựng lộ trình phù hợp với mục tiêu doanh nghiệp', chip: '✓ SBTi Certified' },
]

const stepsEn = [
  { num: 1, title: 'GHG Inventory', desc: 'MRV of direct and indirect GHG emissions', chip: '✓ Report for MARD' },
  { num: 2, title: 'ESG Risk Analysis', desc: 'Multi-dimensional ESG assessment — environment, social, governance', chip: '✓ Automated reports' },
  { num: 3, title: 'Sustainable Development Strategy', desc: 'Build a roadmap aligned with enterprise goals', chip: '✓ SBTi Certified' },
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
            ? <>Kiểm kê KNK không phải đích đến,<br/>mà là điểm khởi đầu</>
            : <>GHG Inventory is not the destination,<br/>but the starting point</>}
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
