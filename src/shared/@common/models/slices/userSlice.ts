import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  password: string;
  password_check: string;
}

const initialState: UserState = {
  password: "",
  password_check: "",
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
  },
});

export default userSlice.reducer;

export const { setPassword, setPasswordCheck } = userSlice.actions;
