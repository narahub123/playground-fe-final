import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";
import {
  EMPTY,
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
    emailLabel: "メールアドレス",
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
  },
};

export default components;
