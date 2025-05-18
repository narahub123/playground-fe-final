import styles from "./SearchDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SearchDropdownProps {
  className?: string;
}

const SearchDropdown = ({ className }: SearchDropdownProps) => {
  const classNames = joinClassNames([styles["search__dropdown"], className]);

  return <div className={classNames}>SearchDropdown</div>;
};

export default SearchDropdown;
