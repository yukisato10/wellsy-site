import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サポート",
  description: "Wellsyアプリのサポートページです。よくあるご質問やお問い合わせ先をご確認いただけます。",
};

const faqs = [
  {
    q: "Wellsyは無料で使えますか？",
    a: "基本機能は無料でご利用いただけます。一部のプレミアム機能はサブスクリプションが必要です。",
  },
  {
    q: "食事の記録はどうやってするのですか？",
    a: "食事の写真を撮影するか、食品名を検索して記録できます。AIが自動で栄養素を解析します。",
  },
  {
    q: "体重データはどこに保存されますか？",
    a: "データはWellsyのセキュアなクラウドサーバーに暗号化して保存されます。Apple HealthやGoogle Fitとの連携も可能です。",
  },
  {
    q: "睡眠の記録方法を教えてください。",
    a: "就寝・起床時刻を手動で入力するか、スマートウォッチと連携することで自動的に記録できます。",
  },
  {
    q: "パスワードを忘れました。",
    a: "ログイン画面の「パスワードを忘れた方」からリセット用のメールを送信できます。登録メールアドレスをご確認ください。",
  },
  {
    q: "アカウントを削除したいのですが。",
    a: "アカウント削除はアプリ内の「設定 → アカウント → アカウントを削除」から行えます。詳しくはアカウント削除ページをご確認ください。",
  },
  {
    q: "通知が届きません。",
    a: "スマートフォンの設定から「Wellsy」の通知を許可しているかご確認ください。iOS：設定→通知→Wellsy、Android：設定→アプリ→Wellsy→通知",
  },
  {
    q: "データをバックアップできますか？",
    a: "アカウントにログインしている間、データは自動的にクラウドにバックアップされます。機種変更時も同じアカウントでログインすればデータを引き継げます。",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Header */}
      <div className="mb-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">サポートセンター</h1>
        <p className="mt-4 text-gray-500 text-lg">
          ご不明な点はこちらからご確認ください。
        </p>
      </div>

      {/* Contact card */}
      <div className="bg-green-50 border border-green-100 rounded-2xl p-6 mb-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <p className="font-semibold text-gray-900 mb-1">メールでのお問い合わせ</p>
          <p className="text-sm text-gray-500">通常2〜3営業日以内にご返信いたします。</p>
        </div>
        <a
          href="mailto:support@wellsy.app"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-xl text-sm font-medium hover:bg-green-700 transition-colors flex-shrink-0"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          メールを送る
        </a>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">よくあるご質問</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-100 rounded-xl p-6 bg-white shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                <span className="text-green-500 font-bold flex-shrink-0">Q.</span>
                {faq.q}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed pl-5">
                <span className="font-semibold text-gray-700">A. </span>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Other links */}
      <div className="mt-12 pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-4">関連ページ</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/delete-account", label: "アカウント削除" },
            { href: "/terms", label: "利用規約" },
            { href: "/privacy", label: "プライバシーポリシー" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-green-600 hover:text-green-700 border border-green-200 hover:border-green-300 px-4 py-2 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
