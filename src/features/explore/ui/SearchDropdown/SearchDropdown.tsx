import styles from "./SearchDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IRect, useSearchContext } from "@features/explore";
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
          <div className={styles["list"]}></div>
          <div className={styles["heading"]}>
            <Text type="heading3">{saved}</Text>
          </div>
          <div className={styles["list"]}></div>
        </div>
      )}
    </div>
  );
};

export default SearchDropdown;
