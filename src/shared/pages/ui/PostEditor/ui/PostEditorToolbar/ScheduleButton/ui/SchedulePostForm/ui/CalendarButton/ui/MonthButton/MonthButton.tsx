import styles from "./MonthButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useScheduleContext } from "../../../../hooks";

interface MonthButtonProps {
  month: { value: number; text: string };
  year: number;
  isOpen: boolean;
  setIsCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MonthButton = ({
  year,
  month,
  isOpen,
  setIsCalendar,
}: MonthButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "MonthButton"]);

  const { schedule, setSchedule } = useScheduleContext();

  const today = new Date();

  const curYear = today.getFullYear();
  const curMonth = today.getMonth() + 1;

  const curMonthCond = curYear === year && curMonth === month.value;

  const classNames = joinClassNames([
    styles["month__button"],
    schedule.year === year && schedule.month === month.value
      ? styles["month__button--selected"]
      : "",
    isOpen ? styles["month__button--open"] : styles["month__button--closed"],
    curMonthCond ? styles["month__buttton--curMonth"] : "",
  ]);

  const handleClick = () => {
    setSchedule((prev) => ({
      ...prev,
      year,
      month: month.value,
    }));
    setIsCalendar(true);
  };

  return (
    <button className={classNames} onClick={handleClick}>
      {month.text}
    </button>
  );
};

export default MonthButton;
