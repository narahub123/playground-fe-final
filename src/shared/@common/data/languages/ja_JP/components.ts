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
        eyeoff: "パスワードを非表示",
        eye: "パスワードを表示",
      },
    },
  },
  Dropdown: {
    emtpyResult: "指定したキーワードで結果が見つかりません。",
  },
  Modal: {
    ModalCloseButton: {
      iconTitle: "閉じる",
    },
  },
  PersonalInfoScreen: {
    title: "アカウントを作成してください。",
    usernameLabel: "ユーザー名",
    usernameError: {
      EMPTY: { regExp: EMPTY, errorMessage: "ユーザー名を入力してください。" },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `ユーザー名は最低 ${USERNAME_MIN} 文字、最大 ${USERNAME_MAX} 文字までです。`,
      },
      EXCEED: {
        regExp: "",
        errorMessage: `ユーザー名は最大 ${USERNAME_MAX} 文字までです。`,
      },
    },
    emailLabel: "メールアドレス",
    emailError: {
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "メールアドレスを入力してください。",
      },
      FORMAT: {
        regExp: EMAIL_FORMAT,
        errorMessage:
          "メールアドレスの形式を正しく入力してください。 \n例) username@example.com",
      },
      DUPLICATE: {
        regExp: "",
        errorMessage: "このメールアドレスは既に登録されています。",
      },
      DISCONNECT: {
        regExp: "",
        errorMessage:
          "現在サーバーに接続できません。しばらくしてから再試行してください。",
      },
    },
    birthHeading: "生年月日",
    birthExpl:
      "この情報は公開されません。アカウントのテーマに関係なく、年齢を確認してください。",
    birthYearLabel: "年",
    birthMonthLabel: "月",
    birthDateLabel: "日",
    birthYearList: birthYearList,
    birthMonthList: birthMonthList,
    birthDateList: birthDateList,
    birthYearUnit: "年",
    birthMonthUnit: "月",
    birthDateUnit: "日",
    button: "次",
  },
  Button: {
    empty: "文字列またはアイコンを追加してください。",
    ariaLabel: {
      loading: "読み込み中",
      button: "ボタンをクリック",
    },
  },
  PasswordScreen: {
    title: "パスワードが必要です。",
    expl: "8文字以上である必要があります。",
  },
  InputPassword: {
    passwordLabel: "パスワード",
    passwordError: {
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "パスワードを入力してください。",
      },
      FORBIDDEN: {
        regExp: PASSWORD_FORBIDDEN,
        errorMessage: `パスワードは、小文字、大文字、数字、特殊文字(${PASSWORD_SPECIAL_CHARECTERS})で構成する必要があります。`,
      },
      UNDER_MINIMUM: {
        regExp: PASSWORD_UNDER_MINIMUM,
        errorMessage: `パスワードは${PASSWORD_MIN}文字以上${PASSWORD_MAX}文字以内である必要があります。`,
      },
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `パスワードには、小文字、大文字、数字、特殊文字(${PASSWORD_SPECIAL_CHARECTERS})がそれぞれ少なくとも1文字必要です。`,
      },
      EXCEED: {
        regExp: "",
        errorMessage: `パスワードは最大${PASSWORD_MAX}文字までです。`,
      },
    },
  },
};

export default components;
