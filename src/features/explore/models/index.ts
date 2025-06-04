import {
  useSearchContext,
  useSearch,
  useClickOutside,
  useKeyword,
} from "./hooks";
import {
  searchSlice,
  setSearchHistory,
  toggleSavedSearches,
  setSearchLoading,
  setKeywordResult,
  toggleRecentSearches,
  clearRecentSearches,
  setKeyword,
  setPhrase,
  setAnywords,
  setExcludeWords,
  setHashtag,
  setAllWords,
} from "./slices";
import {
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
} from "./selectors";

export {
  // hooks
  useSearchContext,
  useSearch,
  useClickOutside,
  useKeyword,

  //slice
  searchSlice,

  // reducers
  setSearchHistory,
  toggleSavedSearches,
  setSearchLoading,
  setKeywordResult,
  toggleRecentSearches,
  clearRecentSearches,
  setKeyword,
  setPhrase,
  setAnywords,
  setExcludeWords,
  setHashtag,
  setAllWords,

  // selectors
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
