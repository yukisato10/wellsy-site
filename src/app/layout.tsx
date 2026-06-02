import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wellsy.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default: "Wellsy - AIで毎日の健康管理をシンプルに",
    template: "%s | Wellsy",
  },
  description:
    "WellsyはAIを活用した食事・体重・睡眠管理アプリです。写真を撮るだけで栄養解析、体重・睡眠をグラフで管理。グループで一緒に健康習慣を続けられます。",
  keywords: [
    "健康管理アプリ",
    "食事記録",
    "カロリー計算",
    "体重管理",
    "睡眠管理",
    "AI栄養解析",
    "ダイエット",
    "健康習慣",
    "グループ機能",
    "Wellsy",
  ],
  authors: [{ name: "Wellsy" }],
  creator: "Wellsy",
  publisher: "Wellsy",

  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: BASE_URL,
    siteName: "Wellsy",
    title: "Wellsy - AIで毎日の健康管理をシンプルに",
    description:
      "AIが食事・体重・睡眠をまとめて管理。写真を撮るだけで栄養解析。グループで健康習慣を続けられます。",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Wellsy - AI Health Management App",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Wellsy - AIで毎日の健康管理をシンプルに",
    description:
      "AIが食事・体重・睡眠をまとめて管理。写真を撮るだけで栄養解析。グループで健康習慣を続けられます。",
    images: ["/opengraph-image"],
    creator: "@wellsy_app",
    site: "@wellsy_app",
  },

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },

  alternates: {
    canonical: BASE_URL,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
