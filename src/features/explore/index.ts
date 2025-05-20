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
  SearchSuggestionList,
  SearchSuggestion,
} from "./ui";
import {
  useSearchContext,
  useSearch,
  useClickOutside,
  searchSlice,
  setSearchHistory,
  getSearchHistory,
  toggleSavedSearches,
  selectSavedSearches,
  setSearchLoading,
  selectSearchLoading,
  setKeywordResult,
  selectSearchSuggestion,
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
  useClickOutside,

  // slice
  searchSlice,

  // reducers
  setSearchHistory,
  toggleSavedSearches,
  setSearchLoading,
  setKeywordResult,

  // selectors
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,

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
  SearchSuggestionList,
  SearchSuggestion,
};

export type { ISearchContext, IRect };
