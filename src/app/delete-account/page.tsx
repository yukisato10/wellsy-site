import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "アカウント削除",
  description:
    "Wellsyアプリのアカウント削除方法を説明します。削除されるデータ・削除手順・注意事項をご確認ください。",
};

const deletedData = [
  { icon: "🍽️", label: "食事記録", detail: "食事名・食材・カロリー・PFC・AIコメント・メモ" },
  { icon: "📷", label: "食事画像", detail: "Firebase Storageに保存された食事写真（WebP形式）" },
  { icon: "⚖️", label: "体重・体脂肪率の記録", detail: "すべての測定データ" },
  { icon: "😴", label: "睡眠記録", detail: "就寝・起床時刻、睡眠時間のすべての記録" },
  { icon: "👤", label: "アカウント情報", detail: "表示名・メールアドレス・プロフィール画像・各種設定" },
  { icon: "🔔", label: "通知設定・FCMトークン", detail: "プッシュ通知用のデバイストークン" },
  { icon: "👥", label: "グループ関連データ", detail: "グループ投稿・コメント・リアクション（セルフィー画像を含む）・グループ設定" },
  { icon: "🏃", label: "ストリークデータ", detail: "継続記録日数・ストリーク救済回数" },
  { icon: "🤖", label: "AI解析利用履歴", detail: "1日の利用回数カウント" },
];

const iosSteps = [
  "Wellsyアプリを開き、画面下部の「プロフィール」タブをタップします。",
  "右上の「設定（歯車アイコン）」をタップします。",
  "「アカウント」セクションをタップします。",
  "「アカウントを削除する」をタップします。",
  "確認ダイアログが表示されます。内容をよく確認した上で「削除する」をタップします。",
  "削除処理が完了すると自動的にログアウトされます。",
];

const androidSteps = [
  "Wellsyアプリを開き、画面下部の「プロフィール」タブをタップします。",
  "右上の「設定（歯車アイコン）」をタップします。",
  "「アカウント」セクションをタップします。",
  "「アカウントを削除する」をタップします。",
  "確認ダイアログが表示されます。内容をよく確認した上で「削除する」をタップします。",
  "削除処理が完了すると自動的にログアウトされます。",
];

export default function DeleteAccountPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

      {/* ヘッダー */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">アカウント削除</h1>
        <p className="mt-4 text-gray-500 text-base leading-relaxed">
          Wellsyアカウントを削除する前に、以下の内容をよくお読みください。削除したデータは復元できません。
        </p>
      </div>

      {/* 重要な警告 */}
      <div className="bg-red-50 border border-red-200 rounded-2xl p-5 mb-10 flex gap-3">
        <svg className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <p className="font-semibold text-red-800 text-sm mb-1">削除前に必ずご確認ください</p>
          <ul className="text-sm text-red-700 space-y-1">
            <li>・アカウント削除後、すべてのデータは復元できません。</li>
            <li>・グループ内に投稿したコンテンツを残したくない場合は、削除前にご自身で削除してください。</li>
            <li>・将来プレミアムサービスを利用している場合は、先に各ストアでサブスクリプションをキャンセルしてください。</li>
          </ul>
        </div>
      </div>

      {/* 削除されるデータ */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-4">削除されるデータ</h2>
        <p className="text-sm text-gray-500 mb-5 leading-relaxed">
          アカウントを削除すると、サーバー上の Cloud Functions（deleteUserData）が実行され、以下のデータが Firebase（Cloud Firestore・Storage）から削除されます。
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {deletedData.map((item) => (
            <div key={item.label} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
              <span className="text-xl flex-shrink-0" aria-hidden="true">{item.icon}</span>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <p className="text-xs text-gray-500 leading-relaxed">
            <strong>補足：</strong>法令上の保存義務がある情報（将来の課金履歴等）は上記の対象外となる場合があります。グループ投稿は24時間の有効期限内であれば自動削除対象ですが、退会時にも削除処理が実行されます。システム管理上の匿名化されたデータ（招待コード等）の一部は一定期間残存しますが、個人情報と紐づかない形で管理されます。
          </p>
        </div>
      </div>

      {/* グループ投稿・コメントの扱い */}
      <div className="mb-10 bg-blue-50 border border-blue-100 rounded-2xl p-5">
        <div className="flex gap-3">
          <span className="text-xl flex-shrink-0" aria-hidden="true">👥</span>
          <div>
            <p className="font-semibold text-gray-900 text-sm mb-2">グループ投稿・コメント・リアクションの扱い</p>
            <ul className="text-sm text-gray-600 space-y-1.5 leading-relaxed">
              <li>・グループへの投稿は投稿後24時間で自動削除されます。退会時にも削除処理が実行されます。</li>
              <li>・コメント・リアクション（セルフィー画像を含む）も退会時に削除されます。</li>
              <li>・退会前に自身の投稿・コメントを削除しておくことを推奨します。</li>
              <li>・グループのメンバーリストから自身の情報（表示名・アイコン）が削除されます。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 削除手順 */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">アプリ内でのアカウント削除手順</h2>

        {/* iOS */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-900 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">iPhone / iPad（iOS）</h3>
          </div>
          <ol className="flex flex-col gap-3">
            {iosSteps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Android */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 001 18h22a10.78 10.78 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900">Android</h3>
          </div>
          <ol className="flex flex-col gap-3">
            {androidSteps.map((step, i) => (
              <li key={i} className="flex gap-4 items-start">
                <span className="flex-shrink-0 w-7 h-7 bg-green-100 text-green-700 rounded-full flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </span>
                <p className="text-sm text-gray-600 leading-relaxed pt-0.5">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* アプリが使えない場合 */}
      <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-2">アプリにアクセスできない場合</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          アプリへのアクセスが困難な場合は、以下のメールアドレスへご連絡ください。登録メールアドレスと削除を希望する旨をご記載いただければ、手動でアカウントを削除いたします。通常3〜5営業日以内に対応します。
        </p>
        <a
          href="mailto:support@wellsy.app?subject=アカウント削除依頼"
          className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          support@wellsy.app
        </a>
      </div>

      {/* データ削除のタイムライン */}
      <div className="mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-3">データ削除のタイムライン</h2>
        <ul className="text-sm text-gray-500 space-y-2 leading-relaxed">
          <li>・<strong>即時：</strong>Firebase Authentication上のアカウント認証情報の無効化</li>
          <li>・<strong>削除操作完了後：</strong>Cloud Functions（deleteUserData）によるFirestore・Storage上のデータ削除処理が開始されます</li>
          <li>・<strong>30日以内：</strong>法令上の保存義務がある情報を除き、すべての個人データが完全に削除されます</li>
        </ul>
      </div>

      {/* 注記 */}
      <div className="text-sm text-gray-400 leading-relaxed border-t border-gray-100 pt-6">
        <p>
          アカウント削除後のデータの取扱いについては、<Link href="/privacy" className="text-green-600 hover:text-green-700">プライバシーポリシー 第11条（アカウント削除時のデータ処理）</Link>をご参照ください。
        </p>
      </div>
    </div>
  );
}
