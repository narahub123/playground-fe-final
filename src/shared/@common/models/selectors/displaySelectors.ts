import { RootState } from "@app/store";

const getDisplay = (state: RootState) => state.display;
const getLanguage = (state: RootState) => state.display.language;
const getBgTheme = (state: RootState) => state.display.bgTheme;
const getColorTheme = (state: RootState) => state.display.colorTheme;
const getFontSize = (state: RootState) => state.display.fontSize;

export { getLanguage, getBgTheme, getColorTheme, getFontSize, getDisplay };
