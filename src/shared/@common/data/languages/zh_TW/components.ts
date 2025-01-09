import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";
import {
  EMAIL_FORMAT,
  EMPTY,
  PASSWORD_FORBIDDEN,
  PASSWORD_INCOMPLETE,
  PASSWORD_MAX,
  PASSWORD_MIN,
  PASSWORD_SPECIAL_CHARECTERS,
  PASSWORD_UNDER_MINIMUM,
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
      DUPLICATE: {
        regExp: "",
        errorMessage: "此電子郵件已註冊。",
      },
      DISCONNECT: {
        regExp: "",
        errorMessage: "目前無法連接到伺服器。請稍後再試。",
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
    button: "下一個",
  },
  Button: {
    empty: "請添加文字或圖示。",
    ariaLabel: {
      loading: "加載中",
      button: "點擊按鈕",
    },
  },
  PasswordScreen: {
    title: "需要密碼。",
    expl: "必須至少包含8個字元。",
    button: "下一個",
  },
  InputPassword: {
    passwordLabel: {
      password: "密碼",
      confirm: "確認密碼",
      current: "當前密碼",
    },
    passwordError: {
      REQUIRED: {
        regExp: "",
        errorMessage: "請先設定密碼。",
      },
      MISMATCH: {
        regExp: "",
        errorMessage: "密碼與設定的密碼不一致。",
      },
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "請輸入密碼。",
      },
      FORBIDDEN: {
        regExp: PASSWORD_FORBIDDEN,
        errorMessage: `密碼必須由小寫字母、大寫字母、數字和特殊字符(${PASSWORD_SPECIAL_CHARECTERS})組成。`,
      },
      UNDER_MINIMUM: {
        regExp: PASSWORD_UNDER_MINIMUM,
        errorMessage: `密碼長度必須在${PASSWORD_MIN}到${PASSWORD_MAX}字符之間。`,
      },
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `密碼必須至少包含一個小寫字母、一個大寫字母、一個數字和一個特殊字符(${PASSWORD_SPECIAL_CHARECTERS})。`,
      },
      EXCEED: {
        regExp: "",
        errorMessage: `密碼最多不能超過${PASSWORD_MAX}個字符。`,
      },
    },
  },
  ScreenUserId: {
    title: "請設定您的用戶ID。",
    expl: "@用戶ID是您獨有的ID。以後隨時可以更改。",
    button: "下一步",
  },
};

export default components;
