import type { Metadata } from "next";
import Link from "next/link";
import { isValidLocale, BASE_URL, buildAlternates, type Locale } from "@/lib/i18n";
import { notFound } from "next/navigation";
import PhoneMockup from "@/components/PhoneMockup";

type Props = { params: Promise<{ locale: string }> };

const homeI18n: Record<
  Locale,
  {
    badge: string;
    h1a: string;
    h1b: string;
    sub: string;
    appStore: string;
    googlePlay: string;
    downloadOn: string;
    getItOn: string;
    rating: string;
    downloads: string;
    free: string;
    featuresTitle: string;
    featuresSubtitle: string;
    ctaTitle: string;
    ctaSub: string;
  }
> = {
  ja: {
    badge: "AI Health App",
    h1a: "AI健康管理を、",
    h1b: "もっとシンプルに。",
    sub: "食事・体重・睡眠をAIがまとめて管理。写真1枚で栄養解析、グループで続けられる新しい健康習慣アプリ。",
    appStore: "App Store",
    googlePlay: "Google Play",
    downloadOn: "Download on the",
    getItOn: "GET IT ON",
    rating: "App Store 評価",
    downloads: "ダウンロード",
    free: "無料",
    featuresTitle: "Wellsyでできること",
    featuresSubtitle: "食事・体重・睡眠をひとつのアプリで完結。",
    ctaTitle: "今日から健康習慣をスタート",
    ctaSub: "Wellsyは基本機能が完全無料。",
  },
  en: {
    badge: "AI Health App",
    h1a: "AI health tracking,",
    h1b: "made simple.",
    sub: "Track food, weight & sleep with AI. Analyze meals with one photo. Stay motivated with group challenges.",
    appStore: "App Store",
    googlePlay: "Google Play",
    downloadOn: "Download on the",
    getItOn: "GET IT ON",
    rating: "App Store Rating",
    downloads: "Downloads",
    free: "Free",
    featuresTitle: "What Wellsy can do",
    featuresSubtitle: "Food, weight & sleep — all in one app.",
    ctaTitle: "Start your health journey today",
    ctaSub: "Wellsy core features are completely free.",
  },
  de: {
    badge: "KI-Gesundheits-App",
    h1a: "KI-Gesundheitstracking,",
    h1b: "ganz einfach.",
    sub: "Ernährung, Gewicht und Schlaf mit KI verfolgen. Mahlzeiten mit einem Foto analysieren.",
    appStore: "App Store",
    googlePlay: "Google Play",
    downloadOn: "Herunterladen bei",
    getItOn: "ERHÄLTLICH BEI",
    rating: "App-Store-Bewertung",
    downloads: "Downloads",
    free: "Kostenlos",
    featuresTitle: "Was Wellsy kann",
    featuresSubtitle: "Ernährung, Gewicht und Schlaf – alles in einer App.",
    ctaTitle: "Starten Sie heute Ihre Gesundheitsreise",
    ctaSub: "Wellsy-Kernfunktionen sind völlig kostenlos.",
  },
  fr: {
    badge: "App Santé IA",
    h1a: "Suivi santé par IA,",
    h1b: "simplifié.",
    sub: "Suivez alimentation, poids et sommeil grâce à l'IA. Analysez vos repas en une photo.",
    appStore: "App Store",
    googlePlay: "Google Play",
    downloadOn: "Télécharger sur",
    getItOn: "DISPONIBLE SUR",
    rating: "Note App Store",
    downloads: "Téléchargements",
    free: "Gratuit",
    featuresTitle: "Ce que Wellsy peut faire",
    featuresSubtitle: "Alimentation, poids et sommeil – tout en une app.",
    ctaTitle: "Commencez votre parcours santé aujourd'hui",
    ctaSub: "Les fonctionnalités de base de Wellsy sont gratuites.",
  },
  ko: {
    badge: "AI 건강 앱",
    h1a: "AI 건강 관리,",
    h1b: "더 간편하게.",
    sub: "식사·체중·수면을 AI가 관리합니다. 사진 한 장으로 영양 분석, 그룹으로 건강 습관 유지.",
    appStore: "App Store",
    googlePlay: "Google Play",
    downloadOn: "다운로드",
    getItOn: "다운로드",
    rating: "App Store 평점",
    downloads: "다운로드",
    free: "무료",
    featuresTitle: "Wellsy로 할 수 있는 것",
    featuresSubtitle: "식사·체중·수면을 하나의 앱으로.",
    ctaTitle: "오늘부터 건강 습관 시작",
    ctaSub: "Wellsy 기본 기능은 완전 무료입니다.",
  },
};

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#";
const GOOGLE_PLAY_URL = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? "#";

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const t = homeI18n[locale as Locale];
  return {
    title: `Wellsy — ${t.h1a} ${t.h1b}`,
    description: t.sub,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: buildAlternates(""),
    },
  };
}

export default async function LocaleHomePage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const t = homeI18n[locale as Locale];
  const l = locale as Locale;

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-green-100/40 blur-3xl" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="text-center lg:text-left">
              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-5 tracking-wider uppercase">
                {t.badge}
              </span>
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
                {t.h1a}<br />
                <span className="text-green-600">{t.h1b}</span>
              </h1>
              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                {t.sub}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <a
                  href={APP_STORE_URL}
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 active:scale-95 transition-all shadow-lg shadow-black/10 w-full sm:w-auto justify-center"
                >
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300 leading-none mb-0.5">{t.downloadOn}</div>
                    <div className="text-base font-bold leading-none">{t.appStore}</div>
                  </div>
                </a>
                <a
                  href={GOOGLE_PLAY_URL}
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 active:scale-95 transition-all shadow-lg shadow-black/10 w-full sm:w-auto justify-center"
                >
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.56 1.16C.21 1.51 0 2.08 0 2.82v18.37c0 .74.21 1.31.57 1.65l.09.08 10.3-10.3v-.22L.65 1.08l-.09.08zM20.33 10.53l-2.89-1.67-3.07 3.07 3.07 3.06 2.91-1.68c.83-.48.83-1.26-.02-1.78zM3.18.25L15.78 7.5l-2.72 2.73L2.19.45C2.5.01 2.87-.12 3.18.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300 leading-none mb-0.5">{t.getItOn}</div>
                    <div className="text-base font-bold leading-none">{t.googlePlay}</div>
                  </div>
                </a>
              </div>
              <p className="text-sm text-gray-400">
                ⭐⭐⭐⭐⭐ · {t.downloads} 50,000+ · {t.free}
              </p>
            </div>
            <div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* Legal links */}
      <section className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-gray-400">
            {[
              { href: `/${l}/terms`, label: l === "ja" ? "利用規約" : l === "ko" ? "이용약관" : l === "de" ? "Nutzungsbedingungen" : l === "fr" ? "CGU" : "Terms" },
              { href: `/${l}/privacy`, label: l === "ja" ? "プライバシーポリシー" : l === "ko" ? "개인정보처리방침" : l === "de" ? "Datenschutz" : l === "fr" ? "Confidentialité" : "Privacy" },
              { href: `/${l}/support`, label: "Support" },
              { href: `/${l}/delete-account`, label: l === "ja" ? "アカウント削除" : l === "ko" ? "계정 삭제" : l === "de" ? "Konto löschen" : l === "fr" ? "Supprimer le compte" : "Delete Account" },
            ].map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-green-600 transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
