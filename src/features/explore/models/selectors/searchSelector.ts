import { RootState } from "@app/store";

const getSearchHistory = (state: RootState) => state.search;
const selectSavedSearches = (state: RootState) => state.search.savedSearches;
const selectSearchLoading = (state: RootState) => state.search.isLoading;
const selectSearchSuggestion = (state: RootState) => {
  const recentSearches = state.search.recentSearches;
  const savedSearches = state.search.savedSearches;

  return {
    recentSearches,
    savedSearches,
  };
};
const selectAutoCompleteList = (state: RootState) => {
  const keywordSuggestions = state.search.keywordSuggestions;
  const accountSuggestions = state.search.accountSuggestions;

  return {
    keywordSuggestions,
    accountSuggestions,
  };
};
const selectKeyword = (state: RootState) => state.search.keyword;

const selectAllKeywords = (state: RootState) =>
  state.search.advanced.keywords.allKeywords;
const selectPhrase = (state: RootState) =>
  state.search.advanced.keywords.phrase;
const selectAnyKeywords = (state: RootState) =>
  state.search.advanced.keywords.anyKeywords;
const selectExcludeKeywords = (state: RootState) =>
  state.search.advanced.keywords.excludeKeywords;
const selectHashtags = (state: RootState) =>
  state.search.advanced.keywords.hashtags;
const selectFromAccounts = (state: RootState) =>
  state.search.advanced.accounts.fromAccounts;
const selectToAccounts = (state: RootState) =>
  state.search.advanced.accounts.toAccounts;
const selectMentionToAccounts = (state: RootState) =>
  state.search.advanced.accounts.mentionsToAccounts;
const selectFilterComments = (state: RootState) =>
  state.search.advanced.filter.comments;
const selectFilterLinks = (state: RootState) =>
  state.search.advanced.filter.links;
const selectMinComments = (state: RootState) =>
  state.search.advanced.engagement.min_comments;
const selectMinLikes = (state: RootState) =>
  state.search.advanced.engagement.min_likes;
const selectMinReposts = (state: RootState) =>
  state.search.advanced.engagement.min_reposts;
const selectPeriodSince = (state: RootState) =>
  state.search.advanced.period.since;
const selectPeriodUntil = (state: RootState) =>
  state.search.advanced.period.until;

const selectAdvancedKeywords = (state: RootState) =>
  state.search.advanced.keywords;
const selectAdvancedAccounts = (state: RootState) =>
  state.search.advanced.accounts;
const selectAdvancedFilter = (state: RootState) => state.search.advanced.filter;
const selectAdvancedEngagement = (state: RootState) =>
  state.search.advanced.engagement;
const selectAdvancedPeriod = (state: RootState) => state.search.advanced.period;

const selectSearchAdvanced = (state: RootState) => {
  return {
    keywords: state.search.advanced.keywords,
    accounts: state.search.advanced.accounts,
    filter: state.search.advanced.filter,
    engagement: state.search.advanced.engagement,
    period: state.search.advanced.period,
  };
};

export {
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
