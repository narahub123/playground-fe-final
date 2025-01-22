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
  isSignupModalOpen,
  isLoginModalOpen,
  isPasswordModalOpen,
  isErrorModalOpen,
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
  isSignupModalOpen,
  isLoginModalOpen,
  isPasswordModalOpen,
  isErrorModalOpen,
};
