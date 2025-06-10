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
};

export default profilepage_kr;
