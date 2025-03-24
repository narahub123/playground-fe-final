import styles from "./Calendar.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  DateButton,
  useScheduleContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";
import { useEffect, useState } from "react";

interface CalendarProps {
  className?: string;
}

const Calendar = ({ className }: CalendarProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "Calendar"]);

  const [dates, setDates] = useState<Date[]>([]);

  const { schedule } = useScheduleContext();

  useEffect(() => {
    const prevDate = new Date(schedule);

    prevDate.setDate(1);
    const firstDayOfMonth = prevDate.getDay();

    prevDate.setDate(0);
    const lastDateOfPrevMonth = prevDate.getDate();

    const prevMonthDates = Array.from({ length: firstDayOfMonth })
      .map((_, index) => lastDateOfPrevMonth - index)
      .reverse()
      .map((date) => new Date(prevDate.setDate(date)));

    const targetDate = new Date(schedule);

    const curMonth = targetDate.getMonth();

    targetDate.setMonth(targetDate.getMonth() + 1);

    if (curMonth + 2 === targetDate.getMonth()) {
      targetDate.setMonth(targetDate.getMonth() - 1);
    }
    targetDate.setDate(0);

    const lastDateOfMonth = targetDate.getDate();

    const curMonthDates = Array.from({ length: lastDateOfMonth }).map(
      (_, index) => new Date(targetDate.setDate(index + 1))
    );

    const nextDate = new Date(schedule);

    const nextMonth = nextDate.getMonth();
    nextDate.setMonth(nextDate.getMonth() + 1);

    if (nextMonth + 2 === nextDate.getMonth()) {
      nextDate.setMonth(nextDate.getMonth() - 1);
    }
    nextDate.setDate(0);

    const lastDayOfMonth = nextDate.getDay();

    const nextMonthDates = Array.from({ length: 6 - lastDayOfMonth }).map(
      (_) => new Date(nextDate.setDate(nextDate.getDate() + 1))
    );

    const dates = [...prevMonthDates, ...curMonthDates, ...nextMonthDates];

    setDates(dates);
  }, [schedule]);

  const classNames = joinClassNames([styles["calendar"], className]);

  return (
    <div className={classNames}>
      {dates.map((date) => (
        <DateButton key={date.toDateString()} date={date} />
      ))}
    </div>
  );
};

export default Calendar;
