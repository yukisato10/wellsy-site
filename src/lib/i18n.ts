export const locales = ["ja", "en", "de", "fr", "ko"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ja";

export const localeNames: Record<Locale, string> = {
  ja: "日本語",
  en: "English",
  de: "Deutsch",
  fr: "Français",
  ko: "한국어",
};

export const localeLabels: Record<Locale, string> = {
  ja: "JP",
  en: "EN",
  de: "DE",
  fr: "FR",
  ko: "KO",
};

export function isValidLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export type NavKey = "home" | "support" | "terms" | "privacy";

export const navLabels: Record<Locale, Record<NavKey, string>> = {
  ja: { home: "ホーム", support: "サポート", terms: "利用規約", privacy: "プライバシー" },
  en: { home: "Home", support: "Support", terms: "Terms", privacy: "Privacy" },
  de: { home: "Startseite", support: "Support", terms: "Nutzungsbedingungen", privacy: "Datenschutz" },
  fr: { home: "Accueil", support: "Support", terms: "CGU", privacy: "Confidentialité" },
  ko: { home: "홈", support: "지원", terms: "이용약관", privacy: "개인정보" },
};

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://wellsy.app";

export function buildAlternates(path: string) {
  const languages: Record<string, string> = {};
  for (const locale of locales) {
    languages[locale] = `${BASE_URL}/${locale}${path}`;
  }
  languages["x-default"] = `${BASE_URL}/ja${path}`;
  return languages;
}
