import styles from "./MonthButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface MonthButtonProps {
  className?: string;
  month: number;
  year: number;
  isOpen: boolean;
}

const MonthButton = ({ className, month, isOpen }: MonthButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "MonthButton"]);

  const classNames = joinClassNames([
    styles["month__button"],
    isOpen ? styles["month__button--open"] : styles["month__button--closed"],
    className,
  ]);

  return <button className={classNames}>{month}</button>;
};

export default MonthButton;
