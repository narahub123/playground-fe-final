import styles from "./SearchContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { IRect, Search, SearchDropdown } from "@features/explore";
import { useEffect, useRef, useState } from "react";

interface SearchContainerProps {
  className?: string;
}

const SearchContainer = ({ className }: SearchContainerProps) => {
  const searchRef = useRef<HTMLDivElement>(null);
  const classNames = joinClassNames([styles["search__container"], className]);
  const [rect, setRect] = useState<IRect>({
    top: undefined,
    left: undefined,
  });

  useEffect(() => {
    const getLocation = () => {
      if (!searchRef.current) return;

      const { top, bottom, left } = searchRef.current.getBoundingClientRect();

      setRect({ top: bottom - top, left });
    };

    // 초기
    getLocation();

    window.addEventListener("resize", getLocation);
    window.addEventListener("scroll", getLocation);

    return () => {
      window.removeEventListener("resize", getLocation);
      window.removeEventListener("scroll", getLocation);
    };
  }, []);

  return (
    <div className={classNames}>
      <Search ref={searchRef} />
      <SearchDropdown rect={rect} />
    </div>
  );
};

export default SearchContainer;
