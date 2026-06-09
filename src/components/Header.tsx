"use client";

import { useState } from "react";
import Link from "next/link";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import { navLabels, type Locale } from "@/lib/i18n";

const WellsyLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-white">
    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
  </svg>
);

type Props = { locale: Locale };

export default function Header({ locale }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const labels = navLabels[locale];

  const navLinks = [
    { href: `/${locale}`, label: labels.home },
    { href: `/${locale}/support`, label: labels.support },
    { href: `/${locale}/terms`, label: labels.terms },
    { href: `/${locale}/privacy`, label: labels.privacy },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center shadow-sm group-hover:bg-green-700 transition-colors">
              <WellsyLogo />
            </div>
            <span className="text-xl font-bold text-gray-900">Wellsy</span>
          </Link>

          {/* Desktop nav + locale switcher */}
          <div className="hidden md:flex items-center gap-1">
            <nav className="flex items-center gap-1 mr-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <LocaleSwitcher currentLocale={locale} />
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            className="md:hidden p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
          >
            {isOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-3 text-sm text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="px-8 pb-4 border-t border-gray-50 pt-3">
            <LocaleSwitcher currentLocale={locale} />
          </div>
        </div>
      )}
    </header>
  );
}
