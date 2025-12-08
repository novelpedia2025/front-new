import type { Metadata } from "next";
import "./globals.css";
import Header from "../nav/Header";
import Footer from "../nav/Footer";
import Toast from "../nav/Toast";
import { Layout } from "@/share";

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
        <Header />
        <Layout>
          {children}
        </Layout>
        <Footer />
        <Toast />
      </body>
    </html>
  );
}
