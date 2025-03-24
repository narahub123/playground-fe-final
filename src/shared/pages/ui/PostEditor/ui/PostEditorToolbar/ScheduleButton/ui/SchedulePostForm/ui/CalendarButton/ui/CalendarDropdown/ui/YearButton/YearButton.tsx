import styles from "./YearButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface YearButtonProps {
  className?: string;
  year: number;
}

const YearButton = ({ className, year }: YearButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "YearButton"]);

  const classNames = joinClassNames([styles["year__button"], className]);

  return <button className={classNames}>{year}</button>;
};

export default YearButton;
