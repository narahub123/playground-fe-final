import { useSearchContext, useSearch } from "./hooks";
import { searchSlice, setSearchHistory } from "./slices";
import { getSearchHistory } from "./selectors";

export {
  useSearchContext,
  useSearch,
  //slice
  searchSlice,

  // reducers
  setSearchHistory,

  // selectors
  getSearchHistory,
};
