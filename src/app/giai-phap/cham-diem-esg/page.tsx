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
export default function EsgScoringPage() {
  const [lang, setLang] = useState('vi')

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />

      <main className={styles.ghgPage}>
        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.heroBadge}>Giải pháp ESG</span>
            <h1 className={styles.heroTitle}>
              Phần mềm chấm điểm ESG cho doanh nghiệp
            </h1>
            <p className={styles.heroDesc}>
              Giải pháp giúp doanh nghiệp đánh giá, theo dõi và cải thiện hiệu suất ESG
              theo tiêu chuẩn quốc tế và yêu cầu của nhà đầu tư.
            </p>
            <div className={styles.heroBtns}>
              <a href="#contact" className="btn-primary btn-shimmer">Đăng ký Demo</a>
              <a href="#lien-he" className="btn-ghost">Liên hệ tư vấn</a>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 1 — ESG là gì ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <div className={styles.twoCol}>
              <div>
                <p className={styles.sectionTag}>Tổng quan</p>
                <h2 className={styles.sectionTitle}>Chấm điểm ESG là gì?</h2>
                <div className={styles.sectionBody}>
                  <p>
                    Chấm điểm ESG là quá trình đánh giá mức độ thực hiện các tiêu chí
                    Môi trường (Environmental), Xã hội (Social) và Quản trị (Governance)
                    của doanh nghiệp.
                  </p>
                  <p>
                    Việc chấm điểm ESG giúp doanh nghiệp minh bạch thông tin,
                    nâng cao uy tín và đáp ứng yêu cầu từ nhà đầu tư, đối tác
                    và thị trường quốc tế.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/images/esg-pillars.png.jpeg"
                  alt="Ba trụ cột ESG: Environmental, Social, Governance"
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
            <h2 className={styles.sectionTitle}>Doanh nghiệp nào cần chấm điểm ESG?</h2>
            <ul className={styles.bulletList}>
              <li>
                <strong>Doanh nghiệp niêm yết</strong>
                Cần báo cáo ESG theo yêu cầu của sàn giao dịch và cơ quan quản lý
              </li>
              <li>
                <strong>Doanh nghiệp gọi vốn hoặc làm việc với quỹ đầu tư</strong>
                ESG score là tiêu chí ngày càng quan trọng trong quyết định đầu tư
              </li>
              <li>
                <strong>Doanh nghiệp tham gia chuỗi cung ứng toàn cầu</strong>
                Đối tác quốc tế yêu cầu minh bạch dữ liệu ESG trong chuỗi cung ứng
              </li>
              <li>
                <strong>Doanh nghiệp muốn cải thiện quản trị và minh bạch thông tin</strong>
                ESG là công cụ quản trị giúp nhận diện rủi ro và cơ hội cải thiện
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ SECTION 3 — Problem ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionTag}>Thách thức</p>
            <h2 className={styles.sectionTitle}>Khó khăn khi triển khai ESG</h2>
            <ul className={`${styles.bulletList} ${styles.challengeList}`}>
              <li>
                <strong>Không có framework đánh giá ESG rõ ràng</strong>
                Nhiều doanh nghiệp chưa biết bắt đầu từ đâu và áp dụng tiêu chuẩn nào
              </li>
              <li>
                <strong>Dữ liệu ESG phân tán, khó tổng hợp</strong>
                Thông tin nằm rải rác ở nhiều phòng ban, không có hệ thống quản lý tập trung
              </li>
              <li>
                <strong>Thiếu tiêu chí đo lường cụ thể</strong>
                Không có bộ chỉ số rõ ràng để lượng hóa hiệu suất E, S, G riêng biệt
              </li>
              <li>
                <strong>Khó theo dõi cải thiện theo thời gian</strong>
                Không có dashboard hay công cụ so sánh điểm ESG qua các kỳ đánh giá
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ SECTION 4 — Transition ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <div className={styles.sectionBody} style={{ maxWidth: 680, textAlign: 'center', margin: '0 auto', fontStyle: 'italic', fontSize: 16 }}>
              <p>
                ESGreen cung cấp cách tiếp cận có cấu trúc, giúp doanh nghiệp chuẩn hóa dữ liệu
                và chấm điểm ESG một cách rõ ràng và có thể theo dõi liên tục.
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
                <h2 className={styles.sectionTitle}>Giải pháp chấm điểm ESG từ ESGreen</h2>
                <div className={styles.sectionBody}>
                  <p>
                    ESGreen cung cấp nền tảng giúp doanh nghiệp thu thập dữ liệu ESG,
                    đánh giá theo bộ tiêu chí chuẩn hóa và theo dõi điểm số ESG theo thời gian.
                  </p>
                  <p>
                    Hệ thống hỗ trợ xây dựng báo cáo ESG phù hợp với yêu cầu của nhà đầu tư
                    và các chuẩn mực quốc tế.
                  </p>
                </div>
              </div>
              <div>
                <img
                  src="/images/esg-dashboard.png.jpeg"
                  alt="ESG Score Dashboard - ESGreen"
                  style={{ width: '100%', height: 'auto', borderRadius: 16, boxShadow: '0 12px 48px rgba(26,61,19,0.15)' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 6 — Features ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Tính năng</p>
            <h2 className={styles.sectionTitle}>Tính năng chính</h2>
            <ul className={styles.bulletList}>
              <li>
                <strong>Thu thập và chuẩn hóa dữ liệu ESG</strong>
                Nhập liệu từ nhiều nguồn, tự động chuẩn hóa theo format thống nhất
              </li>
              <li>
                <strong>Đánh giá theo bộ tiêu chí ESG</strong>
                Bộ chỉ số E-S-G được xây dựng dựa trên các framework quốc tế
              </li>
              <li>
                <strong>Tự động chấm điểm ESG</strong>
                Tính toán điểm tổng và điểm thành phần E, S, G dựa trên dữ liệu thực tế
              </li>
              <li>
                <strong>Dashboard theo dõi điểm số</strong>
                Trực quan hóa điểm ESG qua biểu đồ radar, trend line và KPI cards
              </li>
              <li>
                <strong>So sánh và cải thiện theo thời gian</strong>
                Theo dõi biến động điểm qua từng kỳ, nhận diện điểm cần cải thiện
              </li>
              <li>
                <strong>Xuất báo cáo ESG</strong>
                Tạo báo cáo ESG phù hợp yêu cầu nhà đầu tư và chuẩn mực quốc tế
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ SECTION 7 — Quy trình ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionTag}>Quy trình</p>
            <h2 className={styles.sectionTitle}>Quy trình chấm điểm ESG</h2>
            <ol className={styles.steps}>
              <li>
                <strong>Xác định tiêu chí ESG</strong>
                Lựa chọn bộ tiêu chí phù hợp với ngành nghề và quy mô doanh nghiệp
              </li>
              <li>
                <strong>Thu thập dữ liệu</strong>
                Nhập dữ liệu từ các phòng ban: môi trường, nhân sự, quản trị, tài chính
              </li>
              <li>
                <strong>Chuẩn hóa dữ liệu</strong>
                Hệ thống tự động kiểm tra, chuẩn hóa và đối chiếu dữ liệu đầu vào
              </li>
              <li>
                <strong>Tính toán và chấm điểm</strong>
                Chấm điểm từng tiêu chí E, S, G và tính điểm tổng ESG
              </li>
              <li>
                <strong>Phân tích và cải thiện</strong>
                Phân tích kết quả, nhận diện điểm yếu và đề xuất hướng cải thiện
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
                <div className={styles.industryIcon}>📊</div>
                <h3 className={styles.industryName}>Doanh nghiệp niêm yết</h3>
                <p className={styles.industryDesc}>
                  Phục vụ báo cáo ESG theo yêu cầu sàn giao dịch, nâng cao minh bạch
                  với cổ đông và nhà đầu tư.
                </p>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🚀</div>
                <h3 className={styles.industryName}>Startup gọi vốn</h3>
                <p className={styles.industryDesc}>
                  Tăng uy tín với quỹ đầu tư bằng dữ liệu ESG rõ ràng,
                  thể hiện cam kết phát triển bền vững.
                </p>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🌍</div>
                <h3 className={styles.industryName}>Doanh nghiệp xuất khẩu</h3>
                <p className={styles.industryDesc}>
                  Đáp ứng yêu cầu ESG từ đối tác quốc tế, chuỗi cung ứng toàn cầu
                  và cơ chế CBAM.
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
                <div className={styles.industryIcon}>🏭</div>
                <h3 className={styles.industryName}>Phần mềm kiểm kê khí nhà kính</h3>
                <p className={styles.industryDesc}>
                  Tìm hiểu thêm về giải pháp kiểm kê khí nhà kính theo GHG Protocol
                  và Nghị định 06/2022.
                </p>
              </a>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🎯</div>
                <h3 className={styles.industryName}>Tư vấn Net Zero</h3>
                <p className={styles.industryDesc}>
                  Xây dựng lộ trình giảm phát thải, hướng tới mục tiêu Net Zero
                  theo cam kết quốc gia.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ SECTION 10 — FAQ ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Câu hỏi thường gặp</p>
            <h2 className={styles.sectionTitle}>FAQ — Chấm điểm ESG</h2>
            <div className={styles.faqList}>
              <FaqItem
                q="Chấm điểm ESG là gì?"
                a="Là quá trình đánh giá doanh nghiệp theo tiêu chí môi trường (Environmental), xã hội (Social) và quản trị (Governance). Kết quả chấm điểm giúp doanh nghiệp nhận diện điểm mạnh, điểm yếu và theo dõi cải thiện theo thời gian."
              />
              <FaqItem
                q="Doanh nghiệp có bắt buộc chấm điểm ESG không?"
                a="Hiện chưa bắt buộc toàn diện tại Việt Nam, nhưng ngày càng trở thành yêu cầu phổ biến từ nhà đầu tư, sàn giao dịch và đối tác trong chuỗi cung ứng quốc tế. Xu hướng này sẽ tiếp tục tăng trong thời gian tới."
              />
              <FaqItem
                q="ESG có liên quan gì đến kiểm kê khí nhà kính?"
                a="Kiểm kê khí nhà kính là một phần quan trọng trong trụ cột môi trường (E) của ESG. Dữ liệu phát thải CO₂ từ kiểm kê KNK là đầu vào trực tiếp để đánh giá hiệu suất Environmental trong chấm điểm ESG."
              />
              <FaqItem
                q="ESGreen hỗ trợ những gì?"
                a="ESGreen cung cấp nền tảng chấm điểm ESG bao gồm: thu thập và chuẩn hóa dữ liệu, tự động tính điểm E-S-G, dashboard trực quan, theo dõi cải thiện theo thời gian, và xuất báo cáo ESG phù hợp yêu cầu nhà đầu tư."
              />
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className={styles.cta} id="contact">
          <div className="container">
            <h2 className={styles.ctaTitle}>Bắt đầu chấm điểm ESG cho doanh nghiệp</h2>
            <p className={styles.ctaDesc}>
              Liên hệ đội ngũ ESGreen để được tư vấn giải pháp chấm điểm ESG
              phù hợp với quy mô và ngành nghề doanh nghiệp.
            </p>
            <a href="/#contact" className="btn-primary btn-shimmer btn-pulse">Đăng ký Demo</a>
          </div>
        </section>
      </main>

      <Footer />
    </LangContext.Provider>
  )
}
