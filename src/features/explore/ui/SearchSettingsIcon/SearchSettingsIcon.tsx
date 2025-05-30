import { useAppDispatch } from "@app/store";
import styles from "./SearchSettingsIcon.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon, Icons } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { onStandAlonOpen } from "@shared/@common/models/slices/modalSlice";

interface SearchSettingsIconProps {
  className?: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSettingsIcon = ({
  className,
  setIsOpen,
}: SearchSettingsIconProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [iconName, setIconName] = useState<keyof typeof Icons>("settings");

  // 언어 설정
  const {} = useLanguageContent(["explore", "SearchSettingsIcon"]);

  const isInSearch = (pathname: string) => {
    return pathname.includes("search");
  };

  useEffect(() => {
    if (isInSearch(pathname)) {
      setIconName("more");
    } else {
      setIconName("settings");
    }
  }, [pathname]);

  const classNames = joinClassNames([
    styles["search__settings__icon"],
    className,
  ]);

  const handleOpenDropdown = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();

    setIsOpen((prev) => {
      if (prev !== true) return true;
      else return false;
    });
  };

  const handleOpenModal = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.stopPropagation();
    dispatch(onStandAlonOpen("explore"));
  };

  return (
    <div className={classNames}>
      <Icon
        iconName={iconName}
        title="설정"
        onClick={isInSearch(pathname) ? handleOpenDropdown : handleOpenModal}
      />
    </div>
  );
};

export default SearchSettingsIcon;
