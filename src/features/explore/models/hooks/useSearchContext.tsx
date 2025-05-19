import { SearchContext } from "@features/explore/context";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { useContext } from "react";

const useSearchContext = () => {
  const { error } = useLanguageContent(["hooks", "useContext"]);

  const context = useContext(SearchContext);

  if (!context) {
    throw new Error(error("useSearchContext"));
  }

  return context;
};

export default useSearchContext;
