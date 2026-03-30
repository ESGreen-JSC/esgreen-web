import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tư vấn lộ trình Net Zero cho doanh nghiệp | ESGreen',
  description:
    'Dịch vụ tư vấn Net Zero từ ESGreen — đánh giá hiện trạng phát thải, xây dựng lộ trình giảm phát thải và đạt mục tiêu Net Zero theo tiêu chuẩn quốc tế. Phù hợp CBAM, ESG và cam kết quốc gia.',
  keywords: [
    'Net Zero',
    'lộ trình Net Zero',
    'tư vấn Net Zero',
    'giảm phát thải',
    'carbon neutral',
    'CBAM',
    'ESG',
    'khí nhà kính',
    'phát triển bền vững',
  ],
  openGraph: {
    title: 'Tư vấn lộ trình Net Zero cho doanh nghiệp | ESGreen',
    description:
      'Giải pháp giúp doanh nghiệp xây dựng chiến lược giảm phát thải và đạt mục tiêu Net Zero theo tiêu chuẩn quốc tế.',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'ESGreen',
  },
}

export default function NetZeroLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
