import { ReactNode } from "react";
import SearchContext from "./SearchContext";
import { SearchContextType } from "@features/explore";

interface SearchContextProviderProps {
  children: ReactNode;
  value: SearchContextType;
}

const SearchContextProvider = ({
  children,
  value,
}: SearchContextProviderProps) => {
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export default SearchContextProvider;
