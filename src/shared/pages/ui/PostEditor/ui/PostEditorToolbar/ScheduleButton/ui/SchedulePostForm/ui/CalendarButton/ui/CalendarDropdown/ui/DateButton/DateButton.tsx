import styles from "./DateButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useScheduleContext } from "../../../../../../hooks";
import React, { useEffect, useRef } from "react";

interface DateButtonProps {
  date: Date;
}

const DateButton = ({ date }: DateButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "DateButton"]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const { schedule, setSchedule } = useScheduleContext();

  const firstDateOfCurMonth = new Date(schedule);
  firstDateOfCurMonth.setDate(1);

  const lastDateOfCurMonth = new Date(schedule);
  const curMonth = lastDateOfCurMonth.getMonth();

  lastDateOfCurMonth.setMonth(lastDateOfCurMonth.getMonth() + 1);

  if (curMonth + 2 === lastDateOfCurMonth.getMonth()) {
    lastDateOfCurMonth.setMonth(lastDateOfCurMonth.getMonth() - 1);
  }

  lastDateOfCurMonth.setDate(0);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const curDate = date.getDate();

  const selectedCond =
    schedule.getFullYear() === year &&
    schedule.getMonth() + 1 === month &&
    schedule.getDate() === curDate;

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

  const disabledCond = today.getTime() > date.getTime();

  const prevMonthCond = date.getTime() < firstDateOfCurMonth.getTime();

  const nextMonthCond = date.getTime() > lastDateOfCurMonth.getTime();

  const classNames = joinClassNames([
    styles["date__button"],
    selectedCond ? styles["date__button--selected"] : "",
    todayCond ? styles["date__button--today"] : "",
    prevMonthCond ? styles["date__button--prev"] : "",
    nextMonthCond ? styles["date__button--next"] : "",
    date.getDay() === 0 ? styles["date__button--sunday"] : "",
    date.getDay() === 6 ? styles["date__button--saturday"] : "",
    disabledCond ? styles["date__button--disabled"] : "",
  ]);

  const handleClick = () => {
    setSchedule((prev) => {
      if (prev.getTime() !== date.getTime()) {
        return date;
      } else return prev;
    });

    setTimeout(() => {
      buttonRef.current?.focus();
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    const key = e.key;
    const newSchedule = new Date(schedule);
    console.log(newSchedule);

    if (key === "ArrowUp") {
      e.preventDefault();
      newSchedule.setDate(newSchedule.getDate() - 7);

      if (today.getTime() > newSchedule.getTime()) {
        return;
      }

      setSchedule(newSchedule);
    } else if (key === "ArrowDown") {
      e.preventDefault();
      newSchedule.setDate(newSchedule.getDate() + 7);

      setSchedule(newSchedule);
    } else if (key === "ArrowLeft") {
      e.preventDefault();
      console.log(newSchedule.getDate());

      newSchedule.setDate(newSchedule.getDate() - 1);

      if (today.getTime() > newSchedule.getTime()) {
        return;
      }

      setSchedule(newSchedule);
    } else if (key === "ArrowRight") {
      e.preventDefault();
      newSchedule.setDate(newSchedule.getDate() + 1);

      setSchedule(newSchedule);
    }
  };

  return (
    <button
      className={classNames}
      onClick={handleClick}
      ref={buttonRef}
      onKeyDown={handleKeyDown}
      disabled={disabledCond}
    >
      {curDate}
    </button>
  );
};

export default DateButton;
