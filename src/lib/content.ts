import fs from "fs";
import path from "path";
import type { Locale } from "./i18n";

// ─── Legal pages (privacy, terms, commercial-transactions) ───────────────────

export type Subsection = {
  heading: string;
  body?: string;
  bullets?: string[];
  numbered?: string[];
};

export type TableBlock = {
  headers: string[];
  rows: string[][];
};

export type LegalSection = {
  heading?: string;
  body?: string;
  bullets?: string[];
  numbered?: string[];
  subsections?: Subsection[];
  table?: TableBlock;
  note?: string;
  warning?: string;
};

export type LegalContent = {
  title: string;
  lastUpdated: string;
  description: string;
  intro?: string;
  sections: LegalSection[];
};

// ─── Support page ─────────────────────────────────────────────────────────────

export type SupportFaq = {
  q: string;
  a: string;
  link?: { href: string; label: string } | null;
};

export type SupportCategory = {
  id: string;
  icon: string;
  label: string;
  faqs: SupportFaq[];
};

export type SupportContent = {
  title: string;
  description: string;
  contactEmail: string;
  contactHours: string;
  responseTime: string;
  noReplyNote?: string;
  categories: SupportCategory[];
};

// ─── Delete account page ──────────────────────────────────────────────────────

export type DeletedDataItem = {
  icon: string;
  label: string;
  detail: string;
};

export type DeleteAccountContent = {
  title: string;
  description: string;
  warningTitle: string;
  warningItems: string[];
  deletedDataTitle: string;
  deletedDataNote: string;
  deletedData: DeletedDataItem[];
  stepsTitle: string;
  stepsIosTitle: string;
  stepsIos: string[];
  stepsAndroidTitle: string;
  stepsAndroid: string[];
  groupNoteTitle: string;
  groupNoteItems: string[];
  contactTitle: string;
  contactBody: string;
  contactEmail: string;
  timelineTitle: string;
  timelineItems: string[];
  privacyLinkText: string;
};

// ─── Loaders ──────────────────────────────────────────────────────────────────

function readJSON<T>(locale: Locale, filename: string): T {
  const primary = path.join(process.cwd(), "content", locale, `${filename}.json`);
  const fallback = path.join(process.cwd(), "content", "ja", `${filename}.json`);
  try {
    return JSON.parse(fs.readFileSync(primary, "utf-8")) as T;
  } catch {
    return JSON.parse(fs.readFileSync(fallback, "utf-8")) as T;
  }
}

export function getLegalContent(locale: Locale, page: string): LegalContent {
  return readJSON<LegalContent>(locale, page);
}

export function getSupportContent(locale: Locale): SupportContent {
  return readJSON<SupportContent>(locale, "support");
}

export function getDeleteAccountContent(locale: Locale): DeleteAccountContent {
  return readJSON<DeleteAccountContent>(locale, "delete-account");
}
