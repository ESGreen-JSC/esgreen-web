export const metadata = {
  title: 'ESGreen CMS Studio',
  description: 'Quản lý nội dung website ESGreen',
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  )
}
