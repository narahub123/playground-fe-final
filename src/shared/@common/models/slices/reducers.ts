import {
  setDisplay,
  setLanguage,
  setBgTheme,
  setColorTheme,
  setFontSize,
  clearDisplayState,
} from "./displaySlice";

import {
  setUserId,
  setBirth,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setEmails,
  setGender,
  setIp,
  setLocation,
  setPhones,
  setUsername,
  setUser,
  setAcccountGroup,
  clearUserState,
  setFollowers,
  setFollowings,
  setFollowing,
  setIntro,
  setIsAuthenticated,
  setIsAuthorized,
  setLockStatus,
  setProfileCoverImage,
  setUserLoading,
  setUserRole,
  setSkintoneType,
  setRecentEmojis,
  clearRecentEmojis,
  setBookmark,
  setPinnedPost,
  setUnfollowing,
} from "./userSlice";

import {
  onParallelModalOpen,
  onParallelModalClose,
  onStandAlonOpen,
  onStandAlonClose,
  onErrorOpen,
  onErrorClose,
  setVerified,
} from "./modalSlice";

import { setSecurity, clearSecurityState } from "./securitySlice";

import {
  setPrivacy,
  clearPrivacyState,
  setReplyOption,
  setMutedUser,
  setBlockedUser,
} from "./privacySlice";

import { setNotification, clearNotificationState } from "./notificationSlice";

import {
  setPosts,
  setLike,
  setPost,
  deletePost,
  deleteRepost,
  updatePin,
} from "./postSlice";

export {
  // display
  setDisplay,
  setLanguage,
  setBgTheme,
  setColorTheme,
  setFontSize,
  clearDisplayState,

  // user
  setUserId,
  setBirth,
  setBirthYear,
  setBirthMonth,
  setBirthDate,
  setEmails,
  setGender,
  setIp,
  setLocation,
  setPhones,
  setUsername,
  setUser,
  setAcccountGroup,
  clearUserState,
  setFollowers,
  setFollowings,
  setFollowing,
  setIntro,
  setIsAuthenticated,
  setIsAuthorized,
  setLockStatus,
  setProfileCoverImage,
  setUserLoading,
  setUserRole,
  setSkintoneType,
  setRecentEmojis,
  clearRecentEmojis,
  setBookmark,
  setPinnedPost,
  setUnfollowing,

  // modal
  onParallelModalOpen,
  onParallelModalClose,
  onStandAlonOpen,
  onStandAlonClose,
  onErrorOpen,
  onErrorClose,
  setVerified,

  // security
  setSecurity,
  clearSecurityState,

  // privacy
  setPrivacy,
  clearPrivacyState,
  setReplyOption,
  setMutedUser,
  setBlockedUser,

  // notification
  setNotification,
  clearNotificationState,

  // post
  setPosts,
  setLike,
  setPost,
  deletePost,
  deleteRepost,
  updatePin,
};
