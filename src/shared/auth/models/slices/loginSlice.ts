import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LoginState {
  login: boolean;
  loading: boolean;
  error?: string;
}

const initialState: LoginState = {
  login: true,
  loading: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    // 로그인 요청
    loginRequset: (state) => {
      state.loading = true;
      state.error = undefined;
    },
    // 로그인 성공
    loginSuccess: (state) => {
      state.login = true;
      state.loading = false;
    },
    // 로그인 실채
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default loginSlice.reducer;
export const { loginRequset, loginSuccess, loginFailure } = loginSlice.actions;
