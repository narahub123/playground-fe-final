import { RootState } from "@app/store";

const getUser = (state: RootState) => state.user;
const getUserId = (state: RootState) => state.user.userId;
const getPassword = (state: RootState) => state.user.password;
const getPasswordCheck = (state: RootState) => state.user.password_check;
const getProfileImage = (state: RootState) => state.user.profileImage;
const getBirth = (state: RootState) => state.user.birth;
const getEmail = (state: RootState) => state.user.email;
const getGender = (state: RootState) => state.user.gender;
const getIp = (state: RootState) => state.user.ip;
const getLocation = (state: RootState) => state.user.location;
const getPhone = (state: RootState) => state.user.phone;
const getUsername = (state: RootState) => state.user.username;

export {
  getUser,
  getPassword,
  getPasswordCheck,
  getUserId,
  getProfileImage,
  getBirth,
  getEmail,
  getGender,
  getIp,
  getLocation,
  getPhone,
  getUsername,
};
