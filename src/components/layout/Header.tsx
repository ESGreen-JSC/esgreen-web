'use client'
import { useState, useEffect, createContext, useContext } from 'react'
import styles from './Header.module.css'

// Language context
export const LangContext = createContext<{ lang: string; setLang: (l: string) => void }>({ lang: 'vi', setLang: () => {} })
export function useLang() { return useContext(LangContext) }

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { lang, setLang } = useLang()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 72)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = lang === 'vi' ? [
    { label: 'Trang chủ', href: '/', active: true },
    { label: 'Giới thiệu', href: '/#about' },
    { label: 'Giải pháp', href: '/#services' },
    { label: 'Tin tức', href: '/blog/' },
    { label: 'Liên hệ', href: '/#contact' },
  ] : [
    { label: 'Home', href: '/', active: true },
    { label: 'About', href: '/#about' },
    { label: 'Solutions', href: '/#services' },
    { label: 'News', href: '/blog/' },
    { label: 'Contact', href: '/#contact' },
  ]

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <a href="/" className={styles.logo}>
          <img src="/logo/logo_ESGreen_icon.png" alt="ESGreen" className={styles.logoIcon} />
          <span className={styles.logoText}>ESGreen</span>
        </a>

        <ul className={`${styles.navCenter} ${menuOpen ? styles.navOpen : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={link.active ? styles.active : ''}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navRight}>
          <button
            className={`${styles.lang} ${lang === 'en' ? styles.langActive : ''}`}
            onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
          >
            {lang === 'vi' ? 'VN' : 'EN'}
          </button>
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
