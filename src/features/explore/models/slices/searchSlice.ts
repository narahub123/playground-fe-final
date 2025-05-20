import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthor } from "@shared/@common/types";

interface ISearchState {
  recentSearches: string[];
  savedSearches: string[];
  keywordSuggestions: string[];
  userSuggestions: IAuthor[];
  isLoading: boolean;
}

const initialState: ISearchState = {
  recentSearches: [],
  savedSearches: [],
  keywordSuggestions: [],
  userSuggestions: [],
  isLoading: false,
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
      const { keywordSuggestions, userSuggestions } = action.payload;

      state.keywordSuggestions = keywordSuggestions;
      state.userSuggestions = userSuggestions;
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
  },
});

export default searchSlice.reducer;

export const {
  setSearchHistory,
  toggleSavedSearches,
  setSearchLoading,
  setKeywordResult,
  toggleRecentSearches,
} = searchSlice.actions;
