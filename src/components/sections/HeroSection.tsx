'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './HeroSection.module.css'
import { useLang } from '@/components/layout/Header'

export default function HeroSection() {
  const { lang } = useLang()
  const [typedText, setTypedText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const statsRef = useRef<HTMLDivElement>(null)
  const [countersAnimated, setCountersAnimated] = useState(false)
  const [counts, setCounts] = useState({ projects: 0, credits: 0 })

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

  // Counter animation
  useEffect(() => {
    if (!statsRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !countersAnimated) {
        setCountersAnimated(true)
        const duration = 1500
        const start = performance.now()
        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          setCounts({
            projects: Math.floor(progress * 150),
            credits: Math.floor(progress * 13),
          })
          if (progress < 1) requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.5 })
    observer.observe(statsRef.current)
    return () => observer.disconnect()
  }, [countersAnimated])

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBg} />
      <div className={styles.heroTexture} />
      <canvas id="particles-canvas" className={styles.particles} />
      <div className={`container ${styles.content}`}>
        <p className={styles.eyebrow}>
          {lang === 'vi' ? 'NỀN TẢNG ESG CÔNG NGHỆ SỐ' : 'DIGITAL ESG PLATFORM'}
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
            ? 'ESGreen giúp doanh nghiệp kiểm kê khí nhà kính chính xác, chấm điểm ESG tự động và xây dựng lộ trình Net Zero — tất cả trên một nền tảng số duy nhất.'
            : 'ESGreen helps enterprises accurately inventory greenhouse gases, automate ESG scoring, and build Net Zero roadmaps — all on a single digital platform.'}
        </p>
        <div className={styles.btns}>
          <a href="#contact" className="btn-primary btn-shimmer btn-pulse" style={{ padding: '16px 36px', fontSize: '16px' }}>
            {lang === 'vi' ? 'Liên hệ' : 'Contact'}
          </a>
          <a href="#services" className="btn-ghost">
            {lang === 'vi' ? 'Xem demo →' : 'View Demo →'}
          </a>
        </div>

        <div className={styles.trustBar}>
          <span className={styles.trustLabel}>{lang === 'vi' ? 'Đối tác chiến lược:' : 'Strategic Partners:'}</span>
          <div className={styles.trustLogos}>
            <a href="https://eec.vn/" target="_blank" rel="noopener noreferrer"><img src="/logo/logo_VNEEC.png" alt="VNEEC" /></a>
            <a href="https://greencic.vn/" target="_blank" rel="noopener noreferrer"><img src="/logo/Logo_GreenCIC.png" alt="GreenCIC" /></a>
          </div>
        </div>

        <div className={styles.stats} ref={statsRef}>
          <div>
            <div className={styles.statVal}>{counts.projects}+</div>
            <div className={styles.statLabel}>{lang === 'vi' ? 'Dự án CDM đã thực hiện' : 'CDM Projects Completed'}</div>
          </div>
          <div>
            <div className={styles.statVal}>{counts.credits}M</div>
            <div className={styles.statLabel}>{lang === 'vi' ? 'Tín chỉ carbon phát hành' : 'Carbon Credits Issued'}</div>
          </div>
          <div>
            <div className={styles.statVal}>18–29</div>
            <div className={styles.statLabel}>{lang === 'vi' ? 'Năm kinh nghiệm chuyên gia' : 'Years of Expert Experience'}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
