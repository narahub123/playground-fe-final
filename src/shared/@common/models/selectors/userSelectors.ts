import { RootState } from "@app/store";

const getUser = (state: RootState) => state.user;
const getUserId = (state: RootState) => state.user.userId;
const getPassword = (state: RootState) => state.user.password;
const getPasswordCheck = (state: RootState) => state.user.password_check;
const getProfileImage = (state: RootState) => state.user.profileImage;
const getBirth = (state: RootState) => state.user.birth;
const getEmails = (state: RootState) => state.user.emails;
const getGender = (state: RootState) => state.user.gender;
const getIp = (state: RootState) => state.user.ip;
const getLocation = (state: RootState) => state.user.location;
const getPhones = (state: RootState) => state.user.phones;
const getUsername = (state: RootState) => state.user.username;

export {
  getUser,
  getPassword,
  getPasswordCheck,
  getUserId,
  getProfileImage,
  getBirth,
  getEmails,
  getGender,
  getIp,
  getLocation,
  getPhones,
  getUsername,
};
