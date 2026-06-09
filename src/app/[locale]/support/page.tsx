import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isValidLocale, BASE_URL, buildAlternates, type Locale } from "@/lib/i18n";
import { getSupportContent } from "@/lib/content";

type Props = { params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return [
    { locale: "ja" }, { locale: "en" }, { locale: "de" },
    { locale: "fr" }, { locale: "ko" },
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!isValidLocale(locale)) return {};
  const content = getSupportContent(locale as Locale);
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/support`,
      languages: buildAlternates("/support"),
    },
  };
}

export default async function SupportPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const content = getSupportContent(locale as Locale);
  const l = locale as Locale;

  const relatedLinks = [
    { href: `/${l}/delete-account`, label: content.categories[0]?.faqs[0] ? content.categories.find(c => c.id === "account")?.label ?? "Account" : "Account" },
    { href: `/${l}/terms`, label: l === "ja" ? "利用規約" : l === "ko" ? "이용약관" : l === "de" ? "Nutzungsbedingungen" : l === "fr" ? "CGU" : "Terms" },
    { href: `/${l}/privacy`, label: l === "ja" ? "プライバシーポリシー" : l === "ko" ? "개인정보처리방침" : l === "de" ? "Datenschutz" : l === "fr" ? "Confidentialité" : "Privacy" },
    { href: `/${l}/legal/commercial-transactions`, label: l === "ja" ? "特定商取引法に基づく表記" : "Commercial Transactions" },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{content.title}</h1>
        <p className="mt-4 text-gray-500 text-base max-w-md mx-auto leading-relaxed">{content.description}</p>
      </div>

      {/* Contact */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <p className="font-semibold text-gray-900 text-sm mb-1">{l === "ja" ? "メールでのお問い合わせ" : l === "ko" ? "이메일 문의" : l === "de" ? "E-Mail-Anfrage" : l === "fr" ? "Contact par e-mail" : "Contact by Email"}</p>
          <p className="text-xs text-gray-500 mb-3">{content.responseTime}</p>
          <a href={`mailto:${content.contactEmail}`} className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors break-all">
            {content.contactEmail}
          </a>
          {content.noReplyNote && (
            <p className="text-xs text-gray-400 mt-2">{content.noReplyNote}</p>
          )}
        </div>
        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
          <p className="font-semibold text-gray-900 text-sm mb-1">{l === "ja" ? "対応時間" : l === "ko" ? "대응 시간" : l === "de" ? "Reaktionszeit" : l === "fr" ? "Horaires" : "Hours"}</p>
          <p className="text-sm text-gray-500">{content.contactHours}</p>
        </div>
      </div>

      {/* FAQ */}
      <h2 className="text-2xl font-bold text-gray-900 mb-8">FAQ</h2>
      <div className="flex flex-col gap-10">
        {content.categories.map((cat) => (
          <section key={cat.id}>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl" aria-hidden="true">{cat.icon}</span>
              <h3 className="text-base font-bold text-gray-800">{cat.label}</h3>
            </div>
            <div className="flex flex-col gap-3">
              {cat.faqs.map((faq, i) => (
                <div key={i} className="border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
                  <details className="group">
                    <summary className="flex items-start gap-3 cursor-pointer p-5 hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                      <span className="text-green-500 font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
                      <span className="font-semibold text-gray-900 text-sm flex-1 leading-relaxed">{faq.q}</span>
                      <svg className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <div className="px-5 pb-5 border-t border-gray-50">
                      <div className="flex gap-3 pt-4">
                        <span className="text-green-600 font-bold text-sm flex-shrink-0">A</span>
                        <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line flex-1">
                          {faq.a}
                          {faq.link && (
                            <span className="block mt-3">
                              <Link href={faq.link.href} className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium underline underline-offset-2 text-sm transition-colors">
                                {faq.link.label} →
                              </Link>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Still need help */}
      <div className="mt-14 bg-green-50 border border-green-100 rounded-2xl p-8 text-center">
        <p className="font-bold text-gray-900 text-lg mb-2">
          {l === "ja" ? "解決しない場合は" : l === "ko" ? "해결되지 않으면" : l === "de" ? "Noch Fragen?" : l === "fr" ? "Besoin d'aide ?" : "Still need help?"}
        </p>
        <a
          href={`mailto:${content.contactEmail}?subject=Wellsy Support`}
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-green-700 active:scale-95 transition-all shadow-sm mt-4"
        >
          {l === "ja" ? "メールでお問い合わせ" : l === "ko" ? "이메일로 문의" : l === "de" ? "Per E-Mail anfragen" : l === "fr" ? "Contacter par e-mail" : "Contact via Email"}
        </a>
      </div>

      {/* Related links */}
      <div className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
          {l === "ja" ? "関連ページ" : l === "ko" ? "관련 페이지" : l === "de" ? "Verwandte Seiten" : l === "fr" ? "Pages connexes" : "Related Pages"}
        </p>
        <div className="flex flex-wrap gap-3">
          {relatedLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm text-green-600 hover:text-green-700 border border-green-200 hover:border-green-300 hover:bg-green-50 px-4 py-2 rounded-xl transition-colors">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
