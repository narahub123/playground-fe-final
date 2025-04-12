import { MoreOptionType } from "../../../types";

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
    text: (option: MoreOptionType, userId?: string, toggle?: boolean) => {
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
      }
    },
  },
};

export default post_kr;
