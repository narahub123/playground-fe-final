import { useSearchContext, useSearch } from "./hooks";
import { searchSlice, setSearchHistory, toggleSavedSearches } from "./slices";
import { getSearchHistory, selectSavedSearches } from "./selectors";

export {
  useSearchContext,
  useSearch,
  //slice
  searchSlice,

  // reducers
  setSearchHistory,
  toggleSavedSearches,

  // selectors
  getSearchHistory,
  selectSavedSearches,
};
