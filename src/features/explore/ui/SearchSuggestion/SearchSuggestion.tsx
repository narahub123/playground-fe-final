import { LuSearch, LuTrash2, LuX } from "react-icons/lu";
import styles from "./SearchSuggestion.module.css";
import { joinClassNames } from "@shared/@common/utils";
import React from "react";
import { fetchWithAuth } from "@shared/pages";
import { useAppDispatch } from "@app/store";
import {
  setKeyword,
  toggleRecentSearches,
  toggleSavedSearches,
} from "@features/explore/models";
import { useLocation, useNavigate } from "react-router-dom";

interface SearchSuggestionProps {
  className?: string;
  type: "recent" | "save";
  option: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchSuggestion = ({
  className,
  type,
  option,
  setIsOpen,
}: SearchSuggestionProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const classNames = joinClassNames([styles["search__suggestion"], className]);

  const handleSelection = () => {
    setIsOpen(false);
    dispatch(setKeyword(option));
    navigate(`/search?q=${option}&src=typed_query`, {
      state: { from: pathname },
    });
  };

  const handleDeleteRecent = async (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    try {
      const result = await fetchWithAuth(`/search-history?keyword=${option}`, {
        method: "DELETE",
      });

      if (result.success) {
        dispatch(toggleRecentSearches(option));
      } else {
        console.error("저장된 검색어 삭제");
      }
    } catch (error) {
      console.error("저장된 검색어 삭제 도중 에러 발생", error);
    }
  };

  // 저장된 검색어 삭제하기
  const handleDeleteSave = async (e: React.MouseEvent, option: string) => {
    e.stopPropagation();
    try {
      const result = await fetchWithAuth(
        `/users/me`,
        { method: "PATCH" },
        {
          keyword: option,
        }
      );

      if (result.success) {
        dispatch(toggleSavedSearches(option));
      } else {
        console.error("저장된 검색어 삭제");
      }
    } catch (error) {
      console.error("저장된 검색어 삭제 도중 에러 발생", error);
    }
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
