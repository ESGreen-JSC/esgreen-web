'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './HeroSection.module.css'
import { useLang } from '@/components/layout/Header'

export default function HeroSection() {
  const { lang } = useLang()
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const statsRef = useRef<HTMLDivElement>(null)

  // Typed effect
  useEffect(() => {
    const phrases = ['Chuyển đổi bền vững', 'Sustainable Transformation']
    let phraseIndex = 0
    let charIndex = 0
    let isDeleting = false
    let timeout: ReturnType<typeof setTimeout>

    const type = () => {
      const currentPhrase = phrases[phraseIndex]
      if (!isDeleting) {
        setTypedText(currentPhrase.substring(0, charIndex + 1))
        charIndex++
        if (charIndex === currentPhrase.length) {
          isDeleting = false
          timeout = setTimeout(() => { isDeleting = true; type() }, 2000)
          return
        }
        timeout = setTimeout(type, 80)
      } else {
        setTypedText(currentPhrase.substring(0, charIndex - 1))
        charIndex--
        if (charIndex === 0) {
          isDeleting = false
          phraseIndex = (phraseIndex + 1) % phrases.length
          timeout = setTimeout(type, 500)
          return
        }
        timeout = setTimeout(type, 40)
      }
    }

    const startTimeout = setTimeout(type, 1800)
    return () => { clearTimeout(startTimeout); clearTimeout(timeout) }
  }, [])

  // Cursor blink
  useEffect(() => {
    const interval = setInterval(() => setShowCursor(v => !v), 530)
    return () => clearInterval(interval)
  }, [])


  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroTexture} />
      <canvas id="particles-canvas" className={styles.particles} />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>
          {lang === 'vi' ? 'PHẦN MỀM KIỂM KÊ KHÍ NHÀ KÍNH & ESG' : 'GHG INVENTORY & ESG SOFTWARE'}
        </p>
        <h1 className={styles.h1}>
          {lang === 'vi' ? 'Chuẩn hóa kiểm kê,' : 'Standardize Inventory,'}
        </h1>
        <div className={styles.typed}>
          {typedText}
          <span className={styles.cursor} style={{ opacity: showCursor ? 1 : 0 }}>|</span>
        </div>
        <p className={styles.sub}>
          {lang === 'vi'
            ? 'ESGreen giúp doanh nghiệp đáp ứng nghĩa vụ tuân thủ và tiên phong trong thực hiện các sáng kiến chuyển đổi bền vững.'
            : 'ESGreen helps enterprises meet compliance obligations and lead the way in sustainable transformation initiatives.'}
        </p>
        <p className={styles.hook}>
          {lang === 'vi'
            ? 'Phù hợp cho doanh nghiệp thuộc danh sách kiểm kê bắt buộc và các doanh nghiệp tham gia chuỗi cung ứng toàn cầu (CBAM, ESG).'
            : 'Suitable for enterprises on the mandatory inventory list and businesses in global supply chains (CBAM, ESG).'}
        </p>
        <div className={styles.btns}>
          <a href="#contact" className="btn-primary btn-shimmer btn-pulse" style={{ padding: '16px 36px', fontSize: '16px' }}>
            {lang === 'vi' ? 'Đăng ký demo' : 'Request Demo'}
          </a>
          <a href="#contact" className="btn-ghost">
            {lang === 'vi' ? 'Liên hệ tư vấn' : 'Contact Us'}
          </a>
        </div>
        <p className={styles.trustLine}>
          {lang === 'vi'
            ? 'Không yêu cầu kỹ thuật — triển khai trong 2–4 tuần'
            : 'No technical requirements — deploy in 2–4 weeks'}
        </p>

        <div className={styles.trustBar}>
          <span className={styles.trustLabel}>{lang === 'vi' ? 'Đối tác chiến lược:' : 'Strategic Partners:'}</span>
          <div className={styles.trustLogos}>
            <div className={styles.partnerItem}>
              <a href="https://eec.vn/" target="_blank" rel="noopener noreferrer"><img src="/logo/logo_VNEEC.png" alt="VNEEC" /></a>
              <span className={styles.partnerDesc}>{lang === 'vi' ? 'Đơn vị tư vấn thị trường các-bon hàng đầu Việt Nam' : 'Leading carbon market consultancy in Vietnam'}</span>
            </div>
            <div className={styles.partnerItem}>
              <a href="https://greencic.vn/" target="_blank" rel="noopener noreferrer"><img src="/logo/Logo_GreenCIC.png" alt="GreenCIC" /></a>
              <span className={styles.partnerDesc}>{lang === 'vi' ? 'Tổ chức thẩm định/thẩm tra KNK và đánh giá ESG' : 'GHG verification & ESG assessment organization'}</span>
            </div>
          </div>
        </div>

        <div className={styles.stats} ref={statsRef}>
          <div className={styles.credItem}>
            <div className={styles.credIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <div>
              <div className={styles.statVal}>30+</div>
              <div className={styles.statLabel}>
                {lang === 'vi' ? 'năm kinh nghiệm trong lĩnh vực biến đổi khí hậu và phát triển bền vững' : 'years of experience in climate change & sustainable development'}
              </div>
            </div>
          </div>
          <div className={styles.credItem}>
            <div className={styles.credIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div>
              <div className={styles.statVal}>Nghị định 06/2022/NĐ-CP</div>
              <div className={styles.statLabel}>& ISO 14064</div>
            </div>
          </div>
          <div className={styles.credItem}>
            <div className={styles.credIcon}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
              </svg>
            </div>
            <div>
              <div className={styles.statVal}>{lang === 'vi' ? '2' : '2'}</div>
              <div className={styles.statLabel}>
                {lang === 'vi' ? 'nền tảng chuyên biệt: kiểm kê KNK & chấm điểm ESG' : 'specialized platforms: GHG Inventory & ESG Scoring'}
              </div>
              <div className={styles.credCaption}>
                {lang === 'vi'
                  ? 'Sẽ được tích hợp thành một nền tảng thống nhất trong roadmap sản phẩm'
                  : 'Will be integrated into a unified platform in the product roadmap'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
