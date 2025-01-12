import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  password: string;
  password_check: string;
  userId: string;
  profileImage: string;
}

const initialState: UserState = {
  password: "",
  password_check: "",
  userId: "",
  profileImage: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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

export const { setPassword, setPasswordCheck, setUserId, setProfileImage } =
  userSlice.actions;
