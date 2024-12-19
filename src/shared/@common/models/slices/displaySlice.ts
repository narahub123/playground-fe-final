import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BgThemeType, ColorThemeType } from "@shared/@common/types";

interface DisplayState {
  language: string;
  bgTheme: BgThemeType;
  colorTheme: ColorThemeType;
}

const initialState: DisplayState = {
  language: "ko-KR",
  bgTheme: "light",
  colorTheme: "cornflowerblue",
};

const displaySlice = createSlice({
  name: "display",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setBgTheme: (state, action: PayloadAction<BgThemeType>) => {
      state.bgTheme = action.payload;
    },
    setColorTheme: (state, action: PayloadAction<ColorThemeType>) => {
      state.colorTheme = action.payload;
    },
  },
});

export default displaySlice.reducer;

export const { setLanguage, setBgTheme, setColorTheme } = displaySlice.actions;
