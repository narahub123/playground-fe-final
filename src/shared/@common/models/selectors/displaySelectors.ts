import { RootState } from "@app/store";

const getLanguage = (state: RootState) => state.display.language;
const getBgTheme = (state: RootState) => state.display.bgTheme;

export { getLanguage, getBgTheme };
