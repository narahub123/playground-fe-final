import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DisplayState {
  language: string;
}

const initialState: DisplayState = {
  language: "ko-KR",
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
  },
});

export default displaySlice.reducer;

export const { setLanguage } = displaySlice.actions;
