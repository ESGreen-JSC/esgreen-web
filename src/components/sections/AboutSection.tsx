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
              <><span style={{ whiteSpace: 'nowrap' }}>Sinh ra từ nhu cầu cấp thiết,</span><br/>lớn lên bằng chiến lược</>
            ) : (
              <>Born from urgent need,<br/>growing with strategy</>
            )}
          </h2>
          <div className={styles.body}>
            {lang === 'vi' ? (
              <>
                <p>
                  Khi Nghị định 06/2022/NĐ-CP chính thức yêu cầu hàng trăm doanh nghiệp Việt Nam
                  kiểm kê khí nhà kính, đa phần vẫn loay hoay với file Excel thủ công —
                  thiếu chuẩn, thiếu dữ liệu, thiếu chuyên gia.
                </p>
                <p>
                  ESGreen ra đời tại giao điểm giữa <strong>kinh nghiệm thực chiến hàng đầu về carbon</strong> (đội ngũ sáng lập từ VNEEC — đơn vị dẫn đầu CDM tại Việt Nam)
                  và <strong>năng lực công nghệ mạnh mẽ</strong>.
                </p>
                <p>
                  Không chỉ giúp doanh nghiệp tuân thủ pháp luật, ESGreen hướng tới trở thành <strong>nền tảng quản trị ESG chuẩn quốc tế,
                  phục vụ hàng nghìn doanh nghiệp Việt trên hành trình phát triển bền vững.</strong>
                </p>
              </>
            ) : (
              <>
                <p>
                  When Decree 06/2022/ND-CP officially required hundreds of Vietnamese enterprises
                  to inventory greenhouse gases, most were struggling with manual Excel files —
                  lacking standards, data, and expertise.
                </p>
                <p>
                  ESGreen was born at the intersection of <strong>leading carbon expertise</strong> (founding team from VNEEC — Vietnam&apos;s CDM market leader)
                  and <strong>powerful technology capabilities</strong>.
                </p>
                <p>
                  Beyond compliance, ESGreen aims to become <strong>the international-standard ESG management platform,
                  serving thousands of Vietnamese enterprises on their sustainability journey.</strong>
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
            <div className={styles.statVal}>{lang === 'vi' ? 'Hàng trăm DN' : 'Hundreds of firms'}</div>
            <div className={styles.statLab}>{lang === 'vi' ? 'Bắt buộc kiểm kê KNK từ 2024 – 2026' : 'Required GHG inventory 2024–2026'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
