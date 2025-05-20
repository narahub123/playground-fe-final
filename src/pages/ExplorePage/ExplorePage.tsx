import { useAppDispatch } from "@app/store";
import styles from "./ExplorePage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPage, selectPosts } from "@shared/@common/models/selectors";
import { Icon } from "@shared/@common/ui/icons";
import {
  SearchContainer,
  SearchContextProvider,
  ISearchContext,
  setSearchHistory,
  SearchSettingsContainer,
  useSearch,
} from "@features/explore";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

interface ExplorePageProps {
  className?: string;
}

const ExplorePage = ({ className }: ExplorePageProps) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();
  const classNames = joinClassNames([styles["explore__page"], className]);
  // 언어 설정
  const {} = useLanguageContent(["pages", "ExplorePage"]);

  const page = useSelector(selectPage);
  const posts = useSelector(selectPosts);

  const [keyword, setKeyword] = useState("");

  const getSearchHistory = async () => {
    try {
      const result = await fetchWithAuth(`/search-history/me`);

      if (result.success) {
        dispatch(setSearchHistory(result.data.searchHistory));
      } else {
        console.error("검색 기록 조회 실패");
      }
    } catch (error) {
      console.error("검색 기록 조회 중 에러 발생", error);
    }
  };

  const handleSearch = useSearch();

  useEffect(() => {
    getSearchHistory();

    if (pathname.includes("search")) {
      const keyword = query.get("q");

      if (!keyword) {
        navigate("/explore");
        return;
      }

      setKeyword(keyword);
      handleSearch(keyword, 0);
    }
  }, [pathname, query.get("q")]);

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
            <SearchSettingsContainer />
          </div>
        </div>
        <div className={styles["nav__wrapper"]}>탭</div>
        <div className={styles["feed__wrapper"]}>피드</div>
      </div>
    </SearchContextProvider>
  );
};

export default ExplorePage;
