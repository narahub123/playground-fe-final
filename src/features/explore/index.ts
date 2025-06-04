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
  SearchSettingsModal,
  SearchFilterModal,
  SearchAdvancedModal,
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
  setKeyword,
  selectKeyword,
  selectAllWords,
  selectPhrase,
  selectAnyWords,
  selectExcludeWords,
  selectHashtag,
  setPhrase,
  setAnywords,
  setExcludeWords,
  setHashtag,
  selectSearchAdvanced,
  setAllWords,
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
  selectPhrase,
  selectAnyWords,
  selectExcludeWords,
  selectHashtag,
  selectSearchAdvanced,
  selectAllWords,

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
  SearchSettingsModal,
  SearchFilterModal,
  SearchAdvancedModal,
};

export type { ISearchContext, IRect };
