import { BirthType } from "@features/auth-setting/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SignupState {
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

const initialState: SignupState = {
  username: "",
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

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    setUsernameInSignup: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPhoneInSignup: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setEmailInSignup: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setBirthInSignup: (state, action: PayloadAction<BirthType>) => {
      state.birth = action.payload;
    },
    setBirthYearSignup: (state, action: PayloadAction<string>) => {
      state.birth.year = action.payload;
    },
    setBirthMonthSignup: (state, action: PayloadAction<string>) => {
      state.birth.month = action.payload;
    },
    setBirthDateSignup: (state, action: PayloadAction<string>) => {
      state.birth.date = action.payload;
    },
    setPasswordInSignup: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUserIdInSignup: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setProfileImageInSignup: (state, action: PayloadAction<string>) => {
      state.profileImage = action.payload;
    },
    setNotificationsInSignup: (state, action: PayloadAction<string>) => {
      state.notifications = action.payload;
    },
    setLanguageInSignup: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export default signupSlice.reducer;
export const {
  setUsernameInSignup,
  setPhoneInSignup,
  setEmailInSignup,
  setBirthInSignup,
  setBirthYearSignup,
  setBirthMonthSignup,
  setBirthDateSignup,
  setPasswordInSignup,
  setUserIdInSignup,
  setProfileImageInSignup,
  setNotificationsInSignup,
  setLanguageInSignup,
} = signupSlice.actions;
