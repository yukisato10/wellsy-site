import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "アカウント削除",
  description: "Wellsyアプリのアカウント削除方法についてご説明します。",
};

const iosSteps = [
  "Wellsyアプリを開き、下部タブの「プロフィール」をタップします。",
  "右上の「設定（歯車アイコン）」をタップします。",
  "「アカウント」セクションの「アカウントを削除する」をタップします。",
  "確認ダイアログが表示されるので、内容をご確認の上「削除する」をタップします。",
  "アカウントとすべての関連データが削除されます。",
];

const androidSteps = [
  "Wellsyアプリを開き、下部タブの「プロフィール」をタップします。",
  "右上の「設定（歯車アイコン）」をタップします。",
  "「アカウント」セクションの「アカウントを削除する」をタップします。",
  "確認ダイアログが表示されるので、内容をご確認の上「削除する」をタップします。",
  "アカウントとすべての関連データが削除されます。",
];

export default function DeleteAccountPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">アカウント削除</h1>
        <p className="mt-4 text-gray-500 text-base leading-relaxed">
          Wellsyアカウントを削除すると、すべての記録データ（食事・体重・睡眠履歴）、プロフィール情報、設定が完全に削除されます。この操作は取り消すことができません。
        </p>
      </div>

      {/* Warning */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 flex gap-3">
        <svg className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        <div>
          <p className="font-semibold text-amber-800 text-sm mb-1">削除前にご確認ください</p>
          <ul className="text-sm text-amber-700 space-y-1">
            <li>• アカウント削除後、データの復元はできません。</li>
            <li>• 有料サブスクリプションをご利用の場合は、先にApp Store / Google Playでサブスクリプションをキャンセルしてください。</li>
            <li>• データをエクスポートしたい場合は、削除前にアプリ内のエクスポート機能をご利用ください。</li>
          </ul>
        </div>
      </div>

      {/* In-app deletion steps */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-6">アプリ内でのアカウント削除手順</h2>

        {/* iOS */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">iPhone / iPad (iOS)</h3>
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
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85a.637.637 0 00-.83.22l-1.88 3.24a11.463 11.463 0 00-8.94 0L5.65 5.67a.643.643 0 00-.87-.2c-.28.18-.37.54-.22.83L6.4 9.48A10.78 10.78 0 001 18h22a10.78 10.78 0 00-5.4-8.52zM7 15.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm10 0a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900">Android</h3>
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

      {/* Web deletion request */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-base font-bold text-gray-900 mb-2">アプリが使えない場合</h2>
        <p className="text-sm text-gray-500 leading-relaxed mb-4">
          アプリにアクセスできない場合は、以下のメールアドレスへご連絡ください。登録メールアドレスと削除希望の旨をご記載いただければ、手動でアカウントを削除いたします。通常5営業日以内に対応します。
        </p>
        <a
          href="mailto:support@wellsy.app?subject=アカウント削除依頼"
          className="inline-flex items-center gap-2 text-sm text-green-600 hover:text-green-700 font-medium"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          support@wellsy.app
        </a>
      </div>

      {/* Data deletion notice */}
      <div className="text-sm text-gray-400 leading-relaxed">
        <p>
          アカウント削除後、お客様の個人データは原則として30日以内にすべて削除されます。ただし、法令により保存が義務付けられているデータについては、法令に定める期間保存する場合があります。詳細は<a href="/privacy" className="text-green-600 hover:text-green-700">プライバシーポリシー</a>をご覧ください。
        </p>
      </div>
    </div>
  );
}
