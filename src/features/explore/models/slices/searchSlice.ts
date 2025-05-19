import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISearchState {
  recentSearches: string[];
  savedSearches: string[];
}

const initialState: ISearchState = {
  recentSearches: [],
  savedSearches: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchHistory: (state, action: PayloadAction<ISearchState>) => {
      return action.payload;
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
  },
});

export default searchSlice.reducer;

export const { setSearchHistory, toggleSavedSearches } = searchSlice.actions;
