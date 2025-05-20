import { LuSearch, LuTrash2, LuX } from "react-icons/lu";
import styles from "./SearchSuggestion.module.css";
import { joinClassNames } from "@shared/@common/utils";
import React from "react";

interface SearchSuggestionProps {
  className?: string;
  type: "recent" | "save";
  option: string;
}

const SearchSuggestion = ({
  className,
  type,
  option,
}: SearchSuggestionProps) => {
  const classNames = joinClassNames([styles["search__suggestion"], className]);

  const handleSelection = () => {
    console.log("이거 눌림");
  };

  const handleDeleteRecent = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    console.log(option);
  };
  const handleDeleteSave = (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    console.log(option);
  };

  const handleClick =
    type === "recent"
      ? (e: React.MouseEvent) => handleDeleteRecent(e, option)
      : (e: React.MouseEvent) => handleDeleteSave(e, option);

  return (
    <div className={classNames} onClick={handleSelection}>
      <div className={styles["leading__icon"]}>
        <div className={styles["icon__wrapper"]}>
          <LuSearch className={styles["icon"]} />
        </div>
      </div>
      <div className={styles["keyword"]}>{option}</div>
      <div className={styles["trailing__icon"]}>
        <div
          className={joinClassNames([
            styles["icon__container"],
            type === "recent" ? styles["recent"] : styles["save"],
          ])}
          onClick={handleClick}
        >
          <div className={styles["icon__wrapper"]}>
            {type === "recent" ? (
              <LuX className={styles["icon"]} />
            ) : (
              <LuTrash2 className={styles["icon"]} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSuggestion;
