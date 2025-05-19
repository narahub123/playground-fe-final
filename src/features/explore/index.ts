import { explore_lang } from "./data";
import { SearchContextProvider, SearchContext } from "./context";
import { ISearchContext, IRect } from "./types";
import { SearchKeyword, SearchContainer, Search, SearchDropdown } from "./ui";
import {
  useSearchContext,
  useSearch,
  searchSlice,
  setSearchHistory,
  getSearchHistory,
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

  // selectors
  getSearchHistory,

  // utils
  debounce,

  // ui
  SearchContainer,
  Search,
  SearchDropdown,
  SearchKeyword,
};

export type { ISearchContext, IRect };
