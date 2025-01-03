import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";
import {
  EMAIL_FORMAT,
  EMPTY,
  USERNAME_MAX,
  USERNAME_MIN,
  USERNAME_UNDER_MINIMUM,
} from "@shared/@common/constants";

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
    usernameError: {
      EMPTY: { regExp: EMPTY, errorMessage: "請輸入用戶名。" },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `用戶名最少 ${USERNAME_MIN} 個字元，最多 ${USERNAME_MAX} 個字元。`,
      },
      EXCEED: {
        regExp: "",
        errorMessage: `用戶名最多可以包含 ${USERNAME_MAX} 個字元。`,
      },
    },
    emailLabel: "電子郵件",
    emailError: {
      EMPTY: { regExp: EMPTY, errorMessage: "請輸入電子郵件地址。" },
      FORMAT: {
        regExp: EMAIL_FORMAT,
        errorMessage: "請輸入有效的電子郵件格式。 \n範例: username@example.com",
      },
    },
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
