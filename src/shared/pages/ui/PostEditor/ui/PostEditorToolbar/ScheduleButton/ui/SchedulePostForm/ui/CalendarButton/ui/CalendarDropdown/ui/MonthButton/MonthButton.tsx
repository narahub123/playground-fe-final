import styles from "./MonthButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  useCalendarDropdownContext,
  useScheduleContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";
import { useEffect, useRef } from "react";

interface MonthButtonProps {
  className?: string;
  month: number;
  year: number;
  isOpen: boolean;
  setOpenedAccordian: React.Dispatch<React.SetStateAction<number>>;
}

const MonthButton = ({
  className,
  year,
  month,
  isOpen,
  setOpenedAccordian,
}: MonthButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "MonthButton"]);
  const monthRef = useRef<HTMLButtonElement>(null);
  const { schedule, setSchedule } = useScheduleContext();
  const { setIsCalendarView } = useCalendarDropdownContext();

  const selectedCond =
    schedule.getFullYear() === year && schedule.getMonth() + 1 === month;

  useEffect(() => {
    if (!monthRef.current) return;
    if (selectedCond) {
      monthRef.current.focus();
    }
  }, [year, month]);

  const today = new Date();

  const handleFocus = () => {
    setOpenedAccordian((prev) => {
      if (prev !== year) {
        return year;
      } else return prev;
    });
  };

  const curMonthCond =
    today.getFullYear() === year && today.getMonth() + 1 === month;

  const handleClick = () => {
    const date = schedule.getDate();

    const selectedDate = new Date(year, month - 1, date);
    setSchedule(selectedDate);
    setIsCalendarView(true);
  };

  const classNames = joinClassNames([
    styles["month__button"],
    isOpen ? styles["month__button--open"] : styles["month__button--closed"],
    selectedCond ? styles["month__button--selected"] : "",
    curMonthCond ? styles["month__button--curMonth"] : "",
    className,
  ]);

  return (
    <button
      className={classNames}
      onClick={handleClick}
      ref={monthRef}
      onFocus={handleFocus}
    >
      {month}
    </button>
  );
};

export default MonthButton;
