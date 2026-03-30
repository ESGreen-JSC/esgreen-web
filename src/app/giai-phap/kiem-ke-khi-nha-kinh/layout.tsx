import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Phần mềm kiểm kê khí nhà kính (GHG Inventory) cho doanh nghiệp Việt Nam | ESGreen',
  description:
    'Phần mềm kiểm kê khí nhà kính ESGreen — tính toán phát thải CO2 theo GHG Protocol, tuân thủ Nghị định 06/2022/NĐ-CP, hỗ trợ ESG reporting. Tự động phân loại Scope 1, 2, 3.',
  keywords: [
    'kiểm kê khí nhà kính',
    'GHG Inventory',
    'phát thải CO2',
    'Nghị định 06/2022',
    'ESG reporting',
    'phần mềm kiểm kê KNK',
    'GHG Protocol',
    'ISO 14064',
    'CBAM',
    'Net Zero',
  ],
  openGraph: {
    title: 'Phần mềm kiểm kê khí nhà kính (GHG Inventory) | ESGreen',
    description:
      'Nền tảng kiểm kê khí nhà kính cho doanh nghiệp Việt Nam. Tự động tính toán phát thải CO2, phân loại Scope 1-2-3, xuất báo cáo đúng chuẩn Nghị định 06/2022.',
    type: 'website',
    locale: 'vi_VN',
    siteName: 'ESGreen',
  },
}

export default function GhgLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
