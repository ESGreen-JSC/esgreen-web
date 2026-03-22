'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './ServicesSection.module.css'
import { useLang } from '@/components/layout/Header'

function DashboardMockup() {
  return (
    <div className={styles.dash}>
      <div className={styles.dashHeader}>
        <span>GHG Inventory Overview</span>
        <span className={styles.dashBadge}>Year to Date</span>
      </div>
      <div className={styles.dashImgWrap}>
        <img src="/images/Dashboard.jpeg" alt="Dashboard kiểm kê khí nhà kính ESGreen" className={styles.dashImg} />
      </div>
    </div>
  )
}

function RatingVisual({ lang }: { lang: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated) { setAnimated(true); obs.unobserve(e.target) }
    }, { threshold: 0.3 })
    obs.observe(ref.current)
    return () => obs.disconnect()
  }, [animated])

  const bars = lang === 'vi' ? [
    { label: 'E', name: 'Môi trường', score: 85, gradient: 'linear-gradient(90deg,#6DC043,#90CF67)' },
    { label: 'S', name: 'Xã hội', score: 72, gradient: 'linear-gradient(90deg,#4A9A2A,#6DC043)' },
    { label: 'G', name: 'Quản trị', score: 90, gradient: 'linear-gradient(90deg,#295B20,#4A9A2A)' },
  ] : [
    { label: 'E', name: 'Environment', score: 85, gradient: 'linear-gradient(90deg,#6DC043,#90CF67)' },
    { label: 'S', name: 'Social', score: 72, gradient: 'linear-gradient(90deg,#4A9A2A,#6DC043)' },
    { label: 'G', name: 'Governance', score: 90, gradient: 'linear-gradient(90deg,#295B20,#4A9A2A)' },
  ]

  return (
    <div className={styles.ratingWrap} ref={ref}>
      <div className={styles.ratingBars}>
        {bars.map(b => (
          <div key={b.label} className={styles.ratingBar}>
            <div className={styles.ratingBarTop}>
              <span className={styles.ratingLabel}>{b.label} — {b.name}</span>
              <span className={styles.ratingScore}>{b.score}/100</span>
            </div>
            <div className={styles.ratingTrack}>
              <div className={styles.ratingFill} style={{ width: animated ? `${b.score}%` : '0%', background: b.gradient }} />
            </div>
          </div>
        ))}
      </div>
      <div className={styles.grade}>
        <div className={styles.gradeLabel}>{lang === 'vi' ? 'Xếp hạng' : 'Rating'}</div>
        <div className={styles.gradeVal}>A+</div>
        <div className={styles.gradeSub}>{lang === 'vi' ? 'Theo tiêu chuẩn ESGreen' : 'Per ESGreen Standards'}</div>
      </div>
    </div>
  )
}

function NetZeroVisual({ lang }: { lang: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [animated, setAnimated] = useState(false)
  const [counts, setCounts] = useState({ co2: 0, projects: 0 })
  useEffect(() => {
    if (!ref.current) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !animated) {
        setAnimated(true)
        const dur = 1500; const start = performance.now()
        const anim = (now: number) => {
          const p = Math.min((now - start) / dur, 1)
          setCounts({ co2: Math.floor(p * 10000), projects: Math.floor(p * 50) })
          if (p < 1) requestAnimationFrame(anim)
        }
        requestAnimationFrame(anim); obs.unobserve(e.target)
      }
    }, { threshold: 0.3 })
    obs.observe(ref.current); return () => obs.disconnect()
  }, [animated])

  return (
    <div className={styles.nzGrid} ref={ref}>
      <div className={`${styles.nzImg} ${styles.nzTall}`} style={{overflow:'hidden'}}>
        <img src="/images/experts-solar.jpeg" alt="Green energy consulting experts" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:16}} />
      </div>
      <div className={styles.nzStat} style={{background:'var(--brand)'}}>
        <div className={styles.nzVal} style={{color:'var(--white)'}}>{counts.co2.toLocaleString()}</div>
        <div className={styles.nzLabel} style={{color:'rgba(255,255,255,0.8)'}}>{lang === 'vi' ? 'Tấn CO₂ cắt giảm' : 'Tons CO₂ Reduced'}</div>
      </div>
      <div className={styles.nzImg} style={{overflow:'hidden'}}>
        <img src="/images/hand-stylus.jpeg" alt="Carbon data analysis on tablet" style={{width:'100%',height:'100%',objectFit:'cover',borderRadius:16}} />
      </div>
      <div className={styles.nzStat} style={{background:'var(--forest)'}}>
        <div className={styles.nzVal} style={{color:'var(--brand)'}}>{counts.projects}+</div>
        <div className={styles.nzLabel} style={{color:'rgba(255,255,255,0.6)'}}>{lang === 'vi' ? 'Dự án Net Zero' : 'Net Zero Projects'}</div>
      </div>
    </div>
  )
}

