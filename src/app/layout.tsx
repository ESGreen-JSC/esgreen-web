import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ESGreen — Chuẩn hóa kiểm kê, Chuyển đổi bền vững",
  description:
    "Nền tảng ESG công nghệ số hàng đầu Việt Nam. Phần mềm kiểm kê KNK, Chấm điểm ESG tự động, Tư vấn lộ trình Net Zero.",
  keywords: [
    "ESG",
    "kiểm kê khí nhà kính",
    "KNK",
    "Net Zero",
    "ESG Rating",
    "phát triển bền vững",
    "ESGreen",
  ],
  openGraph: {
    title: "ESGreen — Chuẩn hóa kiểm kê, Chuyển đổi bền vững",
    description:
      "Nền tảng ESG công nghệ số hàng đầu Việt Nam. Phần mềm kiểm kê KNK, Chấm điểm ESG tự động, Tư vấn lộ trình Net Zero.",
    type: "website",
    locale: "vi_VN",
    siteName: "ESGreen",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={nunitoSans.variable} suppressHydrationWarning>
      <head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
