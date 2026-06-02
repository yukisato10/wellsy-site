import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サポート",
  description:
    "Wellsyのサポートページです。よくあるご質問、お問い合わせ先をご案内します。",
};

type Faq = {
  q: string;
  a: string;
  link?: { href: string; label: string };
};

type Category = {
  id: string;
  icon: string;
  label: string;
  faqs: Faq[];
};

const categories: Category[] = [
  {
    id: "account",
    icon: "👤",
    label: "アカウント",
    faqs: [
      {
        q: "アカウントを削除するにはどうすればよいですか？",
        a: "アプリ内の「プロフィール → 設定（歯車アイコン）→ アカウント → アカウントを削除」から退会できます。削除を実行すると、食事・体重・睡眠の記録データ、画像、グループ情報などすべてのデータが削除されます。この操作は取り消せません。",
        link: { href: "/delete-account", label: "削除手順の詳細を見る" },
      },
      {
        q: "パスワードをリセットするにはどうすればよいですか？",
        a: "ログイン画面の「パスワードをお忘れの方」をタップし、登録メールアドレスを入力してください。リセット用のメールが届きます。メールが届かない場合は迷惑メールフォルダをご確認ください。Apple Sign In・Google Sign In でお使いの方はパスワード不要でログインできます。",
      },
      {
        q: "Apple / Google ログインが使えない場合はどうすればよいですか？",
        a: "以下をお試しください。\n\n① デバイスのApple IDまたはGoogleアカウントの設定を確認する\n② アプリを一度完全に終了してから再起動する\n③ デバイスを再起動する\n\nそれでも改善しない場合は、メールアドレスとパスワードによるログインをお試しいただくか、support@wellsy.app までご連絡ください（ご利用のOS・アプリバージョンをお知らせください）。",
      },
      {
        q: "機種変更後にデータを引き継ぐには？",
        a: "同じアカウント（Apple ID・Googleアカウント・メールアドレス）でログインするだけでデータが自動的に同期されます。新しい端末にWellsyをインストールし、以前と同じ方法でログインしてください。",
      },
    ],
  },
  {
    id: "data",
    icon: "🗑️",
    label: "データ・削除",
    faqs: [
      {
        q: "食事・体重・睡眠のデータを削除するにはどうすればよいですか？",
        a: "各記録の詳細画面の削除ボタンから個別に削除できます。すべてのデータをまとめて削除したい場合はアカウント削除（退会）をご利用ください。アカウント削除後、データはサーバーから削除されます（復元不可）。",
      },
      {
        q: "アカウント削除後、データはどうなりますか？",
        a: "退会操作を実行すると、Cloud Functions（deleteUserData）が起動し、Firebase上のユーザーデータ（食事・体重・睡眠記録、プロフィール画像、食事画像、グループ投稿等）が削除されます。削除されたデータは復元できません。法令上の保存義務がある情報を除き、30日以内に完全削除されます。",
        link: { href: "/delete-account", label: "削除手順の詳細を見る" },
      },
      {
        q: "自分のデータをエクスポートできますか？",
        a: "現在、アプリ内のデータエクスポート機能は準備中です。GDPRやCCPAに基づくデータポータビリティ権の行使をご希望の場合は、support@wellsy.app（件名：「データ開示申請」）までご連絡ください。",
      },
      {
        q: "個人情報の開示・訂正・削除を請求するにはどうすればよいですか？",
        a: "support@wellsy.app（件名：「個人情報開示請求」等）までご連絡ください。登録メールアドレスからお送りいただくと確認がスムーズです。原則30日以内に対応いたします。GDPRに基づくご請求は件名に「GDPR」とご記載ください。",
      },
    ],
  },
  {
    id: "features",
    icon: "📱",
    label: "機能・使い方",
    faqs: [
      {
        q: "AI解析の結果が実際の栄養情報と大きく異なります。",
        a: "AI食事解析はOpenAI APIを使用した推定値です。料理の種類・撮影角度・照明・盛り付けの見た目等によって精度が変わります。正確な栄養情報が必要な場合は、食品のパッケージ成分表示または管理栄養士にご確認ください。本機能は医療目的への利用を意図していません。\n\n精度改善のヒント：\n・料理全体が写るよう真上または斜め45度から撮影する\n・複数の料理が一皿にある場合は分けて撮影する",
      },
      {
        q: "AI解析の残り回数が表示されます。どういう意味ですか？",
        a: "AI食事解析は無料プランで1日2回まで利用できます。残り回数は日本時間の深夜0時にリセットされます。プレミアムプランは将来提供予定で、1日10回まで利用可能になる予定です。",
      },
      {
        q: "通知が届かない場合はどうすればよいですか？",
        a: "以下をご確認ください。\n\n【iOSの場合】\n設定 → 通知 → Wellsy → 「通知を許可」がオンになっているか確認\n\n【Androidの場合】\n設定 → アプリ → Wellsy → 通知 → 通知が有効になっているか確認\n\nデバイスの設定で通知を許可したあと、アプリを再起動してください。それでも改善しない場合は support@wellsy.app までご連絡ください（OS・アプリバージョンをお知らせください）。",
      },
    ],
  },
  {
    id: "group",
    icon: "👥",
    label: "グループ機能",
    faqs: [
      {
        q: "グループを退会するにはどうすればよいですか？",
        a: "アプリ内の「グループ → 対象グループを選択 → グループ設定 → グループを退会」から退会できます。退会後、自身の情報（ストリーク・投稿等）はグループメンバーに表示されなくなります。退会前に自身の投稿を削除しておくことをお勧めします。",
      },
      {
        q: "グループへ招待されましたが参加できません。",
        a: "以下をご確認ください。\n\n① 招待コード（6文字）を正確に入力しているか確認する\n② 招待コードの有効期限が切れていないか確認する（グループ管理者に再発行を依頼してください）\n③ すでに3グループに参加している場合（無料プランの上限）はそれ以上参加できません\n④ 参加申請中の場合はグループ管理者の承認をお待ちください",
      },
      {
        q: "グループ投稿はどのくらいの期間閲覧できますか？",
        a: "グループ投稿は投稿から24時間後にサーバー（Cloud Functions）によって自動的に削除されます。コメントやリアクション（セルフィー画像を含む）も同時に削除されます。",
      },
      {
        q: "グループメンバーから不適切なコンテンツを投稿されました。",
        a: "不快な思いをさせてしまい申し訳ありません。投稿の報告機能をご利用いただくか、support@wellsy.app（件名：「不適切コンテンツの報告」）までご連絡ください。投稿者のUID、投稿の概要、発生日時をお知らせいただくと迅速に対応できます。",
      },
    ],
  },
  {
    id: "premium",
    icon: "⭐",
    label: "プレミアム・課金",
    faqs: [
      {
        q: "現在、プレミアムプランは利用できますか？",
        a: "現時点ではプレミアムプランは提供されていません。将来的にApp Store（Apple）またはGoogle Play（Android）経由でのサブスクリプション機能を提供する予定です。提供開始時にはアプリ内通知またはメールでお知らせします。",
      },
      {
        q: "プレミアムの解約方法を教えてください（将来の参考情報）",
        a: "プレミアムサービス開始後は、以下の方法で解約できます。\n\n【iPhone / iPad の場合】\n設定 → ユーザー名 → サブスクリプション → Wellsy → サブスクリプションをキャンセル\n\n【Android の場合】\nGoogle Play → メニュー（☰）→ 定期購入 → Wellsy → 定期購入を解約\n\n解約は次回更新日の前日までに行ってください。解約後も当該期間終了まで機能をご利用いただけます。",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

      {/* ヘッダー */}
      <div className="mb-12 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
          </svg>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">サポートセンター</h1>
        <p className="mt-4 text-gray-500 text-base max-w-md mx-auto leading-relaxed">
          Wellsyに関するご質問・お困りのことはこちらからご確認ください。
        </p>
      </div>

      {/* お問い合わせカード */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">メールでのお問い合わせ</p>
              <p className="text-xs text-gray-500 mt-0.5">通常2〜3営業日以内にご返信</p>
            </div>
          </div>
          <a
            href="mailto:support@wellsy.app"
            className="text-sm font-medium text-green-600 hover:text-green-700 transition-colors"
          >
            support@wellsy.app
          </a>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-5">
          <div className="flex items-start gap-3 mb-3">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-gray-900 text-sm">対応時間</p>
              <p className="text-xs text-gray-500 mt-0.5">平日 10:00〜18:00（日本時間）</p>
            </div>
          </div>
          <p className="text-sm text-gray-500">日本語・英語で対応しています</p>
        </div>
      </div>

      {/* FAQ */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">よくあるご質問</h2>

        <div className="flex flex-col gap-10">
          {categories.map((cat) => (
            <section key={cat.id}>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl" aria-hidden="true">{cat.icon}</span>
                <h3 className="text-base font-bold text-gray-800">{cat.label}</h3>
              </div>

              <div className="flex flex-col gap-3">
                {cat.faqs.map((faq, i) => (
                  <div key={i} className="border border-gray-100 rounded-2xl bg-white shadow-sm overflow-hidden">
                    <details className="group">
                      <summary className="flex items-start gap-3 cursor-pointer p-5 hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
                        <span className="text-green-500 font-bold text-sm flex-shrink-0 mt-0.5">Q</span>
                        <span className="font-semibold text-gray-900 text-sm flex-1 leading-relaxed">
                          {faq.q}
                        </span>
                        <svg
                          className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5 transition-transform duration-200 group-open:rotate-180"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5 border-t border-gray-50">
                        <div className="flex gap-3 pt-4">
                          <span className="text-green-600 font-bold text-sm flex-shrink-0">A</span>
                          <div className="text-sm text-gray-600 leading-relaxed whitespace-pre-line flex-1">
                            {faq.a}
                            {faq.link && (
                              <span className="block mt-3">
                                <Link
                                  href={faq.link.href}
                                  className="inline-flex items-center gap-1 text-green-600 hover:text-green-700 font-medium underline underline-offset-2 text-sm transition-colors"
                                >
                                  {faq.link.label}
                                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                  </svg>
                                </Link>
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </details>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      {/* まだ解決しない場合 */}
      <div className="mt-14 bg-gradient-to-br from-green-50 to-emerald-50 border border-green-100 rounded-2xl p-8 text-center">
        <p className="font-bold text-gray-900 text-lg mb-2">解決しない場合は</p>
        <p className="text-gray-500 text-sm mb-5 leading-relaxed">
          お問い合わせの際は、以下をご記載いただくと迅速に対応できます。<br />
          ・ご利用のOS（iOS / Android）とバージョン<br />
          ・アプリのバージョン（設定画面でご確認いただけます）<br />
          ・問題の内容・発生状況
        </p>
        <a
          href="mailto:support@wellsy.app?subject=Wellsyサポートへのお問い合わせ"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-green-700 active:scale-95 transition-all shadow-sm"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          メールでお問い合わせ
        </a>
      </div>

      {/* 関連ページ */}
      <div className="mt-10 pt-8 border-t border-gray-100">
        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">関連ページ</p>
        <div className="flex flex-wrap gap-3">
          {[
            { href: "/delete-account", label: "アカウント削除" },
            { href: "/terms", label: "利用規約" },
            { href: "/privacy", label: "プライバシーポリシー" },
            { href: "/legal/commercial-transactions", label: "特定商取引法に基づく表記" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-green-600 hover:text-green-700 border border-green-200 hover:border-green-300 hover:bg-green-50 px-4 py-2 rounded-xl transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