const servicesVi = [
  {
    id: 'svc1', bg: 'pale',
    badge: { text: 'BẮT BUỘC PHÁP LÝ', bg: '#FFF3E0', color: '#E65100' },
    title: 'Phần mềm kiểm kê KNK',
    desc: 'Nền tảng tính toán phát thải theo chuẩn GHG Protocol, tự động phân loại Scope 1, 2, 3 — sẵn sàng cho báo cáo nộp Bộ TN&MT.',
    features: [
      { bold: 'Kiểm kê tự động Scope 1, 2, 3', detail: 'theo GHG Protocol & IPCC guidelines' },
      { bold: 'Emission Factor Database', detail: 'tích hợp sẵn hệ số phát thải VN & quốc tế' },
      { bold: 'Xuất báo cáo đúng chuẩn', detail: 'định dạng NĐ 06/2022 & ISO 14064' },
    ],
    btn: { text: 'Liên hệ báo giá →', href: '#contact' },
    btn2: { text: 'Download Brochure', href: '#' },
    visual: 'dashboard',
  },
  {
    id: 'svc2', bg: 'white', reverse: true,
    badge: { text: 'ESGreen Rating', bg: '#EDF7E6', color: '#2E7D32' },
    title: 'Chấm điểm ESG tự động\nvới công nghệ AI',
    desc: 'Hệ thống đánh giá ESG đa chiều, kết hợp AI và khung tiêu chuẩn quốc tế để cho ra xếp hạng minh bạch, có thể so sánh giữa các ngành.',
    features: [
      { bold: '100+ chỉ số ESG', detail: 'phân tích theo E-S-G riêng biệt' },
      { bold: 'AI-powered scoring', detail: 'xử lý dữ liệu & phát hiện rủi ro tự động' },
    ],
    btn: { text: 'Trải nghiệm Demo', href: '#contact' },
    visual: 'rating',
  },
  {
    id: 'svc3', bg: 'pale',
    badge: { text: 'Lộ trình Net Zero', bg: '#E3F2FD', color: '#1565C0' },
    title: 'Tư vấn Chiến lược\nNet Zero',
    desc: 'Từ dữ liệu kiểm kê và điểm ESG, chúng tôi xây dựng lộ trình giảm phát thải cụ thể, khả thi — hướng tới mục tiêu Net Zero theo cam kết quốc gia.',
    features: [
      { bold: 'Baseline & Gap Analysis', detail: 'đánh giá hiện trạng, xác định mục tiêu' },
      { bold: 'Lộ trình giảm phát thải', detail: 'từng mốc 2025 → 2030 → 2050, theo SBTi' },
      { bold: 'Carbon Offset Advisory', detail: 'tư vấn mua tín chỉ carbon, phương án bù đắp' },
    ],
    btn: { text: 'Tư vấn lộ trình →', href: '#contact' },
    visual: 'netzero',
  },
]

