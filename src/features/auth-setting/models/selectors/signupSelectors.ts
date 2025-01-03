import { RootState } from "@app/store";

const getUsernameInSignup = (state: RootState) => state.signup.username;
const getPhoneInSignup = (state: RootState) => state.signup.phone;
const getEmailInSignup = (state: RootState) => state.signup.email;
const getBirthInSignup = (state: RootState) => state.signup.birth;
const getPasswordInSignup = (state: RootState) => state.signup.password;
const getUserIdInSignup = (state: RootState) => state.signup.userId;
const getProfileImageInSignup = (state: RootState) => state.signup.profileImage;
const getNotificationsInSignup = (state: RootState) =>
  state.signup.notifications;
const getLanguageInSignup = (state: RootState) => state.signup.language;

export {
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
