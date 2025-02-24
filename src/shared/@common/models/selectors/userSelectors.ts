import { RootState } from "@app/store";
import { IUser } from "@shared/@common/types";

const selectUser = (state: RootState) => state.user.data;
const selectUserId = (state: RootState) => state.user.data.userId;
const selectUsername = (state: RootState) => state.user.data.username;
const selectPhones = (state: RootState) => state.user.data.phones;
const selectEmails = (state: RootState) => state.user.data.emails;
const selectBirth = (state: RootState) => state.user.data.birth;
const selectGender = (state: RootState) => state.user.data.gender;
const selectUserRole = (state: RootState) => state.user.data.userRole;
const selectCountry = (state: RootState) => state.user.data.country;
const selectIp = (state: RootState) => state.user.data.ip;
const selectLocation = (state: RootState) => state.user.data.location;
const selectProfileImage = (state: RootState) => state.user.data.profileImage;
const selectProfileCoverImage = (state: RootState) =>
  state.user.data.profileCoverImage;
const selectIntro = (state: RootState) => state.user.data.intro;
const selectAccountGroup = (state: RootState) => state.user.data.accountGroup;
const selectFollowings = (state: RootState) => state.user.data.followings;
const selectFollowers = (state: RootState) => state.user.data.followers;
const selectIsAuthorized = (state: RootState) => state.user.data.isAuthorized;
const selectIsAuthenticated = (state: RootState) =>
  state.user.data.isAuthenticated;
const selectLockStatus = (state: RootState) => state.user.data.lockStatus;
const selectUserLoading = (state: RootState) => state.user.loading;
const selectUserField = (field: keyof IUser) => (state: RootState) =>
  state.user.data[field];

export {
  selectUser,
  selectUserLoading,
  selectUserField,
  selectUserId,
  selectProfileImage,
  selectBirth,
  selectEmails,
  selectGender,
  selectIp,
  selectLocation,
  selectPhones,
  selectUsername,
  selectAccountGroup,
  selectCountry,
  selectFollowers,
  selectFollowings,
  selectIntro,
  selectIsAuthenticated,
  selectIsAuthorized,
  selectLockStatus,
  selectProfileCoverImage,
  selectUserRole,
};
