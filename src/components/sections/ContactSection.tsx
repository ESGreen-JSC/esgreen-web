import { useState } from 'react'
import styles from './ContactSection.module.css'
import { useLang } from '@/components/layout/Header'

export default function ContactSection() {
  const { lang } = useLang()
  const [form, setForm] = useState({ name: '', phone: '', email: '', company: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle')

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(prev => ({ ...prev, [k]: e.target.value }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'contact',
          'Họ và tên': form.name,
          'Số điện thoại': form.phone,
          'Email': form.email,
          'Công ty': form.company,
          'Nội dung': form.message,
        }),
      })
      if (res.ok) {
        setStatus('ok')
        setForm({ name: '', phone: '', email: '', company: '', message: '' })
      } else {
        setStatus('err')
      }
    } catch { setStatus('err') }
  }

  return (
    <section id="contact" className={styles.contact}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.formWrap} data-aos="fade-right" data-aos-duration="800">
          <h2 className={styles.h2}>{lang === 'vi' ? 'Bắt đầu ngay hôm nay' : 'Get Started Today'}</h2>
          <p className={styles.sub}>
            {lang === 'vi' ? 'Đội ngũ sẽ phản hồi trong vòng 24 giờ làm việc.' : 'Our team will respond within 24 business hours.'}
          </p>
          {status === 'ok' ? (
            <div style={{ padding: '40px 0', textAlign: 'center' }}>
              <p style={{ fontSize: 48, margin: 0 }}>✅</p>
              <h3 style={{ color: 'var(--forest)', margin: '12px 0 8px' }}>
                {lang === 'vi' ? 'Gửi thành công!' : 'Submitted!'}
              </h3>
              <p style={{ color: '#666' }}>
                {lang === 'vi' ? 'Đội ngũ ESGreen sẽ phản hồi trong 24 giờ làm việc.' : 'ESGreen team will respond within 24 business hours.'}
              </p>
              <button onClick={() => setStatus('idle')} className={styles.submit} style={{ marginTop: 16 }}>
                {lang === 'vi' ? 'Gửi yêu cầu khác' : 'Send another request'}
              </button>
            </div>
          ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>{lang === 'vi' ? 'Họ và tên *' : 'Full Name *'}</label>
                <input type="text" placeholder={lang === 'vi' ? 'Nguyễn Văn A' : 'John Doe'} required value={form.name} onChange={set('name')} />
              </div>
              <div className={styles.group}>
                <label>{lang === 'vi' ? 'Số điện thoại *' : 'Phone *'}</label>
                <input type="tel" placeholder="0912 345 678" required value={form.phone} onChange={set('phone')} />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.group}>
                <label>Email *</label>
                <input type="email" placeholder="email@company.com" required value={form.email} onChange={set('email')} />
              </div>
              <div className={styles.group}>
                <label>{lang === 'vi' ? 'Công ty' : 'Company'}</label>
                <input type="text" placeholder={lang === 'vi' ? 'Tên công ty' : 'Company name'} value={form.company} onChange={set('company')} />
              </div>
            </div>
            <div className={`${styles.group} ${styles.formGroup_grow}`}>
              <label>{lang === 'vi' ? 'Nội dung *' : 'Message *'}</label>
              <textarea placeholder={lang === 'vi' ? 'Mô tả nhu cầu tư vấn của bạn...' : 'Describe your consulting needs...'} required value={form.message} onChange={set('message')} />
            </div>
            {status === 'err' && <p style={{ color: '#e53e3e', marginBottom: 8 }}>{lang === 'vi' ? 'Có lỗi, vui lòng thử lại.' : 'Error, please try again.'}</p>}
            <button type="submit" disabled={status === 'sending'} className={`${styles.submit} btn-shimmer`}>
              {status === 'sending'
                ? (lang === 'vi' ? 'Đang gửi...' : 'Sending...')
                : (lang === 'vi' ? 'Gửi yêu cầu tư vấn' : 'Submit Consultation Request')}
            </button>
            <div className={styles.micro}>
              <span>{lang === 'vi' ? '🔒 Bảo mật thông tin' : '🔒 Secure Info'}</span>
              <span>{lang === 'vi' ? '⏱ Phản hồi trong 24h' : '⏱ Response in 24h'}</span>
            </div>
          </form>
          )}
        </div>
        <div data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6965668!2d105.7937!3d21.0053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab4c1d8e4f3d%3A0x1ff1b8c3a46b0e3a!2sDiamond%20Flower%20Tower!5e0!3m2!1svi!2svn!4v1710000000000!5m2!1svi!2svn"
              width="100%"
              height="280"
              style={{ border: 0, borderRadius: 20 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ESGreen - Diamond Flower Tower"
            /></div>
          <div className={styles.info}>
            <div className={styles.infoRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <span>contact@esgreen.vn</span>
            </div>
            <div className={styles.infoRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>0856 357 968</span>
            </div>
            <div className={styles.infoRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>{lang === 'vi' ? 'Tầng 8, toà nhà Diamond Flower, 48 Lê Văn Lương, Phường Yên Hòa, Thành phố Hà Nội, Việt Nam' : '8th Floor, Diamond Flower Tower, 48 Le Van Luong, Yen Hoa Ward, Hanoi, Vietnam'}</span>
            </div>
            <div className={styles.infoRow}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              <span>{lang === 'vi' ? 'Thứ 2 – Thứ 6: 9:00 – 18:00' : 'Mon – Fri: 9:00 – 18:00'}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
