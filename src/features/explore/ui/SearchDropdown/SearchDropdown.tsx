import styles from "./SearchDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IRect } from "@features/explore";

interface SearchDropdownProps {
  className?: string;
  rect: IRect;
}

const SearchDropdown = ({ className, rect }: SearchDropdownProps) => {
  const classNames = joinClassNames([styles["search__dropdown"], className]);

  return (
    <div className={classNames} style={{ top: rect.top, left: 0 }}>
      SearchDropdown
    </div>
  );
};

export default SearchDropdown;
