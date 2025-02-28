import {
  PASSWORD_INCOMPLETE,
  PASSWORD_SPECIAL_CHARECTERS,
} from "@shared/@common/constants";

const settings = {
  ExploreSection: {
    title: "設定",
  },
  AccountSection: {
    title: "アカウント",
    description:
      "アカウント情報を確認し、データ記録をダウンロードしたり、アカウント無効化オプションについて詳しく学びます。",
  },
  SecurityAndAccountAccessSection: {
    title: "セキュリティとアカウントアクセス",
    description:
      "アカウントのセキュリティを管理し、アカウントに接続されたアプリを含めたアカウント使用を追跡します。",
  },
  PrivacyAndSafetySection: {
    title: "プライバシーと安全",
    description: "PlayGroundで表示され共有される情報を管理します。",
    heading1: "私のPlayGround活動",
    heading2: "データ共有とカスタマイズ",
  },
  NotificationsSection: {
    title: "通知",
    description: "活動、興味、推奨に関する通知の種類を選択します。",
  },
  AccessibiltyAndDisplayAndLanguagesSection: {
    title: "アクセシビリティ、表示、言語",
    description: "PlayGroundでのコンテンツ表示方法を管理します。",
  },
  SettingsSearch: {
    placeholder: "設定を検索",
  },
  BackIcon: {
    title: "戻る",
  },
  AccountInfoSection: {
    title: "アカウント情報",
  },
  ChangePasswordSection: {
    title: "パスワード変更",
    expl: (numOfSession: number) =>
      `パスワードを変更すると、現在使用中のセッションを除くすべてのアクティブなXセッションからログアウトされます。アカウントへのアクセス権を持つ${numOfSession}個のアプリケーションには影響しません。`,
    error: {
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `パスワードには、少なくとも1つの小文字、1つの大文字、1つの数字、および1つの特殊文字（${PASSWORD_SPECIAL_CHARECTERS}）が含まれている必要があります。`,
      },
    },
    unmatched: "パスワードが一致しません。",
    btn: "保存",
  },
  InputNewPassword: {
    label: "新しいパスワード",
  },
  InputPasswordConfirm: {
    label: "パスワード確認",
  },
};

export default settings;
