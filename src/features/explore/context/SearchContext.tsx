import { createContext } from "react";
import { ISearchContext } from "../types";

const SearchContext = createContext<ISearchContext | null>(null);

export default SearchContext;
