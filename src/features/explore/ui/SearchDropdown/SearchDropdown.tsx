import styles from "./SearchDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  getSearchHistory,
  IRect,
  SearchKeyword,
  useSearchContext,
} from "@features/explore";
import { Button, Text } from "@shared/@common/ui/components";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { PostProgressbar } from "@shared/pages/ui/Post";
import { useSelector } from "react-redux";

interface SearchDropdownProps {
  className?: string;
  rect: IRect;
}

const SearchDropdown = ({ className, rect }: SearchDropdownProps) => {
  const classNames = joinClassNames([styles["search__dropdown"], className]);
  const { recent, saved, clear } = useLanguageContent([
    "explore",
    "SearchDropdown",
  ]);

  const { recentSearches, savedSearches } = useSelector(getSearchHistory);

  const { keyword } = useSearchContext();

  const saves = ["해린", "안나"];

  const searches = ["해린 생카 해린", "해린 haerin"];

  const result = searches.filter((search) => search.includes(keyword));

  const keywordResult = result.length > 0 ? result : [keyword];

  return (
    <div className={classNames} style={{ top: rect.top, left: 0 }}>
      <PostProgressbar isLoading={true} />
      {/* 검색어의 유무에 따라 레이아웃이 달라짐 */}
      {keyword ? (
        <div className={styles["with__keyword"]}>
          <div className={styles["list"]}>
            {keywordResult.map((search) => (
              <SearchKeyword type="keyword" option={search} key={search} />
            ))}
          </div>
          <div className={styles["list"]}>사용자 리스트</div>
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
