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
  ScreenPersonalInfo: {
    title: "アカウントを作成してください。",
    usernameLabel: "ユーザー名",
    usernameError: {
      EMPTY: { regExp: EMPTY, errorMessage: "ユーザー名を入力してください。" },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `ユーザー名は最低 ${USERNAME_MIN} 文字、最大 ${USERNAME_MAX} 文字までです。`,
      },
      EXCEED: {
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
        errorMessage: "このメールアドレスは既に登録されています。",
      },
      DISCONNECT: {
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
  InputUsernameSignup: {
    label: "ユーザー名",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "ユーザー名を入力してください。" },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `ユーザー名は最低 ${USERNAME_MIN} 文字、最大 ${USERNAME_MAX} 文字までです。`,
      },
      EXCEED: {
        errorMessage: `ユーザー名は最大 ${USERNAME_MAX} 文字までです。`,
      },
    },
  },
  InputEmailSignup: {
    label: "メールアドレス",
    error: {
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
        errorMessage: "このメールアドレスは既に登録されています。",
      },
      DISCONNECT: {
        errorMessage:
          "現在サーバーに接続できません。しばらくしてから再試行してください。",
      },
    },
  },
  InputPhoneSignup: {
    label: "携帯電話",
    error: {
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "携帯電話番号を入力してください。",
      },
      FORMAT: {
        regExp: PHONE_FORMAT_KR,
        errorMessage: "正しい形式で携帯電話番号を入力してください。",
      },
      DUPLICATE: {
        errorMessage: "このメールアドレスはすでに登録されています。",
      },
      DISCONNECT: {
        errorMessage:
          "現在、サーバーに接続できません。しばらくしてから再度お試しください。",
      },
    },
  },
  InputGender: {
    label: "性別",
    list: [
      { text: "男性", value: "m" },
      { text: "女性", value: "f" },
      { text: "両性", value: "b" },
      { text: "中性", value: "n" },
    ],
  },
  InputBirthYear: { label: "年", unit: "年" },
  InputBirthMonth: { label: "月", unit: "月" },
  InputBirthDate: { label: "日", unit: "日" },
  Button: {
    empty: "文字列またはアイコンを追加してください。",
    ariaLabel: {
      loading: "読み込み中",
      button: "ボタンをクリック",
    },
  },
  ScreenPassword: {
    title: "パスワードが必要です。",
    expl: "8文字以上である必要があります。",
    button: "次",
  },
  InputPasswordSignup: {
    label: "パスワード",
    error: {
      REQUIRED: {
        errorMessage: "パスワードを先に設定してください。",
      },
      MISMATCH: {
        errorMessage: "設定したパスワードと一致しません。",
      },
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
        errorMessage: `パスワードは最大${PASSWORD_MAX}文字までです。`,
      },
    },
  },
  ScreenUserId: {
    title: "ユーザーIDを設定してください。",
    expl: "@ユーザーIDはあなただけのユニークなIDです。後からいつでも変更できます。",
    recommend: "おすすめのID",
    button: "次へ",
  },
  InputUserIdSignup: {
    label: "ユーザーID",
    error: {
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "ユーザーIDを入力してください。",
      },
      FORBIDDEN: {
        regExp: USERID_FORBIDDEN,
        errorMessage: `ユーザーIDは、小文字、大文字、数字、特殊文字(${USERID_SPECIAL_CHARACTERS})で構成する必要があります。`,
      },
      UNDER_MINIMUM: {
        regExp: USERID_UNDER_MINIMUM,
        errorMessage: `ユーザーIDは${USERID_MIN}文字以上${USERID_MAX}文字以内である必要があります。`,
      },
      INCOMPLETE: {
        regExp: USERID_INCOMPLETE,
        errorMessage: `ユーザーIDには、小文字、大文字、数字、特殊文字(${USERID_SPECIAL_CHARACTERS})がそれぞれ1文字以上含まれている必要があります。`,
      },
      EXCEED: {
        errorMessage: `ユーザーIDは最大${USERID_MAX}文字まで可能です。`,
      },
      DUPLICATE: {
        errorMessage: `このユーザーIDは既に存在しています。`,
      },
      DISCONNECT: {
        errorMessage: `現在、サーバーに接続できません。しばらくしてから再試行してください。`,
      },
    },
  },
  ScreenProfileImage: {
    title: "プロフィール写真を選択",
    expl: "お気に入りのセルフィーはありますか？ 今すぐアップロードしてください。",
    button: {
      skip: "今はスキップ",
      next: "次へ",
    },
  },
  LightboxCloseButton: {
    iconTitle: "閉じる",
  },
  LightboxDisplayButton: {
    iconTitle: "表示",
  },
  LightboxNextButton: {
    iconTitle: "次へ",
  },
  LightboxPrevButton: {
    iconTitle: "前へ",
  },
  ImageUploader: {
    iconTitle: "画像を追加",
  },
  ScreenNotifications: {
    title: "通知をオンにする",
    expl: "今起きていることを把握して、PlayGroundを最大限に活用しましょう。",
    button: {
      skip: "今はスキップ",
      next: "次へ",
    },
  },
  ScreenLanguage: {
    title: "ご利用の言語は何ですか？",
    expl: "お好きな言語を選択して、投稿や人、トレンドをご覧ください。",
    button: "登録する",
  },
  InputLanguage: {
    label: "言語",
    list: [
      { text: "韓国語 : Korean", value: "ko-KR" },
      { text: "英語 : English", value: "en-US" },
      { text: "日本語 : Japanese", value: "ja-JP" },
      { text: "中国語 - 簡体 : Chinese - Simplified", value: "zh-CN" },
      { text: "中国語 - 繁体 : Chinese - Traditional", value: "zh-TW" },
    ],
  },

  ScreenAccount: {
    title: "PlayGroundアカウントを探す",
    expl: "パスワードを変更するには、アカウントに登録されているメールアドレス、電話番号、またはユーザーIDを入力してください。",
    button: "次へ",
  },

  ScreenSelectLogin: {
    title: "PlayGroundにログイン",
    loginList: [
      { text: "Googleでログイン", img: google, type: "google" },
      { text: "Naverでログイン", img: naver, type: "naver" },
      { text: "Kakaoでログイン", img: kakao, type: "kakao" },
    ],
    divider: "または",
    forgetPassword: "パスワードをお忘れですか？",
    signup: "アカウントをお持ちでないですか？",
    signupButton: "登録",
    button: "次へ",
  },
  InputAccountLogin: {
    label: "メールアドレス、電話番号、ユーザーID",
    error: [],
    errMsg: (type: string) => {
      return `該当の${
        type === "email"
          ? "メールアドレス"
          : type === "phone"
          ? "電話番号"
          : "ユーザーID"
      }は存在しません。`;
    },
  },
  ScreenLoginPassword: {
    title: "パスワードを入力してください。",
    forgetPassword: "パスワードを探す",
    button: "ログイン",
    toastMessage: {
      title: "エラー",
      description:
        "パスワードが正しくありません。確認してもう一度お試しください。",
    },
  },

  InputAccountLoginDisabled: {
    label: (field: string) =>
      field === "email"
        ? "メールアドレス"
        : field === "phone"
        ? "電話番号"
        : "ユーザー名",
  },

  InputPasswordLogin: {
    label: "パスワード",
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
      { text: "男性", value: "m" },
      { text: "女性", value: "f" },
      { text: "両性", value: "b" },
      { text: "中性", value: "n" },
    ],
  },
  SelectLanguage: {
    label: "言語",
    options: [
      { text: "韓国語 : Korean", value: "ko-KR" },
      { text: "英語 : English", value: "en-US" },
      { text: "日本語 : Japanese", value: "ja-JP" },
      { text: "中国語 - 簡体 : Chinese - Simplified", value: "zh-CN" },
      { text: "中国語 - 繁体 : Chinese - Traditional", value: "zh-TW" },
    ],
  },
};

export default components;
