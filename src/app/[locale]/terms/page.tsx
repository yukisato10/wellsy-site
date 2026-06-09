import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isValidLocale, BASE_URL, buildAlternates, type Locale } from "@/lib/i18n";
import { getLegalContent } from "@/lib/content";
import JsonLegalPage from "@/components/JsonLegalPage";

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
  const content = getLegalContent(locale as Locale, "terms");
  return {
    title: content.title,
    description: content.description,
    alternates: {
      canonical: `${BASE_URL}/${locale}/terms`,
      languages: buildAlternates("/terms"),
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  if (!isValidLocale(locale)) notFound();
  const content = getLegalContent(locale as Locale, "terms");
  return <JsonLegalPage content={content} />;
}
