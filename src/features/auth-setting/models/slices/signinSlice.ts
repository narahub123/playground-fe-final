import { createSlice } from "@reduxjs/toolkit";

interface SigninState {
  username: string;
  phone: string;
  email: string;
  birth: {
    year: string | number;
    month: string | number;
    date: string | number;
  };
  password: string;
  userId: string;
  profileImage: string;
  notifications: string;
  language: string;
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
  reducers: {},
});

export default signinSlice.reducer;
export const {} = signinSlice.actions;
