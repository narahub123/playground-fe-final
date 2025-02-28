import {
  PASSWORD_INCOMPLETE,
  PASSWORD_SPECIAL_CHARECTERS,
} from "@shared/@common/constants";

const settings = {
  ExploreSection: {
    title: "設定",
  },
  AccountSection: {
    title: "帳戶",
    description: "查看帳戶信息、下載數據記錄或了解更多有關帳戶停用選項的資訊。",
  },
  SecurityAndAccountAccessSection: {
    title: "安全與帳戶訪問",
    description: "管理帳戶安全，並跟蹤帳戶使用情況，包括與帳戶連接的應用程式。",
  },
  PrivacyAndSafetySection: {
    title: "隱私與安全",
    description: "管理在PlayGround上顯示和共享的資訊。",
    heading1: "我的PlayGround活動",
    heading2: "數據共享與自定義",
  },
  NotificationsSection: {
    title: "通知",
    description: "選擇有關活動、興趣和推薦的通知類型。",
  },
  AccessibiltyAndDisplayAndLanguagesSection: {
    title: "可訪問性、顯示、語言",
    description: "管理PlayGround上內容的顯示方式。",
  },
  SettingsSearch: {
    placeholder: "搜尋設定",
  },
  BackIcon: {
    title: "返回",
  },
  AccountInfoSection: {
    title: "帳戶資訊",
  },
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

export default settings;
