import styles from './Footer.module.css'
import { useLang } from '@/components/layout/Header'

export default function Footer() {
  const { lang } = useLang()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <img src="/logo/logo_ESGreen_icon.png" alt="ESGreen" className={styles.logoIcon} />
            <span className={styles.logoText}>ESGreen</span>
          </div>
          <p className={styles.slogan}>
            {lang === 'vi' ? 'Chuẩn hóa kiểm kê · Chuyển đổi bền vững' : 'Standardize · Transform · Sustain'}
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:contact@esgreen.vn" aria-label="Email">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>{lang === 'vi' ? 'Điều hướng' : 'Navigation'}</h4>
          <a href="/">{lang === 'vi' ? 'Trang chủ' : 'Home'}</a>
          <a href="/#about">{lang === 'vi' ? 'Về ESGreen' : 'About'}</a>
          <a href="/#services">{lang === 'vi' ? 'Giải pháp' : 'Solutions'}</a>
          <a href="/blog/">{lang === 'vi' ? 'Tin tức' : 'News'}</a>
          <a href="/#contact">{lang === 'vi' ? 'Liên hệ' : 'Contact'}</a>
        </div>

        <div className={styles.col}>
          <h4>{lang === 'vi' ? 'Liên hệ' : 'Contact'}</h4>
          <a href="mailto:contact@esgreen.vn">contact@esgreen.vn</a>
          <a href="tel:0865493186">0865 493 186</a>
          <span>{lang === 'vi' ? 'Tầng 8, toà nhà Diamond Flower' : '8th Floor, Diamond Flower Tower'}</span>
          <span>{lang === 'vi' ? '48 Lê Văn Lương, Phường Yên Hòa' : '48 Le Van Luong, Yen Hoa Ward'}</span>
          <span>{lang === 'vi' ? 'Thành phố Hà Nội, Việt Nam' : 'Hanoi, Vietnam'}</span>
          <span>{lang === 'vi' ? 'T2–T6: 8:30 – 17:30' : 'Mon–Fri: 8:30 – 17:30'}</span>
        </div>

        <div className={styles.newsletter}>
          <h4>{lang === 'vi' ? 'Nhận tin mới' : 'Newsletter'}</h4>
          <form className={styles.nlForm} onSubmit={e => e.preventDefault()}>
            <input type="email" placeholder={lang === 'vi' ? 'Email của bạn...' : 'Your email...'} />
            <button type="submit" aria-label={lang === 'vi' ? 'Đăng ký' : 'Subscribe'}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
          </form>
          <p className={styles.nlNote}>{lang === 'vi' ? 'Không spam · Hủy đăng ký bất cứ lúc nào' : 'No spam · Unsubscribe anytime'}</p>
        </div>
      </div>

      <div className={`container ${styles.footerBottom}`}>
        <span>© 2026 ESGreen JSC. All rights reserved.</span>
        <div>
          <a href="/terms/">{lang === 'vi' ? 'Điều khoản sử dụng' : 'Terms of Use'}</a>
          <a href="/privacy/">{lang === 'vi' ? 'Chính sách bảo mật' : 'Privacy Policy'}</a>
        </div>
      </div>
    </footer>
  )
}
