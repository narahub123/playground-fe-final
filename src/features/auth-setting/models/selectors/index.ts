import { getLogin } from "./loginSelectors";
import {
  getUsernameInSignin,
  getPhoneInSignin,
  getEmailInSignin,
  getBirthInSignin,
  getPasswordInSignin,
  getUserIdInSignin,
  getProfileImageInSignin,
  getNotificationsInSignin,
  getLanguageInSignin,
} from "./signinSelectors";

export {
  // login
  getLogin,

  // signin
  getUsernameInSignin,
  getPhoneInSignin,
  getEmailInSignin,
  getBirthInSignin,
  getPasswordInSignin,
  getUserIdInSignin,
  getProfileImageInSignin,
  getNotificationsInSignin,
  getLanguageInSignin,
};
