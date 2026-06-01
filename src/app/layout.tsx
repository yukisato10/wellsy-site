import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Wellsy - AIで毎日の健康管理をシンプルに",
    template: "%s | Wellsy",
  },
  description:
    "WellsyはAIを活用した食事・体重・睡眠管理アプリです。毎日の健康習慣をシンプルかつ継続的にサポートします。",
  keywords: ["健康管理", "食事記録", "体重管理", "睡眠", "AI", "ヘルスケア"],
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "Wellsy",
    title: "Wellsy - AIで毎日の健康管理をシンプルに",
    description:
      "WellsyはAIを活用した食事・体重・睡眠管理アプリです。毎日の健康習慣をシンプルかつ継続的にサポートします。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
