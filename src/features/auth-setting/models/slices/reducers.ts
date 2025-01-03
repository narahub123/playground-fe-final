import {
  setUsernameInSignup,
  setPhoneInSignup,
  setEmailInSignup,
  setBirthInSignup,
  setPasswordInSignup,
  setUserIdInSignup,
  setProfileImageInSignup,
  setNotificationsInSignup,
  setLanguageInSignup,
} from "./signupSlice";

import { loginRequset, loginSuccess, loginFailure } from "./loginSlice";

export {
  // signup
  setUsernameInSignup,
  setPhoneInSignup,
  setEmailInSignup,
  setBirthInSignup,
  setPasswordInSignup,
  setUserIdInSignup,
  setProfileImageInSignup,
  setNotificationsInSignup,
  setLanguageInSignup,

  // login
  loginRequset,
  loginSuccess,
  loginFailure,
};
