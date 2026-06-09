"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { locales, localeLabels, type Locale } from "@/lib/i18n";

export default function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const pathname = usePathname();

  function buildHref(newLocale: Locale): string {
    const segments = pathname.split("/");
    // segments[0] = "", segments[1] = locale, segments[2+] = path
    if (segments.length >= 2) {
      segments[1] = newLocale;
    }
    return segments.join("/") || `/${newLocale}`;
  }

  return (
    <div className="flex items-center gap-1" aria-label="言語選択 / Language">
      {locales.map((locale, i) => (
        <span key={locale} className="flex items-center gap-1">
          {i > 0 && <span className="text-gray-200 text-xs select-none">|</span>}
          {locale === currentLocale ? (
            <span className="text-xs font-bold text-green-600 px-0.5">
              {localeLabels[locale]}
            </span>
          ) : (
            <Link
              href={buildHref(locale)}
              className="text-xs text-gray-400 hover:text-green-600 transition-colors px-0.5"
            >
              {localeLabels[locale]}
            </Link>
          )}
        </span>
      ))}
    </div>
  );
}
