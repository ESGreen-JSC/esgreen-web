import styles from './AboutSection.module.css'
import { useLang } from '@/components/layout/Header'

export default function AboutSection() {
  const { lang } = useLang()

  return (
    <section id="about" className={styles.about}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.left} data-aos="fade-right" data-aos-duration="800">
          <p className="section-tag">{lang === 'vi' ? 'Về ESGreen' : 'About ESGreen'}</p>
          <h2 className="section-title">
            {lang === 'vi' ? (
              <>Vì sao ESGreen ra đời?</>
            ) : (
              <>Why was ESGreen founded?</>
            )}
          </h2>
          <div className={styles.body}>
            {lang === 'vi' ? (
              <>
                <p>
                  Trong bối cảnh các yêu cầu về kiểm kê KNK và báo cáo ESG dần chuyển từ tự nguyện sang
                  bắt buộc, đặc biệt theo Nghị định số 06/2022/NĐ-CP và yêu cầu từ chuỗi giá trị, nhiều
                  doanh nghiệp tại Việt Nam gặp phải khó khăn trong việc triển khai do thiếu quy trình
                  chuẩn hóa và công cụ phù hợp.
                </p>
                <p>
                  ESGreen được thành lập nhằm giải quyết khoảng trống này, bằng cách xây dựng các nền tảng
                  công nghệ hỗ trợ doanh nghiệp thực hiện quản lý, kiểm kê KNK và quản trị ESG theo hướng
                  đơn giản, phù hợp với điều kiện thực tế và đảm bảo tính tuân thủ các quy định mới nhất.
                </p>
                <p className={styles.closing}>
                  Từ yêu cầu tuân thủ đến năng lực cạnh tranh — ESGreen hướng tới việc biến phát triển
                  bền vững thành lợi thế dài hạn cho doanh nghiệp.
                </p>
              </>
            ) : (
              <>
                <p>
                  As requirements for GHG inventory and ESG reporting become increasingly clear,
                  especially under Decree 06/2022/NĐ-CP, many Vietnamese enterprises still face challenges
                  in implementation due to a lack of suitable tools and standardized processes.
                </p>
                <p>
                  ESGreen was founded to address this gap, by building technology platforms
                  that support enterprises in conducting GHG inventory and ESG management —
                  simple, transparent, and adapted to real-world conditions in Vietnam.
                </p>
                <p className={styles.closing}>
                  From compliance requirements to competitive advantage — ESGreen aims to turn ESG
                  into a long-term asset for enterprises.
                </p>
              </>
            )}
          </div>
        </div>
        <div className={styles.right} data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <div className={styles.imgPlaceholder}>
            <img src="/images/about-office.png" alt="ESGreen team" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px' }} />
          </div>
          <div className={styles.statCard}>
            <div className={styles.statVal}>{lang === 'vi' ? '2.166' : '2,166'}</div>
            <div className={styles.statLab}>{lang === 'vi' ? 'doanh nghiệp có nghĩa vụ kiểm kê KNK từ 2024' : 'enterprises required to conduct GHG inventory from 2024'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
