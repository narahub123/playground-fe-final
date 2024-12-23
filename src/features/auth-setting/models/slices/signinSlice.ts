import { BirthType } from "@features/auth-setting/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SigninState {
  username: string; // 사용자 이름
  phone: string; // 휴대폰
  email: string; // 이메일
  birth: BirthType; // 생년월일
  password: string; // 비밀번호
  userId: string; // 사용자 아이디
  profileImage: string; // 프로필 사진
  notifications: string; // 알림
  language: string; // 언어
}

const initialState: SigninState = {
  username: "11",
  phone: "",
  email: "",
  birth: {
    year: "",
    month: "",
    date: "",
  },
  password: "",
  userId: "",
  profileImage: "",
  notifications: "",
  language: "",
};

const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setUsernameInSignIn: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPhoneInSignIn: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setEmailInSignIn: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setBirthInSignIn: (state, action: PayloadAction<BirthType>) => {
      state.birth = action.payload;
    },
    setPasswordInSignIn: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUserIdInSignIn: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setProfileImageInSignIn: (state, action: PayloadAction<string>) => {
      state.profileImage = action.payload;
    },
    setNotificationsInSignIn: (state, action: PayloadAction<string>) => {
      state.notifications = action.payload;
    },
    setLanguageInSignIn: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export default signinSlice.reducer;
export const {
  setUsernameInSignIn,
  setPhoneInSignIn,
  setEmailInSignIn,
  setBirthInSignIn,
  setPasswordInSignIn,
  setUserIdInSignIn,
  setProfileImageInSignIn,
  setNotificationsInSignIn,
  setLanguageInSignIn,
} = signinSlice.actions;
