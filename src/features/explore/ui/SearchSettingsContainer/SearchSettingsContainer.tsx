import { useState } from "react";
import SearchSettingsDropdown from "../SearchSettingsDropdown/SearchSettingsDropdown";
import SearchSettingsIcon from "../SearchSettingsIcon/SearchSettingsIcon";
import styles from "./SearchSettingsContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SearchSettingsContainerProps {
  className?: string;
}

const SearchSettingsContainer = ({
  className,
}: SearchSettingsContainerProps) => {
  const classNames = joinClassNames([
    styles["search__settings__container"],
    className,
  ]);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames}>
      <SearchSettingsIcon setIsOpen={setIsOpen} />
      <SearchSettingsDropdown isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default SearchSettingsContainer;
