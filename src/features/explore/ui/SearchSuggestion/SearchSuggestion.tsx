import styles from "./SearchSuggestion.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SearchSuggestionProps {
  className?: string;
  type: "recent" | "save";
  option: string;
}

const SearchSuggestion = ({ className }: SearchSuggestionProps) => {
  const classNames = joinClassNames([styles["search__suggestion"], className]);

  return <div className={classNames}>SearchSuggestion</div>;
};

export default SearchSuggestion;
