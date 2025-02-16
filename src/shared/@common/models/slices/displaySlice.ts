import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  BgThemeType,
  ColorThemeType,
  FontSizeType,
} from "@shared/@common/types";

export interface DisplayState {
  // 접근성
  isColorContrastEnabled: boolean;
  isMotionReduced: boolean;
  isImageDescriptionAdded: boolean;

  // 표시
  fontSize: FontSizeType;
  colorTheme: ColorThemeType;
  bgTheme: BgThemeType;

  // 언어
  language: string;

  // 데이터 사용량
  isDataSaverEnabled: boolean;
  isAutoplayEnabled: boolean;
}

const initialState: DisplayState = {
  // 접근성
  isColorContrastEnabled: false,
  isMotionReduced: false,
  isImageDescriptionAdded: false,

  // 표시
  fontSize: "b",
  colorTheme: "cornflowerblue",
  bgTheme: "light",

  // 언어
  language: "ko-KR",

  // 데이터 사용량
  isDataSaverEnabled: false,
  isAutoplayEnabled: true,
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
