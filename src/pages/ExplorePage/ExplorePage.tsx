import { useAppDispatch } from "@app/store";
import styles from "./ExplorePage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages";
import React, { useEffect, useState } from "react";
import { setPosts } from "@shared/@common/models/slices/feedSlice";
import { useSelector } from "react-redux";
import { selectPage, selectPosts } from "@shared/@common/models/selectors";
import { Icon } from "@shared/@common/ui/icons";
import {
  SearchContainer,
  SearchContextProvider,
  ISearchContext,
  useSearch,
} from "@features/explore";

interface ExplorePageProps {
  className?: string;
}

const ExplorePage = ({ className }: ExplorePageProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const {} = useLanguageContent(["pages", "ExplorePage"]);

  const page = useSelector(selectPage);
  const posts = useSelector(selectPosts);

  const [keyword, setKeyword] = useState("");

  const classNames = joinClassNames([styles["explore__page"], className]);

  // const handleSearch = useSearch();

  useEffect(() => {
    if (!keyword) return;

    // handleSearch(keyword, page);
  }, [keyword, page]);

  const value: ISearchContext = {
    keyword,
    setKeyword,
    page,
  };

  return (
    <SearchContextProvider value={value}>
      <div className={classNames}>
        <div className={styles["search__wrapper"]}>
          <div className={styles["forward__container"]}>
            <Icon
              iconName="arrowLeft"
              title="돌아가기"
              onClick={() => {}}
              className={styles["forward__icon"]}
            />
          </div>
          <div className={styles["input__container"]}>
            <SearchContainer />
          </div>
          <div className={styles["settings__wrapper"]}>
            <Icon iconName="settings" title="설정" />
            {/* <div>설정</div> */}
          </div>
        </div>
        <div className={styles["nav__wrapper"]}>탭</div>
        <div className={styles["feed__wrapper"]}>피드</div>
      </div>
    </SearchContextProvider>
  );
};

export default ExplorePage;
