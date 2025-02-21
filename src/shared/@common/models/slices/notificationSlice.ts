import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { clearUserState } from "./userSlice";

interface NotificationState {
  // 퀄리티 필터
  isQualityFilterEnabled: boolean;

  // 뮤트 알림
  isNotificationMuted: boolean;
  notificationMuteRules: {
    isMutedForNotFollowing: boolean;
    isMutedForNotFollower: boolean;
    isMutedForNewAccount: boolean;
    isMutedForDefaultProfile: boolean;
    isMutedForEmailAuthenticated: boolean;
    isMutedForPhoneAuthenticated: boolean;
  };

  // 푸시 알림
  isPushNotificationEnabled: boolean;
  pushNotificationSettings: {
    posts: boolean;
    replies: "custom" | "all" | "off";
    reposts: "custom" | "all" | "off";
    likes: "custom" | "all" | "off";
    photoTagsEnabled: boolean;
    newFollowersEnabled: boolean;
    messagesEnabled: boolean;
    replyMessages: "mine" | "all" | "off";
    newContactsJoined: boolean;
    topicsEnabled: boolean;
    newsAndSportsEnabled: boolean;
    recommendationsEnabled: boolean;
    momentsEnabled: boolean;
    liveStreamsEnabled: boolean;
    otherLiveStreamsEnabled: boolean;
    alertsAndUrgentEnabled: boolean;
    professionalUpdatesEnabled: boolean;
  };

  // 이메일 알림
  isEmailNotificationEnabled: boolean;
  emailNotificationSettings: {
    newNotificationEnabled: boolean;
    messagesEnabled: boolean;
    postsSentByEmailEnabled: boolean;
    popularPosts: "daily" | "weekly" | "frequently" | "off";
  };

  emailSpecialNotifications: {
    myStatisticsEnabled: boolean;
    pgUpdatesEnabled: boolean;
    pgTipsEnabled: boolean;
    pgRecentActivityEnabled: boolean;
    pgPartnersEnabled: boolean;
    pgSurveyEnabled: boolean;
    pgRecommendedAccountsEnabled: boolean;
    pgRecentFollowingsEnabled: boolean;
    pgBusinessNewsEnabled: boolean;
  };
}

const initialState: NotificationState = {
  // 퀄리티 필터
  isQualityFilterEnabled: false,

  // 뮤트 알림
  isNotificationMuted: false,
  notificationMuteRules: {
    isMutedForNotFollowing: false,
    isMutedForNotFollower: false,
    isMutedForNewAccount: false,
    isMutedForDefaultProfile: false,
    isMutedForEmailAuthenticated: false,
    isMutedForPhoneAuthenticated: false,
  },

  // 푸시 알림
  isPushNotificationEnabled: true,
  pushNotificationSettings: {
    posts: false,
    replies: "off",
    reposts: "off",
    likes: "off",
    photoTagsEnabled: false,
    newFollowersEnabled: false,
    messagesEnabled: false,
    replyMessages: "mine",
    newContactsJoined: false,
    topicsEnabled: false,
    newsAndSportsEnabled: false,
    recommendationsEnabled: false,
    momentsEnabled: false,
    liveStreamsEnabled: false,
    otherLiveStreamsEnabled: false,
    alertsAndUrgentEnabled: false,
    professionalUpdatesEnabled: false,
  },

  // 이메일 알림
  isEmailNotificationEnabled: true,
  emailNotificationSettings: {
    newNotificationEnabled: false,
    messagesEnabled: false,
    postsSentByEmailEnabled: false,
    popularPosts: "off",
  },

  emailSpecialNotifications: {
    myStatisticsEnabled: false,
    pgUpdatesEnabled: false,
    pgTipsEnabled: false,
    pgRecentActivityEnabled: false,
    pgPartnersEnabled: false,
    pgSurveyEnabled: false,
    pgRecommendedAccountsEnabled: false,
    pgRecentFollowingsEnabled: false,
    pgBusinessNewsEnabled: false,
  },
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    clearNotificationState: () => initialState,
    setNotification: (state, action: PayloadAction<NotificationState>) => {
      return action.payload;
    },
  },
});

export default notificationSlice.reducer;

export const { clearNotificationState, setNotification } =
  notificationSlice.actions;
