import styles from "./ExplorePage.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useAppDispatch } from "@app/store";
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
  ClearKeywordsConfirm,
  LocationModal,
  SearchFilterModal,
  selectKeyword,
  setKeyword,
  SearchAdvancedModal,
} from "@features/explore";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { useDisclosure } from "@shared/@common/models/hooks";

interface ExplorePageProps {
  className?: string;
}
interface ISearchFilter {
  people: boolean;
  location: boolean;
}

type TabType = "" | "live" | "user" | "media" | "list";

const ExplorePage = ({ className }: ExplorePageProps) => {
  const dispatch = useAppDispatch();
  const { pathname, state } = useLocation();
  const [query, setQuery] = useSearchParams();
  const navigate = useNavigate();
  const classNames = joinClassNames([styles["explore__page"], className]);

  const page = useSelector(selectPage);
  const posts = useSelector(selectPosts);
  const keyword = useSelector(selectKeyword);

  const [isFocused, setIsFocused] = useState(false);

  const [tabType, setTabType] = useState<TabType>("");

  const [filter, setFilter] = useState<ISearchFilter>({
    people: false,
    location: false,
  });

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

      dispatch(setKeyword(keyword));
      handleSearch(keyword, 0);
    }
  }, [pathname, query.get("q")]);

  // url 구성
  useEffect(() => {
    if (pathname.includes("/explore")) return;

    const encodeKeyword = encodeURIComponent(keyword);

    const url = `/search?q=${encodeKeyword}&src=recent_search_click${
      tabType ? "&f=" + tabType : ""
    }${filter.people ? "&pf=on" : ""}${filter.location ? "&lf=on" : ""}`;

    navigate(url);
  }, [keyword, tabType, filter]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const value: ISearchContext = {
    page,
    isFocused,
    setIsFocused,
    isOpen,
    onOpen,
    onClose,
  };

  const handleforward = () => {
    if (!state?.from) {
      setIsFocused(false);
      return;
    }

    // explore 페이지에서는 keyword 삭제
    if (state?.from.includes("explore")) {
      dispatch(setKeyword(""));
    }

    navigate(-1);
  };

  return (
    <SearchContextProvider value={value}>
      <LocationModal />
      <ClearKeywordsConfirm />
      <SearchAdvancedModal />
      <SearchFilterModal filter={filter} setFilter={setFilter} />
      <div className={classNames}>
        <div className={styles["search__wrapper"]}>
          {isFocused && (
            <div className={styles["forward__container"]}>
              <Icon
                iconName="arrowLeft"
                title="돌아가기"
                onClick={handleforward}
                className={styles["forward__icon"]}
              />
            </div>
          )}
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
