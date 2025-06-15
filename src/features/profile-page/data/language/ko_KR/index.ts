import {
  EMPTY,
  USERNAME_MAX,
  USERNAME_MIN,
  USERNAME_UNDER_MINIMUM,
} from "@shared/@common/constants";

const profilepage_kr = {
  ProfilePageTab: {
    tabs: {
      article: "게시물",
      with_replies: "답글",
      media: "미디어",
      likes: "마음에 들어요",
    },
  },
  ProfileSettingsContent: {
    title: "프로필 수정",
    save: "저장",
  },
  InputUsername: {
    label: "이름",
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
  InputPlace: {
    label: "위치",
    error: {},
  },
  InputWebsite: {
    label: "웹사이트",
    error: {},
  },
  InputIntro: {
    label: "자기 소개",
    error: {},
  },
  BirthTab: {
    label: "생년월일",
  },
  BirthConfirm: {},
  BirthWrapper: {
    header1: "생년월일",
    cancel: "취소",
    expl1:
      "계정을 사용하는 사람의 생년월일을 입력해 주세요. 비즈니스, 이벤트 또는 고양이를 위한 계정인 경우에도 마찬가지입니다.",
    expl2:
      "개인정보 처리방침에 설명되어 있듯이, X는 광고를 포함한 사용자 경험을 맞춤 설정하기 위해 사용자의 연령을 사용합니다.",
    header2: "공개대상",
    expl3: "X에서 내 생일을 공개할 대상을 정할 수 있습니다.",
    remove: "생년월일 삭제",
  },
  SelectYear: {
    label: "년",
    unit: "년",
  },
  SelectMonth: {
    label: "월",
    unit: "월",
  },
  SelectDate: {
    label: "일",
    unit: "일",
  },
};

export default profilepage_kr;
