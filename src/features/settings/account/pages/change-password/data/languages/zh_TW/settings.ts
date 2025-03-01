import {
  PASSWORD_INCOMPLETE,
  PASSWORD_SPECIAL_CHARECTERS,
} from "@shared/@common/constants";

const change_password_tw = {
  ChangePasswordSection: {
    title: "更改密碼",
    expl: (numOfSession: number) =>
      `更改密碼後，您將登出所有活躍的X會話（當前會話除外）。擁有您帳戶訪問權限的${numOfSession}個應用程式不會受到影響。`,
    error: {
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `密碼必須至少包含一個小寫字母、一個大寫字母、一個數字和一個特殊字符（${PASSWORD_SPECIAL_CHARECTERS}）。`,
      },
    },
    unmatched: "密碼不一致。",
    btn: "保存",
  },
  InputNewPassword: {
    label: "新密碼",
  },
  InputPasswordConfirm: {
    label: "確認密碼",
  },
};

export default change_password_tw;
