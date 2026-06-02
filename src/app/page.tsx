import type { Metadata } from "next";
import Link from "next/link";
import PhoneMockup from "@/components/PhoneMockup";

export const metadata: Metadata = {
  title: "Wellsy - AIで毎日の健康管理をシンプルに",
  alternates: { canonical: "/" },
};

/* ── Store links (env or placeholder) ── */
const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL ?? "#";
const GOOGLE_PLAY_URL = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? "#";

/* ── Feature data ── */
const features = [
  {
    emoji: "🍽️",
    color: "green",
    title: "AI食事解析",
    desc: "食事の写真を撮るだけでAIが自動で栄養素（カロリー・PFC）を解析。手入力ゼロで食事記録が続けられます。",
    points: ["写真1枚で即時解析", "1,000万件以上の食品データベース", "食事バランスをAIがアドバイス"],
  },
  {
    emoji: "⚖️",
    color: "blue",
    title: "体重管理",
    desc: "毎日の体重をグラフで可視化。目標体重に向けた進捗がひと目でわかり、継続するモチベーションを維持できます。",
    points: ["体重・体脂肪率を記録", "週次・月次のトレンド表示", "Apple Health / Google Fit 連携"],
  },
  {
    emoji: "😴",
    color: "purple",
    title: "睡眠管理",
    desc: "睡眠時間と質を記録して、生活リズムを改善。AIが睡眠パターンを分析して最適な就寝・起床時刻を提案します。",
    points: ["睡眠スコアを毎日計算", "スマートウォッチ連携対応", "睡眠改善アドバイス"],
  },
  {
    emoji: "👥",
    color: "orange",
    title: "グループ機能",
    desc: "友達・家族・同僚とグループを作って健康習慣をシェア。仲間の頑張りが見えることで、一人では続かない習慣も続けられます。",
    points: ["最大20名のグループ作成", "ランキングで楽しく競える", "チャレンジ機能で共通目標を設定"],
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string; dot: string }> = {
  green: {
    bg: "bg-green-50",
    icon: "bg-green-100 text-green-600",
    badge: "text-green-600 bg-green-100",
    dot: "bg-green-500",
  },
  blue: {
    bg: "bg-blue-50",
    icon: "bg-blue-100 text-blue-600",
    badge: "text-blue-600 bg-blue-100",
    dot: "bg-blue-500",
  },
  purple: {
    bg: "bg-purple-50",
    icon: "bg-purple-100 text-purple-600",
    badge: "text-purple-600 bg-purple-100",
    dot: "bg-purple-500",
  },
  orange: {
    bg: "bg-orange-50",
    icon: "bg-orange-100 text-orange-600",
    badge: "text-orange-600 bg-orange-100",
    dot: "bg-orange-500",
  },
};

/* ── Stats ── */
const stats = [
  { value: "4.8", label: "App Store 評価", sub: "★★★★★" },
  { value: "50,000+", label: "ダウンロード数", sub: "累計" },
  { value: "3,200万", label: "記録件数", sub: "食事・体重・睡眠" },
  { value: "98%", label: "継続率", sub: "30日間" },
];

/* ── Steps ── */
const steps = [
  {
    num: "01",
    title: "アプリをダウンロード",
    desc: "App Store・Google Play から無料でインストール。1分で登録完了。",
    icon: "📲",
  },
  {
    num: "02",
    title: "目標を設定する",
    desc: "体重・食事・睡眠の目標を入力するだけ。AIがあなたに合ったプランを提案。",
    icon: "🎯",
  },
  {
    num: "03",
    title: "毎日記録するだけ",
    desc: "食事は写真1枚、体重・睡眠はワンタップで記録完了。AIが改善点を教えてくれます。",
    icon: "✨",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HERO
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-emerald-50">
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-green-100/40 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-100/30 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: copy */}
            <div className="text-center lg:text-left">
              {/* Logo mark */}
              <div className="inline-flex items-center gap-2 mb-6 lg:justify-start justify-center">
                <div className="w-10 h-10 bg-green-600 rounded-2xl flex items-center justify-center shadow-md shadow-green-200">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                  </svg>
                </div>
                <span className="text-2xl font-bold text-gray-900 tracking-tight">Wellsy</span>
              </div>

              <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-5 tracking-wider uppercase">
                AI Health App
              </span>

              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight mb-6">
                AI健康管理を、<br />
                <span className="text-green-600">もっとシンプル</span>に。
              </h1>

              <p className="text-gray-500 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                食事・体重・睡眠をAIがまとめて管理。<br className="hidden sm:block" />
                写真1枚で栄養解析、グループで続けられる<br className="hidden sm:block" />
                新しい健康習慣アプリ。
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-8">
                <a
                  href={APP_STORE_URL}
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 active:scale-95 transition-all shadow-lg shadow-black/10 w-full sm:w-auto justify-center"
                >
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300 leading-none mb-0.5">Download on the</div>
                    <div className="text-base font-bold leading-none">App Store</div>
                  </div>
                </a>

                <a
                  href={GOOGLE_PLAY_URL}
                  className="inline-flex items-center gap-3 bg-black text-white px-6 py-4 rounded-2xl hover:bg-gray-800 active:scale-95 transition-all shadow-lg shadow-black/10 w-full sm:w-auto justify-center"
                >
                  <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.56 1.16C.21 1.51 0 2.08 0 2.82v18.37c0 .74.21 1.31.57 1.65l.09.08 10.3-10.3v-.22L.65 1.08l-.09.08zM20.33 10.53l-2.89-1.67-3.07 3.07 3.07 3.06 2.91-1.68c.83-.48.83-1.26-.02-1.78zM3.18.25L15.78 7.5l-2.72 2.73L2.19.45C2.5.01 2.87-.12 3.18.25z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-xs text-gray-300 leading-none mb-0.5">GET IT ON</div>
                    <div className="text-base font-bold leading-none">Google Play</div>
                  </div>
                </a>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 justify-center lg:justify-start text-sm text-gray-400">
                <div className="flex text-yellow-400 text-base">★★★★★</div>
                <span className="font-semibold text-gray-600">4.8</span>
                <span>·</span>
                <span>50,000+ ダウンロード</span>
                <span>·</span>
                <span>無料</span>
              </div>
            </div>

            {/* Right: phone mockup */}
            <div className="flex justify-center lg:justify-end pt-8 lg:pt-0">
              <PhoneMockup />
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          STATS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="border-y border-gray-100 bg-white py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="text-2xl sm:text-3xl font-black text-gray-900 mb-0.5">{s.value}</div>
                <div className="text-xs text-green-500 font-medium mb-0.5">{s.sub}</div>
                <div className="text-xs text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          FEATURES
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4 tracking-wider uppercase">
              Features
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              Wellsyでできること
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
              食事・体重・睡眠・グループ。4つの機能でトータルヘルスケア。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((f) => {
              const c = colorMap[f.color];
              return (
                <div
                  key={f.title}
                  className={`${c.bg} rounded-3xl p-8 border border-transparent hover:border-gray-200 transition-colors group`}
                >
                  <div className={`w-14 h-14 ${c.icon} rounded-2xl flex items-center justify-center text-2xl mb-5 shadow-sm`}>
                    {f.emoji}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{f.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-5">{f.desc}</p>
                  <ul className="flex flex-col gap-2">
                    {f.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                        <span className={`w-1.5 h-1.5 ${c.dot} rounded-full flex-shrink-0`} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          HOW IT WORKS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full mb-4 tracking-wider uppercase">
              How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight">
              使い方は3ステップ
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative">
            {/* Connector line (desktop) */}
            <div className="hidden sm:block absolute top-10 left-[calc(16.7%+20px)] right-[calc(16.7%+20px)] h-px bg-green-200" />

            {steps.map((s, i) => (
              <div key={s.num} className="text-center relative">
                <div className="relative inline-block mb-5">
                  <div className="w-20 h-20 bg-white border-2 border-green-200 rounded-2xl flex items-center justify-center text-3xl shadow-sm mx-auto">
                    {s.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {i + 1}
                  </div>
                </div>
                <h3 className="text-base font-bold text-gray-900 mb-2">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          GROUP FEATURE SPOTLIGHT
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 sm:py-28 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-green-600 to-emerald-500 rounded-3xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
              {/* Text */}
              <div className="p-10 sm:p-14">
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold rounded-full mb-6 tracking-wider uppercase">
                  New Feature
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-4">
                  グループで、<br />もっと続けられる。
                </h2>
                <p className="text-green-100 text-base leading-relaxed mb-8">
                  友達・家族・職場の仲間とグループを作成。お互いの記録を共有してランキングで競い合ったり、共通のチャレンジ目標を設定したり。一人では続かない健康習慣も、仲間と一緒なら楽しく続けられます。
                </p>
                <ul className="flex flex-col gap-3 mb-8">
                  {[
                    "最大20名のグループを無制限に作成",
                    "週次ランキングで友達と健康を競争",
                    "グループチャレンジで共通目標を達成",
                    "お互いの頑張りにリアクション",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white text-sm">
                      <svg className="w-5 h-5 text-green-200 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Illustration */}
              <div className="relative flex items-center justify-center px-8 pb-10 lg:pb-0 lg:pr-10 lg:pt-10">
                <div className="bg-white/15 backdrop-blur-sm rounded-2xl p-5 w-full max-w-xs space-y-3">
                  <p className="text-white text-xs font-semibold mb-3 opacity-80">👥 健康部活グループ · 6名</p>
                  {[
                    { name: "田中さん", score: "🏆 1位", badge: "今日の目標達成！", color: "bg-yellow-400" },
                    { name: "佐藤さん", score: "🥈 2位", badge: "体重−0.5kg", color: "bg-gray-300" },
                    { name: "あなた", score: "🥉 3位", badge: "継続7日！", color: "bg-orange-300" },
                  ].map((user) => (
                    <div key={user.name} className="flex items-center gap-3 bg-white/10 rounded-xl px-3 py-2.5">
                      <div className={`w-8 h-8 ${user.color} rounded-full flex items-center justify-center text-xs font-bold text-gray-800 flex-shrink-0`}>
                        {user.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-white text-xs font-semibold">{user.name}</span>
                          <span className="text-white/80 text-[10px]">{user.score}</span>
                        </div>
                        <p className="text-green-100 text-[10px] truncate">{user.badge}</p>
                      </div>
                    </div>
                  ))}
                  <div className="pt-1">
                    <div className="bg-white/10 rounded-xl px-3 py-2 flex items-center gap-2">
                      <span className="text-white text-xs">🎯</span>
                      <span className="text-white/80 text-[10px]">今月のチャレンジ: 野菜を毎日食べる</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          CTA
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-3xl flex items-center justify-center mx-auto mb-6 text-3xl">
            🚀
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight mb-4">
            今日から健康習慣を<br className="sm:hidden" />スタート
          </h2>
          <p className="text-gray-500 text-lg mb-10">
            Wellsyは基本機能が完全無料。<br className="sm:hidden" />まずは試してみてください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={APP_STORE_URL}
              className="inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-2xl hover:bg-gray-800 active:scale-95 transition-all shadow-xl shadow-black/10 w-full sm:w-auto justify-center"
            >
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300 leading-none mb-0.5">Download on the</div>
                <div className="text-base font-bold leading-none">App Store</div>
              </div>
            </a>

            <a
              href={GOOGLE_PLAY_URL}
              className="inline-flex items-center gap-3 bg-black text-white px-7 py-4 rounded-2xl hover:bg-gray-800 active:scale-95 transition-all shadow-xl shadow-black/10 w-full sm:w-auto justify-center"
            >
              <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.72-2.72-10.87 9.79zM.56 1.16C.21 1.51 0 2.08 0 2.82v18.37c0 .74.21 1.31.57 1.65l.09.08 10.3-10.3v-.22L.65 1.08l-.09.08zM20.33 10.53l-2.89-1.67-3.07 3.07 3.07 3.06 2.91-1.68c.83-.48.83-1.26-.02-1.78zM3.18.25L15.78 7.5l-2.72 2.73L2.19.45C2.5.01 2.87-.12 3.18.25z" />
              </svg>
              <div className="text-left">
                <div className="text-xs text-gray-300 leading-none mb-0.5">GET IT ON</div>
                <div className="text-base font-bold leading-none">Google Play</div>
              </div>
            </a>
          </div>

          <p className="mt-8 text-xs text-gray-400">
            iOS 16.0以上 / Android 9.0以上対応 · 基本機能は完全無料
          </p>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
          LEGAL LINKS
      ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <div className="py-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-gray-400">
            {[
              { href: "/terms", label: "利用規約" },
              { href: "/privacy", label: "プライバシーポリシー" },
              { href: "/support", label: "サポート" },
              { href: "/delete-account", label: "アカウント削除" },
              { href: "/legal/commercial-transactions", label: "特定商取引法に基づく表記" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-green-600 transition-colors">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
