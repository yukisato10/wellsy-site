import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description:
    "Wellsyの特定商取引法に基づく表記です。販売事業者・連絡先・返品ポリシー等を掲載しています。",
};

export default function CommercialTransactionsPage() {
  return (
    <LegalPage title="特定商取引法に基づく表記" lastUpdated="2026年6月2日">

      <p>
        特定商取引に関する法律（特定商取引法）第11条（通信販売）の規定に基づき、以下のとおり表記します。
      </p>
      <p>
        <strong>現時点では本サービスに課金機能は実装されていません。</strong>将来的にApp Store（Apple Inc.）またはGoogle Play（Google LLC）経由での有料サブスクリプション機能を提供する予定です。課金機能の提供開始時に本ページを更新します。
      </p>

      <div className="mt-8 overflow-x-auto">
        <table>
          <tbody>
            <tr>
              <th style={{ whiteSpace: "nowrap", width: "200px" }}>販売事業者名</th>
              <td>YUKI SATO</td>
            </tr>
            <tr>
              <th>所在地</th>
              <td>
                請求があった場合、遅滞なく開示いたします。<br />
                <span style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                  ※ 特定商取引法施行規則第9条の規定により、住所は請求時に開示します。
                </span>
              </td>
            </tr>
            <tr>
              <th>電話番号</th>
              <td>
                請求があった場合、遅滞なく開示いたします。<br />
                <span style={{ fontSize: "0.8rem", color: "#9ca3af" }}>
                  ※ 現在はメールでのお問い合わせのみ受け付けています。
                </span>
              </td>
            </tr>
            <tr>
              <th>メールアドレス</th>
              <td>
                <a href="mailto:support@wellsy.app">support@wellsy.app</a>
              </td>
            </tr>
            <tr>
              <th>サービスURL</th>
              <td>
                <a href="https://wellsy.app">https://wellsy.app</a>
              </td>
            </tr>
            <tr>
              <th>販売価格</th>
              <td>
                <strong>基本プラン：</strong>無料（現時点）<br />
                <strong>プレミアムプラン（予定）：</strong>App Store / Google Play のアプリ内に表示される価格（消費税込）に従います。<br />
                <br />
                <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                  ※ 課金機能は現時点で未実装です。価格は機能提供時にアプリ内でご確認ください。
                </span>
              </td>
            </tr>
            <tr>
              <th>追加費用</th>
              <td>
                本サービスのご利用に際し、インターネット接続料および通信費用が発生する場合があります。これらの費用はユーザーのご負担となります。
              </td>
            </tr>
            <tr>
              <th>支払方法</th>
              <td>
                <strong>App Store（iPhone / iPad）：</strong><br />
                Apple IDに紐づく決済方法（クレジットカード・デビットカード・Apple Pay・App Storeギフトカード等）<br />
                <br />
                <strong>Google Play（Android）：</strong><br />
                Googleアカウントに紐づく決済方法（クレジットカード・デビットカード・Google Playギフトカード・キャリア決済等）<br />
                <br />
                <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                  ※ 決済処理はApple Inc.またはGoogle LLCが提供するシステムを通じて行われます。運営者はクレジットカード番号等の決済情報を直接取得・保存しません。
                </span>
              </td>
            </tr>
            <tr>
              <th>支払時期</th>
              <td>
                <strong>月額プラン（予定）：</strong>購入時に即時課金。以降、毎月の自動更新日に課金。<br />
                <strong>年額プラン（予定）：</strong>購入時に即時課金。以降、毎年の自動更新日に課金。<br />
                <br />
                <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                  ※ 自動更新の課金は、更新日前24時間以内にユーザーのApp Store / Google Playアカウントに請求されます。
                </span>
              </td>
            </tr>
            <tr>
              <th>サービス提供時期</th>
              <td>
                決済完了後、直ちにプレミアムサービスをご利用いただけます（将来の課金機能開始後）。
              </td>
            </tr>
            <tr>
              <th>解約・キャンセル方法</th>
              <td>
                サブスクリプションの解約は、次回更新日の前日（24時間前）までに各ストアの設定から行ってください。<br />
                <br />
                <strong>iPhone / iPad の場合：</strong><br />
                設定 → ユーザー名 → サブスクリプション → Wellsy → サブスクリプションをキャンセル<br />
                <br />
                <strong>Android の場合：</strong><br />
                Google Play → メニュー（☰）→ 定期購入 → Wellsy → 定期購入を解約<br />
                <br />
                <span style={{ fontSize: "0.85rem", color: "#6b7280" }}>
                  ※ 解約後も当該契約期間の終了日までサービスをご利用いただけます。<br />
                  ※ 解約手続きは必ず各ストアから行ってください（運営者へのメールでは解約できません）。
                </span>
              </td>
            </tr>
            <tr>
              <th>返品・返金ポリシー</th>
              <td>
                デジタルコンテンツ・サブスクリプションサービスの性質上、購入完了後・サービス利用開始後の返金は原則として行いません。<br />
                <br />
                ただし、各ストアの返金ポリシーに基づく場合は、以下に申し出てください。<br />
                <ul style={{ marginTop: "0.5rem", paddingLeft: "1.25rem" }}>
                  <li>App Store：reportaproblem.apple.com</li>
                  <li>Google Play：play.google.com の定期購入サポート</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th>動作環境</th>
              <td>
                <strong>iOS / iPadOS：</strong>iOS 16.0 以上（iPhone / iPad）<br />
                <strong>Android：</strong>Android 9.0 以上
              </td>
            </tr>
            <tr>
              <th>無料トライアル</th>
              <td>
                将来の課金機能導入時に、無料トライアル期間を設ける場合があります。詳細はアプリ内の表示に従います。無料トライアル期間中に解約しない場合、期間終了後に有料プランへ自動移行します。
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2>お問い合わせ</h2>
      <p>
        本表記に関するお問い合わせは以下までご連絡ください。<br />
        <strong>メールアドレス：</strong><a href="mailto:support@wellsy.app">support@wellsy.app</a><br />
        <strong>対応時間：</strong>平日10:00〜18:00（日本時間）
      </p>

      <p style={{ marginTop: "2.5rem", color: "#9ca3af", fontSize: "0.875rem" }}>
        ※ 課金機能の提供開始時に本ページを更新します。<br />
        制定：2026年6月2日　以上
      </p>
    </LegalPage>
  );
}
