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

const selectAllWords = (state: RootState) => state.search.allWords;
const selectPhrase = (state: RootState) => state.search.phrase;
const selectAnyWords = (state: RootState) => state.search.anyWords;
const selectExcludeWords = (state: RootState) => state.search.excludeWords;
const selectHashtag = (state: RootState) => state.search.hashtag;

const selectSearchAdvanced = (state: RootState) => {
  return {
    allWords: state.search.allWords,
    phrase: state.search.phrase,
    anyWords: state.search.anyWords,
    excludeWords: state.search.excludeWords,
    hashtag: state.search.hashtag,
  };
};

export {
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
  selectAutoCompleteList,
  selectKeyword,
  selectAllWords,
  selectPhrase,
  selectAnyWords,
  selectExcludeWords,
  selectHashtag,
  selectSearchAdvanced,
};
