import styles from "./MonthUpButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { LuArrowUp } from "react-icons/lu";
import { useScheduleContext } from "../../../../../../hooks";

interface MonthUpButtonProps {
  className?: string;
  disabled?: boolean;
}

const MonthUpButton = ({ className, disabled = false }: MonthUpButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "MonthUpButton"]);

  const { schedule, setSchedule } = useScheduleContext();

  const classNames = joinClassNames([styles["month__up__button"], className]);

  const handleClick = () => {
    const newSchedule = new Date(schedule);

    const curDate = newSchedule.getDate();
    newSchedule.setMonth(newSchedule.getMonth() - 1);

    const newDate = newSchedule.getDate();
    if (curDate !== newDate) {
      newSchedule.setDate(0);
    }

    setSchedule(newSchedule);
  };

  return (
    <button
      className={classNames}
      aria-disabled={disabled}
      aria-label="이전 달로 이동"
      onClick={handleClick}
    >
      <LuArrowUp />
    </button>
  );
};

export default MonthUpButton;
