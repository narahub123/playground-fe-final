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
} from "./slices";
import {
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
  selectAutoCompleteList,
  selectKeyword,
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

  // selectors
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
  selectAutoCompleteList,
  selectKeyword,
  selectPhrase,
  selectAnyWords,
  selectExcludeWords,
  selectHashtag,
  selectSearchAdvanced,
};
