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
  getUserInSignup,
  getDeviceInSignup,
  getIpInSignup,
  getAddressInSignup,
} from "./signupSelectors";

export {
  // login
  getLogin,

  // signup
  getUserInSignup,
  getUsernameInSignup,
  getPhoneInSignup,
  getEmailInSignup,
  getBirthInSignup,
  getPasswordInSignup,
  getUserIdInSignup,
  getProfileImageInSignup,
  getNotificationsInSignup,
  getLanguageInSignup,
  getDeviceInSignup,
  getIpInSignup,
  getAddressInSignup,
};
