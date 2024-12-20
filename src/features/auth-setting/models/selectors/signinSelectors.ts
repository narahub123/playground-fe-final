import { RootState } from "@app/store";

const getUsername = (state: RootState) => state.signin.username;
const getPhone = (state: RootState) => state.signin.phone;
const getEmail = (state: RootState) => state.signin.email;
const getBirth = (state: RootState) => state.signin.birth;
const getPassword = (state: RootState) => state.signin.password;
const getUserId = (state: RootState) => state.signin.userId;
const getProfileImage = (state: RootState) => state.signin.profileImage;
const getNotifications = (state: RootState) => state.signin.notifications;
const getLanguage = (state: RootState) => state.signin.language;

export {
  getUsername,
  getPhone,
  getEmail,
  getBirth,
  getPassword,
  getUserId,
  getProfileImage,
  getNotifications,
  getLanguage,
};
