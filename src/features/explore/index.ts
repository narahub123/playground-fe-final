import { explore_lang } from "./data";
import { SearchContextProvider, SearchContext } from "./context";
import { ISearchContext, IRect } from "./types";
import {
  SearchKeyword,
  SearchContainer,
  Search,
  SearchDropdown,
  SearchSettingsContainer,
  SearchSettingsIcon,
  SearchSettingsDropdown,
} from "./ui";
import {
  useSearchContext,
  useSearch,
  searchSlice,
  setSearchHistory,
  getSearchHistory,
  toggleSavedSearches,
  selectSavedSearches,
} from "./models";
import { debounce } from "./utils";

export {
  // data
  explore_lang,

  // context
  SearchContext,
  SearchContextProvider,

  // hooks
  useSearchContext,
  useSearch,

  // slice
  searchSlice,

  // reducers
  setSearchHistory,
  toggleSavedSearches,

  // selectors
  getSearchHistory,
  selectSavedSearches,

  // utils
  debounce,

  // ui
  SearchContainer,
  Search,
  SearchDropdown,
  SearchKeyword,
  SearchSettingsContainer,
  SearchSettingsIcon,
  SearchSettingsDropdown,
};

export type { ISearchContext, IRect };
