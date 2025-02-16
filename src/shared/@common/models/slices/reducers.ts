import {
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
  setEmail,
  setGender,
  setIp,
  setLocation,
  setPhone,
  setUsername,
} from "./userSlice";

import {
  onParallelModalOpen,
  onParallelModalClose,
  onErrorOpen,
  onErrorClose,
} from "./modalSlice";

import {} from "./securitySlice";

export {
  // display
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
  setEmail,
  setGender,
  setIp,
  setLocation,
  setPhone,
  setUsername,

  // modal
  onParallelModalOpen,
  onParallelModalClose,
  onErrorOpen,
  onErrorClose,

  // security
};
