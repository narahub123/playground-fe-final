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
  setNotificationMessageInSignup,
  setNotificationCommentInSignup,
  setNotificationFollowingInSignup,
  setNotificationNewPostInSignup,
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
  setNotificationMessageInSignup,
  setNotificationCommentInSignup,
  setNotificationFollowingInSignup,
  setNotificationNewPostInSignup,

  // login
  loginRequset,
  loginSuccess,
  loginFailure,
};
