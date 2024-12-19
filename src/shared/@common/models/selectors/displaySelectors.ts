import { RootState } from "@app/store";

const getLanguage = (state: RootState) => state.display.language;
const getBgTheme = (state: RootState) => state.display.bgTheme;
const getColorTheme = (state: RootState) => state.display.colorTheme;

export { getLanguage, getBgTheme, getColorTheme };
