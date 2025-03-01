import {
  PASSWORD_INCOMPLETE,
  PASSWORD_SPECIAL_CHARECTERS,
} from "@shared/@common/constants";

const change_password_jp = {
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

export default change_password_jp;
