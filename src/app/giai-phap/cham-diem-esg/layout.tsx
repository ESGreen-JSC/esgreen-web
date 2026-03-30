import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phần mềm chấm điểm ESG cho doanh nghiệp | ESGreen',
  description:
    'Nền tảng chấm điểm ESG từ ESGreen — đánh giá Environmental, Social, Governance theo tiêu chuẩn quốc tế. Thu thập dữ liệu, tự động chấm điểm, theo dõi cải thiện và xuất báo cáo ESG.',
  keywords: [
    'chấm điểm ESG',
    'ESG scoring',
    'báo cáo ESG',
    'ESG reporting',
    'Environmental Social Governance',
    'đánh giá ESG',
    'phần mềm ESG',
    'kiểm kê khí nhà kính',
    'CBAM',
  ],
  openGraph: {
    title: 'Phần mềm chấm điểm ESG cho doanh nghiệp | ESGreen',
    description:
      'Giải pháp giúp doanh nghiệp đánh giá, theo dõi và cải thiện hiệu suất ESG theo tiêu chuẩn quốc tế và yêu cầu của nhà đầu tư.',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'ESGreen',
  },
}

export default function EsgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
