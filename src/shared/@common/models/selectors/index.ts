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
  getEmail,
  getGender,
  getIp,
  getLocation,
  getPhone,
  getUsername,
} from "./userSelectors";

import {
  getParallelModals,
  getSignupModal,
  getLoginModal,
  getFlowModal,
  getErrorModal,
} from "./modalSelectors";

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
  getEmail,
  getGender,
  getIp,
  getLocation,
  getPhone,
  getUsername,

  // modal
  getParallelModals,
  getSignupModal,
  getLoginModal,
  getFlowModal,
  getErrorModal,
};
