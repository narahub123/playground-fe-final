import { getLogin } from "./loginSelectors";
import {
  getUsernameInSignup,
  getPhoneInSignup,
  getEmailInSignup,
  getBirthInSignup,
  getPasswordInSignup,
  getUserIdInSignup,
  getProfileImageInSignup,
  getNotificationsInSignup,
  getLanguageInSignup,
} from "./signupSelectors";

export {
  // login
  getLogin,

  // signup
  getUsernameInSignup,
  getPhoneInSignup,
  getEmailInSignup,
  getBirthInSignup,
  getPasswordInSignup,
  getUserIdInSignup,
  getProfileImageInSignup,
  getNotificationsInSignup,
  getLanguageInSignup,
};
