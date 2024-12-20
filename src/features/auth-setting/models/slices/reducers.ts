import {
  setUsernameInSignIn,
  setPhoneInSignIn,
  setEmailInSignIn,
  setBirthInSignIn,
  setPasswordInSignIn,
  setUserIdInSignIn,
  setProfileImageInSignIn,
  setNotificationsInSignIn,
  setLanguageInSignIn,
} from "./signinSlice";

import { loginRequset, loginSuccess, loginFailure } from "./loginSlice";

export {
  // signin
  setUsernameInSignIn,
  setPhoneInSignIn,
  setEmailInSignIn,
  setBirthInSignIn,
  setPasswordInSignIn,
  setUserIdInSignIn,
  setProfileImageInSignIn,
  setNotificationsInSignIn,
  setLanguageInSignIn,

  // login
  loginRequset,
  loginSuccess,
  loginFailure,
};
