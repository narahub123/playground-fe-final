import { RootState } from "@app/store";

const getSearchHistory = (state: RootState) => state.search;
const selectSavedSearches = (state: RootState) => state.search.savedSearches;
const selectSearchLoading = (state: RootState) => state.search.isLoading;
export { getSearchHistory, selectSavedSearches, selectSearchLoading };
