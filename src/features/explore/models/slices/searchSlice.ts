import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthor } from "@shared/@common/types";

interface ISearchState {
  recentSearches: string[];
  savedSearches: string[];
  keywordSuggestions: string[];
  accountSuggestions: IAuthor[];
  isLoading: boolean;
  keyword: string;
  advanced: {
    keywords: {
      allKeywords: string;
      phrase: string;
      anyKeywords: string;
      excludeKeywords: string;
      hashtags: string;
    };
    accounts: {
      fromAccounts: string;
      toAccounts: string;
      mentionsToAccounts: string;
    };
    filter: {
      comments: {
        isOn: boolean;
        range?: "comments";
      };
      links: {
        isOn: boolean;
        range?: "links";
      };
    };
    engagement: {
      min_comments: number;
      min_likes: number;
      min_reposts: number;
    };
    period: {
      since: {
        year?: number;
        month?: number;
        date?: number;
      };
      until: {
        year?: number;
        month?: number;
        date?: number;
      };
    };
  };
}

const initialState: ISearchState = {
  recentSearches: [],
  savedSearches: [],
  keywordSuggestions: [],
  accountSuggestions: [],
  isLoading: false,
  keyword: "",
  advanced: {
    keywords: {
      allKeywords: "",
      phrase: "",
      anyKeywords: "",
      excludeKeywords: "",
      hashtags: "",
    },
    accounts: {
      fromAccounts: "",
      toAccounts: "",
      mentionsToAccounts: "",
    },
    filter: {
      comments: {
        isOn: true,
      },
      links: {
        isOn: true,
      },
    },
    engagement: {
      min_comments: 0,
      min_likes: 0,
      min_reposts: 0,
    },
    period: {
      since: {},
      until: {},
    },
  },
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchHistory: (state, action: PayloadAction<ISearchState>) => {
      const { recentSearches, savedSearches } = action.payload;
      state.recentSearches = recentSearches;
      state.savedSearches = savedSearches;
    },
    toggleSavedSearches: (state, action: PayloadAction<string>) => {
      const savedSearches = state.savedSearches;
      const keyword = action.payload.toLowerCase();

      const isExisting = savedSearches.some(
        (search) => search.toLowerCase() === keyword
      );

      if (isExisting) {
        state.savedSearches = savedSearches.filter(
          (search) => search.toLowerCase() !== keyword
        );
      } else {
        state.savedSearches = [action.payload, ...savedSearches];
      }
    },
    setSearchLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setKeywordResult: (state, action: PayloadAction<Record<string, any>>) => {
      const { keywordSuggestions, accountSuggestions } = action.payload;

      state.keywordSuggestions = keywordSuggestions;
      state.accountSuggestions = accountSuggestions;
    },
    toggleRecentSearches: (state, action: PayloadAction<string>) => {
      const keyword = action.payload.toLowerCase().trim();

      const recentSearches = state.recentSearches;

      const isExisting = recentSearches.some(
        (search) => search.toLowerCase() === keyword
      );

      state.recentSearches = isExisting
        ? recentSearches.filter((search) => search.toLowerCase() !== keyword)
        : [keyword, ...recentSearches];
    },
    clearRecentSearches: (state) => {
      state.recentSearches = [];
    },
    setKeyword: (state, action: PayloadAction<string>) => {
      state.keyword = action.payload;
    },
    setAllKeywords: (state, action: PayloadAction<string>) => {
      state.advanced.keywords.allKeywords = action.payload;
    },
    setPhrase: (state, action: PayloadAction<string>) => {
      state.advanced.keywords.phrase = action.payload;
    },
    setAnyKeywords: (state, action: PayloadAction<string>) => {
      state.advanced.keywords.anyKeywords = action.payload;
    },
    setExcludeKeywords: (state, action: PayloadAction<string>) => {
      state.advanced.keywords.excludeKeywords = action.payload;
    },
    setHashtags: (state, action: PayloadAction<string>) => {
      state.advanced.keywords.hashtags = action.payload;
    },
    setFromAccounts: (state, action: PayloadAction<string>) => {
      state.advanced.accounts.fromAccounts = action.payload;
    },
    setToAccounts: (state, action: PayloadAction<string>) => {
      state.advanced.accounts.toAccounts = action.payload;
    },
    setMentionsToAccounts: (state, action: PayloadAction<string>) => {
      state.advanced.accounts.mentionsToAccounts = action.payload;
    },
    toggleFilterComments: (state) => {
      state.advanced.filter.comments.isOn =
        !state.advanced.filter.comments.isOn;
    },
    setFilterComments: (state) => {
      const range = state.advanced.filter.comments.range;
      state.advanced.filter.comments.range = range ? undefined : "comments";
    },
    toggleFilterLinks: (state) => {
      state.advanced.filter.links.isOn = !state.advanced.filter.links.isOn;
    },
    setFilterLinks: (state) => {
      const range = state.advanced.filter.links.range;
      state.advanced.filter.links.range = range ? undefined : "links";
    },
    setEngageMinComments: (state, action: PayloadAction<number>) => {
      state.advanced.engagement.min_comments = action.payload;
    },
    setEngageMinLikes: (state, action: PayloadAction<number>) => {
      state.advanced.engagement.min_likes = action.payload;
    },
    setEngageMinReposts: (state, action: PayloadAction<number>) => {
      state.advanced.engagement.min_reposts = action.payload;
    },
    setPeriodSinceYear: (state, action: PayloadAction<number>) => {
      state.advanced.period.since.year = action.payload;
    },
    setPeriodSinceMonth: (state, action: PayloadAction<number>) => {
      state.advanced.period.since.month = action.payload;
    },
    setPeriodSinceDate: (state, action: PayloadAction<number>) => {
      state.advanced.period.since.date = action.payload;
    },
    setPeriodUntilYear: (state, action: PayloadAction<number>) => {
      state.advanced.period.until.year = action.payload;
    },
    setPeriodUntilMonth: (state, action: PayloadAction<number>) => {
      state.advanced.period.until.month = action.payload;
    },
    setPeriodUntilDate: (state, action: PayloadAction<number>) => {
      state.advanced.period.until.date = action.payload;
    },
  },
});

export default searchSlice.reducer;

export const {
  setSearchHistory,
  toggleSavedSearches,
  setSearchLoading,
  setKeywordResult,
  toggleRecentSearches,
  clearRecentSearches,
  setKeyword,
  setAllKeywords,
  setPhrase,
  setAnyKeywords,
  setExcludeKeywords,
  setHashtags,
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
} = searchSlice.actions;
