'use client'
import { useEffect, useState } from 'react'
import { useLang } from '@/components/layout/Header'

export function Preloader() {
  const [done, setDone] = useState(false)
  useEffect(() => { const t = setTimeout(() => setDone(true), 1200); return () => clearTimeout(t) }, [])
  return (
    <div className={`preloader ${done ? 'done' : ''}`} aria-hidden={done}>
      <div className="preloader-logo">ESGreen</div>
      <div className="preloader-spinner" />
    </div>
  )
}

export function ScrollProgress() {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const update = () => {
      const scrollTop = document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setWidth(scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0)
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  return <div className="scroll-progress" style={{ width: `${width}%` }} />
}

export function StickyCtaBar() {
  const [show, setShow] = useState(false)
  const { lang } = useLang()
  useEffect(() => {
    const check = () => setShow(window.scrollY > window.innerHeight)
    window.addEventListener('scroll', check, { passive: true })
    return () => window.removeEventListener('scroll', check)
  }, [])
  return (
    <div style={{
      position: 'fixed', bottom: show ? 0 : -60, left: 0, right: 0, zIndex: 40,
      background: 'var(--forest)', padding: '12px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
      transition: 'bottom 0.4s ease', boxShadow: '0 -4px 20px rgba(26,61,19,0.2)',
    }}>
      <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
        {lang === 'vi' ? 'Thời hạn tuân thủ sắp đến, bắt đầu kiểm kê từ hôm nay' : 'Compliance deadline approaching — start your inventory today'}
      </p>
      <a href="/#contact" style={{
        background: 'var(--brand)', color: 'var(--white)', fontSize: 13, fontWeight: 700,
        padding: '8px 20px', borderRadius: 20, textDecoration: 'none', whiteSpace: 'nowrap',
        transition: 'all 0.3s',
      }}>{lang === 'vi' ? 'Tư vấn miễn phí →' : 'Free Consultation →'}</a>
    </div>
  )
}

export function FloatButton() {
  return (
    <a href="tel:0865493186" title="Gọi tư vấn: 0865 493 186" aria-label="Gọi tư vấn: 0865 493 186"
      style={{
        position: 'fixed', bottom: 24, right: 24, zIndex: 45,
        width: 56, height: 56, borderRadius: '50%', background: 'var(--brand)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        boxShadow: '0 4px 20px rgba(109,192,67,0.35)', textDecoration: 'none',
        animation: 'floatBounce 2s ease-in-out infinite',
      }}>
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    </a>
  )
}

export function WaveDivider({ fill = 'var(--pale)', flip = false }: { fill?: string; flip?: boolean }) {
  return (
    <div className={`wave-divider ${flip ? 'flip' : ''}`}>
      <svg viewBox="0 0 1200 48" preserveAspectRatio="none">
        <path fill={fill} d="M0 48V16C200 0 400 32 600 24C800 16 1000 40 1200 20V48Z" />
      </svg>
    </div>
  )
}

export function AosInit() {
  useEffect(() => {
    import('aos').then(AOS => { AOS.init({ once: true, duration: 600 }) })
  }, [])
  return null
}
