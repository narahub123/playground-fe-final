import styles from "./SearchDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";
import {
  AutoCompleteList,
  IRect,
  SearchSuggestionList,
  selectKeyword,
  selectSearchLoading,
} from "@features/explore";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { PostProgressbar } from "@shared/pages/ui/Post";
import { useSelector } from "react-redux";

interface SearchDropdownProps {
  className?: string;
  rect: IRect;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchDropdown = ({
  className,
  rect,
  isOpen,
  setIsOpen,
}: SearchDropdownProps) => {
  const classNames = joinClassNames([styles["search__dropdown"], className]);
  const {} = useLanguageContent(["explore", "SearchDropdown"]);

  const isLoading = useSelector(selectSearchLoading);

  const keyword = useSelector(selectKeyword);

  if (!isOpen) return null;

  return (
    <div className={classNames} style={{ top: rect.top, left: 0 }}>
      <PostProgressbar isLoading={isLoading} />
      {/* 검색어의 유무에 따라 레이아웃이 달라짐 */}
      {keyword ? (
        <AutoCompleteList isOpen={isOpen} setIsOpen={setIsOpen} />
      ) : (
        <SearchSuggestionList setIsOpen={setIsOpen} />
      )}
    </div>
  );
};

export default SearchDropdown;
