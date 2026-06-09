import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wellsy.app";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Wellsy – AI Health App",
    template: "%s | Wellsy",
  },
  description:
    "Wellsy is an AI-powered food, weight & sleep management app. Analyze meals with one photo. Track weight and sleep effortlessly.",
  openGraph: {
    type: "website",
    siteName: "Wellsy",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Wellsy" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/opengraph-image"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
