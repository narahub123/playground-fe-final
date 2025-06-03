import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  MessageAllowSettings,
  MuteDuration,
  MuteTarget,
  TagTarget,
} from "@shared/@common/types";
import { ReplyOptionType } from "@shared/pages/ui/PostEditor/types";

interface PrivacyState {
  // 오디언스
  isPostPrivate: boolean;
  isVideoProtected: boolean;
  taggingSettings: {
    allowTagging: boolean;
    tagTarget: TagTarget;
  };

  // 내 게시물
  isSensitiveMediaTagged: boolean;
  isLocationInfoIncluded: boolean;

  // 표시되는 콘텐츠
  isSensitiveMediaDisplayed: boolean;
  isMutesAndBlocksRemoved: boolean;
  topics: string[];
  interests: string[];

  // 뮤트 및 차단
  blockedUsers: string[];
  mutedUsers: string[];
  mutedWords: string[];
  muteSettings: {
    isHomeFeedMuted: boolean;
    isNotificationMuted: boolean;
    muteTarget: MuteTarget;
    muteDuration: MuteDuration;
  };

  // 메시지
  messageAllowSettings: MessageAllowSettings;
  isMessageFiltered: boolean;
  isReadReceiptEnabled: boolean;

  // 계정 찾기 및 연락처
  isFindableByEmail: boolean;
  isFindableByPhone: boolean;
  contactList: string[];

  // 광고 환경 설정
  isBehavioralAdsAllowed: boolean;
  adAudiences: string[];

  // 위치 정보
  isLocationBasedAdsEnabled: boolean;
  visitedLocations: string[];

  // 댓글 옵션
  replyOption: ReplyOptionType;
}

const initialState: PrivacyState = {
  // 오디언스
  isPostPrivate: false,
  isVideoProtected: false,
  taggingSettings: {
    allowTagging: false,
    tagTarget: "all",
  },

  // 내 게시물
  isSensitiveMediaTagged: false,
  isLocationInfoIncluded: false,

  // 표시되는 콘텐츠
  isSensitiveMediaDisplayed: false,
  isMutesAndBlocksRemoved: true,
  topics: [],
  interests: [],

  // 뮤트 및 차단
  blockedUsers: [],
  mutedUsers: [],
  mutedWords: [],
  muteSettings: {
    isHomeFeedMuted: false,
    isNotificationMuted: false,
    muteTarget: "all",
    muteDuration: "forever",
  },

  // 메시지
  messageAllowSettings: "all",
  isMessageFiltered: false,
  isReadReceiptEnabled: false,

  // 계정 찾기 및 연락처
  isFindableByEmail: true,
  isFindableByPhone: true,
  contactList: [],

  // 광고 환경 설정
  isBehavioralAdsAllowed: true,
  adAudiences: [],

  // 위치 정보
  isLocationBasedAdsEnabled: false,
  visitedLocations: [],

  // 댓글 옵션
  replyOption: "all",
};

const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {
    clearPrivacyState: () => initialState,
    setPrivacy: (state, action: PayloadAction<PrivacyState>) => {
      return action.payload;
    },
    setReplyOption: (state, action: PayloadAction<ReplyOptionType>) => {
      state.replyOption = action.payload;
    },
    setMutedUser: (state, action: PayloadAction<string>) => {
      const mutedUsers = state.mutedUsers;
      const opponent = action.payload;

      if (mutedUsers.includes(opponent)) {
        state.mutedUsers = state.mutedUsers.filter(
          (mutedUser) => mutedUser !== opponent
        );
      } else {
        state.mutedUsers = [...state.mutedUsers, opponent];
      }
    },
    setBlockedUser: (state, action: PayloadAction<string>) => {
      const blockedUsers = state.blockedUsers;
      const opponent = action.payload;

      if (blockedUsers.includes(opponent)) {
        state.blockedUsers = state.blockedUsers.filter(
          (blockedUser) => blockedUser !== opponent
        );
      } else {
        state.blockedUsers = [...state.blockedUsers, opponent];
      }
    },
  },
});

export default privacySlice.reducer;

export const {
  setPrivacy,
  clearPrivacyState,
  setReplyOption,
  setMutedUser,
  setBlockedUser,
} = privacySlice.actions;