const servicesEn = [
  {
    id: 'svc1', bg: 'pale',
    badge: { text: 'LEGALLY REQUIRED', bg: '#FFF3E0', color: '#E65100' },
    title: 'GHG Inventory Software',
    desc: 'Emissions calculation platform following GHG Protocol standards, automatic Scope 1, 2, 3 classification — ready for MONRE reporting.',
    features: [
      { bold: 'Automated Scope 1, 2, 3 Inventory', detail: 'per GHG Protocol & IPCC guidelines' },
      { bold: 'Emission Factor Database', detail: 'built-in VN & international emission factors' },
      { bold: 'Compliant Report Export', detail: 'Decree 06/2022 & ISO 14064 format' },
    ],
    btn: { text: 'Contact for Pricing →', href: '#contact' },
    btn2: { text: 'Download Brochure', href: '#' },
    visual: 'dashboard',
  },
  {
    id: 'svc2', bg: 'white', reverse: true,
    badge: { text: 'ESGreen Rating', bg: '#EDF7E6', color: '#2E7D32' },
    title: 'Automated ESG Scoring\nwith AI Technology',
    desc: 'Multi-dimensional ESG evaluation system combining AI and international standards frameworks for transparent, cross-industry comparable ratings.',
    features: [
      { bold: '100+ ESG Indicators', detail: 'analyzed separately for E-S-G' },
      { bold: 'AI-powered Scoring', detail: 'automated data processing & risk detection' },
    ],
    btn: { text: 'Try Demo', href: '#contact' },
    visual: 'rating',
  },
  {
    id: 'svc3', bg: 'pale',
    badge: { text: 'Net Zero Roadmap', bg: '#E3F2FD', color: '#1565C0' },
    title: 'Net Zero Strategy\nConsulting',
    desc: 'From inventory data and ESG scores, we build specific, actionable emission reduction roadmaps — targeting Net Zero aligned with national commitments.',
    features: [
      { bold: 'Baseline & Gap Analysis', detail: 'assess current state, define targets' },
      { bold: 'Emission Reduction Roadmap', detail: 'milestones 2025 → 2030 → 2050, per SBTi' },
      { bold: 'Carbon Offset Advisory', detail: 'carbon credit purchase consulting & offset plans' },
    ],
    btn: { text: 'Consult Roadmap →', href: '#contact' },
    visual: 'netzero',
  },
]

export default function ServicesSection() {
  const { lang } = useLang()
  const services = lang === 'vi' ? servicesVi : servicesEn

  return (
    <div id="services">
      {services.map((svc) => (
        <section key={svc.id} className={`${styles.svc} ${svc.bg === 'pale' ? styles.bgPale : styles.bgWhite}`}>
          <div className={`container ${styles.layout} ${svc.reverse ? styles.reverse : ''}`}>
            <div className={styles.info} data-aos={svc.reverse ? 'fade-left' : 'fade-right'} data-aos-duration="800">
              <span className={styles.badge} style={{ background: svc.badge.bg, color: svc.badge.color }}>{svc.badge.text}</span>
              <h2 className={styles.title}>{svc.title.split('\n').map((l, j) => <span key={j}>{l}<br/></span>)}</h2>
              <p className={styles.desc}>{svc.desc}</p>
              <ul className={styles.features}>
                {svc.features.map((f, j) => (
                  <li key={j}><strong>{f.bold}</strong> — {f.detail}</li>
                ))}
              </ul>
              <div className={styles.btns}>
                <a href={svc.btn.href} className="btn-primary btn-shimmer">{svc.btn.text}</a>
                {svc.btn2 && <a href={svc.btn2.href} className="btn-green-outline">{svc.btn2.text}</a>}
              </div>
            </div>
            <div className={styles.visual} data-aos={svc.reverse ? 'fade-right' : 'fade-left'} data-aos-duration="800" data-aos-delay="200">
              {svc.visual === 'dashboard' && <DashboardMockup />}
              {svc.visual === 'rating' && <RatingVisual lang={lang} />}
              {svc.visual === 'netzero' && <NetZeroVisual lang={lang} />}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
