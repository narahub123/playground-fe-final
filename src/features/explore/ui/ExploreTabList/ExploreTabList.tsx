import styles from "./ExploreTabList.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { ITabItem, Tab } from "@shared/pages";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

interface ExploreTabListProps {
  className?: string;
}

const ExploreTabList = ({ className }: ExploreTabListProps) => {
  const [current, setCurrent] = useState("");
  const { pathname, search } = useLocation();
  const [searchParams] = useSearchParams();

  // 언어 설정
  const { exploreTabList, searchTabList } = useLanguageContent([
    "explore",
    "ExploreTabList",
  ]);

  const classNames = joinClassNames([styles["explore__tablist"], className]);

  useEffect(() => {
    if (pathname.includes("/explore")) {
      const paths = pathname.split("/");

      if (!paths[2]) {
        setCurrent("for_you");
      } else {
        setCurrent(paths[3]);
      }
    } else {
      const query = searchParams.get("f");

      if (!query) {
        setCurrent("popular");
      } else {
        setCurrent(query);
      }
    }
  }, [pathname, searchParams.get("f")]);

  const list: ITabItem[] = pathname.includes("explore")
    ? exploreTabList
    : searchTabList(
        pathname,
        `?q=${searchParams.get("q")}&src=recent_search_click`
      );

  return (
    <div className={classNames}>
      {list.map((tab) => (
        <Tab tab={tab} key={tab.value} isActive={tab.value === current} />
      ))}
    </div>
  );
};

export default ExploreTabList;
