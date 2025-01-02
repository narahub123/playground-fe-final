import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";

const components = {
  Input: {
    iconTitle: {
      password: {
        eyeoff: "隱藏密碼",
        eye: "顯示密碼",
      },
    },
  },
  Dropdown: {
    emptyResult: "未找到符合該關鍵詞的結果。",
  },
  Modal: {
    ModalCloseButton: {
      iconTitle: "關閉",
    },
  },
  PersonalInfoScreen: {
    title: "創建帳戶。",
    usernameLabel: "用戶名",
    emailLabel: "電子郵件",
    birthHeading: "出生日期",
    birthExpl: "此信息不會公開顯示。無論帳戶主題如何，請確認您的年齡。",
    birthYearLabel: "年",
    birthMonthLabel: "月",
    birthDateLabel: "日",
    birthYearList: birthYearList,
    birthMonthList: birthMonthList,
    birthDateList: birthDateList,
    birthYearUnit: "年",
    birthMonthUnit: "月",
    birthDateUnit: "日",
  },
};

export default components;
