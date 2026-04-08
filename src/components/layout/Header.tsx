'use client'
import { useState, useEffect, createContext, useContext, useRef } from 'react'
import styles from './Header.module.css'

// Language context
export const LangContext = createContext<{
  lang: string
  setLang: (l: string) => void
  translationInfo?: { hasTranslation: boolean }
}>({ lang: 'vi', setLang: () => {} })
export function useLang() { return useContext(LangContext) }

const solutionsVi = [
  { label: 'Kiểm kê khí nhà kính', href: '/giai-phap/kiem-ke-khi-nha-kinh' },
  { label: 'Chấm điểm ESG', href: '/giai-phap/cham-diem-esg' },
  { label: 'Tư vấn Net Zero', href: '/giai-phap/tu-van-net-zero' },
]
const solutionsEn = [
  { label: 'GHG Inventory', href: '/giai-phap/kiem-ke-khi-nha-kinh' },
  { label: 'ESG Scoring', href: '/giai-phap/cham-diem-esg' },
  { label: 'Net Zero Consulting', href: '/giai-phap/tu-van-net-zero' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLLIElement>(null)
  const { lang, setLang, translationInfo } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const [pathname, setPathname] = useState('')
  useEffect(() => {
    setPathname(window.location.pathname)
  }, [])
  const isHome = pathname === '/'
  const isSolution = pathname.startsWith('/giai-phap')
  const isBlog = pathname.startsWith('/blog')

  const solutions = lang === 'vi' ? solutionsVi : solutionsEn

  const navLinks = lang === 'vi' ? [
    { label: 'Trang chủ', href: '/' },
    { label: 'Giới thiệu', href: '/#about' },
    { label: 'Tin tức', href: '/blog/' },
    { label: 'Liên hệ', href: '/#contact' },
  ] : [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#about' },
    { label: 'News', href: '/blog/' },
    { label: 'Contact', href: '/#contact' },
  ]

  function getActive(href: string) {
    if (href === '/' && isHome) return true
    if (href.startsWith('/blog') && isBlog) return true
    return false
  }

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <img src="/logo/logo_ESGreen_icon.png" alt="ESGreen" className={styles.logoIcon} />
          <span className={styles.logoText}>ESGreen</span>
        </a>

        <ul className={`${styles.navCenter} ${menuOpen ? styles.navOpen : ''}`}>
          {/* Regular links before "Giải pháp" */}
          {navLinks.slice(0, 2).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={getActive(link.href) ? styles.active : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}

          {/* "Giải pháp" dropdown */}
          <li className={styles.dropdown} ref={dropdownRef}>
            <button
              className={`${styles.dropdownToggle} ${isSolution ? styles.active : ''}`}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
            >
              {lang === 'vi' ? 'Giải pháp' : 'Solutions'}
              <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className={styles.dropdownArrow} style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'none' }}>
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {dropdownOpen && (
              <ul
                className={styles.dropdownMenu}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <li>
                  <a href="/#services" onClick={() => { setDropdownOpen(false); setMenuOpen(false) }}>
                    {lang === 'vi' ? 'Tổng quan giải pháp' : 'Solutions Overview'}
                  </a>
                </li>
                {solutions.map((s) => (
                  <li key={s.href}>
                    <a href={s.href} onClick={() => { setDropdownOpen(false); setMenuOpen(false) }}>
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Remaining links */}
          {navLinks.slice(2).map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={getActive(link.href) ? styles.active : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          {(() => {
            const isBlogPost = pathname.startsWith('/blog/') && pathname !== '/blog/'
            const noTranslation = isBlogPost && translationInfo?.hasTranslation === false
            return (
              <button
                className={`${styles.lang} ${lang === 'en' ? styles.langActive : ''} ${noTranslation ? styles.langDisabled : ''}`}
                onClick={() => { if (!noTranslation) setLang(lang === 'vi' ? 'en' : 'vi') }}
                disabled={noTranslation}
                title={noTranslation
                  ? (lang === 'vi' ? 'Chưa có bản tiếng Anh' : 'No Vietnamese version available')
                  : undefined}
              >
                {lang === 'vi' ? 'VN' : 'EN'}
              </button>
            )
          })()}
          <a
            href="https://ecotrack.esgreen.vn/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ecotrackBtn}
          >
            Hệ thống Ecotrack
          </a>
          <a href="/#contact" className={`${styles.cta} btn-shimmer`}>
            {lang === 'vi' ? 'Tư vấn ngay' : 'Consult Now'}
          </a>
          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}
