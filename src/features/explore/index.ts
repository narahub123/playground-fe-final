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
  AutoCompleteList,
  AutoCompleteKeyword,
  AutoCompleteAccount,
  ClearKeywordsConfirm,
  ExploreSettingModal,
  LocationModal,
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
  toggleRecentSearches,
  selectAutoCompleteList,
  useKeyword,
  clearRecentSearches,
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
  useKeyword,

  // slice
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
  AutoCompleteList,
  AutoCompleteKeyword,
  AutoCompleteAccount,
  ClearKeywordsConfirm,
  ExploreSettingModal,
  LocationModal,
};

export type { ISearchContext, IRect };
