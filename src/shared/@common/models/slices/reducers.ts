import {
  setDisplay,
  setLanguage,
  setBgTheme,
  setColorTheme,
  setFontSize,
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
} from "./userSlice";

import {
  onParallelModalOpen,
  onParallelModalClose,
  onStandAlonOpen,
  onStandAlonClose,
  onErrorOpen,
  onErrorClose,
} from "./modalSlice";

import { setSecurity } from "./securitySlice";

import { setPrivacy } from "./privacySlice";

import { setNotification } from "./notificationSlice";

export {
  // display
  setDisplay,
  setLanguage,
  setBgTheme,
  setColorTheme,
  setFontSize,

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

  // modal
  onParallelModalOpen,
  onParallelModalClose,
  onStandAlonOpen,
  onStandAlonClose,
  onErrorOpen,
  onErrorClose,

  // security
  setSecurity,

  // privacy
  setPrivacy,

  // notification
  setNotification,
};
