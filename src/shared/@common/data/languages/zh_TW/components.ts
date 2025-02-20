import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";
import { google, kakao, naver } from "@shared/@common/assets";
import {
  EMAIL_FORMAT,
  EMPTY,
  PASSWORD_FORBIDDEN,
  PASSWORD_INCOMPLETE,
  PASSWORD_MAX,
  PASSWORD_MIN,
  PASSWORD_SPECIAL_CHARECTERS,
  PASSWORD_UNDER_MINIMUM,
  PHONE_FORMAT_KR,
  USERID_FORBIDDEN,
  USERID_INCOMPLETE,
  USERID_MAX,
  USERID_MIN,
  USERID_SPECIAL_CHARACTERS,
  USERID_UNDER_MINIMUM,
  USERNAME_MAX,
  USERNAME_MIN,
  USERNAME_UNDER_MINIMUM,
} from "@shared/@common/constants";
import ERRORS from "./errors";
const getErrorTitle = (code: keyof typeof ERRORS.ERROR_TITLE_CODE) => {
  return ERRORS.ERROR_TITLE_CODE[code];
};

const getErrorDescription = (
  code: keyof typeof ERRORS.ERROR_DESCRIPTION_CODE
) => {
  return ERRORS.ERROR_DESCRIPTION_CODE[code];
};

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
  ScreenPersonalInfo: {
    title: "創建帳戶。",
    usernameLabel: "用戶名",
    usernameError: {
      EMPTY: { regExp: EMPTY, errorMessage: "請輸入用戶名。" },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `用戶名最少 ${USERNAME_MIN} 個字元，最多 ${USERNAME_MAX} 個字元。`,
      },
      EXCEED: {
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
        errorMessage: "此電子郵件已註冊。",
      },
      DISCONNECT: {
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
  InputUsernameSignup: {
    label: "用戶名",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "請輸入用戶名。" },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `用戶名最少 ${USERNAME_MIN} 個字元，最多 ${USERNAME_MAX} 個字元。`,
      },
      EXCEED: {
        errorMessage: `用戶名最多可以包含 ${USERNAME_MAX} 個字元。`,
      },
    },
  },
  InputEmailSignup: {
    label: "電子郵件",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "請輸入電子郵件地址。" },
      FORMAT: {
        regExp: EMAIL_FORMAT,
        errorMessage: "請輸入有效的電子郵件格式。 \n範例: username@example.com",
      },
      DUPLICATE: {
        errorMessage: "此電子郵件已註冊。",
      },
      DISCONNECT: {
        errorMessage: "目前無法連接到伺服器。請稍後再試。",
      },
    },
  },
  InputPhoneSignup: {
    label: "手機號碼",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "請輸入手機號碼。" },
      FORMAT: {
        regExp: PHONE_FORMAT_KR,
        errorMessage: "請以正確的格式輸入手機號碼。",
      },
      DUPLICATE: {
        errorMessage: "該電子郵件已經註冊。",
      },
      DISCONNECT: {
        errorMessage: "無法連接到伺服器，請稍後再試。",
      },
    },
  },
  InputGender: {
    label: "性別",
    list: [
      { text: "男", value: "m" },
      { text: "女", value: "f" },
      { text: "雙性", value: "b" },
      { text: "中性", value: "n" },
    ],
  },
  InputBirthYear: { label: "年", unit: "年" },
  InputBirthMonth: { label: "月", unit: "月" },
  InputBirthDate: { label: "日", unit: "日" },
  Button: {
    empty: "請添加文字或圖示。",
    ariaLabel: {
      loading: "加載中",
      button: "點擊按鈕",
    },
  },
  ScreenPassword: {
    title: "需要密碼。",
    expl: "必須至少包含8個字元。",
    button: "下一個",
  },
  InputPasswordSignup: {
    label: "密碼",
    error: {
      REQUIRED: {
        errorMessage: "請先設定密碼。",
      },
      MISMATCH: {
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
        errorMessage: `密碼最多不能超過${PASSWORD_MAX}個字符。`,
      },
    },
  },
  ScreenUserId: {
    title: "請設定您的用戶ID。",
    expl: "@用戶ID是您獨有的ID。以後隨時可以更改。",
    recommend: "推薦ID",
    button: "下一步",
  },
  InputUserIdSignup: {
    label: "用戶ID",
    error: {
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "請輸入用戶ID。",
      },
      FORBIDDEN: {
        regExp: USERID_FORBIDDEN,
        errorMessage: `用戶ID必須由小寫字母、大寫字母、數字和特殊字符(${USERID_SPECIAL_CHARACTERS})組成。`,
      },
      UNDER_MINIMUM: {
        regExp: USERID_UNDER_MINIMUM,
        errorMessage: `用戶ID必須在${USERID_MIN}到${USERID_MAX}個字符之間。`,
      },
      INCOMPLETE: {
        regExp: USERID_INCOMPLETE,
        errorMessage: `用戶ID必須至少包含一個小寫字母、大寫字母、數字和特殊字符(${USERID_SPECIAL_CHARACTERS})。`,
      },
      EXCEED: {
        errorMessage: `用戶ID最多只能有${USERID_MAX}個字符。`,
      },
      DUPLICATE: {
        errorMessage: `該用戶ID已存在。`,
      },
      DISCONNECT: {
        errorMessage: `目前無法連接到伺服器，請稍後再試。`,
      },
    },
  },
  ScreenProfileImage: {
    title: "選擇頭像",
    expl: "有喜歡的自拍照嗎？ 現在上傳吧。",
    button: {
      skip: "暫時跳過",
      next: "下一步",
    },
  },
  LightboxCloseButton: {
    iconTitle: "關閉",
  },
  LightboxDisplayButton: {
    iconTitle: "顯示",
  },
  LightboxNextButton: {
    iconTitle: "下一步",
  },
  LightboxPrevButton: {
    iconTitle: "上一步",
  },
  ImageUploader: {
    iconTitle: "添加圖片",
  },
  ScreenNotifications: {
    title: "開啟通知",
    expl: "隨時掌握最新消息，充分利用 PlayGround。",
    button: {
      skip: "暫時跳過",
      next: "下一步",
    },
  },
  ScreenLanguage: {
    title: "您使用的語言是什麼？",
    expl: "選擇您偏好的語言以查看帖子、用戶和趨勢。",
    button: "註冊",
    success: {
      title: "註冊成功",
      description: "註冊已完成。登錄後即可享受PlayGround。",
    },
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },
  InputLanguage: {
    label: "語言",
    list: [
      { text: "韓語 : Korean", value: "ko-KR" },
      { text: "英語 : English", value: "en-US" },
      { text: "日語 : Japanese", value: "ja-JP" },
      { text: "中文 - 簡體 : Chinese - Simplified", value: "zh-CN" },
      { text: "中文 - 繁體 : Chinese - Traditional", value: "zh-TW" },
    ],
  },

  ScreenAccount: {
    title: "尋找我的 PlayGround 帳戶",
    expl: "要更改密碼，請輸入與您的帳戶關聯的電子郵件、手機號或用戶ID。",
    button: "下一步",
  },

  ScreenChooseAuthMethod: {
    title: "您想透過哪種方式接收驗證碼？",
    expl: "在更改密碼之前，您需要驗證身份。",
    expl1: "首先，請選擇接收驗證碼的設備。",
    button: "下一步",
    cancel: "取消",
    msg: (item: string, type: string) =>
      `發送${type === "emails" ? "電子郵件" : "簡訊"}到 ${item}`,
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },

  ScreenVerificationCode: {
    title: "代碼已發送",
    expl: "請檢查您的電子郵件，查看是否收到了確認碼。如需請求新代碼，請返回並重新選擇認證方法。",
    button: "下一步",
    back: "返回",
    success: {
      title: "驗證碼確認完成",
      description: "驗證碼已成功確認。請在設置中更改您的密碼。",
    },
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },

  InputVerificationCode: {
    label: "請輸入驗證碼。",
  },

  ScreenSelectLogin: {
    title: "登入 PlayGround",
    loginList: [
      { text: "使用 Google 登入", img: google, type: "google" },
      { text: "使用 Naver 登入", img: naver, type: "naver" },
      { text: "使用 Kakao 登入", img: kakao, type: "kakao" },
    ],
    divider: "或者",
    forgetPassword: "忘記密碼？",
    signup: "沒有帳號？",
    signupButton: "註冊",
    button: "下一步",
  },
  InputAccountLogin: {
    label: "電子郵件、手機號、用戶ID",
    error: [],
    errMsg: (type: string) => {
      return `該${
        type === "email" ? "電子郵件" : type === "phone" ? "手機號" : "用戶ID"
      }不存在。`;
    },
  },

  ScreenLoginPassword: {
    title: "請輸入密碼。",
    forgetPassword: "找回密碼",
    button: "登入",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },

  InputAccountLoginDisabled: {
    label: (field: string) =>
      field === "email"
        ? "電子郵件"
        : field === "phone"
        ? "手機號碼"
        : "用戶名",
  },

  InputPasswordLogin: {
    label: "密碼",
  },

  SelectYearSignup: {
    label: "年",
    unit: "年",
  },
  SelectMonthSignup: {
    label: "月",
    unit: "月",
  },
  SelectDateSignup: {
    label: "日",
    unit: "日",
  },
  SelectGenderSignup: {
    label: "性別",
    options: [
      { text: "男", value: "m" },
      { text: "女", value: "f" },
      { text: "雙性", value: "b" },
      { text: "中性", value: "n" },
    ],
  },
  SelectLanguage: {
    label: "語言",
    options: [
      { text: "韓語 : Korean", value: "ko-KR" },
      { text: "英語 : English", value: "en-US" },
      { text: "日語 : Japanese", value: "ja-JP" },
      { text: "中文 - 簡體 : Chinese - Simplified", value: "zh-CN" },
      { text: "中文 - 繁體 : Chinese - Traditional", value: "zh-TW" },
    ],
  },
  CountBadge: {
    ariaLabel: (count: number) => `您有${count}則未讀通知。`,
  },
  NavMoreButton: {
    moreTitle: "更多",
    itemTexts: {
      lists: "清單",
      bookmarks: "書籤",
      monetization: "營利",
      ads: "廣告",
      settings: "設定",
    },
  },
  WriteButton: {
    writeTitle: "發佈",
  },
  AccountManageModal: {
    title: "帳戶",
    addBtn: "新增現有帳戶",
    expl: `若您有兩個以上的PG帳戶，可新增並輕鬆切換。最多可新增5個帳戶。`,
    logoutBtn: "登出所有帳戶",
  },
};

export default components;
