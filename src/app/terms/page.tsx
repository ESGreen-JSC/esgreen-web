'use client'
import styles from '../legal.module.css'
import Header, { LangContext, useLang } from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { useState } from 'react'

function TermsContent() {
  const { lang } = useLang()
  const vi = lang === 'vi'

  return (
    <div className={styles.legal}>
      <div className="container">
        <h1>{vi ? 'Điều khoản sử dụng' : 'Terms of Service'}</h1>
        <p className={styles.updated}>{vi ? 'Cập nhật lần cuối: 20/03/2026' : 'Last updated: March 20, 2026'}</p>
        <div className={styles.content}>
          <h2>{vi ? '1. Giới thiệu' : '1. Introduction'}</h2>
          <p>{vi ? 'Chào mừng bạn đến với website esgreen.vn ("Website") thuộc Công ty cổ phần ESGreen ("ESGreen", "chúng tôi"). Bằng việc truy cập và sử dụng Website, bạn đồng ý tuân thủ các điều khoản và điều kiện dưới đây. Nếu không đồng ý với bất kỳ điều khoản nào, vui lòng không tiếp tục sử dụng Website.' : 'Welcome to esgreen.vn ("Website") operated by ESGreen JSC ("ESGreen", "we", "us"). By accessing and using this Website, you agree to comply with the following terms and conditions. If you do not agree with any terms, please discontinue use of the Website.'}</p>

          <h2>{vi ? '2. Quyền sở hữu trí tuệ' : '2. Intellectual Property'}</h2>
          <p>{vi ? 'Toàn bộ nội dung trên Website — bao gồm nhưng không giới hạn ở logo, văn bản, hình ảnh, đồ họa, giao diện, mã nguồn, phần mềm và tài liệu — là tài sản trí tuệ của ESGreen hoặc các bên cấp phép, được bảo hộ theo Luật Sở hữu trí tuệ Việt Nam và các công ước quốc tế liên quan. Nghiêm cấm sao chép, phân phối, chỉnh sửa hoặc sử dụng cho mục đích thương mại mà không có sự đồng ý bằng văn bản của ESGreen.' : 'All content on the Website — including but not limited to logos, text, images, graphics, interface, source code, software and documents — is the intellectual property of ESGreen or its licensors, protected under Vietnam\'s Intellectual Property Law and applicable international conventions. Reproduction, distribution, modification or commercial use without ESGreen\'s written consent is prohibited.'}</p>

          <h2>{vi ? '3. Sử dụng Website' : '3. Use of Website'}</h2>
          <p>{vi ? 'Bạn cam kết sử dụng Website cho mục đích hợp pháp và phù hợp với các điều khoản này. Bạn không được: (a) sử dụng Website để truyền tải nội dung vi phạm pháp luật, xâm phạm quyền của bên thứ ba; (b) can thiệp vào hoạt động bình thường của Website hoặc cơ sở hạ tầng kỹ thuật; (c) thu thập dữ liệu từ Website bằng phương pháp tự động mà không được phép; (d) mạo danh hoặc cung cấp thông tin sai lệch khi sử dụng các dịch vụ trên Website.' : 'You agree to use the Website for lawful purposes consistent with these terms. You shall not: (a) use the Website to transmit content that violates laws or infringes third-party rights; (b) interfere with normal Website operations or technical infrastructure; (c) collect data from the Website through unauthorized automated means; (d) impersonate or provide false information when using Website services.'}</p>

          <h2>{vi ? '4. Dịch vụ và sản phẩm' : '4. Services and Products'}</h2>
          <p>{vi ? 'Website cung cấp thông tin về các sản phẩm và dịch vụ của ESGreen bao gồm phần mềm kiểm kê khí nhà kính, chấm điểm ESG và tư vấn Net Zero. Thông tin trên Website mang tính chất giới thiệu và có thể thay đổi mà không cần thông báo trước. Việc sử dụng thực tế các sản phẩm và dịch vụ sẽ được điều chỉnh bởi hợp đồng riêng giữa ESGreen và khách hàng.' : 'The Website provides information about ESGreen\'s products and services including GHG inventory software, ESG scoring and Net Zero consulting. Information on the Website is for reference purposes and may change without prior notice. Actual use of products and services will be governed by separate agreements between ESGreen and clients.'}</p>

          <h2>{vi ? '5. Tài liệu tải về' : '5. Downloadable Documents'}</h2>
          <p>{vi ? 'Website cung cấp các tài liệu để tải về bao gồm brochure sản phẩm và văn bản pháp lý. Tài liệu brochure thuộc quyền sở hữu của ESGreen. Các văn bản pháp lý được đăng tải nhằm mục đích tham khảo; ESGreen không chịu trách nhiệm về tính cập nhật của văn bản pháp lý — người dùng nên kiểm tra với nguồn chính thức từ cơ quan ban hành.' : 'The Website provides downloadable documents including product brochures and legal documents. Brochures are ESGreen\'s property. Legal documents are posted for reference purposes; ESGreen is not responsible for the currency of legal documents — users should verify with official sources from issuing authorities.'}</p>

          <h2>{vi ? '6. Giới hạn trách nhiệm' : '6. Limitation of Liability'}</h2>
          <p>{vi ? 'Website được cung cấp trên cơ sở "nguyên trạng". ESGreen nỗ lực đảm bảo thông tin chính xác nhưng không bảo đảm tính đầy đủ, kịp thời hay phù hợp cho mục đích cụ thể. ESGreen không chịu trách nhiệm cho bất kỳ thiệt hại trực tiếp, gián tiếp, ngẫu nhiên hay hệ quả phát sinh từ việc sử dụng hoặc không thể sử dụng Website, trong phạm vi pháp luật cho phép.' : 'The Website is provided on an "as is" basis. ESGreen endeavors to ensure accuracy but does not guarantee completeness, timeliness or fitness for particular purposes. ESGreen shall not be liable for any direct, indirect, incidental or consequential damages arising from use or inability to use the Website, to the extent permitted by law.'}</p>

          <h2>{vi ? '7. Liên kết bên ngoài' : '7. External Links'}</h2>
          <p>{vi ? 'Website có thể chứa liên kết đến các website của bên thứ ba (bao gồm website đối tác VNEEC và GreenCIC). ESGreen không kiểm soát và không chịu trách nhiệm về nội dung, chính sách bảo mật hoặc hoạt động của các website bên ngoài.' : 'The Website may contain links to third-party websites (including partner websites VNEEC and GreenCIC). ESGreen does not control and is not responsible for the content, privacy policies or practices of external websites.'}</p>

          <h2>{vi ? '8. Luật áp dụng và giải quyết tranh chấp' : '8. Governing Law and Dispute Resolution'}</h2>
          <p>{vi ? 'Các điều khoản này được điều chỉnh bởi pháp luật Việt Nam. Mọi tranh chấp phát sinh sẽ được giải quyết thông qua thương lượng thiện chí. Trường hợp không đạt được thỏa thuận, tranh chấp sẽ được đưa ra Tòa án nhân dân có thẩm quyền tại Hà Nội.' : 'These terms are governed by Vietnamese law. Any disputes shall be resolved through good faith negotiation. If no agreement is reached, disputes shall be submitted to the competent People\'s Court in Hanoi.'}</p>

          <h2>{vi ? '9. Thay đổi điều khoản' : '9. Changes to Terms'}</h2>
          <p>{vi ? 'ESGreen có quyền cập nhật các điều khoản này bất kỳ lúc nào. Phiên bản mới sẽ có hiệu lực ngay khi đăng tải trên Website. Việc bạn tiếp tục sử dụng Website sau khi thay đổi đồng nghĩa với việc chấp nhận các điều khoản mới.' : 'ESGreen reserves the right to update these terms at any time. Updated versions take effect immediately upon posting on the Website. Continued use of the Website after changes constitutes acceptance of the new terms.'}</p>

          <h2>{vi ? '10. Liên hệ' : '10. Contact'}</h2>
          <p className={styles.contact}>{vi ? `Mọi thắc mắc về Điều khoản sử dụng, vui lòng liên hệ:\nCông ty cổ phần ESGreen\nĐịa chỉ: Tầng 8, Diamond Flower, 48 Lê Văn Lương, Hà Nội\nEmail: contact@esgreen.vn | Điện thoại: 0865 493 186` : `For any questions regarding these Terms of Service, please contact:\nESGreen JSC\nAddress: 8th Floor, Diamond Flower, 48 Le Van Luong, Hanoi\nEmail: contact@esgreen.vn | Phone: 0865 493 186`}</p>
        </div>
      </div>
    </div>
  )
}

export default function TermsPage() {
  const [lang, setLang] = useState('vi')
  return (
    <LangContext.Provider value={{ lang, setLang }}>
      <Header />
      <TermsContent />
      <Footer />
    </LangContext.Provider>
  )
}
