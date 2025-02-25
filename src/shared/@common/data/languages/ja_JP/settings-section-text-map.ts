import { ISectionTextMap } from "@shared/@common/types";

const sectionTextMap: ISectionTextMap = {
  ExploreSection: {
    account: {
      label: "アカウント",
    },
    securityAndAccountAccess: {
      label: "セキュリティとアカウントアクセス",
    },
    privacyAndSafety: {
      label: "プライバシーと安全",
    },
    notifications: {
      label: "通知",
    },
    accessibilityAndDisplayAndLanguage: {
      label: "アクセシビリティ、表示、言語",
    },
  },
  AccountSection: {
    accountInfo: {
      label: "アカウント情報",
      description: "電話番号やメールアドレスなどのアカウント情報を確認します。",
    },
    password: {
      label: "パスワード変更",
      description: "いつでもパスワードを変更できます。",
    },
    downloadData: {
      label: "データ記録をダウンロード",
      description:
        "アカウントに保存されている情報の種類に関するインサイトを得ることができます。",
    },
    deactivate: {
      label: "アカウント無効化",
      description: "アカウントを無効化する方法を確認します。",
    },
  },
  SecurityAndAccountAccessSection: {
    security: {
      label: "セキュリティ",
      description: "アカウントのセキュリティを管理します。",
    },
    appsAndSessions: {
      label: "アプリとセッション",
      description:
        "アプリやアカウントがログインした時点に関する情報を確認します。",
    },
    connectedAccounts: {
      label: "接続されたアカウント",
      description:
        "Google、Naver、KakaoアカウントをPlayGroundでのログイン用に管理します。",
    },
    delegate: {
      label: "委任",
      description: "共有アカウントを管理します。",
    },
  },
  PrivacyAndSafetySection: {
    audienceAndTagging: {
      label: "オーディエンス、メディア、タグ付け",
      description: "PlayGroundで他の人と共有する情報を管理します。",
    },
    myPosts: {
      label: "私の投稿",
      description: "投稿に関連する情報を管理します。",
    },
    contentISee: {
      label: "表示されるコンテンツ",
      description:
        "ユーザーの好みに基づいて、トピックや関心事に関連するPlayGroundに表示されるコンテンツを決定します。",
    },
    muteAndBlock: {
      label: "ミュートとブロック",
      description:
        "ミュートしたり、ブロックしたアカウント、単語、通知を管理します。",
    },
    directMessages: {
      label: "メッセージ",
      description: "誰が私に直接メッセージを送れるかを管理します。",
    },
    contacts: {
      label: "アカウント発見と連絡先",
      description:
        "アカウント発見設定を制御し、インポートした連絡先を管理します。",
    },
    adsPreferences: {
      label: "広告設定",
      description: "PlayGroundでの広告設定を管理します。",
    },
    locationInfo: {
      label: "位置情報",
      description: "PlayGroundの環境設定時に使用される位置情報を管理します。",
    },
  },
  NotificationsSection: {
    notification_filters: {
      label: "フィルター",
      description: "受け取りたい通知と受け取りたくない通知を選択してください。",
    },
    notification_preferences: {
      label: "環境設定",
      description: "異なるタイプの通知の環境設定を選択します。",
    },
  },
  AccessibiltyAndDisplayAndLanguageSection: {
    accessibility: {
      label: "アクセシビリティ",
      description: "コントラストや動作制限など、PlayGroundの環境を管理します。",
    },
    display: {
      label: "表示",
      description:
        "フォントサイズ、色、背景を管理します。これらの設定はこのブラウザのすべてのPlayGroundアカウントに適用されます。",
    },
    language: {
      label: "言語",
      description:
        "ユーザー体験をカスタマイズするために使用する言語を管理します。",
    },
    data: {
      label: "データ使用量",
      description:
        "PlayGroundは、このデバイスで使用するネットワークデータを制限します。",
    },
  },
};


export default sectionTextMap;
