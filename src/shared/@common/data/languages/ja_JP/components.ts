import {
  birthDateList,
  birthMonthList,
  birthYearList,
} from "@features/auth-email/data";

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
