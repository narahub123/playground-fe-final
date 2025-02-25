import styles from "./SettingsSearch.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { IoCloseCircleSharp } from "react-icons/io5";

interface SettingsSearchProps {
  keyword: string;
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  isSearching: boolean;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingsSearch = ({
  keyword,
  setKeyword,
  isSearching,
  setIsSearching,
}: SettingsSearchProps) => {
  // 언어 설정
  const { placeholder } = useLanguageContent(["components", "SettingsSearch"]);

  const classNames = joinClassNames([styles["settings__search"]]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setKeyword(value);
    setIsSearching((prev) => {
      if (prev !== true) return true;
      else return prev;
    });
  };

  const clearKeyword = () => {
    setKeyword("");
  };

  const searchOff = () => {
    setIsSearching(false);
  };

  return (
    <div className={classNames}>
      {isSearching && (
        <div className={styles["settings__search__off__wrapper"]}>
          <Icon iconName="arrowLeft" onClick={searchOff} />
        </div>
      )}
      <div className={styles["settings__search__container"]}>
        <span className={styles["settings__search__leading__wrapper"]}>
          <Icon iconName="search" bgSize="xs" iconSize="sm" />
        </span>
        <input
          type="text"
          className={styles["settings__search__field"]}
          placeholder={placeholder}
          value={keyword}
          onChange={onChange}
        />
        {isSearching && keyword !== "" && (
          <span className={styles["settings__search__trailing__wrapper"]}>
            <IoCloseCircleSharp
              className={styles["settings__search__close__icon"]}
              onClick={clearKeyword}
            />
          </span>
        )}
      </div>
    </div>
  );
};

export default SettingsSearch;
