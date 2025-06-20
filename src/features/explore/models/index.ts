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
  setAnyKeywords,
  setExcludeKeywords,
  setHashtags,
  setAllKeywords,
  setFromAccounts,
  setToAccounts,
  setMentionsToAccounts,
  toggleFilterComments,
  setFilterComments,
  toggleFilterLinks,
  setFilterLinks,
  setEngageMinComments,
  setEngageMinLikes,
  setEngageMinReposts,
  setPeriodSinceYear,
  setPeriodSinceMonth,
  setPeriodSinceDate,
  setPeriodUntilYear,
  setPeriodUntilMonth,
  setPeriodUntilDate,
  setAdvancedSearch,
} from "./slices";
import {
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
  selectAutoCompleteList,
  selectKeyword,
  selectAllKeywords,
  selectPhrase,
  selectAnyKeywords,
  selectExcludeKeywords,
  selectHashtags,
  selectSearchAdvanced,
  selectFromAccounts,
  selectToAccounts,
  selectMentionToAccounts,
  selectFilterComments,
  selectFilterLinks,
  selectMinComments,
  selectMinLikes,
  selectMinReposts,
  selectPeriodSince,
  selectPeriodUntil,
  selectAdvancedKeywords,
  selectAdvancedAccounts,
  selectAdvancedFilter,
  selectAdvancedEngagement,
  selectAdvancedPeriod,
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
  setAnyKeywords,
  setExcludeKeywords,
  setHashtags,
  setAllKeywords,
  setFromAccounts,
  setToAccounts,
  setMentionsToAccounts,
  toggleFilterComments,
  setFilterComments,
  toggleFilterLinks,
  setFilterLinks,
  setEngageMinComments,
  setEngageMinLikes,
  setEngageMinReposts,
  setPeriodSinceYear,
  setPeriodSinceMonth,
  setPeriodSinceDate,
  setPeriodUntilYear,
  setPeriodUntilMonth,
  setPeriodUntilDate,
  setAdvancedSearch,

  // selectors
  getSearchHistory,
  selectSavedSearches,
  selectSearchLoading,
  selectSearchSuggestion,
  selectAutoCompleteList,
  selectKeyword,
  selectAllKeywords,
  selectPhrase,
  selectAnyKeywords,
  selectExcludeKeywords,
  selectHashtags,
  selectSearchAdvanced,
  selectFromAccounts,
  selectToAccounts,
  selectMentionToAccounts,
  selectFilterComments,
  selectFilterLinks,
  selectMinComments,
  selectMinLikes,
  selectMinReposts,
  selectPeriodSince,
  selectPeriodUntil,
  selectAdvancedKeywords,
  selectAdvancedAccounts,
  selectAdvancedFilter,
  selectAdvancedEngagement,
  selectAdvancedPeriod,
};
