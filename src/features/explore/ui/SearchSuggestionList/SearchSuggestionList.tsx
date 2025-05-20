import styles from "./SearchSuggestionList.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Button, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { useSelector } from "react-redux";
import {
  clearRecentSearches,
  selectSearchSuggestion,
} from "@features/explore/models";
import SearchSuggestion from "../SearchSuggestion/SearchSuggestion";
import { fetchWithAuth } from "@shared/pages";
import { useAppDispatch } from "@app/store";

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

  const dispatch = useAppDispatch();

  const { recentSearches, savedSearches } = useSelector(selectSearchSuggestion);

  const classNames = joinClassNames([
    styles["search__suggestion__list"],
    className,
  ]);

  const handleDeleteAll = async () => {
    try {
      const result = await fetchWithAuth(`/search-history/all`, {
        method: "DELETE",
      });
      if (result.success) {
        dispatch(clearRecentSearches());
      } else {
        console.error("최근 검색어 전부 삭제 실패");
      }
    } catch (error) {
      console.error("최근 검색어 전부 삭제 도중 에러 발생", error);
    }
  };

  return (
    <div className={classNames}>
      {recentSearches.length > 0 && (
        <div className={styles["recent__list"]}>
          <div className={styles["heading"]}>
            <Text type="heading3">{recent}</Text>
            <Button
              isValid
              onClick={handleDeleteAll}
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
