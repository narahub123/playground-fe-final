import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationType } from "@shared/@common/types";
import { BirthType, GenderType } from "@shared/auth/types";

export interface UserState {
  username: string; // 사용자 이름
  phone: string; // 휴대폰
  email: string; // 이메일
  birth: BirthType; // 생년월일
  password: string; // 비밀번호
  password_check: string;
  userId: string; // 사용자 아이디
  profileImage: string; // 프로필 사진
  language: string; // 언어
  ip: string;
  location: LocationType;
  gender: GenderType;
}

const initialState: UserState = {
  username: "",
  phone: "",
  email: "",
  birth: {
    year: "",
    month: "",
    date: "",
  },
  password: "",
  password_check: "",
  userId: "",
  profileImage: "",
  language: "",
  ip: "",
  location: {
    country: "",
    state: "",
    city: "",
    county: "",
  },
  gender: "",
};

const userSlice = createSlice({
  name: "user",
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
    setIp: (state, action: PayloadAction<string>) => {
      state.ip = action.payload;
    },
    setLocation: (state, action: PayloadAction<LocationType>) => {
      state.location = action.payload;
    },
    setGender: (state, action: PayloadAction<GenderType>) => {
      state.gender = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
    setPasswordCheck: (state, action: PayloadAction<string>) => {
      state.password_check = action.payload;
    },
    setUserId: (state, action: PayloadAction<string>) => {
      state.userId = action.payload;
    },
    setProfileImage: (state, action: PayloadAction<string>) => {
      state.profileImage = action.payload;
    },
  },
});

export default userSlice.reducer;

export const {
  setPassword,
  setPasswordCheck,
  setUserId,
  setProfileImage,
  setBirth,
  setEmail,
  setGender,
  setIp,
  setLocation,
  setPhone,
  setUsername,
} = userSlice.actions;
