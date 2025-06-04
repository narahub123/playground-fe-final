import { RootState } from "@app/store";

const getSearchHistory = (state: RootState) => state.search;
const selectSavedSearches = (state: RootState) => state.search.savedSearches;
const selectSearchLoading = (state: RootState) => state.search.isLoading;
const selectSearchSuggestion = (state: RootState) => {
  const recentSearches = state.search.recentSearches;
  const savedSearches = state.search.savedSearches;

  return {
    recentSearches,
    savedSearches,
  };
};
const selectAutoCompleteList = (state: RootState) => {
  const keywordSuggestions = state.search.keywordSuggestions;
  const accountSuggestions = state.search.accountSuggestions;

  return {
    keywordSuggestions,
    accountSuggestions,
  };
};
const selectKeyword = (state: RootState) => state.search.keyword;
export {
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
  selectAutoCompleteList,
  selectKeyword,
};
