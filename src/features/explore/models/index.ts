import { useSearchContext, useSearch, useClickOutside } from "./hooks";
import { searchSlice, setSearchHistory, toggleSavedSearches } from "./slices";
import { getSearchHistory, selectSavedSearches } from "./selectors";

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

  // selectors
  getSearchHistory,
  selectSavedSearches,
};
