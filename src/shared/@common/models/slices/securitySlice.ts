import { createSlice } from "@reduxjs/toolkit";

interface SecurityState {}

const initialState: SecurityState = {};

const securitySlice = createSlice({
  name: "security",
  initialState,
  reducers: {},
});

export default securitySlice.reducer;

export const {} = securitySlice.actions;
