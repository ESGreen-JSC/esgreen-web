'use client'
import styles from '../legal.module.css'
import Header, { LangContext, useLang } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useState } from 'react'

function PrivacyContent() {
  const { lang } = useLang()
  const vi = lang === 'vi'

  return (
    <div className={styles.legal}>
      <div className="container">
        <h1>{vi ? 'Chính sách bảo mật' : 'Privacy Policy'}</h1>
        <p className={styles.updated}>{vi ? 'Cập nhật lần cuối: 20/03/2026' : 'Last updated: March 20, 2026'}</p>
        <div className={styles.content}>
          <p>{vi ? 'ESGreen ("chúng tôi") cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn. Chính sách này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ và bảo vệ thông tin khi bạn truy cập website esgreen.vn và sử dụng dịch vụ của chúng tôi, phù hợp với Nghị định 13/2023/NĐ-CP về bảo vệ dữ liệu cá nhân và các quy định pháp luật Việt Nam hiện hành.' : 'ESGreen ("we") is committed to protecting your privacy and personal data. This policy explains how we collect, use, store and protect information when you visit esgreen.vn and use our services, in compliance with Decree 13/2023/NĐ-CP on personal data protection and applicable Vietnamese laws.'}</p>

          <h2>{vi ? '1. Thông tin chúng tôi thu thập' : '1. Information We Collect'}</h2>
          <p>{vi ? 'Chúng tôi thu thập các loại thông tin sau:' : 'We collect the following types of information:'}</p>
          <p><strong>{vi ? 'a) Thông tin bạn cung cấp trực tiếp:' : 'a) Information you provide directly:'}</strong><br/>{vi ? 'Khi bạn điền form liên hệ, yêu cầu demo hoặc đăng ký dùng thử, chúng tôi thu thập: họ và tên, số điện thoại, email, tên công ty, và nội dung yêu cầu tư vấn.' : 'When you fill contact forms, request demos or register for trials, we collect: full name, phone number, email, company name, and consultation requests.'}</p>
          <p><strong>{vi ? 'b) Thông tin thu thập tự động:' : 'b) Automatically collected information:'}</strong><br/>{vi ? 'Khi bạn truy cập Website, chúng tôi có thể tự động thu thập: địa chỉ IP, loại trình duyệt, hệ điều hành, thời gian truy cập, trang đã xem, và nguồn giới thiệu (referrer). Thông tin này được thu thập qua cookies và công nghệ tương tự.' : 'When you visit the Website, we may automatically collect: IP address, browser type, operating system, access time, pages viewed, and referrer. This information is collected via cookies and similar technologies.'}</p>
          <p><strong>{vi ? 'c) Thông tin từ bên thứ ba:' : 'c) Third-party information:'}</strong><br/>{vi ? 'Chúng tôi có thể nhận thông tin từ các dịch vụ phân tích web (như Google Analytics) nhằm cải thiện trải nghiệm người dùng.' : 'We may receive information from web analytics services (such as Google Analytics) to improve user experience.'}</p>

          <h2>{vi ? '2. Mục đích sử dụng thông tin' : '2. Purpose of Use'}</h2>
          <p>{vi ? 'Chúng tôi sử dụng thông tin thu thập để:' : 'We use collected information to:'}</p>
          <ul>
            <li>{vi ? 'Phản hồi yêu cầu tư vấn, demo và dùng thử sản phẩm' : 'Respond to consultation, demo and trial requests'}</li>
            <li>{vi ? 'Cung cấp và cải thiện dịch vụ, sản phẩm của ESGreen' : 'Provide and improve ESGreen\'s services and products'}</li>
            <li>{vi ? 'Gửi thông tin về sản phẩm, dịch vụ, cập nhật pháp luật ESG (khi bạn đồng ý nhận)' : 'Send information about products, services, ESG legal updates (with your consent)'}</li>
            <li>{vi ? 'Phân tích và cải thiện hiệu suất Website' : 'Analyze and improve Website performance'}</li>
            <li>{vi ? 'Tuân thủ các yêu cầu pháp lý' : 'Comply with legal requirements'}</li>
          </ul>

          <h2>{vi ? '3. Chia sẻ thông tin' : '3. Information Sharing'}</h2>
          <p>{vi ? 'Chúng tôi KHÔNG bán, cho thuê hoặc trao đổi dữ liệu cá nhân của bạn cho bên thứ ba vì mục đích thương mại. Chúng tôi chỉ chia sẻ thông tin trong các trường hợp: (a) với sự đồng ý của bạn; (b) với các đối tác cung cấp dịch vụ kỹ thuật hỗ trợ vận hành Website (hosting, email, analytics), với cam kết bảo mật tương đương; (c) khi có yêu cầu từ cơ quan nhà nước có thẩm quyền theo quy định pháp luật.' : 'We DO NOT sell, rent or exchange your personal data to third parties for commercial purposes. We only share information when: (a) with your consent; (b) with technical service partners supporting Website operations (hosting, email, analytics), under equivalent confidentiality commitments; (c) when required by competent authorities under applicable law.'}</p>

          <h2>{vi ? '4. Cookies' : '4. Cookies'}</h2>
          <p>{vi ? 'Website sử dụng cookies để cải thiện trải nghiệm người dùng. Cookies là các tệp nhỏ được lưu trên thiết bị của bạn khi truy cập Website. Chúng tôi sử dụng: (a) Cookies cần thiết — đảm bảo Website hoạt động bình thường; (b) Cookies phân tích — giúp hiểu cách bạn sử dụng Website để cải thiện. Bạn có thể tắt cookies trong cài đặt trình duyệt, tuy nhiên một số tính năng Website có thể bị ảnh hưởng.' : 'The Website uses cookies to improve user experience. Cookies are small files stored on your device when visiting the Website. We use: (a) Essential cookies — ensuring normal Website operation; (b) Analytics cookies — helping understand Website usage for improvement. You can disable cookies in browser settings, though some Website features may be affected.'}</p>

          <h2>{vi ? '5. Bảo mật dữ liệu' : '5. Data Security'}</h2>
          <p>{vi ? 'Chúng tôi áp dụng các biện pháp kỹ thuật và tổ chức phù hợp để bảo vệ dữ liệu cá nhân khỏi truy cập trái phép, mất mát, thay đổi hoặc tiết lộ, bao gồm: mã hóa SSL/TLS cho toàn bộ Website, kiểm soát truy cập dựa trên vai trò, sao lưu dữ liệu định kỳ, và đào tạo nhân viên về bảo mật thông tin.' : 'We implement appropriate technical and organizational measures to protect personal data from unauthorized access, loss, alteration or disclosure, including: SSL/TLS encryption across the entire Website, role-based access controls, regular data backups, and staff information security training.'}</p>

          <h2>{vi ? '6. Thời gian lưu trữ' : '6. Data Retention'}</h2>
          <p>{vi ? 'Chúng tôi lưu trữ dữ liệu cá nhân trong thời gian cần thiết để thực hiện mục đích đã nêu hoặc theo yêu cầu pháp luật. Dữ liệu từ form liên hệ được lưu trữ tối đa 24 tháng kể từ lần tương tác cuối cùng, trừ khi bạn yêu cầu xóa sớm hơn hoặc pháp luật yêu cầu lưu trữ lâu hơn.' : 'We retain personal data for as long as necessary to fulfill the stated purposes or as required by law. Contact form data is retained for a maximum of 24 months from last interaction, unless you request earlier deletion or law requires longer retention.'}</p>

          <h2>{vi ? '7. Quyền của bạn' : '7. Your Rights'}</h2>
          <p>{vi ? 'Theo quy định pháp luật Việt Nam về bảo vệ dữ liệu cá nhân, bạn có quyền: (a) Được biết về việc thu thập và xử lý dữ liệu cá nhân; (b) Đồng ý hoặc không đồng ý cho việc xử lý dữ liệu; (c) Truy cập, chỉnh sửa dữ liệu cá nhân của mình; (d) Yêu cầu xóa hoặc hạn chế xử lý dữ liệu; (e) Rút lại sự đồng ý đã cho trước đó; (f) Khiếu nại với cơ quan có thẩm quyền. Để thực hiện các quyền trên, vui lòng liên hệ chúng tôi qua email contact@esgreen.vn.' : 'Under Vietnamese personal data protection law, you have the right to: (a) Be informed about personal data collection and processing; (b) Consent or refuse data processing; (c) Access and correct your personal data; (d) Request deletion or restriction of processing; (e) Withdraw previously given consent; (f) Complain to competent authorities. To exercise these rights, please contact us at contact@esgreen.vn.'}</p>

          <h2>{vi ? '8. Thay đổi chính sách' : '8. Policy Changes'}</h2>
          <p>{vi ? 'Chúng tôi có thể cập nhật Chính sách bảo mật này theo thời gian. Mọi thay đổi sẽ được đăng tải trên trang này kèm ngày cập nhật. Chúng tôi khuyến khích bạn kiểm tra định kỳ để nắm được các thay đổi.' : 'We may update this Privacy Policy from time to time. Changes will be posted on this page with the update date. We encourage you to review periodically to stay informed of changes.'}</p>

          <h2>{vi ? '9. Liên hệ' : '9. Contact'}</h2>
          <p className={styles.contact}>{vi ? `Mọi thắc mắc về Chính sách bảo mật, vui lòng liên hệ:\nCông ty cổ phần ESGreen\nĐịa chỉ: Tầng 8, Diamond Flower, 48 Lê Văn Lương, Hà Nội\nEmail: contact@esgreen.vn | Điện thoại: 0856 357 968` : `For any questions regarding this Privacy Policy, please contact:\nESGreen JSC\nAddress: 8th Floor, Diamond Flower, 48 Le Van Luong, Hanoi\nEmail: contact@esgreen.vn | Phone: 0856 357 968`}</p>
        </div>
      </div>
    </div>
  )
}

export default function PrivacyPage() {
  const [lang, setLang] = useState('vi')
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />
      <PrivacyContent />
      <Footer />
    </LangContext.Provider>
  )
}
