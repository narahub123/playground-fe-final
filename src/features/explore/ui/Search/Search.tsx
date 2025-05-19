import { forwardRef } from "react";
import styles from "./Search.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { LuSearch, LuX } from "react-icons/lu";
import { useSearchContext } from "@features/explore/models";

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
