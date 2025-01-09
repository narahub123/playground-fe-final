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
        eyeoff: "비밀번호 숨기기",
        eye: "비밀번호 보이기",
      },
    },
  },
  InputField: {
    passwordConfirm: {},
  },
  Dropdown: {
    emptyResult: "해당 키워드로 검색된 결과가 없습니다.",
  },
  Modal: {
    ModalCloseButton: {
      iconTitle: "닫기",
    },
  },
  ScreenPersonalInfo: {
    title: "계정을 생성하세요.",
    usernameLabel: "사용자 이름",
    usernameError: {
      EMPTY: { regExp: EMPTY, errorMessage: "사용자 이름을 입력해주세요." },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `사용자 이름은 최소 ${USERNAME_MIN}자에서 최대 ${USERNAME_MAX}자까지 가능합니다.`,
      },
      EXCEED: {
        regExp: "",
        errorMessage: `사용자 이름은 최대 ${USERNAME_MAX}까지 가능합니다.`,
      },
    },
    emailLabel: "이메일",
    emailError: {
      EMPTY: { regExp: EMPTY, errorMessage: "이메일을 입력해주세요." },
      FORMAT: {
        regExp: EMAIL_FORMAT,
        errorMessage:
          "이메일 형식에 맞게 입력해주세요. \n예시) username@example.com",
      },
      DUPLICATE: {
        regExp: "",
        errorMessage: `은 이미 가입한 이메일입니다.`,
      },
      DISCONNECT: {
        regExp: "",
        errorMessage: `현재 서버와 연결이 되지 않습니다. 잠시 후 다시 시도해주세요.`,
      },
    },
    birthHeading: "생년월일",
    birthExpl:
      "이 정보는 공개적으로 표시되지 않습니다. 비즈니스, 반려동물 등 계정 주제에 상관없이 나의 연령을 확인하세요.",
    birthYearLabel: "년",
    birthMonthLabel: "월",
    birthDateLabel: "일",
    birthYearList: birthYearList,
    birthMonthList: birthMonthList,
    birthDateList: birthDateList,
    birthYearUnit: "년",
    birthMonthUnit: "월",
    birthDateUnit: "일",
    button: "다음",
  },
  Button: {
    empty: "문자열 혹은 아이콘을 넣어주세요.",
    ariaLabel: {
      loading: "로딩 중",
      button: "버튼 클릭",
    },
  },
  ScreenPassword: {
    title: "비밀번호가 필요합니다.",
    expl: "8자 이상이어야 합니다.",
    button: "다음",
  },
  InputPassword: {
    passwordLabel: {
      password: "비밀번호",
      confirm: "비밀번호 확인",
      current: "현재 비밀번호",
    },
    passwordError: {
      REQUIRED: {
        regExp: "",
        errorMessage: "비밀번호를 먼저 설정해주세요.",
      },
      MISMATCH: {
        regExp: "",
        errorMessage: "설정한 비밀번호와 일치하지 않습니다.",
      },
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "비밀번호를 입력해주세요.",
      },
      FORBIDDEN: {
        regExp: PASSWORD_FORBIDDEN,
        errorMessage: `비밀번호는 영문 소문자, 영문 대문자, 숫자, 특수문자(${PASSWORD_SPECIAL_CHARECTERS})로 작성되야 합니다.`,
      },
      UNDER_MINIMUM: {
        regExp: PASSWORD_UNDER_MINIMUM,
        errorMessage: `비밀번호를 최소 ${PASSWORD_MIN}자에서 최대 ${PASSWORD_MAX}로 작성되어야 합니다.`,
      },
      INCOMPLETE: {
        regExp: PASSWORD_INCOMPLETE,
        errorMessage: `비밀번호는 영문 소문자, 영문 대문자, 숫자, 특수문자(${PASSWORD_SPECIAL_CHARECTERS})가 각각 적어도 1자 이상 필요합니다.`,
      },
      EXCEED: {
        regExp: "",
        errorMessage: `비밀번호는 최대 ${PASSWORD_MAX}까지 가능합니다.`,
      },
    },
  },
  ScreenUserId: {
    title: "아이디를 설정해주세요.",
    expl: "@사용자 아이디는 고유한 나만의 아이디입니다. 나중에 언제든지 바꿀 수 있습니다.",
    button: "다음",
  },
  InputUserId: {
    label: "사용자 아이디",
    userIdError: {
      EMPTY: {
        regExp: EMPTY,
        errorMessage: "사용자 아이디를 입력해주세요.",
      },
      FORBIDDEN: {
        regExp: USERID_FORBIDDEN,
        errorMessage: `사용자 아이디는 영문 소문자, 영문 대문자, 숫자, 특수문자(${USERID_SPECIAL_CHARACTERS})로 작성되야 합니다.`,
      },
      UNDER_MINIMUM: {
        regExp: USERID_UNDER_MINIMUM,
        errorMessage: `사용자 아이디는 최소 ${USERID_MIN}자에서 최대 ${USERID_MAX}로 작성되어야 합니다.`,
      },
      INCOMPLETE: {
        regExp: USERID_INCOMPLETE,
        errorMessage: `사용자 아이디는 영문 소문자, 영문 대문자, 숫자, 특수문자(${USERID_SPECIAL_CHARACTERS})가 각각 적어도 1자 이상 필요합니다.`,
      },
      EXCEED: {
        regExp: "",
        errorMessage: `사용자 아이디는 최대 ${USERID_MAX}까지 가능합니다.`,
      },
      DUPLICATE: {
        regExp: "",
        errorMessage: `해당 아이디는 이미 존재하는 아이디입니다.`,
      },
      DISCONNECT: {
        regExp: "",
        errorMessage: `현재 서버와 연결이 되지 않습니다. 잠시 후 다시 시도해주세요.`,
      },
    },
  },
};

export default components;
