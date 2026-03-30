'use client'

import { useState } from 'react'
import Header, { LangContext } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import styles from './ghg.module.css'

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

/* ─── Dashboard Mockup (reused from homepage) ─── */
function DashboardMockup() {
  return (
    <div className={styles.dash}>
      <div className={styles.dashHeader}>
        <span>GHG Inventory Overview</span>
        <span className={styles.dashBadge}>Year to Date</span>
      </div>
      <div className={styles.dashImgWrap}>
        <img src="/images/Dashboard.jpeg" alt="Dashboard phần mềm kiểm kê khí nhà kính ESGreen" className={styles.dashImg} />
      </div>
    </div>
  )
}

/* ─── Main Page ─── */
export default function GhgPage() {
  const [lang, setLang] = useState('vi')

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />

      <main className={styles.ghgPage}>
        {/* ═══ HERO ═══ */}
        <section className={styles.hero}>
          <div className="container">
            <span className={styles.heroBadge}>Giải pháp kiểm kê KNK</span>
            <h1 className={styles.heroTitle}>
              Phần mềm kiểm kê khí nhà kính (GHG Inventory) cho doanh nghiệp Việt Nam
            </h1>
            <p className={styles.heroDesc}>
              Nền tảng tính toán và báo cáo phát thải CO2 theo chuẩn GHG Protocol,
              tuân thủ Nghị định 06/2022/NĐ-CP — giúp doanh nghiệp chủ động kiểm kê
              khí nhà kính và đáp ứng yêu cầu ESG reporting.
            </p>
            <div className={styles.heroBtns}>
              <a href="#contact" className="btn-primary btn-shimmer">Đăng ký Demo</a>
              <a href="#lien-he" className="btn-ghost">Liên hệ tư vấn</a>
            </div>
          </div>
        </section>

        {/* ═══ Kiểm kê khí nhà kính là gì? ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <div className={styles.twoCol}>
              <div>
                <p className={styles.sectionTag}>Tổng quan</p>
                <h2 className={styles.sectionTitle}>Kiểm kê khí nhà kính là gì?</h2>
                <div className={styles.sectionBody}>
                  <p>
                    Kiểm kê khí nhà kính (GHG Inventory) là quá trình đo lường, tính toán
                    và báo cáo tổng lượng phát thải CO2 và các khí nhà kính khác (CH₄, N₂O,
                    HFCs, PFCs, SF₆) phát sinh từ hoạt động sản xuất kinh doanh của doanh nghiệp.
                  </p>
                  <p>
                    Theo chuẩn GHG Protocol, phát thải được phân loại thành 3 phạm vi: Scope 1
                    (phát thải trực tiếp), Scope 2 (phát thải gián tiếp từ năng lượng mua vào),
                    và Scope 3 (phát thải gián tiếp khác trong chuỗi giá trị). Kiểm kê khí nhà kính
                    là bước đầu tiên và quan trọng nhất trong hành trình giảm phát thải, đáp ứng
                    yêu cầu pháp lý và hướng tới mục tiêu Net Zero.
                  </p>
                </div>
              </div>
              <DashboardMockup />
            </div>
          </div>
        </section>

        {/* ═══ Doanh nghiệp nào cần kiểm kê? ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Đối tượng áp dụng</p>
            <h2 className={styles.sectionTitle}>Doanh nghiệp nào cần kiểm kê khí nhà kính?</h2>
            <div className={styles.sectionBody}>
              <p>
                Theo <strong>Nghị định 06/2022/NĐ-CP</strong> về giảm nhẹ phát thải khí nhà kính
                và bảo vệ tầng ozone, các cơ sở phát thải lớn thuộc danh mục do Thủ tướng ban hành
                bắt buộc phải thực hiện kiểm kê khí nhà kính và nộp báo cáo định kỳ cho Bộ TN&MT.
              </p>
              <p>Các ngành công nghiệp chính thuộc diện bắt buộc:</p>
            </div>
            <ul className={styles.bulletList}>
              <li>
                <strong>Năng lượng và nhiệt điện</strong>
                Nhà máy điện, cơ sở sản xuất và phân phối năng lượng có công suất lớn
              </li>
              <li>
                <strong>Sản xuất công nghiệp nặng</strong>
                Các nhà máy sản xuất xi măng, thép, hóa chất với mức phát thải từ 3.000 tấn CO₂ tương đương/năm trở lên
              </li>
              <li>
                <strong>Doanh nghiệp hướng tới xuất khẩu EU (CBAM)</strong>
                Cơ chế điều chỉnh biên giới carbon (CBAM) của EU yêu cầu doanh nghiệp xuất khẩu phải báo cáo lượng phát thải CO2 trong sản phẩm
              </li>
              <li>
                <strong>Doanh nghiệp thực hiện ESG reporting</strong>
                Công ty niêm yết, doanh nghiệp FDI và doanh nghiệp trong chuỗi cung ứng toàn cầu cần dữ liệu kiểm kê khí nhà kính cho báo cáo phát triển bền vững
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ Khó khăn khi kiểm kê ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionTag}>Thách thức</p>
            <h2 className={styles.sectionTitle}>Những khó khăn khi kiểm kê khí nhà kính</h2>
            <ul className={`${styles.bulletList} ${styles.challengeList}`}>
              <li>
                <strong>Thu thập dữ liệu phân tán, thiếu đồng bộ</strong>
                Dữ liệu tiêu thụ năng lượng, nguyên liệu nằm rải rác ở nhiều bộ phận, định dạng khác nhau, khó tổng hợp chính xác
              </li>
              <li>
                <strong>Thiếu hệ số phát thải phù hợp</strong>
                Nhiều doanh nghiệp Việt Nam không biết áp dụng hệ số phát thải (emission factor) nào cho đúng ngành và vùng lãnh thổ
              </li>
              <li>
                <strong>Phân loại Scope 1, 2, 3 phức tạp</strong>
                Ranh giới tổ chức và ranh giới hoạt động theo GHG Protocol đòi hỏi chuyên môn kỹ thuật chuyên sâu
              </li>
              <li>
                <strong>Báo cáo chưa đúng chuẩn pháp lý</strong>
                Yêu cầu báo cáo theo Nghị định 06/2022 và ISO 14064 có mẫu biểu, cấu trúc riêng mà nhiều doanh nghiệp chưa nắm rõ
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ Giải pháp từ ESGreen ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Giải pháp</p>
            <h2 className={styles.sectionTitle}>Giải pháp kiểm kê khí nhà kính từ ESGreen</h2>
            <div className={styles.sectionBody}>
              <p>
                Phần mềm kiểm kê khí nhà kính ESGreen được thiết kế riêng cho doanh nghiệp
                Việt Nam, tích hợp cơ sở dữ liệu hệ số phát thải trong nước và quốc tế.
                Hệ thống tự động phân loại phát thải theo Scope 1, 2, 3 theo chuẩn GHG Protocol,
                hỗ trợ xuất báo cáo đúng định dạng Nghị định 06/2022/NĐ-CP và ISO 14064.
              </p>
              <p>
                Nền tảng cho phép doanh nghiệp nhập dữ liệu hoạt động (tiêu thụ điện, nhiên liệu,
                nguyên vật liệu), tự động tính toán lượng phát thải CO2 tương đương, và theo dõi
                xu hướng phát thải qua các năm — phục vụ cho cả mục đích tuân thủ pháp lý
                và chiến lược ESG reporting.
              </p>
            </div>
          </div>
        </section>

        {/* ═══ Tính năng chính ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionTag}>Tính năng</p>
            <h2 className={styles.sectionTitle}>Tính năng chính</h2>
            <ul className={styles.bulletList}>
              <li>
                <strong>Tự động phân loại Scope 1, 2, 3</strong>
                Theo chuẩn GHG Protocol và IPCC Guidelines, hỗ trợ cả phương pháp tính toán và phương pháp đo đạc
              </li>
              <li>
                <strong>Cơ sở dữ liệu hệ số phát thải tích hợp</strong>
                Emission Factor Database gồm hệ số phát thải Việt Nam (Bộ TN&MT) và quốc tế (IPCC, DEFRA, EPA)
              </li>
              <li>
                <strong>Xuất báo cáo tuân thủ pháp lý</strong>
                Đúng định dạng Nghị định 06/2022/NĐ-CP, ISO 14064-1 và GRI Standards
              </li>
              <li>
                <strong>Dashboard trực quan theo thời gian thực</strong>
                Theo dõi tổng phát thải CO2, so sánh theo năm, phân tích theo nguồn phát thải
              </li>
              <li>
                <strong>Quản lý dữ liệu đa cơ sở</strong>
                Hỗ trợ nhập liệu cho nhiều nhà máy, chi nhánh và tổng hợp báo cáo cấp tập đoàn
              </li>
              <li>
                <strong>Audit trail và kiểm soát chất lượng dữ liệu</strong>
                Ghi nhận lịch sử thay đổi, cảnh báo dữ liệu bất thường, hỗ trợ xác minh bên thứ ba
              </li>
            </ul>
          </div>
        </section>

        {/* ═══ Quy trình kiểm kê ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Quy trình</p>
            <h2 className={styles.sectionTitle}>Quy trình kiểm kê khí nhà kính</h2>
            <ol className={styles.steps}>
              <li>
                <strong>Xác định ranh giới tổ chức và hoạt động</strong>
                Thiết lập phạm vi kiểm kê: ranh giới tổ chức (equity share / operational control)
                và các nguồn phát thải Scope 1, 2, 3 cần tính toán
              </li>
              <li>
                <strong>Thu thập dữ liệu hoạt động</strong>
                Nhập dữ liệu tiêu thụ điện, nhiên liệu, nguyên vật liệu, vận chuyển và
                các hoạt động phát sinh khí nhà kính vào hệ thống
              </li>
              <li>
                <strong>Tính toán phát thải CO2 tương đương</strong>
                Phần mềm tự động áp dụng hệ số phát thải phù hợp, tính toán lượng
                phát thải theo từng Scope và tổng phát thải CO₂e
              </li>
              <li>
                <strong>Rà soát và kiểm soát chất lượng</strong>
                Hệ thống kiểm tra tính nhất quán dữ liệu, đối chiếu với năm cơ sở,
                phát hiện sai sót và dữ liệu bất thường
              </li>
              <li>
                <strong>Xuất báo cáo và nộp cơ quan quản lý</strong>
                Tạo báo cáo kiểm kê khí nhà kính theo đúng mẫu Nghị định 06/2022,
                ISO 14064-1, sẵn sàng nộp Bộ TN&MT hoặc sử dụng cho ESG reporting
              </li>
            </ol>
          </div>
        </section>

        {/* ═══ Ứng dụng theo ngành ═══ */}
        <section className={`${styles.section} ${styles.sectionWhite}`}>
          <div className="container">
            <p className={styles.sectionTag}>Ngành nghề</p>
            <h2 className={styles.sectionTitle}>Ứng dụng theo ngành</h2>
            <div className={styles.industryGrid}>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>🏭</div>
                <h3 className={styles.industryName}>Sản xuất & Công nghiệp nặng</h3>
                <p className={styles.industryDesc}>
                  Kiểm kê phát thải CO2 từ quá trình đốt nhiên liệu, phản ứng hóa học
                  và tiêu thụ điện — đáp ứng ngưỡng báo cáo theo Nghị định 06/2022.
                </p>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>⚡</div>
                <h3 className={styles.industryName}>Năng lượng & Nhiệt điện</h3>
                <p className={styles.industryDesc}>
                  Tính toán phát thải Scope 1 từ đốt than, khí, dầu và Scope 2 từ
                  lưới điện — phục vụ báo cáo cho cơ quan quản lý và đối tác quốc tế.
                </p>
              </div>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>📦</div>
                <h3 className={styles.industryName}>Xuất khẩu & Chuỗi cung ứng</h3>
                <p className={styles.industryDesc}>
                  Cung cấp dữ liệu GHG Inventory cho báo cáo CBAM, ESG reporting
                  và yêu cầu từ đối tác trong chuỗi cung ứng toàn cầu.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ═══ FAQ ═══ */}
        <section className={`${styles.section} ${styles.sectionPale}`}>
          <div className="container">
            <p className={styles.sectionTag}>Câu hỏi thường gặp</p>
            <h2 className={styles.sectionTitle}>FAQ — Kiểm kê khí nhà kính</h2>
            <div className={styles.faqList}>
              <FaqItem
                q="Kiểm kê khí nhà kính là gì?"
                a="Kiểm kê khí nhà kính (GHG Inventory) là quá trình đo lường và tính toán tổng lượng phát thải CO2 và các khí nhà kính khác phát sinh từ hoạt động sản xuất kinh doanh của doanh nghiệp, theo phương pháp chuẩn quốc tế như GHG Protocol. Kết quả kiểm kê là cơ sở để lập báo cáo tuân thủ pháp luật và xây dựng chiến lược giảm phát thải."
              />
              <FaqItem
                q="Doanh nghiệp nào bắt buộc kiểm kê?"
                a="Theo Nghị định 06/2022/NĐ-CP, các cơ sở phát thải lớn thuộc danh mục do Thủ tướng Chính phủ ban hành bắt buộc phải kiểm kê khí nhà kính. Bao gồm các cơ sở trong lĩnh vực năng lượng, sản xuất công nghiệp (xi măng, thép, hóa chất), giao thông vận tải và xây dựng có mức phát thải từ 3.000 tấn CO₂ tương đương/năm trở lên."
              />
              <FaqItem
                q="Mất bao lâu để hoàn thành kiểm kê?"
                a="Thời gian phụ thuộc vào quy mô doanh nghiệp và mức độ sẵn sàng của dữ liệu. Với phần mềm ESGreen, doanh nghiệp vừa thường hoàn thành kiểm kê trong 2–4 tuần. Doanh nghiệp lớn có nhiều cơ sở có thể cần 4–8 tuần. ESGreen hỗ trợ song song việc thiết lập hệ thống và thu thập dữ liệu để rút ngắn thời gian."
              />
              <FaqItem
                q="Chi phí kiểm kê khí nhà kính bao nhiêu?"
                a="Chi phí tùy thuộc vào quy mô doanh nghiệp, số lượng cơ sở và phạm vi kiểm kê (Scope 1, 2 hoặc cả Scope 3). ESGreen cung cấp báo giá cụ thể sau khi đánh giá nhu cầu thực tế của doanh nghiệp. Liên hệ đội ngũ tư vấn để nhận báo giá phù hợp."
              />
              <FaqItem
                q="ESGreen hỗ trợ gì?"
                a="ESGreen cung cấp phần mềm kiểm kê khí nhà kính kèm hỗ trợ kỹ thuật: thiết lập hệ thống, đào tạo sử dụng, hỗ trợ thu thập và nhập dữ liệu, kiểm tra chất lượng dữ liệu, và xuất báo cáo đúng chuẩn pháp lý (Nghị định 06/2022, ISO 14064). Đội ngũ chuyên gia ESGreen đồng hành trong suốt quy trình kiểm kê."
              />
            </div>
          </div>
        </section>

        {/* ═══ CTA ═══ */}
        <section className={styles.cta} id="contact">
          <div className="container">
            <h2 className={styles.ctaTitle}>Bắt đầu kiểm kê khí nhà kính ngay hôm nay</h2>
            <p className={styles.ctaDesc}>
              Liên hệ đội ngũ ESGreen để được tư vấn giải pháp kiểm kê khí nhà kính
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
