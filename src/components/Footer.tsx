import Link from "next/link";

const legalLinks = [
  { href: "/terms", label: "利用規約" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/support", label: "サポート" },
  { href: "/delete-account", label: "アカウント削除" },
  { href: "/legal/commercial-transactions", label: "特定商取引法に基づく表記" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 group w-fit">
              <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center group-hover:bg-green-700 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-white"
                >
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
              </div>
              <span className="text-lg font-bold text-gray-900">Wellsy</span>
            </Link>
            <p className="mt-3 text-sm text-gray-500 max-w-xs leading-relaxed">
              AIを活用した食事・体重・睡眠管理アプリ。<br />
              毎日の健康管理をシンプルに。
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">リーガル</p>
            <ul className="flex flex-col gap-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-green-600 transition-colors"
                  >
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
            お問い合わせ:{" "}
            <a href="mailto:support@wellsy.app" className="hover:text-green-600 transition-colors">
              support@wellsy.app
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
