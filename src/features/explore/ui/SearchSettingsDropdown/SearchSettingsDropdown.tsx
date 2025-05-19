import styles from "./SearchSettingsDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface SearchSettingsDropdownProps {
  className?: string;
  isOpen: boolean;
}

const SearchSettingsDropdown = ({
  className,
  isOpen,
}: SearchSettingsDropdownProps) => {
  // 언어 설정
  const {} = useLanguageContent(["explore", "SearchSettingsDropdown"]);

  const classNames = joinClassNames([
    styles["search__settings__dropdown"],
    isOpen
      ? styles["search__settings__dropdown--visible"]
      : styles["search__settings__dropdown--invisible"],
    className,
  ]);

  return <div className={classNames}>SearchSettingsDropdown</div>;
};

export default SearchSettingsDropdown;
