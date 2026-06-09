import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { isValidLocale, BASE_URL, buildAlternates, type Locale } from "@/lib/i18n";
import { getDeleteAccountContent } from "@/lib/content";

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
  const content = getDeleteAccountContent(locale as Locale);
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/delete-account`,
      languages: buildAlternates("/delete-account"),
    },
  };
}

export default async function DeleteAccountPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const c = getDeleteAccountContent(locale as Locale);
  const l = locale as Locale;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">{c.title}</h1>
        <p className="mt-4 text-gray-500 text-base leading-relaxed">{c.description}</p>
      </div>

      {/* Warning */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-10 flex gap-3">
        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <p className="font-semibold text-red-800 text-sm mb-1">{c.warningTitle}</p>
          <ul className="text-sm text-red-700 space-y-1">
            {c.warningItems.map((item, i) => <li key={i}>・{item}</li>)}
          </ul>
        </div>
      </div>

      {/* Deleted data */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">{c.deletedDataTitle}</h2>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">{c.deletedDataNote}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {c.deletedData.map((item) => (
            <div key={item.label} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Group note */}
      <div className="mb-10 bg-blue-50 border border-blue-100 rounded-2xl p-5">
        <div className="flex gap-3">
          <span className="text-xl flex-shrink-0" aria-hidden="true">👥</span>
          <div>
            <p className="font-semibold text-gray-900 text-sm mb-2">{c.groupNoteTitle}</p>
            <ul className="text-sm text-gray-600 space-y-1.5 leading-relaxed">
              {c.groupNoteItems.map((item, i) => <li key={i}>・{item}</li>)}
            </ul>
          </div>
        </div>
      </div>

      {/* Steps */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{c.stepsTitle}</h2>
        {/* iOS */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">{c.stepsIosTitle}</h3>
          </div>
          <ol className="flex flex-col gap-3">
            {c.stepsIos.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <p className="text-sm text-gray-600 leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
        {/* Android */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 001 18h22a10.78 10.78 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">{c.stepsAndroidTitle}</h3>
          </div>
          <ol className="flex flex-col gap-3">
            {c.stepsAndroid.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">{i + 1}</span>
                <p className="text-sm text-gray-600 leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Contact */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-2">{c.contactTitle}</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">{c.contactBody}</p>
        <a href={`mailto:${c.contactEmail}?subject=Delete Account Request`} className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors">
          {c.contactEmail}
        </a>
      </div>

      {/* Timeline */}
      <div className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-3">{c.timelineTitle}</h2>
        <ul className="text-sm text-gray-500 space-y-2 leading-relaxed">
          {c.timelineItems.map((item, i) => <li key={i}>・{item}</li>)}
        </ul>
      </div>

      <div className="text-sm text-gray-400 leading-relaxed border-t border-gray-100 pt-6">
        <Link href={`/${l}/privacy`} className="text-green-600 hover:text-green-700">{c.privacyLinkText}</Link>
      </div>
    </div>
  );
}
