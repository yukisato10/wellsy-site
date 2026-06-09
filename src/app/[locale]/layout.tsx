import { notFound } from "next/navigation";
import { isValidLocale, BASE_URL, type Locale } from "@/lib/i18n";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LangSetter from "@/components/LangSetter";

export function generateStaticParams() {
  return [
    { locale: "ja" },
    { locale: "en" },
    { locale: "de" },
    { locale: "fr" },
    { locale: "ko" },
  ];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) notFound();

  return (
    <>
      <LangSetter locale={locale} />
      <Header locale={locale as Locale} />
      <main className="flex-1">{children}</main>
      <Footer locale={locale as Locale} />
    </>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return {
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        ja: `${BASE_URL}/ja`,
        en: `${BASE_URL}/en`,
        de: `${BASE_URL}/de`,
        fr: `${BASE_URL}/fr`,
        ko: `${BASE_URL}/ko`,
        "x-default": `${BASE_URL}/ja`,
      },
    },
  };
}
