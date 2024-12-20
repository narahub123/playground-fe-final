import { RootState } from "@app/store";

const getUsernameInSignin = (state: RootState) => state.signin.username;
const getPhoneInSignin = (state: RootState) => state.signin.phone;
const getEmailInSignin = (state: RootState) => state.signin.email;
const getBirthInSignin = (state: RootState) => state.signin.birth;
const getPasswordInSignin = (state: RootState) => state.signin.password;
const getUserIdInSignin = (state: RootState) => state.signin.userId;
const getProfileImageInSignin = (state: RootState) => state.signin.profileImage;
const getNotificationsInSignin = (state: RootState) =>
  state.signin.notifications;
const getLanguageInSignin = (state: RootState) => state.signin.language;

export {
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
