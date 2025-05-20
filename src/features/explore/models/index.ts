import { useSearchContext, useSearch, useClickOutside } from "./hooks";
import {
  searchSlice,
  setSearchHistory,
  toggleSavedSearches,
  setSearchLoading,
  setKeywordResult,
  toggleRecentSearches,
} from "./slices";
import {
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
} from "./selectors";

export {
  // hooks
  useSearchContext,
  useSearch,
  useClickOutside,

  //slice
  searchSlice,

  // reducers
  setSearchHistory,
  toggleSavedSearches,
  setSearchLoading,
  setKeywordResult,
  toggleRecentSearches,

  // selectors
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
};
