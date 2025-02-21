import {
  setDisplay,
  setLanguage,
  setBgTheme,
  setColorTheme,
  setFontSize,
  clearDisplayState,
} from "./displaySlice";

import {
  setPassword,
  setPasswordCheck,
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
} from "./userSlice";

import {
  onParallelModalOpen,
  onParallelModalClose,
  onStandAlonOpen,
  onStandAlonClose,
  onErrorOpen,
  onErrorClose,
} from "./modalSlice";

import { setSecurity, clearSecurityState } from "./securitySlice";

import { setPrivacy, clearPrivacyState } from "./privacySlice";

import { setNotification, clearNotificationState } from "./notificationSlice";

export {
  // display
  setDisplay,
  setLanguage,
  setBgTheme,
  setColorTheme,
  setFontSize,
  clearDisplayState,

  // user
  setPassword,
  setPasswordCheck,
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

  // modal
  onParallelModalOpen,
  onParallelModalClose,
  onStandAlonOpen,
  onStandAlonClose,
  onErrorOpen,
  onErrorClose,

  // security
  setSecurity,
  clearSecurityState,

  // privacy
  setPrivacy,
  clearPrivacyState,

  // notification
  setNotification,
  clearNotificationState,
};
