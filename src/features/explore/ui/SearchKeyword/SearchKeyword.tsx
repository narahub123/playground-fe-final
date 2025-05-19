import { LuSearch, LuTrash2, LuX } from "react-icons/lu";
import styles from "./SearchKeyword.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SearchKeywordProps {
  className?: string;
  type: "recent" | "save";
  keyword: string;
}

const SearchKeyword = ({ className, type, keyword }: SearchKeywordProps) => {
  const classNames = joinClassNames([styles["search__keyword"], className]);

  return (
    <div className={classNames}>
      <div className={styles["search__icon"]}>
        <div className={styles["icon__wrapper"]}>
          <LuSearch className={styles["icon"]} />
        </div>
      </div>
      <div className={styles["keyword"]}>{keyword}</div>
      <div className={styles["delete__icon"]}>
        <div
          className={joinClassNames([
            type === "recent"
              ? styles["delete__icon__container"]
              : styles["trash__icon__container"],
          ])}
          onClick={type === "recent" ? () => {} : () => {}}
        >
          <div className={styles["icon__wrapper"]}>
            {type === "recent" ? (
              <LuX className={styles["icon"]} />
            ) : (
              <LuTrash2 className={styles["icon"]} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchKeyword;
