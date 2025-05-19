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
  },
});

export default searchSlice.reducer;

export const { setSearchHistory } = searchSlice.actions;
