import styles from './CtaBanner.module.css'
import { useLang } from '@/components/layout/Header'

export default function CtaBanner() {
  const { lang } = useLang()

  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>
        <div className={styles.glow} />
        <p className="section-tag" style={{ color: 'var(--brand)', position: 'relative' }}>
          {lang === 'vi' ? 'Bắt đầu hành trình' : 'Start Your Journey'}
        </p>
        <h2 className={styles.h2}>
          {lang === 'vi'
            ? <>Sẵn sàng biến nghĩa vụ pháp lý<br/>thành lợi thế cạnh tranh?</>
            : <>Ready to turn compliance<br/>into competitive advantage?</>}
        </h2>
        <p className={styles.desc}>
          {lang === 'vi'
            ? 'Đội ngũ chuyên gia ESGreen sẽ đồng hành cùng doanh nghiệp bạn — từ kiểm kê KNK đúng chuẩn đến xây dựng chiến lược Net Zero bài bản.'
            : 'ESGreen\'s expert team will accompany your enterprise — from compliant GHG inventory to building a comprehensive Net Zero strategy.'}
        </p>
        <div className={styles.btns}>
          <a href="#contact" className="btn-primary btn-shimmer btn-pulse">
            {lang === 'vi' ? 'Yêu cầu tư vấn 1-1' : 'Request 1-on-1 Consultation'}
          </a>
          <a href="mailto:contact@esgreen.vn" className="btn-ghost">
            {lang === 'vi' ? 'Gửi Email trực tiếp' : 'Send Email Directly'}
          </a>
        </div>
      </div>
    </section>
  )
}
