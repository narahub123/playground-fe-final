import { RootState } from "@app/store";

const getSearchHistory = (state: RootState) => state.search;

export { getSearchHistory };
