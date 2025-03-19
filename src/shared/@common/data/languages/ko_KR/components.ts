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
        errorMessage: `은 이미 가입한 이메일입니다.`,
      },
      DISCONNECT: {
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
  InputUsernameSignup: {
    label: "사용자 이름",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "사용자 이름을 입력해주세요." },
      UNDER_MINIMUM: {
        regExp: USERNAME_UNDER_MINIMUM,
        errorMessage: `사용자 이름은 최소 ${USERNAME_MIN}자에서 최대 ${USERNAME_MAX}자까지 가능합니다.`,
      },
      EXCEED: {
        errorMessage: `사용자 이름은 최대 ${USERNAME_MAX}까지 가능합니다.`,
      },
    },
  },
  InputEmailSignup: {
    label: "이메일",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "이메일을 입력해주세요." },
      FORMAT: {
        regExp: EMAIL_FORMAT,
        errorMessage:
          "이메일 형식에 맞게 입력해주세요. \n예시) username@example.com",
      },
      DUPLICATE: {
        errorMessage: `이미 가입한 이메일입니다.`,
      },
      DISCONNECT: {
        errorMessage: `현재 서버와 연결이 되지 않습니다. 잠시 후 다시 시도해주세요.`,
      },
    },
  },
  InputPhoneSignup: {
    label: "휴대폰",
    error: {
      EMPTY: { regExp: EMPTY, errorMessage: "휴대폰을 입력해주세요." },
      FORMAT: {
        regExp: PHONE_FORMAT_KR,
        errorMessage: "휴대폰 형식에 맞게 입력해주세요.",
      },
      DUPLICATE: {
        errorMessage: `은 이미 가입한 이메일입니다.`,
      },
      DISCONNECT: {
        errorMessage: `현재 서버와 연결이 되지 않습니다. 잠시 후 다시 시도해주세요.`,
      },
    },
  },
  InputGender: {
    label: "성별",
    list: [
      { text: "남자", value: "m" },
      { text: "여자", value: "f" },
      { text: "양성", value: "b" },
      { text: "중성", value: "n" },
    ],
  },
  InputBirthYear: { label: "년", unit: "년" },
  InputBirthMonth: { label: "월", unit: "월" },
  InputBirthDate: { label: "일", unit: "일" },
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
  InputPasswordSignup: {
    label: "비밀번호",
    error: {
      REQUIRED: {
        errorMessage: "비밀번호를 먼저 설정해주세요.",
      },
      MISMATCH: {
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
        errorMessage: `비밀번호는 최대 ${PASSWORD_MAX}까지 가능합니다.`,
      },
    },
  },
  ScreenUserId: {
    title: "아이디를 설정해주세요.",
    expl: "@사용자 아이디는 고유한 나만의 아이디입니다. 나중에 언제든지 바꿀 수 있습니다.",
    recommend: "추천 아이디",
    button: "다음",
  },
  InputUserIdSignup: {
    label: "사용자 아이디",
    error: {
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
        errorMessage: `사용자 아이디는 최대 ${USERID_MAX}까지 가능합니다.`,
      },
      DUPLICATE: {
        errorMessage: `해당 아이디는 이미 존재하는 아이디입니다.`,
      },
      DISCONNECT: {
        errorMessage: `현재 서버와 연결이 되지 않습니다. 잠시 후 다시 시도해주세요.`,
      },
    },
  },
  ScreenProfileImage: {
    title: "프로필 사진 선택하기",
    expl: "마음에 드는 셀카 사진이 있나요? 지금 업로드하세요.",
    button: {
      skip: "지금은 넘어가기",
      next: "다음",
    },
  },
  LightboxCloseButton: {
    iconTitle: "닫기",
  },
  LightboxDisplayButton: {
    iconTitle: "표기",
  },
  LightboxNextButton: {
    iconTitle: "다음",
  },
  LIghtboxPrevButton: {
    iconTitle: "이전",
  },
  ImageUploader: {
    iconTitle: "이미지 추가",
  },
  ScreenNotifications: {
    title: "알림 켜기",
    expl: "지금 일어나는 일에 대한 소식을 받고 PlayGround을 최대한 활용해보세요.",
    button: {
      skip: "지금은 넘어가기",
      next: "다음",
    },
  },
  ScreenLanguage: {
    title: "사용하시는 언어가 무엇인가요?",
    expl: "원하늰 언어를 선택하여 게시물, 사람들, 트렌트를 볼 수 있습니다.",
    button: "회원 가입 하기",
    success: {
      title: "회원 가입 성공",
      description:
        "회원 가입이 완료되었습니다. 로그인 후 PlayGround를 즐기실 수 있습니다.",
    },
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },
  InputLanguage: {
    label: "언어",
    list: [
      { text: "한국어 : Korean", value: "ko-KR" },
      { text: "영어 : English", value: "en-US" },
      { text: "일본어 : Japanese", value: "ja-JP" },
      { text: "중국어 - 간체 : Chinese - Simplified", value: "zh-CN" },
      { text: "중국어 - 번체 : Chinese - Traditional", value: "zh-TW" },
    ],
  },
  FlowModal: {},
  ScreenAccount: {
    title: "내 PlayGround 계정 찾기",
    expl: "비밀번호를 변경하려면 계정에 연결된 이메일, 전화번호 또는 사용자 아이디를 입력해주세요.",
    button: "다음",
  },

  ScreenChooseAuthMethod: {
    title: "어떤 방법으로 인증 코드를 받으시겠어요?",
    expl: "비밀번호를 변경하기 전에 본인임을 인증을 해야 합니다.",
    expl1: "먼저 인증 코드를 받을 기기를 선택해 주세요.",
    button: "다음",
    cancel: "취소",
    msg: (item: string, type: string) =>
      `${item}로 ${type === "emails" ? "이메일" : "문자"} 보내기`,
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },

  ScreenVerificationCode: {
    title: "코드를 전송했습니다.",
    expl: "확인 코드를 받았는지 이메일을 확인해주세요. 새 코드를 요청하려면 돌아가서 인증을 다시 선택하세요.",
    button: "다음",
    back: "돌아가기",
    success: {
      title: "인증 코드 확인 완료",
      description:
        "인증 코드가 성공적으로 확인되었습니다. 설정에서 비밀번호를 변경하세요.",
    },
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },

  InputVerificationCode: {
    label: "코드를 입력하세요.",
  },

  InputAccountLogin: {
    label: "이메일, 휴대폰, 사용자 아이디",
    error: [],
    errMsg: (type: string) => {
      return `해당 ${
        type === "email" ? "이메일" : type === "phone" ? "전화번호" : "아이디"
      }는 존재하지 않습니다.`;
    },
  },
  ScreenSelectLogin: {
    title: "PlayGround 로그인하기",
    loginList: [
      { text: "구글로 로그인", img: google, type: "google" },
      { text: "네이버로 로그인", img: naver, type: "naver" },
      { text: "카카오로 로그인", img: kakao, type: "kakao" },
    ],
    divider: "또는",
    forgetPassword: "비밀번호를 잊으셨나요?",
    signup: "계정이 없으신가요?",
    signupButton: "가입하기",
    button: "다음",
  },

  ScreenLoginPassword: {
    title: "비밀번호를 입력하세요.",
    forgetPassword: "비밀번호 찾기",
    button: "로그인",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },

  InputAccountLoginDisabled: {
    label: (field: string) =>
      field === "email"
        ? "이메일"
        : field === "phone"
        ? "휴대 전화 번호"
        : "사용자 이름",
  },

  InputPasswordLogin: {
    label: "비밀번호",
  },

  Select: {},
  SelectYearSignup: {
    label: "년",
    unit: "년",
  },
  SelectMonthSignup: {
    label: "월",
    unit: "월",
  },
  SelectDateSignup: {
    label: "일",
    unit: "일",
  },
  SelectGenderSignup: {
    label: "성별",
    options: [
      { text: "남자", value: "m" },
      { text: "여자", value: "f" },
      { text: "양성", value: "b" },
      { text: "중성", value: "n" },
    ],
  },
  SelectLanguage: {
    label: "언어",
    options: [
      { text: "한국어 : Korean", value: "ko-KR" },
      { text: "영어 : English", value: "en-US" },
      { text: "일본어 : Japanese", value: "ja-JP" },
      { text: "중국어 - 간체 : Chinese - Simplified", value: "zh-CN" },
      { text: "중국어 - 번체 : Chinese - Traditional", value: "zh-TW" },
    ],
  },
  Header: {
    logoAlt: "홈으로 이동",
    homeTitle: "홈",
    exploreTitle: "탐색하기",
    notificationTitle: "알림",
    messageTitle: "메시지",
    profileTitle: "프로필",
  },
  CountBadge: {
    ariaLabel: (count: number) => `${count}개의 읽지 않은 알림이 있습니다.`,
  },
  NavMoreButton: {
    moreTitle: "더보기",
    itemTexts: {
      lists: "리스트",
      bookmarks: "북마크",
      monetization: "수익창출",
      ads: "광고",
      settings: "설정",
    },
  },
  WriteButton: {
    writeTitle: "게시하기",
  },
  WritePostModal: {},
  AccountButton: {
    title: "계정  ",
    add: "기존 계정 추가",
    manage: "계정 관리",
    logout: "계정에서 로그아웃",
    profile: "프로필 사진",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },
  AccountItem: {},
  AccountManageModal: {
    title: "계정",
    addBtn: "기존 계정 추가",
    expl: `PG 계정이 두 개 이상인 경우, 추가가 가능하며 쉽게 전환할 수 있습니다. 최대 5개까지 추가할 수 있습니다.`,
    logoutBtn: "모든 계정에서 로그아웃",
    errors: {
      title: getErrorTitle,
      description: getErrorDescription,
    },
  },
  LogoutModal: {
    title: "계정에서 로그아웃할까요?",
    all: "모든",
    expl1: "이 계정에만 적용되며, 다른 계정에서는 계속 로그인되어 있습니다.",
    expl2: "모든 브라우저 탭에 걸쳐 나의 모든 계정에 적용됩니다.",
    logoutBtn: "로그아웃",
    cancelBtn: "취소",
  },
  PostEditor: {},
  ProfileImage: {
    imageAlt: "프로필 이미지",
  },
  PostButton: { text: "게시하기" },
  MediaButton: { title: "미디어" },
  VoteButton: { title: "투표" },
  EmojiButton: { title: "이모티콘" },
  ReserveButton: { title: "예약하기" },
  LocationTagButton: { title: "위치 태그하기" },
  AddPostLink: {
    title: "게시물 추가하기",
  },
  ReplyPermissionControl: {
    header: {
      text: "답글을 달 수 있는 사람",
      description:
        "이 게시물에 답글을 달 수 있는 사람을 선택하세요. 멘션된 사람은 언제든지 답글을 달 수 있습니다.",
    },
    replyOptions: [
      {
        value: "all",
        text: "모든 사람",
        icon: "allIcon",
        description: "모든 사람이 답글을 달 수 있습니다.",
      },
      {
        value: "following",
        text: "내가 팔로우하는 계정",
        icon: "followingIcon",
        description: "내가 팔로우하는 계정은 답글을 쓸 수 있습니다.",
      },
      {
        value: "authenticated",
        text: "인증된 계정",
        icon: "verifiedIcon",
        description: "인증된 계정만 답글을 쓸 수 있습니다.",
      },
      {
        value: "mentioned",
        text: "내가 멘션하는 계정만",
        icon: "mentionedIcon",
        description: "내가 멘션하는 계정만 답글을 쓸 수 있습니다.",
      },
    ],
  },
  MediaPreview: {
    iconTitle: "삭제",
    imgAlt: "이미지 미리보기",
    videoTitle: "비디오 미리보기",
  },
  Vote: {
    voteDuration: "투표 기간",
    label: {
      date: "일",
      hour: "시간",
      minute: "분",
    },
    deleteBtn: "투표 삭제",
  },
  InputOption: {
    label: "선택",
    extra: "(선택 사항)",
  },
  AddOptionButton: {
    title: "추가",
  },

  EmojiDropdown: {
    tabs: [
      { char: "🕑", name: "최근" },
      { char: "😀", name: "스마일리 및 사람" },
      { char: "🐻", name: "동물 및 자연" },
      { char: "🍔", name: "음식 및 음료" },
      { char: "⚽", name: "활동" },
      { char: "🚔", name: "여행 및 장소" },
      { char: "💡", name: "사물" },
      { char: "🔣", name: "기호" },
      { char: "🚩", name: "깃발" },
    ],
  },
  EmojiSearch: {
    ph: "이모티콘 검색하기",
  },

  EmojiRecent: {
    title: "최근",
    clearBtn: "모두 지우기",
  },
  EmojiList: {},
};

export default components;
