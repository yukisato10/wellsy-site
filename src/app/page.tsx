import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wellsy - AIで毎日の健康管理をシンプルに",
  description:
    "WellsyはAIを活用した食事・体重・睡眠管理アプリです。毎日の健康習慣をシンプルかつ継続的にサポートします。",
};

const features = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
      </svg>
    ),
    title: "AI食事管理",
    description: "写真を撮るだけでAIが栄養素を自動解析。食事記録の手間をゼロに。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    title: "体重トラッキング",
    description: "毎日の体重変化をグラフで可視化。目標体重への進捗をひと目で確認。",
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    ),
    title: "睡眠分析",
    description: "睡眠時間・質を記録し、生活リズムの改善点をAIがアドバイス。",
  },
];

const steps = [
  { num: "01", title: "アプリをダウンロード", desc: "App Store または Google Play から無料でダウンロード。" },
  { num: "02", title: "目標を設定する", desc: "体重・食事・睡眠それぞれの目標を設定するだけ。" },
  { num: "03", title: "毎日記録する", desc: "シンプルな操作で記録。AIが分析してアドバイスを提供。" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-green-50 to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-6 tracking-wide uppercase">
            AI Health App
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
            毎日の健康管理を<br />
            <span className="text-green-600">シンプル</span>に。
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
            WellsyはAIが食事・体重・睡眠をまとめて管理。<br className="hidden sm:block" />
            難しい操作なしで、健康な毎日をサポートします。
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-colors w-52 justify-center"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70">Download on the</div>
                <div className="text-sm font-semibold -mt-0.5">App Store</div>
              </div>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-3 bg-black text-white px-6 py-3.5 rounded-xl hover:bg-gray-800 transition-colors w-52 justify-center"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.56 1.16C.21 1.51 0 2.08 0 2.82v18.37c0 .74.21 1.31.57 1.65l.09.08 10.3-10.3v-.22L.65 1.08l-.09.08zM20.33 10.53l-2.89-1.67-3.07 3.07 3.07 3.06 2.91-1.68c.83-.48.83-1.26-.02-1.78zM3.18.25L15.78 7.5l-2.72 2.73L2.19.45C2.5.01 2.87-.12 3.18.25z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-70">GET IT ON</div>
                <div className="text-sm font-semibold -mt-0.5">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
              3つの機能で健康をサポート
            </h2>
            <p className="mt-4 text-gray-500 text-lg">
              食事・体重・睡眠をひとつのアプリで完結。
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-5">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">はじめ方は簡単</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="text-5xl font-bold text-green-100 mb-3">{s.num}</div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-28 bg-green-600">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">今日から始めよう</h2>
          <p className="text-green-100 text-lg mb-10">Wellsyは無料でダウンロードできます。</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-colors w-44 justify-center font-medium shadow-sm"
            >
              App Store
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-6 py-3.5 rounded-xl hover:bg-gray-50 transition-colors w-44 justify-center font-medium shadow-sm"
            >
              Google Play
            </a>
          </div>
        </div>
      </section>

      {/* Bottom legal links */}
      <section className="py-8 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
            <Link href="/terms" className="hover:text-green-600 transition-colors">利用規約</Link>
            <Link href="/privacy" className="hover:text-green-600 transition-colors">プライバシーポリシー</Link>
            <Link href="/support" className="hover:text-green-600 transition-colors">サポート</Link>
            <Link href="/delete-account" className="hover:text-green-600 transition-colors">アカウント削除</Link>
            <Link href="/legal/commercial-transactions" className="hover:text-green-600 transition-colors">特定商取引法に基づく表記</Link>
          </div>
        </div>
      </section>
    </>
  );
}
