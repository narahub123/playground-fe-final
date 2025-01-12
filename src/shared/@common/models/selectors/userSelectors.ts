import { RootState } from "@app/store";

const getUser = (state: RootState) => state.user;
const getUserId = (state: RootState) => state.user.userId;
const getPassword = (state: RootState) => state.user.password;
const getPasswordCheck = (state: RootState) => state.user.password_check;
const getProfileImage = (state: RootState) => state.user.profileImage;

export { getUser, getPassword, getPasswordCheck, getUserId, getProfileImage };
