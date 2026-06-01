import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "Wellsyの特定商取引法に基づく表記です。",
};

const rows: { label: string; value: React.ReactNode }[] = [
  { label: "事業者名", value: "（個人・法人名をここに記載）" },
  { label: "代表者名", value: "（代表者名をここに記載）" },
  { label: "所在地", value: "〒XXX-XXXX\n（住所をここに記載）" },
  { label: "電話番号", value: "メールにてお問い合わせください（公開しておりません）" },
  { label: "メールアドレス", value: <a href="mailto:support@wellsy.app">support@wellsy.app</a> },
  { label: "販売URL", value: <a href="https://wellsy.app">https://wellsy.app</a> },
  {
    label: "販売価格",
    value: (
      <>
        基本機能：無料<br />
        プレミアムプラン：アプリ内に表示される価格に準じます。<br />
        （App Store / Google Play の表示価格が適用されます）
      </>
    ),
  },
  {
    label: "支払い方法",
    value: (
      <>
        App Store（Apple ID残高・クレジットカード等）<br />
        Google Play（Google Playギフトカード・クレジットカード等）
      </>
    ),
  },
  {
    label: "支払い時期",
    value: "各ストアの決済システムに準じます。サブスクリプションは各更新日に自動請求されます。",
  },
  {
    label: "サービス提供時期",
    value: "購入・サブスクリプション登録完了後、即時にご利用いただけます。",
  },
  {
    label: "返品・キャンセル",
    value: (
      <>
        デジタルコンテンツの性質上、購入完了後の返金は原則としてお受けしておりません。<br />
        サブスクリプションのキャンセルは各更新日の前日までに、App Store または Google Play の設定からお手続きください。<br />
        キャンセル後も当該期間終了まではサービスをご利用いただけます。
      </>
    ),
  },
  {
    label: "動作環境",
    value: (
      <>
        iOS 16.0以上（iPhone / iPad）<br />
        Android 9.0以上
      </>
    ),
  },
  {
    label: "特別な販売条件",
    value: "アプリ内に別途表示する場合はその内容に従います。",
  },
];

export default function CommercialTransactionsPage() {
  return (
    <LegalPage title="特定商取引法に基づく表記" lastUpdated="2026年6月2日">
      <p>
        特定商取引に関する法律（特定商取引法）第11条の規定に基づき、以下のとおり表記します。
      </p>

      <div className="mt-8 overflow-x-auto">
        <table>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th style={{ whiteSpace: "nowrap", width: "180px" }}>{row.label}</th>
                <td style={{ whiteSpace: "pre-wrap" }}>{row.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-8 text-sm text-gray-400">
        ※ アプリ内課金はすべてApple Inc.（App Store）またはGoogle LLC（Google Play）を通じて処理されます。
        決済・返金に関するお問い合わせは各ストアのサポートページをご参照ください。
      </p>
    </LegalPage>
  );
}
