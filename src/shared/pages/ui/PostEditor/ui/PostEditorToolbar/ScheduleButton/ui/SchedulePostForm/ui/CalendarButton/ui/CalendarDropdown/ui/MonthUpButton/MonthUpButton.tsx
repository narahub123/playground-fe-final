import styles from "./MonthUpButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { LuArrowUp } from "react-icons/lu";

interface MonthUpButtonProps {
  className?: string;
  disabled?: boolean;
}

const MonthUpButton = ({ className, disabled = false }: MonthUpButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "MonthUpButton"]);

  const classNames = joinClassNames([styles["month__up__button"], className]);

  return (
    <button
      className={classNames}
      aria-disabled={disabled}
      aria-label="이전 달로 이동"
    >
      <LuArrowUp />
    </button>
  );
};

export default MonthUpButton;
