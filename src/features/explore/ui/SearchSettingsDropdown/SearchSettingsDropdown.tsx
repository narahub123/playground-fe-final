import {
  toggleSavedSearches,
  selectSavedSearches,
  useClickOutside,
  selectKeyword,
} from "@features/explore/models";
import styles from "./SearchSettingsDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages";
import { useAppDispatch } from "@app/store";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { PRIMARY_LINK } from "@shared/@common/constants";
import {
  onParallelModalOpen,
  onStandAlonOpen,
} from "@shared/@common/models/slices/modalSlice";

interface SearchSettingsDropdownProps {
  className?: string;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSettingsDropdown = ({
  className,
  isOpen,
  setIsOpen,
}: SearchSettingsDropdownProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  // 언어 설정
  const { list } = useLanguageContent(["explore", "SearchSettingsDropdown"]);

  const keyword = useSelector(selectKeyword);

  const savedSearches = useSelector(selectSavedSearches);

  useClickOutside({ containerRef, setIsOpen });

  const classNames = joinClassNames([
    styles["search__settings__dropdown"],
    isOpen
      ? styles["search__settings__dropdown--visible"]
      : styles["search__settings__dropdown--invisible"],
    className,
  ]);

  const isExisting = () => {
    return savedSearches.some(
      (search) => search.toLowerCase() === keyword.toLowerCase()
    );
  };

  const handleSaveKeyword = async () => {
    try {
      const result = await fetchWithAuth(
        `/users/me`,
        {
          method: "PATCH",
        },
        {
          keyword,
        }
      );

      if (result.success) {
        dispatch(toggleSavedSearches(keyword));
      } else {
      }
    } catch (error) {
    } finally {
      () => setIsOpen(false);
    }
  };

  const handleClick = (type: string) => {
    if (type === "save") {
      handleSaveKeyword();
    } else if (type === "settings") {
      navigate(PRIMARY_LINK.SEARCH_SETTINGS);
      dispatch(onParallelModalOpen("search_settings"));
    } else if (type === "filter") {
      setIsOpen(false);
      dispatch(onStandAlonOpen("search_filter"));
    } else {
      navigate(PRIMARY_LINK.SEARCH_ADVANCED + "?q=" + keyword);
      dispatch(onParallelModalOpen("search_advanced"));
    }
  };

  return (
    <div className={classNames} ref={containerRef}>
      {Object.keys(list).map((key) => {
        if (key === "save" && !keyword) return null;
        return (
          <button
            className={styles["option"]}
            onClick={() => handleClick(key)}
            key={key}
          >
            {key === "save" ? list[key](isExisting()) : list[key]}
          </button>
        );
      })}
    </div>
  );
};

export default SearchSettingsDropdown;
