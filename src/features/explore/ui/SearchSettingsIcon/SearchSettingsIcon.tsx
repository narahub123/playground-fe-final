import styles from "./SearchSettingsIcon.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon, Icons } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SearchSettingsIconProps {
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSettingsIcon = ({
  className,
  setIsOpen,
}: SearchSettingsIconProps) => {
  const { pathname } = useLocation();
  const [iconName, setIconName] = useState<keyof typeof Icons>("settings");

  // 언어 설정
  const {} = useLanguageContent(["explore", "SearchSettingsIcon"]);

  useEffect(() => {
    if (pathname.includes("search")) {
      setIconName("more");
    }
  }, [pathname]);

  const classNames = joinClassNames([
    styles["search__settings__icon"],
    className,
  ]);

  const handleOpen = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();

    setIsOpen((prev) => {
      if (prev !== true) return true;
      else return false;
    });
  };

  return (
    <div className={classNames}>
      <Icon iconName={iconName} title="설정" onClick={handleOpen} />
    </div>
  );
};

export default SearchSettingsIcon;
