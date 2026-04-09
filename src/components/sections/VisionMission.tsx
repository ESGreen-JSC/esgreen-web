import styles from './VisionMission.module.css'
import { useLang } from '@/components/layout/Header'

export default function VisionMission() {
  const { lang } = useLang()

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        <div className={`${styles.card} ${styles.dark}`} data-aos="fade-up" data-aos-duration="600">
          <span className={styles.watermark}>01</span>
          <div className={styles.icon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6DC043" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
          </div>
          <h3>{lang === 'vi' ? 'Tầm nhìn' : 'Vision'}</h3>
          <p>{lang === 'vi'
            ? 'Trở thành nền tảng công nghệ hỗ trợ doanh nghiệp Việt Nam quản lý, đo đạc, báo cáo, và minh bạch hóa dữ liệu phát thải KNK, môi trường, xã hội và quản trị trong quá trình chuyển đổi bền vững.'
            : 'Become the technology platform that helps Vietnamese enterprises manage, measure, report, and transparently disclose GHG emissions, environmental, social and governance data throughout their sustainability transition.'}</p>
          <div className={styles.stat}>{lang === 'vi' ? '30+ năm kinh nghiệm trong lĩnh vực biến đổi khí hậu' : '30+ years of experience in climate change'}</div>
        </div>
        <div className={`${styles.card} ${styles.light}`} data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <span className={styles.watermark}>02</span>
          <div className={styles.icon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6DC043" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h3>{lang === 'vi' ? 'Sứ mệnh' : 'Mission'}</h3>
          <p>{lang === 'vi'
            ? 'Chuẩn hóa quy trình kiểm kê khí nhà kính và báo cáo ESG, giúp doanh nghiệp tuân thủ quy định, nâng cao năng lực quản trị và sẵn sàng cho các yêu cầu của thị trường quốc tế.'
            : 'Standardize GHG inventory and ESG reporting processes, helping enterprises comply with regulations, strengthen governance, and prepare for international market requirements.'}</p>
          <div className={styles.stat}>{lang === 'vi' ? 'Tuân thủ Nghị định số 06/2022/NĐ-CP, Nghị định số 119/2025/NĐ-CP, ISO 14064, CBAM, GRI' : 'Compliant with Decree 06/2022, Decree 119/2025, ISO 14064, CBAM, GRI'}</div>
        </div>
      </div>
    </section>
  )
}
