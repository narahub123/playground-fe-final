import styles from "./SearchDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IRect, SearchKeyword, useSearchContext } from "@features/explore";
import { Button, Text } from "@shared/@common/ui/components";
import { useLanguageContent } from "@shared/@common/models/hooks";

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

  const { keyword } = useSearchContext();

  const recents = ["해린", "안나"];

  const saves = ["해린", "안나"];

  return (
    <div className={classNames} style={{ top: rect.top, left: 0 }}>
      {/* 검색어의 유무에 따라 레이아웃이 달라짐 */}
      {keyword ? (
        <div className={styles["with__keyword"]}>키워드 있는 경우</div>
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
            {recents.map((recent) => (
              <SearchKeyword type="recent" keyword={recent} key={recent} />
            ))}
          </div>
          <div className={styles["heading"]}>
            <Text type="heading3">{saved}</Text>
          </div>
          <div className={styles["list"]}>
            {saves.map((save) => (
              <SearchKeyword type="save" key={save} keyword={save} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
