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
  updateUserBookmarks,
  setPinnedPost,
  setUnfollowing,
  toggleUserLikes,
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
  toggleFeedPostLike,
  setPost,
  deletePost,
  updatePin,
  updatePostBookmarks,
  toggleFeedThreadLike,
  setCommentBookmark,
} from "./feedSlice";

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
  updateUserBookmarks,
  setPinnedPost,
  setUnfollowing,
  toggleUserLikes,

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
  toggleFeedPostLike,
  setPost,
  deletePost,
  updatePin,
  updatePostBookmarks,
  toggleFeedThreadLike,
  setCommentBookmark,
};
