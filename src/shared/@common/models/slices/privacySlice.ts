import { createSlice } from "@reduxjs/toolkit";

interface PrivacyState {}

const initialState: PrivacyState = {};

const privacySlice = createSlice({
  name: "privacy",
  initialState,
  reducers: {},
});

export default privacySlice.reducer;

export const {} = privacySlice.actions;
