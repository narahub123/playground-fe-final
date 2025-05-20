import { forwardRef, useCallback } from "react";
import styles from "./Search.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { LuSearch, LuX } from "react-icons/lu";
import { useKeyword, useSearchContext } from "@features/explore/models";
import { debounce } from "@features/explore/utils";
import { useNavigate } from "react-router-dom";

interface SearchProps {
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search = forwardRef<HTMLDivElement, SearchProps>(
  ({ className, setIsOpen }, ref) => {
    const classNames = joinClassNames([styles["search__wrapper"], className]);
    const navigate = useNavigate();

    const { keyword, setKeyword } = useSearchContext();

    const handleKeyword = useKeyword();

    const debouncedHandleKeyword = useCallback(
      debounce((keyword: string) => handleKeyword(keyword), 500),
      []
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const keyword = e.target.value;

      setKeyword(keyword);
      debouncedHandleKeyword(keyword);
    };

    const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      const key = e.key;
      if (key === "Enter") {
        const keyword = e.currentTarget.value;

        navigate(`/search?q=${keyword}&src=typed_query`);
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
            onFocus={(e) => {
              e.stopPropagation();
              setIsOpen(true);
            }}
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
  }
);

export default Search;
