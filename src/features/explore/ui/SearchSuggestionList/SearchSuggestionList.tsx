import styles from "./SearchSuggestionList.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import {
  selectSearchSuggestion,
  useSearchContext,
} from "@features/explore/models";
import SearchSuggestion from "../SearchSuggestion/SearchSuggestion";

interface SearchSuggestionListProps {
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSuggestionList = ({
  className,
  setIsOpen,
}: SearchSuggestionListProps) => {
  // 언어 설정
  const { recent, clear, saved } = useLanguageContent([
    "explore",
    "SearchSuggestionList",
  ]);

  const { recentSearches, savedSearches } = useSelector(selectSearchSuggestion);

  const classNames = joinClassNames([
    styles["search__suggestion__list"],
    className,
  ]);

  const { onOpen } = useSearchContext();

  const handleOpenConfirm = () => {
    onOpen();
  };

  return (
    <div className={classNames}>
      {recentSearches.length > 0 && (
        <div className={styles["recent__list"]}>
          <div className={styles["heading"]}>
            <Text type="heading3">{recent}</Text>
            <Button
              isValid
              onClick={() => handleOpenConfirm()}
              variant="plain"
              fontColor="colorTheme"
            >
              {clear}
            </Button>
          </div>
          <div className={styles["list"]}>
            {recentSearches.map((recent) => (
              <SearchSuggestion
                key={recent}
                type="recent"
                option={recent}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
        </div>
      )}
      {savedSearches.length > 0 && (
        <div className={styles["recent__list"]}>
          <div className={styles["heading"]}>
            <Text type="heading3">{saved}</Text>
          </div>
          <div className={styles["list"]}>
            {savedSearches.map((save) => (
              <SearchSuggestion
                key={save}
                type="save"
                option={save}
                setIsOpen={setIsOpen}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSuggestionList;
