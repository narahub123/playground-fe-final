import { forwardRef } from "react";
import styles from "./Search.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { LuSearch, LuX } from "react-icons/lu";
import { useSearch, useSearchContext } from "@features/explore/models";
import { debounce } from "@features/explore/utils";

interface SearchProps {
  className?: string;
}

const Search = forwardRef<HTMLDivElement, SearchProps>(({ className }, ref) => {
  const classNames = joinClassNames([styles["search__wrapper"], className]);

  const { setKeyword } = useSearchContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    setKeyword(keyword);
  };

  const debouncedChange = debounce<typeof handleChange>(handleChange, 500);

  const handleSearch = useSearch();

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const key = e.key;
    if (key === "Enter") {
      const keyword = e.currentTarget.value;

      handleSearch(keyword, 0);
    }
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
          onChange={debouncedChange}
          onKeyDown={handleKeydown}
        />
        <div className={styles["search__clear__container"]}>
          <div className={styles["search__clear__wrapper"]}>
            <LuX className={styles["icon"]} />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Search;
