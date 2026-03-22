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
            ? 'Trở thành nền tảng quản trị ESG hàng đầu Việt Nam, giúp mỗi doanh nghiệp Việt chủ động đo lường, báo cáo và cải thiện hiệu suất phát triển bền vững — bằng công nghệ, dữ liệu và kinh nghiệm thực chiến.'
            : 'Become Vietnam\'s leading ESG management platform, empowering every Vietnamese enterprise to actively measure, report, and improve sustainability performance — through technology, data, and real-world experience.'}</p>
          <div className={styles.stat}>{lang === 'vi' ? '18–29 năm kinh nghiệm chuyên gia' : '18–29 years of expert experience'}</div>
        </div>
        <div className={`${styles.card} ${styles.light}`} data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
          <span className={styles.watermark}>02</span>
          <div className={styles.icon}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#6DC043" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
          </div>
          <h3>{lang === 'vi' ? 'Sứ mệnh' : 'Mission'}</h3>
          <p>{lang === 'vi'
            ? 'Chuẩn hóa quy trình kiểm kê khí nhà kính, chấm điểm ESG và tư vấn Net Zero cho doanh nghiệp Việt Nam — giúp biến nghĩa vụ pháp lý thành lợi thế cạnh tranh bền vững.'
            : 'Standardize GHG inventory processes, ESG scoring, and Net Zero consulting for Vietnamese enterprises — turning legal obligations into sustainable competitive advantages.'}</p>
          <div className={styles.stat}>{lang === 'vi' ? '150+ doanh nghiệp được hỗ trợ' : '150+ enterprises supported'}</div>
        </div>
      </div>
    </section>
  )
}
