import styles from "./MonthDownButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { LuArrowDown } from "react-icons/lu";

interface MonthDownButtonProps {
  className?: string;
  disabled?: boolean;
}

const MonthDownButton = ({
  className,
  disabled = false,
}: MonthDownButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "MonthDownButton"]);

  const classNames = joinClassNames([styles["month__down__button"], className]);

  return (
    <button
      className={classNames}
      aria-disabled={disabled}
      aria-label="다음 달로 이동"
    >
      <LuArrowDown />
    </button>
  );
};

export default MonthDownButton;
