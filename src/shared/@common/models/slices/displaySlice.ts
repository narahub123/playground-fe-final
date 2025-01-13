import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BgThemeType,
  ColorThemeType,
  FontSizeType,
} from "@shared/@common/types";

export interface DisplayState {
  language: string;
  bgTheme: BgThemeType;
  colorTheme: ColorThemeType;
  fontSize: FontSizeType;
}

const initialState: DisplayState = {
  language: "ko-KR",
  bgTheme: "light",
  colorTheme: "cornflowerblue",
  fontSize: "b",
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
    setFontSize: (state, action: PayloadAction<FontSizeType>) => {
      state.fontSize = action.payload;
    },
  },
});

export default displaySlice.reducer;

export const { setLanguage, setBgTheme, setColorTheme, setFontSize } =
  displaySlice.actions;
