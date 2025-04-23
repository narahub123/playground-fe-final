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

import { setPrivacy, clearPrivacyState } from "./privacySlice";

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
