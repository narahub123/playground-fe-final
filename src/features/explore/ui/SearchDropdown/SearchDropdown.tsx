import styles from "./SearchDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  getSearchHistory,
  IRect,
  SearchKeyword,
  selectSearchLoading,
  useSearchContext,
} from "@features/explore";
import { Button, Text } from "@shared/@common/ui/components";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { PostProgressbar } from "@shared/pages/ui/Post";
import { useSelector } from "react-redux";

interface SearchDropdownProps {
  className?: string;
  rect: IRect;
  isOpen: boolean;
}

const SearchDropdown = ({ className, rect, isOpen }: SearchDropdownProps) => {
  const classNames = joinClassNames([styles["search__dropdown"], className]);
  const { recent, saved, clear } = useLanguageContent([
    "explore",
    "SearchDropdown",
  ]);

  const isLoading = useSelector(selectSearchLoading);

  const { recentSearches, savedSearches, keywordSuggestions, userSuggestions } =
    useSelector(getSearchHistory);

  const { keyword } = useSearchContext();

  const keywordResult =
    keywordSuggestions.length > 0 ? keywordSuggestions : [keyword];

  if (!isOpen) return null;

  return (
    <div className={classNames} style={{ top: rect.top, left: 0 }}>
      <PostProgressbar isLoading={isLoading} />
      {/* 검색어의 유무에 따라 레이아웃이 달라짐 */}
      {keyword ? (
        <div className={styles["with__keyword"]}>
          <div className={styles["list"]}>
            {keywordSuggestions.length > 0 ? (
              keywordResult.map((search) => (
                <SearchKeyword type="keyword" option={search} key={search} />
              ))
            ) : (
              <div style={{ padding: "12px 16px" }}>
                <Text>{`"${keyword}" 검색`}</Text>
              </div>
            )}
          </div>
          <div className={styles["list"]}>
            {userSuggestions.map((user) => (
              <li key={user.userId}>{user.username}</li>
            ))}
          </div>
        </div>
      ) : (
        <div className={styles["no__keyword"]}>
          <div className={styles["heading"]}>
            <Text type="heading3">{recent}</Text>
            <Button
              isValid
              onClick={() => {}}
              variant="plain"
              fontColor="colorTheme"
            >
              {clear}
            </Button>
          </div>
          <div className={styles["list"]}>
            {recentSearches.map((recent) => (
              <SearchKeyword type="recent" option={recent} key={recent} />
            ))}
          </div>
          <div className={styles["heading"]}>
            <Text type="heading3">{saved}</Text>
          </div>
          <div className={styles["list"]}>
            {savedSearches.map((save) => (
              <SearchKeyword type="save" key={save} option={save} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
