import Link from "next/link";
import type { Locale } from "@/lib/i18n";

const WellsyLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

const footerI18n: Record<
  Locale,
  { tagline: string; legal: string; contact: string; deleteAccount: string; commercialTransactions: string }
> = {
  ja: {
    tagline: "AIを活用した食事・体重・睡眠管理アプリ。毎日の健康管理をシンプルに。",
    legal: "リーガル",
    contact: "お問い合わせ",
    deleteAccount: "アカウント削除",
    commercialTransactions: "特定商取引法に基づく表記",
  },
  en: {
    tagline: "AI-powered food, weight & sleep tracker. Simplify your daily health.",
    legal: "Legal",
    contact: "Contact",
    deleteAccount: "Delete Account",
    commercialTransactions: "Commercial Transactions",
  },
  de: {
    tagline: "KI-gestützte Ess-, Gewichts- und Schlaf-App. Gesundheit einfach machen.",
    legal: "Rechtliches",
    contact: "Kontakt",
    deleteAccount: "Konto löschen",
    commercialTransactions: "Handelsangaben",
  },
  fr: {
    tagline: "App de suivi alimentaire, poids et sommeil par IA. Simplifiez votre santé.",
    legal: "Légal",
    contact: "Contact",
    deleteAccount: "Supprimer le compte",
    commercialTransactions: "Mentions commerciales",
  },
  ko: {
    tagline: "AI 기반 식사·체중·수면 관리 앱. 매일의 건강 관리를 간편하게.",
    legal: "법적 정보",
    contact: "문의",
    deleteAccount: "계정 삭제",
    commercialTransactions: "전자상거래 고지",
  },
};

type Props = { locale: Locale };

export default function Footer({ locale }: Props) {
  const t = footerI18n[locale];

  const legalLinks = [
    { href: `/${locale}/terms`, label: locale === "ja" ? "利用規約" : locale === "en" ? "Terms of Service" : locale === "de" ? "Nutzungsbedingungen" : locale === "fr" ? "CGU" : "이용약관" },
    { href: `/${locale}/privacy`, label: locale === "ja" ? "プライバシーポリシー" : locale === "en" ? "Privacy Policy" : locale === "de" ? "Datenschutzerklärung" : locale === "fr" ? "Politique de confidentialité" : "개인정보처리방침" },
    { href: `/${locale}/support`, label: locale === "ja" ? "サポート" : "Support" },
    { href: `/${locale}/delete-account`, label: t.deleteAccount },
    { href: `/${locale}/legal/commercial-transactions`, label: t.commercialTransactions },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link href={`/${locale}`} className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-700 transition-colors">
                <WellsyLogo />
              </div>
              <span className="text-lg font-bold text-gray-900">Wellsy</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 max-w-xs leading-relaxed">{t.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">{t.legal}</p>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Wellsy. All rights reserved.
          </p>
          <p className="text-xs text-gray-400">
            {t.contact}:{" "}
            <a href="mailto:wellsy.support@gmail.com" className="hover:text-green-600 transition-colors">
              wellsy.support@gmail.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
