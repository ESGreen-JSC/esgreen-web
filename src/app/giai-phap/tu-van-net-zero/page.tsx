'use client'

import { useState } from 'react'
import Header, { LangContext } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import styles from '../kiem-ke-khi-nha-kinh/ghg.module.css'

/* ─── FAQ Accordion ─── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ''}`}>
      <button className={styles.faqQ} onClick={() => setOpen(!open)}>{q}</button>
      {open && <div className={styles.faqA}>{a}</div>}
    </div>
  )
}

/* ─── Main Page ─── */
export default function NetZeroPage() {
  const [lang, setLang] = useState('vi')

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />

      <main className={styles.ghgPage}>
        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.heroBadge}>Tư vấn Net Zero</span>
            <h1 className={styles.heroTitle}>
              Tư vấn lộ trình Net Zero cho doanh nghiệp
            </h1>
            <p className={styles.heroDesc}>
              Giải pháp giúp doanh nghiệp xây dựng chiến lược giảm phát thải
              và đạt mục tiêu Net Zero theo tiêu chuẩn quốc tế.
            </p>
            <div className={styles.heroBtns}>
              <a href="#contact" className="btn-primary btn-shimmer">Đăng ký tư vấn</a>
              <a href="#lien-he" className="btn-ghost">Liên hệ ngay</a>
            </div>
            <img
              src="/images/Illustration_for_Net.png.jpeg"
              alt="Lộ trình Net Zero — từ phát thải CO₂ đến mục tiêu Net Zero"
              style={{ width: '100%', maxWidth: 680, marginTop: 40, borderRadius: 16 }}
            />
          </div>
        </section>

        {/* ═══ SECTION 1 — Net Zero là gì ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <div className={styles.twoCol}>
              <div>
                <p className={styles.sectionTag}>Tổng quan</p>
                <h2 className={styles.sectionTitle}>Net Zero là gì?</h2>
                <div className={styles.sectionBody}>
                  <p>
                    Net Zero là trạng thái khi tổng lượng phát thải khí nhà kính được cân bằng
                    thông qua các biện pháp giảm phát thải và bù đắp carbon.
                  </p>
                  <p>
                    Đây là mục tiêu dài hạn mà nhiều doanh nghiệp hướng tới nhằm đáp ứng
                    các cam kết quốc tế và yêu cầu từ thị trường.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/images/net-zero-balance.png.jpeg"
                  alt="Cân bằng phát thải và hấp thụ carbon — Net Zero"
                  style={{ width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 8px 32px rgba(26,61,19,0.1)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 2 — Đối tượng ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Đối tượng</p>
            <h2 className={styles.sectionTitle}>Doanh nghiệp nào cần xây dựng lộ trình Net Zero?</h2>
            <ul className={styles.bulletList}>
              <li>
                <strong>Doanh nghiệp có lượng phát thải lớn</strong>
                Các ngành sản xuất, năng lượng, xi măng, thép — cần chiến lược giảm phát thải dài hạn
              </li>
              <li>
                <strong>Doanh nghiệp xuất khẩu sang thị trường EU (CBAM)</strong>
                Cơ chế điều chỉnh biên giới carbon yêu cầu minh bạch phát thải và lộ trình giảm
              </li>
              <li>
                <strong>Doanh nghiệp có cam kết ESG hoặc phát triển bền vững</strong>
                Net Zero là phần quan trọng trong chiến lược ESG và báo cáo bền vững
              </li>
              <li>
                <strong>Tập đoàn cần chiến lược giảm phát thải dài hạn</strong>
                Xây dựng lộ trình từ baseline đến mục tiêu Net Zero với các mốc cụ thể
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ SECTION 3 — Problem ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionTag}>Thách thức</p>
            <h2 className={styles.sectionTitle}>Khó khăn khi xây dựng lộ trình Net Zero</h2>
            <ul className={`${styles.bulletList} ${styles.challengeList}`}>
              <li>
                <strong>Không biết bắt đầu từ đâu</strong>
                Thiếu phương pháp luận và framework rõ ràng để xây dựng lộ trình giảm phát thải
              </li>
              <li>
                <strong>Thiếu dữ liệu phát thải đáng tin cậy</strong>
                Chưa có hệ thống kiểm kê khí nhà kính hoặc dữ liệu chưa được chuẩn hóa
              </li>
              <li>
                <strong>Không có chiến lược giảm phát thải rõ ràng</strong>
                Khó xác định giải pháp nào phù hợp với ngành nghề và quy mô doanh nghiệp
              </li>
              <li>
                <strong>Khó đo lường hiệu quả theo thời gian</strong>
                Không có công cụ theo dõi tiến độ và đánh giá mức giảm phát thải qua từng giai đoạn
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ SECTION 4 — Transition ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <div className={styles.sectionBody} style={{ maxWidth: 680, textAlign: 'center', margin: '0 auto', fontStyle: 'italic', fontSize: 16 }}>
              <p>
                ESGreen hỗ trợ doanh nghiệp xây dựng lộ trình Net Zero dựa trên dữ liệu thực tế
                và các tiêu chuẩn quốc tế.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 5 — Solution ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <div className={styles.twoCol}>
              <div>
                <p className={styles.sectionTag}>Giải pháp</p>
                <h2 className={styles.sectionTitle}>Giải pháp tư vấn Net Zero từ ESGreen</h2>
                <div className={styles.sectionBody}>
                  <p>
                    ESGreen cung cấp dịch vụ tư vấn giúp doanh nghiệp đánh giá hiện trạng phát thải,
                    xác định mục tiêu và xây dựng lộ trình giảm phát thải phù hợp với từng ngành.
                  </p>
                  <p>
                    Giải pháp kết hợp giữa dữ liệu kiểm kê khí nhà kính và định hướng chiến lược,
                    giúp doanh nghiệp từng bước tiến tới mục tiêu Net Zero.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/images/net-zero-roadmap.png.jpeg"
                  alt="Lộ trình Net Zero: Baseline → Giảm phát thải → Net Zero"
                  style={{ width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 12px 48px rgba(26,61,19,0.15)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 6 — Features ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Nội dung tư vấn</p>
            <h2 className={styles.sectionTitle}>Nội dung tư vấn chính</h2>
            <ul className={styles.bulletList}>
              <li>
                <strong>Đánh giá hiện trạng phát thải</strong>
                Xác định tổng lượng phát thải Scope 1, 2, 3 làm cơ sở xây dựng lộ trình
              </li>
              <li>
                <strong>Xác định mục tiêu giảm phát thải</strong>
                Thiết lập mục tiêu ngắn hạn và dài hạn phù hợp với ngành nghề và cam kết quốc tế
              </li>
              <li>
                <strong>Xây dựng lộ trình Net Zero</strong>
                Lập kế hoạch chi tiết với các mốc thời gian, giải pháp và nguồn lực cần thiết
              </li>
              <li>
                <strong>Đề xuất giải pháp giảm phát thải</strong>
                Tư vấn các giải pháp kỹ thuật và vận hành phù hợp để giảm phát thải hiệu quả
              </li>
              <li>
                <strong>Theo dõi và đánh giá hiệu quả</strong>
                Hỗ trợ đo lường, báo cáo tiến độ và điều chỉnh lộ trình khi cần thiết
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ SECTION 7 — Quy trình ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionTag}>Quy trình</p>
            <h2 className={styles.sectionTitle}>Quy trình triển khai Net Zero</h2>
            <ol className={styles.steps}>
              <li>
                <strong>Đánh giá hiện trạng phát thải</strong>
                Kiểm kê khí nhà kính, xác định baseline và các nguồn phát thải chính
              </li>
              <li>
                <strong>Xác định mục tiêu Net Zero</strong>
                Thiết lập mục tiêu giảm phát thải theo Science Based Targets và cam kết quốc gia
              </li>
              <li>
                <strong>Xây dựng lộ trình</strong>
                Lập kế hoạch hành động với các mốc giảm phát thải cụ thể theo từng giai đoạn
              </li>
              <li>
                <strong>Triển khai giải pháp</strong>
                Áp dụng các giải pháp giảm phát thải: tiết kiệm năng lượng, chuyển đổi nhiên liệu, bù đắp carbon
              </li>
              <li>
                <strong>Theo dõi và điều chỉnh</strong>
                Đo lường kết quả, đánh giá hiệu quả và cập nhật lộ trình phù hợp với thực tế
              </li>
            </ol>
          </div>
        </section>

        {/* ═══ SECTION 8 — Use Cases ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Ứng dụng</p>
            <h2 className={styles.sectionTitle}>Ứng dụng thực tế</h2>
            <div className={styles.industryGrid}>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🏭</div>
                <h3 className={styles.industryName}>Doanh nghiệp sản xuất</h3>
                <p className={styles.industryDesc}>
                  Giảm phát thải năng lượng trong quy trình sản xuất, tối ưu hóa
                  tiêu thụ nhiên liệu và chuyển đổi sang nguồn năng lượng sạch.
                </p>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🌍</div>
                <h3 className={styles.industryName}>Doanh nghiệp xuất khẩu</h3>
                <p className={styles.industryDesc}>
                  Đáp ứng cơ chế CBAM của EU, chứng minh nỗ lực giảm phát thải
                  với đối tác quốc tế và chuỗi cung ứng toàn cầu.
                </p>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🏢</div>
                <h3 className={styles.industryName}>Tập đoàn lớn</h3>
                <p className={styles.industryDesc}>
                  Xây dựng chiến lược ESG dài hạn, tích hợp mục tiêu Net Zero
                  vào kế hoạch kinh doanh và báo cáo bền vững.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 9 — Internal Links (SEO Cluster) ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionTag}>Giải pháp liên quan</p>
            <h2 className={styles.sectionTitle}>Khám phá thêm</h2>
            <div className={styles.industryGrid} style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
              <a href="/giai-phap/kiem-ke-khi-nha-kinh" className={styles.industryCard} style={{ textDecoration: 'none' }}>
                <div className={styles.industryIcon}>📊</div>
                <h3 className={styles.industryName}>Phần mềm kiểm kê khí nhà kính</h3>
                <p className={styles.industryDesc}>
                  Thực hiện kiểm kê khí nhà kính trước khi xây dựng lộ trình —
                  theo GHG Protocol và Nghị định 06/2022.
                </p>
              </a>
              <a href="/giai-phap/cham-diem-esg" className={styles.industryCard} style={{ textDecoration: 'none' }}>
                <div className={styles.industryIcon}>📋</div>
                <h3 className={styles.industryName}>Chấm điểm ESG</h3>
                <p className={styles.industryDesc}>
                  Đánh giá hiệu suất ESG song song với lộ trình Net Zero —
                  theo dõi cải thiện và xuất báo cáo cho nhà đầu tư.
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 10 — FAQ ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Câu hỏi thường gặp</p>
            <h2 className={styles.sectionTitle}>FAQ — Tư vấn Net Zero</h2>
            <div className={styles.faqList}>
              <FaqItem
                q="Net Zero là gì?"
                a="Net Zero là trạng thái cân bằng giữa lượng khí nhà kính phát thải và lượng khí nhà kính được hấp thụ hoặc bù đắp. Mục tiêu là đưa lượng phát thải ròng về mức bằng 0."
              />
              <FaqItem
                q="Doanh nghiệp có bắt buộc đạt Net Zero không?"
                a="Hiện chưa bắt buộc toàn diện tại Việt Nam, nhưng Net Zero là xu hướng toàn cầu. Việt Nam đã cam kết đạt Net Zero vào năm 2050 tại COP26, và các chính sách sẽ ngày càng yêu cầu doanh nghiệp giảm phát thải."
              />
              <FaqItem
                q="Lộ trình Net Zero mất bao lâu?"
                a="Tùy thuộc vào quy mô doanh nghiệp và ngành nghề, lộ trình Net Zero thường kéo dài nhiều năm (5–30 năm) với các mốc giảm phát thải trung gian rõ ràng."
              />
              <FaqItem
                q="ESGreen hỗ trợ gì trong lộ trình Net Zero?"
                a="ESGreen cung cấp dịch vụ tư vấn toàn diện: đánh giá hiện trạng phát thải, xây dựng lộ trình giảm phát thải, đề xuất giải pháp kỹ thuật và theo dõi tiến độ thực hiện."
              />
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className={styles.cta} id="contact">
          <div className="container">
            <h2 className={styles.ctaTitle}>Xây dựng lộ trình Net Zero cho doanh nghiệp</h2>
            <p className={styles.ctaDesc}>
              Liên hệ đội ngũ ESGreen để được tư vấn chiến lược giảm phát thải
              và xây dựng lộ trình Net Zero phù hợp.
            </p>
            <a href="/#contact" className="btn-primary btn-shimmer btn-pulse">Đăng ký tư vấn</a>
          </div>
        </section>
      </main>

      <Footer />
    </LangContext.Provider>
  )
}
