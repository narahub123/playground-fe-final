import {
  getDisplay,
  getLanguage,
  getBgTheme,
  getColorTheme,
  getFontSize,
} from "./displaySelectors";

import {
  getUser,
  getUserId,
  getPassword,
  getPasswordCheck,
  getProfileImage,
  getBirth,
  getEmails,
  getGender,
  getIp,
  getLocation,
  getPhones,
  getUsername,
} from "./userSelectors";

import {
  getParallelModals,
  getSignupModal,
  getLoginModal,
  getFlowModal,
  getErrorModal,
  getWritePostModal,
  getParalleModal,
} from "./modalSelectors";

import { getSecurity } from "./securitySelectors";

import { getPrivacy } from "./privacySelectors";

import { getNotification } from "./notificationSelectors";

export {
  // display
  getDisplay,
  getLanguage,
  getBgTheme,
  getColorTheme,
  getFontSize,

  // user
  getUser,
  getUserId,
  getPassword,
  getPasswordCheck,
  getProfileImage,
  getBirth,
  getEmails,
  getGender,
  getIp,
  getLocation,
  getPhones,
  getUsername,

  // modal
  getParallelModals,
  getSignupModal,
  getLoginModal,
  getFlowModal,
  getErrorModal,
  getWritePostModal,
  getParalleModal,

  // security
  getSecurity,

  // privacy
  getPrivacy,

  // notification
  getNotification,
};
