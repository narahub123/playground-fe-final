import styles from "./SearchContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Search, SearchDropdown } from "@features/explore";
import { useRef } from "react";

interface SearchContainerProps {
  className?: string;
}

const SearchContainer = ({ className }: SearchContainerProps) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const classNames = joinClassNames([styles["search__container"], className]);

  return (
    <div className={classNames}>
      <Search ref={searchRef} />
      <SearchDropdown />
    </div>
  );
};

export default SearchContainer;
