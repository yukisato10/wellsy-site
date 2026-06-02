import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "Wellsyのプライバシーポリシーです。個人情報の収集・利用・保管・削除方法、GDPR・CCPA・韓国PIPAに基づくユーザーの権利を説明します。",
};

export default function PrivacyPage() {
  return (
    <LegalPage title="プライバシーポリシー" lastUpdated="2026年6月2日">

      <p>
        個人事業主 YUKI SATO（以下「運営者」）は、ヘルスケアアプリケーション「Wellsy」（以下「本サービス」）を通じて取得するユーザーの個人情報について、以下のとおりプライバシーポリシー（以下「本ポリシー」）を定めます。本ポリシーは、日本の個人情報の保護に関する法律（個人情報保護法）、欧州一般データ保護規則（GDPR）、米国カリフォルニア州消費者プライバシー法（CCPA/CPRA）および韓国個人情報保護法（PIPA）に準拠します。
      </p>
      <p>
        本サービスを利用することにより、本ポリシーに同意したものとみなします。同意いただけない場合は本サービスのご利用をお控えください。
      </p>

      <h2>第1条（個人情報管理者・連絡先）</h2>
      <ul>
        <li><strong>個人情報管理者：</strong>YUKI SATO</li>
        <li><strong>サービス名：</strong>Wellsy</li>
        <li><strong>問い合わせメール：</strong><a href="mailto:support@wellsy.app">support@wellsy.app</a></li>
        <li><strong>GDPR関連問い合わせ：</strong><a href="mailto:support@wellsy.app">support@wellsy.app</a>（件名に「GDPR」とご記載ください）</li>
        <li><strong>CCPA関連問い合わせ：</strong><a href="mailto:support@wellsy.app">support@wellsy.app</a>（件名に「CCPA」とご記載ください）</li>
        <li><strong>韓国PIPA関連問い合わせ：</strong><a href="mailto:support@wellsy.app">support@wellsy.app</a>（件名に「PIPA」とご記載ください）</li>
      </ul>

      <h2>第2条（収集する個人情報の種類）</h2>

      <h3>1. ユーザーが直接入力・提供する情報</h3>
      <ul>
        <li><strong>アカウント情報：</strong>表示名（ニックネーム）、メールアドレス（メール認証を選択した場合）</li>
        <li><strong>プロフィール画像：</strong>Firebase Storage（users/{"{uid}"}/profile/avatar.webp）に保存</li>
        <li><strong>健康プロフィール：</strong>身長、年齢、性別、活動レベル（任意入力）</li>
        <li><strong>体重・体脂肪率：</strong>体重（kg）、体脂肪率（%）、測定単位</li>
        <li><strong>食事記録：</strong>食事名、食事タイプ（朝食・昼食・夕食・間食等）、食材、カロリー、PFC（たんぱく質・脂質・炭水化物）、メモ</li>
        <li><strong>食事画像：</strong>AI解析または手動記録用の食事写真（Firebase Storage：users/{"{uid}"}/meals/{"{mealId}"}/image.webp）</li>
        <li><strong>睡眠記録：</strong>就寝時刻、起床時刻、睡眠時間</li>
        <li><strong>グループ投稿：</strong>食事画像、カロリー、PFC、キャプション（グループメンバー全員に公開、投稿後24時間で自動削除）</li>
        <li><strong>コメント：</strong>グループ投稿へのコメント本文（最大100文字）</li>
        <li><strong>リアクション：</strong>リアクション種別（5種類）、セルフィー画像（選択時のみ、Firebase Storage：groups/{"{groupId}"}/reactions/{"{mealId}/{uid_timestamp}"}.webp）</li>
      </ul>

      <h3>2. 自動的に収集される情報</h3>
      <ul>
        <li><strong>Firebase UID：</strong>Firebase Authenticationが発行する一意のユーザー識別子</li>
        <li><strong>FCMトークン（Firebase Cloud Messaging）：</strong>プッシュ通知の配信に使用するデバイス固有のトークン。Cloud Firestore（users/{"{uid}"}）に保存</li>
        <li><strong>言語設定・タイムゾーン：</strong>アプリの表示言語設定および端末のタイムゾーン</li>
        <li><strong>AI解析利用回数：</strong>Cloud Firestore（users/{"{uid}"}/usage_limits）にて日次カウントを管理</li>
        <li><strong>作成日時・更新日時：</strong>各データドキュメントのタイムスタンプ</li>
        <li><strong>ストリークデータ：</strong>連続記録日数・ストリーク救済回数（Cloud Firestore：users/{"{uid}"}/streakData）</li>
      </ul>

      <h3>3. 外部サービス経由で取得する情報</h3>
      <ul>
        <li><strong>Apple Sign In：</strong>Apple IDに関連付けられたメールアドレス（ユーザーが開示を選択した場合）およびAppleが発行するユーザー識別子</li>
        <li><strong>Google Sign In：</strong>Googleアカウントに関連付けられたメールアドレス、表示名、プロフィール画像URL</li>
      </ul>

      <h3>4. 現在収集していない情報</h3>
      <ul>
        <li>決済情報・クレジットカード番号（課金機能は現時点で未実装）</li>
        <li>位置情報</li>
        <li>アプリ利用分析データ（Firebase Analytics・Crashlyticsは現時点で無効化）</li>
      </ul>

      <h2>第3条（利用目的と処理の法的根拠）</h2>
      <p>収集した個人情報は以下の目的で利用します。GDPRが適用される場合の処理の法的根拠を括弧内に示します。</p>

      <table>
        <thead>
          <tr>
            <th>利用目的</th>
            <th>法的根拠（GDPR第6条）</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>アカウントの作成・管理・認証</td>
            <td>契約の履行（(b)号）</td>
          </tr>
          <tr>
            <td>食事・体重・睡眠の記録・表示・グラフ生成</td>
            <td>契約の履行（(b)号）</td>
          </tr>
          <tr>
            <td>AI機能による食事解析・栄養情報の推定・AIコメント生成</td>
            <td>契約の履行 / 同意（(b)号 / (a)号）</td>
          </tr>
          <tr>
            <td>グループ機能の提供（投稿・コメント・リアクション・共有）</td>
            <td>契約の履行（(b)号）</td>
          </tr>
          <tr>
            <td>ストリーク機能の管理</td>
            <td>契約の履行（(b)号）</td>
          </tr>
          <tr>
            <td>プッシュ通知・ローカル通知の配信</td>
            <td>同意（(a)号）</td>
          </tr>
          <tr>
            <td>不正利用の検知・防止・セキュリティ確保</td>
            <td>正当な利益（(f)号）</td>
          </tr>
          <tr>
            <td>アプリの不具合調査・バグ修正・サービス改善</td>
            <td>正当な利益（(f)号）</td>
          </tr>
          <tr>
            <td>ユーザーサポートへの対応</td>
            <td>契約の履行 / 正当な利益（(b)号 / (f)号）</td>
          </tr>
          <tr>
            <td>重要なお知らせ（規約改定・セキュリティ情報等）の通知</td>
            <td>正当な利益（(f)号）</td>
          </tr>
          <tr>
            <td>法令遵守・法的義務の履行</td>
            <td>法的義務（(c)号）</td>
          </tr>
        </tbody>
      </table>

      <h2>第4条（OpenAIへのデータ送信）</h2>
      <ol>
        <li>AI食事解析機能を利用すると、ユーザーがアップロードした食事画像またはテキストが本サービスのCloud Functions（asia-northeast1リージョン）を経由してOpenAI, Inc.（米国）のAPIサーバーへ送信されます。</li>
        <li>OpenAIへ送信されるデータの内容は、食事画像または食事に関するテキストのみです。ユーザーのUID・氏名・メールアドレスはOpenAIに送信されません。</li>
        <li>OpenAI, Inc.はAPIデータ使用ポリシー（https://openai.com/policies/usage-policies）に基づきこれらのデータを取り扱います。API経由で送信されたデータはOpenAIのモデル学習には使用されません（2023年3月以降のポリシーによる）。</li>
        <li>AI解析の利用回数は以下のとおりです（Cloud Firestore：users/{"{uid}"}/usage_limitsで管理）。
          <ul>
            <li>無料プラン：1日あたり2回</li>
            <li>プレミアムプラン：1日あたり10回（将来提供予定）</li>
          </ul>
        </li>
        <li>OpenAIサービスの利用はOpenAIのプライバシーポリシー（https://openai.com/privacy）に従います。</li>
      </ol>

      <h2>第5条（Firebaseへの保存）</h2>
      <p>本サービスはGoogle LLCのFirebase（プロジェクトID：wellsy-53ae4）を基盤として利用しています。</p>

      <h3>1. Firebase Authentication</h3>
      <p>Apple Sign In・Google Sign In・メール/パスワードによるユーザー認証を処理します。認証情報（UID・メールアドレス・認証プロバイダ情報）が保存されます。</p>

      <h3>2. Cloud Firestore</h3>
      <p>以下のデータが保存されます（データ保存リージョン：asia-northeast1 東京）。</p>
      <ul>
        <li>users/{"{uid}"}：表示名、プロフィール画像URL、言語、タイムゾーン、プレミアム状態、FCMトークン</li>
        <li>users/{"{uid}"}/meal_logs：食事名・食事タイプ・食材・カロリー・PFC・食事画像URL・AIコメント・メモ</li>
        <li>users/{"{uid}"}/weight_logs：体重・体脂肪率・単位</li>
        <li>users/{"{uid}"}/sleep_logs：就寝時刻・起床時刻・睡眠時間</li>
        <li>users/{"{uid}"}/usage_limits：AI解析利用回数</li>
        <li>users/{"{uid}"}/streakData：ストリーク救済回数</li>
        <li>users/{"{uid}"}/groupSettings/{"{groupId}"}：ピン止め状態・通知設定・最終閲覧日時</li>
        <li>groups/{"{groupId}"}：グループ名・招待コード・オーナーUID・メンバー数・グループストリーク数</li>
        <li>groups/{"{groupId}"}/members：UID・表示名・アイコンURL・参加日・ロール・ストリーク日数</li>
        <li>groups/{"{groupId}"}/sharedMeals：投稿者情報・食事画像・カロリー・PFC・キャプション・有効期限（投稿後24時間）</li>
        <li>groups/{"{groupId}"}/sharedMeals/{"{id}"}/comments：コメント投稿者・本文</li>
        <li>groups/{"{groupId}"}/sharedMeals/{"{id}"}/reactions：リアクション種別・セルフィー画像URL</li>
        <li>groups/{"{groupId}"}/dailyStatus：メンバー別の食事・体重・睡眠記録状況</li>
        <li>groups/{"{groupId}"}/joinRequests：参加申請UID・ステータス・申請日時</li>
        <li>invite_codes/{"{code}"}：グループID・有効フラグ</li>
      </ul>

      <h3>3. Firebase Storage</h3>
      <p>以下の画像ファイルが保存されます。</p>
      <ul>
        <li>users/{"{uid}"}/profile/avatar.webp：プロフィール画像</li>
        <li>users/{"{uid}"}/meals/{"{mealId}"}/image.webp：食事画像</li>
        <li>groups/{"{groupId}"}/icon.webp：グループアイコン</li>
        <li>groups/{"{groupId}"}/reactions/{"{mealId}/{uid_timestamp}"}.webp：リアクション用セルフィー画像</li>
      </ul>

      <h3>4. Firebase Cloud Functions</h3>
      <p>以下の処理にCloud Functionsを利用します（リージョン：asia-northeast1）。</p>
      <ul>
        <li>OpenAI APIの呼び出し（AI食事解析）</li>
        <li>プッシュ通知の配信（グループ投稿・コメント通知等）</li>
        <li>グループ投稿の24時間後自動削除</li>
        <li>アカウント削除時のデータクリーンアップ（deleteUserData関数）</li>
      </ul>

      <h3>5. Firebase Cloud Messaging（FCM）</h3>
      <p>グループ投稿・コメント・リアクション等のプッシュ通知の配信に使用します。デバイス固有のFCMトークンをCloud Firestore（users/{"{uid}"}）に保存します。</p>

      <h3>6. Firebase利用規約・プライバシーポリシー</h3>
      <p>https://firebase.google.com/support/privacy</p>

      <h2>第6条（FCMトークン・プッシュ通知）</h2>
      <ol>
        <li>プッシュ通知の配信にはFirebase Cloud Messaging（FCM）を利用します。</li>
        <li>プッシュ通知権限はiOS・Androidともにアプリ起動時にユーザーへ明示的に許可を求め、同意を得た場合のみ取得します。</li>
        <li>本サービスが配信する通知の種類は以下のとおりです。
          <ul>
            <li>ローカル通知（端末内処理）：朝食・昼食・夕食・体重・睡眠リマインダー</li>
            <li>FCMプッシュ通知（サーバー経由）：グループ投稿の通知、コメント通知等</li>
          </ul>
        </li>
        <li>通知はいつでもデバイスの設定またはアプリ内設定から停止できます。</li>
      </ol>

      <h2>第7条（画像データの取扱い）</h2>
      <ol>
        <li><strong>食事画像：</strong>AI解析のためCloud Functions経由でOpenAIに送信します。Firebase Storageには解析後もリファレンス用に保持されますが、アカウント削除時に削除されます。</li>
        <li><strong>プロフィール画像：</strong>Firebase Storageに保存し、他のユーザーが閲覧できます（グループメンバー等）。</li>
        <li><strong>グループアイコン：</strong>グループメンバー全員が閲覧できます。</li>
        <li><strong>セルフィー画像（リアクション）：</strong>グループ内でリアクションを送信する際にセルフィー画像を添付できます。添付されたセルフィー画像は当該グループの全メンバーが閲覧できます。セルフィー画像はFirebase Storageに保存されます（groups/{"{groupId}"}/reactions/）。グループ投稿が24時間後に自動削除される際、関連するセルフィー画像も削除されます。</li>
      </ol>

      <h2>第8条（グループ機能での公開範囲）</h2>
      <ol>
        <li>グループ機能における情報の公開範囲は以下のとおりです。
          <ul>
            <li>表示名・プロフィール画像・ストリーク日数：グループの全メンバーに公開</li>
            <li>グループ投稿（食事画像・カロリー・PFC・キャプション）：グループの全メンバーに公開（投稿後24時間）</li>
            <li>コメント・リアクション・セルフィー画像：グループの全メンバーに公開</li>
            <li>日次記録状況（食事・体重・睡眠の記録有無）：グループの全メンバーに公開</li>
          </ul>
        </li>
        <li>グループに参加する際は、上記の情報が他のメンバーに公開されることに同意したものとみなします。</li>
        <li>食事記録の詳細な栄養情報・体重の実数値・睡眠の詳細データはグループメンバーには公開されません（記録有無のステータスのみ共有されます）。</li>
      </ol>

      <h2>第9条（データ保存場所）</h2>
      <ol>
        <li>Cloud Firestore・Firebase Storage・Firebase Cloud Functionsはasia-northeast1（東京）リージョンで稼働しており、ユーザーデータは日本のデータセンターに保存されます。</li>
        <li>Firebase Authenticationのデータは、Googleのグローバルインフラに保存されます（米国・EU等）。</li>
        <li>AI機能を利用した場合、食事画像またはテキストがOpenAI（米国）のサーバーへ送信されます。</li>
        <li>EU・EEAユーザーのデータをEEA域外（日本・米国）に移転するにあたっては、標準契約条項（SCCs）その他のGDPR第44条以下に定める適切な保護措置を講じます。</li>
        <li>韓国ユーザーのデータを国外（日本・米国）に移転するにあたっては、韓国PIPAの規定に従い、ユーザーの同意に基づき移転を行います。</li>
      </ol>

      <h2>第10条（データ保持期間）</h2>

      <table>
        <thead>
          <tr>
            <th>データの種類</th>
            <th>保持期間</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>アカウント情報（UID・メールアドレス・表示名等）</td>
            <td>アカウント有効期間中。削除申請・退会後30日以内に削除</td>
          </tr>
          <tr>
            <td>食事記録・体重記録・睡眠記録</td>
            <td>アカウント有効期間中。削除申請・退会後30日以内に削除</td>
          </tr>
          <tr>
            <td>食事画像・プロフィール画像</td>
            <td>アカウント有効期間中。削除申請・退会後30日以内に削除</td>
          </tr>
          <tr>
            <td>グループ投稿・コメント・リアクション</td>
            <td>投稿後24時間でCloud Functionsにより自動削除。ユーザー退会時にも削除</td>
          </tr>
          <tr>
            <td>セルフィー画像</td>
            <td>紐づくグループ投稿と同時（24時間後）に削除</td>
          </tr>
          <tr>
            <td>FCMトークン</td>
            <td>アカウント有効期間中。退会時に削除</td>
          </tr>
          <tr>
            <td>AI解析利用回数</td>
            <td>日次でリセット。アカウント削除時に削除</td>
          </tr>
          <tr>
            <td>ストリークデータ</td>
            <td>アカウント有効期間中。退会時に削除</td>
          </tr>
          <tr>
            <td>将来の課金・購入履歴</td>
            <td>法令上の保存義務期間（日本法上7年）</td>
          </tr>
          <tr>
            <td>サポートメッセージ・問い合わせ記録</td>
            <td>解決後3年</td>
          </tr>
        </tbody>
      </table>

      <h2>第11条（アカウント削除時のデータ処理）</h2>
      <ol>
        <li>ユーザーがアカウント削除を実行すると、Cloud Functions（deleteUserData関数）が起動し、以下のデータが削除されます。
          <ul>
            <li>Firebase Authentication上のアカウント情報</li>
            <li>Cloud Firestore上のユーザー個人データ（users/{"{uid}"}以下の全コレクション）</li>
            <li>Firebase Storage上のユーザー画像ファイル（プロフィール画像・食事画像）</li>
            <li>所属グループのmembersドキュメント</li>
            <li>ユーザーが作成したグループ投稿・コメント・リアクション・セルフィー画像</li>
          </ul>
        </li>
        <li>法令上の保存義務がある情報（将来の課金履歴等）は上記の対象外となる場合があります。</li>
        <li>削除処理完了後、データは復元できません。退会前にデータを確認・バックアップしてください。</li>
        <li>退会後も招待コード（invite_codes）等の一部のシステムデータが一定期間残存する場合がありますが、これらは個人情報に紐づかない形で管理されます。</li>
      </ol>

      <h2>第12条（第三者への提供・個人情報の販売）</h2>
      <ol>
        <li>運営者は以下の場合を除き、ユーザーの個人情報を第三者に提供しません。
          <ul>
            <li>ユーザーの事前の明示的な同意がある場合</li>
            <li>法令に基づく開示義務がある場合（裁判所命令、法執行機関からの要請等）</li>
            <li>人の生命・身体・財産の保護のために必要であり、同意取得が困難な場合</li>
          </ul>
        </li>
        <li>運営者はユーザーの個人情報を第三者に販売しません。CCPA上の「個人情報の販売」または「共有」（ターゲティング広告目的を含む）には該当しません。</li>
        <li>本サービスでは現時点でターゲティング広告は実施していません。</li>
      </ol>

      <h2>第13条（外部サービス一覧）</h2>

      <table>
        <thead>
          <tr>
            <th>サービス</th>
            <th>提供会社</th>
            <th>目的</th>
            <th>データ送信先</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Firebase Authentication</td>
            <td>Google LLC</td>
            <td>ユーザー認証</td>
            <td>Google（グローバル）</td>
          </tr>
          <tr>
            <td>Cloud Firestore</td>
            <td>Google LLC</td>
            <td>データベース</td>
            <td>asia-northeast1（東京）</td>
          </tr>
          <tr>
            <td>Firebase Storage</td>
            <td>Google LLC</td>
            <td>画像保存</td>
            <td>asia-northeast1（東京）</td>
          </tr>
          <tr>
            <td>Firebase Cloud Functions</td>
            <td>Google LLC</td>
            <td>サーバーサイド処理</td>
            <td>asia-northeast1（東京）</td>
          </tr>
          <tr>
            <td>Firebase Cloud Messaging</td>
            <td>Google LLC</td>
            <td>プッシュ通知</td>
            <td>Google（グローバル）</td>
          </tr>
          <tr>
            <td>OpenAI API</td>
            <td>OpenAI, Inc.</td>
            <td>AI食事解析</td>
            <td>米国</td>
          </tr>
          <tr>
            <td>Apple Sign In</td>
            <td>Apple Inc.</td>
            <td>認証</td>
            <td>Apple（米国）</td>
          </tr>
          <tr>
            <td>Google Sign In</td>
            <td>Google LLC</td>
            <td>認証</td>
            <td>Google（グローバル）</td>
          </tr>
          <tr>
            <td>RevenueCat</td>
            <td>RevenueCat, Inc.</td>
            <td>課金管理（将来予定）</td>
            <td>米国（将来予定）</td>
          </tr>
        </tbody>
      </table>

      <h2>第14条（セキュリティ対策）</h2>
      <ol>
        <li>運営者は個人情報の漏洩・滅失・き損・不正アクセスを防止するため、以下の措置を講じます。
          <ul>
            <li>通信の暗号化（TLS 1.2以上によるHTTPS通信）</li>
            <li>Firebase Security Rulesによるデータベースアクセス制御（ユーザー自身のデータのみアクセス可能）</li>
            <li>パスワードのハッシュ化（Firebase Authenticationによる管理）</li>
            <li>グループデータへのアクセス制御（メンバーのみ閲覧可能）</li>
            <li>Cloud Functionsによる安全なサーバーサイド処理（APIキーはクライアントに公開しない）</li>
          </ul>
        </li>
        <li>セキュリティインシデントが発生した場合、関連法令（個人情報保護法・GDPR等）に従い、監督機関への報告およびユーザーへの通知を行います。</li>
        <li>ユーザー自身もパスワードの適切な管理をお願いします。</li>
      </ol>

      <h2>第15条（EU・EEA在住ユーザーの権利 ― GDPR）</h2>
      <p>EU・EEA居住ユーザーはGDPRに基づき以下の権利を有します。</p>

      <h3>権利の一覧</h3>
      <ul>
        <li><strong>アクセス権（第15条）：</strong>処理される個人データへのアクセスおよびコピーを求める権利</li>
        <li><strong>訂正権（第16条）：</strong>不正確な個人データの訂正を求める権利</li>
        <li><strong>削除権（第17条、「忘れられる権利」）：</strong>一定の条件下で個人データの削除を求める権利</li>
        <li><strong>処理制限権（第18条）：</strong>一定の条件下で処理を制限することを求める権利</li>
        <li><strong>データポータビリティ権（第20条）：</strong>提供したデータを構造化された機械可読フォーマットで受け取り、他のサービスへ移送する権利</li>
        <li><strong>異議申立権（第21条）：</strong>正当な利益を根拠とする処理に対して異議を申し立てる権利</li>
        <li><strong>同意の撤回権：</strong>同意を根拠とする処理について、いつでも同意を撤回する権利（撤回前の処理の合法性には影響しません）</li>
      </ul>

      <h3>監督機関への苦情申立て</h3>
      <p>本ポリシーの取扱いに不満がある場合、ご自身の居住国のデータ保護監督機関（Supervisory Authority）に苦情を申し立てる権利を有します。欧州データ保護委員会（EDPB）：https://edpb.europa.eu/about-edpb/about-edpb/members_en</p>

      <h3>健康データの取扱い</h3>
      <p>食事記録・体重・睡眠データはGDPR第9条が定める特別カテゴリーの個人データ（健康に関するデータ）に該当する場合があります。これらは明示的な同意（第9条2項(a)号）に基づき処理します。</p>

      <h2>第16条（米国カリフォルニア州在住ユーザーの権利 ― CCPA/CPRA）</h2>
      <p>カリフォルニア州在住ユーザーはCCPA/CPRAに基づき以下の権利を有します。</p>

      <h3>権利の一覧</h3>
      <ul>
        <li><strong>知る権利：</strong>収集する個人情報の種類・目的・提供先等の開示を求める権利</li>
        <li><strong>削除権：</strong>収集した個人情報の削除を求める権利（一定の例外あり）</li>
        <li><strong>オプトアウト権：</strong>個人情報の「販売」または「共有」のオプトアウト権。<strong>運営者はユーザーの個人情報を第三者に販売せず、ターゲティング広告目的で共有しません。</strong></li>
        <li><strong>訂正権（CPRA追加）：</strong>不正確な個人情報の訂正を求める権利</li>
        <li><strong>処理制限権（CPRA追加）：</strong>センシティブな個人情報の利用・開示を制限する権利</li>
        <li><strong>差別禁止：</strong>権利行使を理由とする差別的取扱いを受けない権利</li>
      </ul>

      <h3>過去12ヶ月間の個人情報の取扱い</h3>
      <table>
        <thead>
          <tr>
            <th>収集カテゴリー</th>
            <th>開示先</th>
            <th>販売</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>識別子（UID・メールアドレス・表示名）</td>
            <td>Firebase（Google）</td>
            <td>なし</td>
          </tr>
          <tr>
            <td>健康情報（食事・体重・睡眠）</td>
            <td>Firebase（Google）、OpenAI（解析目的のみ）</td>
            <td>なし</td>
          </tr>
          <tr>
            <td>画像（食事・プロフィール・セルフィー）</td>
            <td>Firebase（Google）、OpenAI（食事画像のみ）</td>
            <td>なし</td>
          </tr>
        </tbody>
      </table>

      <h3>権利行使の方法</h3>
      <p>support@wellsy.app（件名：「CCPA Rights Request」）までご連絡ください。</p>

      <h2>第17条（韓国在住ユーザーの権利 ― PIPA）</h2>
      <ol>
        <li>韓国在住ユーザーは韓国個人情報保護法（PIPA）に基づき、個人情報の閲覧・修正・削除・処理停止を求める権利を有します。</li>
        <li>個人情報管理責任者：YUKI SATO（support@wellsy.app）</li>
        <li>韓国から収集した個人情報は、Firebase（Google、日本東京リージョン）・OpenAI（米国）へ移転されます。移転にあたってはPIPAの規定に従い、ユーザーの同意に基づき処理します。</li>
        <li>苦情申立て先：個人情報保護委員会（www.pipc.go.kr）または韓国インターネット振興院（privacy.kisa.or.kr）</li>
      </ol>

      <h2>第18条（未成年者のプライバシー）</h2>
      <ol>
        <li>本サービスは13歳未満（韓国：14歳未満、EU：16歳未満）の子供を対象としていません。</li>
        <li>該当年齢未満の方から意図せず個人情報を収集したことが判明した場合、速やかに削除します。</li>
        <li>support@wellsy.app までご連絡ください。</li>
      </ol>

      <h2>第19条（本ポリシーの変更）</h2>
      <ol>
        <li>法令の改正・サービスの変更等に伴い、本ポリシーを変更することがあります。</li>
        <li>重要な変更を行う場合は、変更効力発生日の30日前までにアプリ内通知またはメールでお知らせします。</li>
        <li>変更後のポリシーは本ページへの掲載をもって効力を生じます。</li>
      </ol>

      <h2>第20条（お問い合わせ・権利行使の窓口）</h2>
      <ul>
        <li><strong>個人情報管理者：</strong>YUKI SATO</li>
        <li><strong>メールアドレス：</strong><a href="mailto:support@wellsy.app">support@wellsy.app</a></li>
        <li><strong>対応言語：</strong>日本語・英語</li>
        <li><strong>対応時間：</strong>平日10:00〜18:00（日本時間）</li>
        <li><strong>返信目安：</strong>原則30日以内</li>
      </ul>
      <p>
        ご請求の際は、登録メールアドレスからお問い合わせください。本人確認のうえ対応いたします。
      </p>

      <p style={{ marginTop: "2.5rem", color: "#9ca3af", fontSize: "0.875rem" }}>
        制定：2026年6月2日　以上
      </p>
    </LegalPage>
  );
}
