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
  getAccountGroup,
} from "./userSelectors";

import {
  getParallelModals,
  getStandAloneModals,
  getParalleModal,
  getStandAloneModal,
  getSignupModal,
  getLoginModal,
  getFlowModal,
  getErrorModal,
  getWritePostModal,
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
  getAccountGroup,

  // modal
  getParallelModals,
  getStandAloneModals,
  getParalleModal,
  getStandAloneModal,
  getSignupModal,
  getLoginModal,
  getFlowModal,
  getErrorModal,
  getWritePostModal,

  // security
  getSecurity,

  // privacy
  getPrivacy,

  // notification
  getNotification,
};
