import { RootState } from "@app/store";

const getLanguage = (state: RootState) => state.display.language;

export { getLanguage };
