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
} from "./slices";
import {
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
  selectAutoCompleteList,
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

  // selectors
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
  selectAutoCompleteList,
};
