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
        eyeoff: "비밀번호 숨기기",
        eye: "비밀번호 보이기",
      },
    },
  },
  Dropdown: {
    emptyResult: "해당 키워드로 검색된 결과가 없습니다.",
  },
  Modal: {
    ModalCloseButton: {
      iconTitle: "닫기",
    },
  },
  PersonalInfoScreen: {
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
  PasswordScreen: {
    title: "비밀번호가 필요합니다.",
    expl: "8자 이상이어야 합니다.",
  },
};

export default components;
