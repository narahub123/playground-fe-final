import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BgThemeType } from "@shared/@common/types";

interface DisplayState {
  language: string;
  bgTheme: BgThemeType;
}

const initialState: DisplayState = {
  language: "ko-KR",
  bgTheme: "light",
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setBgTheme: (state, action: PayloadAction<BgThemeType>) => {
      state.language = action.payload;
    },
  },
});

export default displaySlice.reducer;

export const { setLanguage, setBgTheme } = displaySlice.actions;
