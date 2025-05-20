import { forwardRef, useCallback } from "react";
import styles from "./Search.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { LuSearch, LuX } from "react-icons/lu";
import {
  setKeywordResult,
  setSearchLoading,
  useSearch,
  useSearchContext,
} from "@features/explore/models";
import { debounce } from "@features/explore/utils";
import { useAppDispatch } from "@app/store";
import { fetchWithAuth } from "@shared/pages";

interface SearchProps {
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Search = forwardRef<HTMLDivElement, SearchProps>(
  ({ className, setIsOpen }, ref) => {
    const classNames = joinClassNames([styles["search__wrapper"], className]);
    const dispatch = useAppDispatch();

    const { keyword, setKeyword } = useSearchContext();

    const handleKeyword = async (keyword: string) => {
      if (!keyword) return;
      dispatch(setSearchLoading(true));
      try {
        const result = await fetchWithAuth(
          `/search-history/auto-complete?keyword=${keyword}`
        );
        if (result.success) {
          const { keywordSuggestions, userSuggestions } =
            result.data.autoComplete;

          dispatch(setKeywordResult({ keywordSuggestions, userSuggestions }));
        } else {
          console.error("검색어 조회 실패");
        }
      } catch (error) {
        console.error("검색어 조회 중 에러 발생", error);
      } finally {
        dispatch(setSearchLoading(false));
      }
    };

    const debouncedHandleKeyword = useCallback(
      debounce((keyword: string) => handleKeyword(keyword), 500),
      []
    );

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const keyword = e.target.value;

      setKeyword(keyword);
      debouncedHandleKeyword(keyword);
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
