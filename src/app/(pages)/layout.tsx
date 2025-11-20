import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "노벨피디아",
  description: "소설 만화 리뷰 위키",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        {children}
      </body>
    </html>
  );
}
