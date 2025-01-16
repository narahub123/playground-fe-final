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
  setNotificationsMessagesInSignup,
  setNotificationsRepliesInSignup,
  setNotificationsNewFollowerInSignup,
  setNotificationsPostsInSignup,
  setDeviceInSignup,
  setIpInSignup,
  setLocationInSignup,
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
  setNotificationsMessagesInSignup,
  setNotificationsRepliesInSignup,
  setNotificationsNewFollowerInSignup,
  setNotificationsPostsInSignup,
  setDeviceInSignup,
  setIpInSignup,
  setLocationInSignup,

  // login
  loginRequset,
  loginSuccess,
  loginFailure,
};
