import { MoreMyOptionType, MoreOptionType } from "@shared/pages/ui/Post";

const post_kr = {
  RepostInfo: {
    text: "님이 재게시함",
  },
  useRelativeTime: {
    now: "지금",
    min: "분",
    hour: "시간",
  },
  MoreButton: {
    title: "더 보기",
  },
  MoreOption: {
    text: (
      option: MoreOptionType | MoreMyOptionType,
      userId?: string,
      toggle?: boolean
    ) => {
      switch (option) {
        case "following":
          return `@${userId} 님 ${toggle ? "언팔로우" : "팔로우"}하기`;
        case "list":
          return `리스트에서 @${userId} 추가/삭제하기`;
        case "mute":
          return `@${userId} 님 ${toggle ? "뮤트 해제" : "뮤트"}하기`;
        case "block":
          return `@${userId} 님 ${toggle ? "차단 해제" : "차단"}하기`;
        case "view":
          return `게시물 참여수 조회`;
        case "embed":
          return `게시물 담기`;
        case "report":
          return `게시물 신고하기`;
        case "groupNote":
          return `그룹 노트 요청하기`;
        case "delete":
          return `삭제하기`;
        case "main":
          return `내 프로필 메인에 올리기`;
        case "replyOption":
          return `답글을 달 수 있는 사람변경하기`;
        case "analytics":
          return `게시물 애널리틱스 조회`;
      }
    },
  },
  ProfileDropdown: {
    stats: {
      followings: "팔로우 중",
      followers: "팔로워",
    },
  },
  StatusButton: {
    text: {
      follow: "팔로우",
      following: "팔로잉",
      unfollow: "언팔로우",
      blocking: "차단 중",
      unblock: "차단해제",
    },
  },
  CoFollowers: {
    text: (coFollowers: string[]) => {
      if (coFollowers.length === 0) return "";
      const presentors = coFollowers
        .filter((_, idx) => idx < 2)
        .map((f) => `${f} 님`)
        .join(", ");

      return `${presentors}${coFollowers.length > 2 ? " 외 " : ""}${
        coFollowers.length > 2 ? coFollowers.length - 2 + "명" : ""
      }이 팔로우했습니다.`;
    },
  },
  PostImage: {
    imageAlt: "",
  },
  PostVideo: {
    videoTitle: "",
  },
  PostVideoControls: {},
  PostVideoIcon: {},
  PostVideoSettingsDropdown: {
    settings: { speed: "재생속도", quality: "동영상 속도" },
    speedWithUnit: (speed: number) => {
      if ([0.25, 0.75].includes(speed)) {
        return `${speed}배속`;
      } else return `${speed}x`;
    },
  },
  PostVote: {
    stats: {
      vote: "표",
      voteTime: (duration: string): string => {
        const now = Date.now();
        const end = new Date(duration).getTime();
        const diffInSeconds = Math.floor((end - now) / 1000);

        if (diffInSeconds <= 0) {
          return "최종 투표";
        }

        const days = Math.floor(diffInSeconds / 86400);
        if (days >= 1) {
          return `${days}일 남음`;
        }

        const hours = Math.floor((diffInSeconds % 86400) / 3600);
        if (hours >= 1) {
          return `${hours}시간 남음`;
        }

        const minutes = Math.ceil(((diffInSeconds % 86400) % 3600) / 60);
        return `${minutes}분 남음`;
      },
    },
  },
  PostStats: {
    views: "조회수",
  },
};

export default post_kr;
