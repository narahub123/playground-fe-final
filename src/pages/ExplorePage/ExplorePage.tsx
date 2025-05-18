import { useAppDispatch } from "@app/store";
import styles from "./ExplorePage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { fetchWithAuth } from "@shared/pages";
import React, { useState } from "react";
import { setPosts } from "@shared/@common/models/slices/feedSlice";
import { useSelector } from "react-redux";
import { selectPage } from "@shared/@common/models/selectors";

interface ExplorePageProps {
  className?: string;
}

const ExplorePage = ({ className }: ExplorePageProps) => {
  const dispatch = useAppDispatch();
  // 언어 설정
  const {} = useLanguageContent(["pages", "ExplorePage"]);

  const page = useSelector(selectPage);

  const [keyword, setKeyword] = useState("");

  const classNames = joinClassNames([styles["explore__page"], className]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const keyword = e.target.value;

    setKeyword(keyword);
  };

  const handleSearch = async () => {
    try {
      const result = await fetchWithAuth(
        `/posts/search?q=${keyword}&skip=${page}`
      );

      if (result.success) {
        dispatch(setPosts(result.data.posts));
      } else {
      }
    } catch (error) {}
  };

  return (
    <div className={classNames}>
      <div className={styles["search__wrapper"]}>
        <div className={styles["wrapper__wrapper"]}>검색</div>
        <div className={styles["icon__wrapper"]}>아이콘</div>
      </div>
      <div className={styles["nav__wrapper"]}>탭</div>
      <div className={styles["feed__wrapper"]}>피드</div>
    </div>
  );
};

export default ExplorePage;
