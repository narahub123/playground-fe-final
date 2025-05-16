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
      <input type="text" onChange={handleChange} />
      <button onClick={handleSearch}>검색</button>
    </div>
  );
};

export default ExplorePage;
