// #1-1. Styling: 전역 CSS 적용
import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts';


export default function RootLayout({children,}: {children: React.ReactNode; }) {
  return (
    <html lang="en">
      {/* #2-1-2 body 태그에 inter 폰트 적용*/}
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
