import styles from "./ExplorePage.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface ExplorePageProps {
  className?: string;
  disabled?: boolean;
}

const ExplorePage = ({ className, disabled = false }: ExplorePageProps) => {
  // 언어 설정
  const {} = useLanguageContent(["pages", "ExplorePage"]);

  const classNames = joinClassNames([styles["explore__page"], className]);

  return <div className={classNames}>ExplorePage</div>;
};

export default ExplorePage;
