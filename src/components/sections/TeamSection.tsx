import styles from './TeamSection.module.css'
import { useLang } from '@/components/layout/Header'

const foundersVi = [
  { img: '/founders/Dang Thi Hong Hanh.png', name: 'Bà Đặng Thị Hồng Hạnh', bio: '30 năm kinh nghiệm trong lĩnh vực Biến đổi khí hậu, phát triển bền vững. CEO VNEEC — dẫn đầu thị trường CDM/carbon tại Việt Nam với 150+ dự án CDM đã đăng ký thành công.', highlight: 'Eisenhower Fellow 2013' },
  { img: '/founders/Luc Dinh Vinh.png', name: 'Ông Lục Đình Vinh', bio: '29 năm kinh nghiệm CNTT, chuyên gia kiến trúc hệ thống. Nguyên CTO FSS — xây dựng nền tảng core cho nhiều định chế tài chính - ngân hàng lớn tại Việt Nam.', highlight: 'Kiến trúc sư hệ thống Enterprise' },
  { img: '/founders/Dang Luu Dung.png', name: 'Ông Đặng Lưu Dũng', bio: '20+ năm quản trị doanh nghiệp & đầu tư. Nguyên CEO Techcom Capital — quản lý quỹ TCBF quy mô trên 1 tỷ USD.', highlight: 'Chuyên gia Tài chính & Quản trị' },
]

const foundersEn = [
  { img: '/founders/Dang Thi Hong Hanh.png', name: 'Ms. Dang Thi Hong Hanh', bio: '18 years of sustainability experience. CEO of VNEEC — leading Vietnam\'s CDM/carbon market with 150+ successfully registered CDM projects.', highlight: 'Eisenhower Fellow 2013' },
  { img: '/founders/Luc Dinh Vinh.png', name: 'Mr. Luc Dinh Vinh', bio: '29 years of IT experience, enterprise system architect. Former CTO of FSS — built core banking platforms for major banks in Vietnam.', highlight: 'Enterprise System Architect' },
  { img: '/founders/Dang Luu Dung.png', name: 'Mr. Dang Luu Dung', bio: '20+ years of corporate management & investment. Former CEO of Techcom Capital — managed TCBF fund with over $1 billion AUM.', highlight: 'Finance & Management Expert' },
]

export default function TeamSection() {
  const { lang } = useLang()
  const founders = lang === 'vi' ? foundersVi : foundersEn

  return (
    <section className={styles.team}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p className="section-tag">{lang === 'vi' ? 'Cổ đông sáng lập' : 'Founding Partners'}</p>
        <h2 className="section-title">{lang === 'vi' ? 'Ba trụ cột — Một tầm nhìn' : 'Three Pillars — One Vision'}</h2>
        <p className={styles.subtitle}>
          {lang === 'vi'
            ? 'Kết hợp chuyên môn sâu về Carbon, Công nghệ và Quản trị doanh nghiệp'
            : 'Combining deep expertise in Carbon, Technology, and Corporate Governance'}
        </p>
        <div className={styles.grid}>
          {founders.map((f, i) => (
            <div key={i} className={styles.card} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className={styles.imgWrap}>
                <img src={f.img} alt={f.name} className={styles.photo} />
              </div>
              <h4 className={styles.name}>{f.name}</h4>
              <p className={styles.bio}>{f.bio}</p>
              <div className={styles.highlightRow}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6DC043" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                <span>{f.highlight}</span>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.values}>
          {lang === 'vi'
            ? <><span>Chính xác</span> · <span>Tận tâm</span> · <span>Hành động</span></>
            : <><span>Accuracy</span> · <span>Dedication</span> · <span>Action</span></>}
        </div>
      </div>
    </section>
  )
}
