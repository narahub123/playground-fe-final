import { createContext } from "react";
import { SearchContextType } from "../types";

const SearchContext = createContext<SearchContextType | null>(null);

export default SearchContext;
