import styles from "./DateButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useScheduleContext } from "../../../../../../hooks";
import { useEffect, useRef } from "react";

interface DateButtonProps {
  date: Date;
}

const DateButton = ({ date }: DateButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "DateButton"]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { schedule, setSchedule } = useScheduleContext();

  const firstDateOfCurMonth = new Date(schedule.year, schedule.month - 1, 1);
  const lastDateOfCurMonth = new Date(schedule.year, schedule.month, 0);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const curDate = date.getDate();

  const selectedCond =
    schedule.year === year &&
    schedule.month === month &&
    schedule.date === curDate;

  useEffect(() => {
    if (!buttonRef.current) return;
    if (selectedCond) {
      buttonRef.current.focus();
    }
  }, [schedule]);

  const today = new Date();
  const todayCond =
    year === today.getFullYear() &&
    month === today.getMonth() + 1 &&
    curDate === today.getDate();

  const prevMonthCond = date.getTime() < firstDateOfCurMonth.getTime();

  const nextMonthCond = date.getTime() > lastDateOfCurMonth.getTime();

  const classNames = joinClassNames([
    styles["date__button"],
    selectedCond ? styles["date__button--selected"] : "",
    todayCond ? styles["date__button--today"] : "",
    prevMonthCond ? styles["date__button--prev"] : "",
    nextMonthCond ? styles["date__button--next"] : "",
  ]);

  const handleClick = () => {
    setSchedule((prev) => ({
      ...prev,
      year,
      month,
      date: curDate,
    }));

    setTimeout(() => {
      buttonRef.current?.focus();
    }, 1000);
  };

  return (
    <button className={classNames} onClick={handleClick} ref={buttonRef}>
      {curDate}
    </button>
  );
};

export default DateButton;
