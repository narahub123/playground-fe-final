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

const signinSlice = createSlice({
  name: "signin",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload;
    },
    setPhone: (state, action: PayloadAction<string>) => {
      state.phone = action.payload;
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    setBirth: (state, action: PayloadAction<BirthType>) => {
      state.birth = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setProfileImage: (state, action: PayloadAction<string>) => {
      state.profileImage = action.payload;
    },
    setNotifications: (state, action: PayloadAction<string>) => {
      state.notifications = action.payload;
    },
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export default signinSlice.reducer;
export const {
  setUsername,
  setPhone,
  setEmail,
  setBirth,
  setPassword,
  setUserId,
  setProfileImage,
  setNotifications,
  setLanguage,
} = signinSlice.actions;
