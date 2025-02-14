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
};
