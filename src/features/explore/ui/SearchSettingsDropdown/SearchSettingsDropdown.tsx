import { useSearchContext } from "@features/explore/models";
import styles from "./SearchSettingsDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages";
import { useAppDispatch } from "@app/store";
import { toggleSavedSearches } from "@shared/@common/models/slices/userSlice";
import { useSelector } from "react-redux";
import { selectSavedSearches } from "@shared/@common/models/selectors";

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
  // 언어 설정
  const { list } = useLanguageContent(["explore", "SearchSettingsDropdown"]);

  const { keyword } = useSearchContext();

  const savedSearches = useSelector(selectSavedSearches);

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
    }
  };

  return (
    <div className={classNames}>
      {Object.keys(list).map((key) => (
        <button
          className={styles["option"]}
          onClick={() => handleClick(key)}
          key={key}
        >
          {key === "save" ? list[key](isExisting()) : list[key]}
        </button>
      ))}
    </div>
  );
};

export default SearchSettingsDropdown;
