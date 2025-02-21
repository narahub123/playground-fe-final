import {
  checkEmailDuplicateInSignupAPI,
  checkUserIdDuplicateInSignupAPI,
  checkPhoneDuplicationInSignupAPI,
} from "./signup";

import {
  verifyPasswordLoginAPI,
  getContactsByAccoutAPI,
  requestVerifacationCodeLoginAPI,
  checkVerificationCodeAPI,
} from "./login";

import { logoutAPI, logoutAllAPI } from "./logout";

export {
  // signup
  checkEmailDuplicateInSignupAPI,
  checkUserIdDuplicateInSignupAPI,
  checkPhoneDuplicationInSignupAPI,

  // login
  verifyPasswordLoginAPI,
  getContactsByAccoutAPI,
  requestVerifacationCodeLoginAPI,
  checkVerificationCodeAPI,

  // logout
  logoutAPI,
  logoutAllAPI,
};
