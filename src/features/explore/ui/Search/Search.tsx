import { forwardRef } from "react";
import styles from "./Search.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { LuSearch, LuX } from "react-icons/lu";
import { useSearch, useSearchContext } from "@features/explore/models";

interface SearchProps {
  className?: string;
}

const Search = forwardRef<HTMLDivElement, SearchProps>(({ className }, ref) => {
  const classNames = joinClassNames([styles["search__wrapper"], className]);

  const { keyword, setKeyword } = useSearchContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    setKeyword(keyword);
  };

  const handleSearch = useSearch();

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === "Enter") {
      const keyword = e.currentTarget.value;

      handleSearch(keyword, 0);
    }
  };

  const handleClearKeyword = () => {
    setKeyword("");
  };

  return (
    <div className={classNames} ref={ref}>
      <div className={styles["search__icon__container"]}>
        <div className={styles["search__icon__wrapper"]}>
          <LuSearch className={styles["icon"]} />
        </div>
      </div>
      <div className={styles["search__input__wrapper"]}>
        <input
          type="text"
          className={styles["search__input"]}
          placeholder="검색"
          onChange={handleChange}
          onKeyDown={handleKeydown}
          value={keyword}
        />

        <div
          className={joinClassNames([
            styles["search__clear__container"],
            keyword
              ? styles["search__clear__container--visible"]
              : styles["search__clear__container--invisible"],
          ])}
        >
          <div
            className={styles["search__clear__wrapper"]}
            onClick={handleClearKeyword}
          >
            <LuX className={styles["icon"]} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Search;
