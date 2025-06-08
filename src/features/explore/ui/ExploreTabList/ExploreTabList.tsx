import { useLanguageContent } from "@shared/@common/models/hooks";
import { ITabItem, TabList } from "@shared/pages";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

interface ExploreTabListProps {
  className?: string;
}

const ExploreTabList = ({ className }: ExploreTabListProps) => {
  const [current, setCurrent] = useState("");
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  // 언어 설정
  const { exploreTabList, searchTabList } = useLanguageContent([
    "explore",
    "ExploreTabList",
  ]);

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
        `?q=${encodeURIComponent(
          searchParams.get("q") || ""
        )}&src=recent_search_click`
      );

  return <TabList curTab={current} list={list} className={className} />;
};

export default ExploreTabList;
