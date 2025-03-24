import styles from "./Calendar.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  DateButton,
  scheduleDate,
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
    const firstDayOfMonth = new Date(
      schedule.year,
      schedule.month - 1,
      1
    ).getDay();
    const lastDateOfPreMonth = new Date(
      schedule.year,
      schedule.month - 1,
      0
    ).getDate();

    const prevMonthDates = Array.from({ length: firstDayOfMonth })
      .map((_, index) => lastDateOfPreMonth - index)
      .reverse()
      .map((date) => new Date(schedule.year, schedule.month - 2, date));

    console.log(prevMonthDates);

    const curMonthDates = scheduleDate(schedule.year, schedule.month).map(
      (date) => new Date(schedule.year, schedule.month - 1, date.value)
    );

    const lastDayOfMOnth = new Date(schedule.year, schedule.month, 0).getDay();
    console.log(lastDayOfMOnth);

    const nextMonthDates = Array.from({ length: 6 - lastDayOfMOnth }).map(
      (_, index) => new Date(schedule.year, schedule.month, index + 1)
    );

    console.log(nextMonthDates);

    const dates = [...prevMonthDates, ...curMonthDates, ...nextMonthDates];

    console.log(dates);
    setDates(dates);
  }, [schedule]);

  const classNames = joinClassNames([styles["calendar"], className]);

  return (
    <div className={classNames}>
      {dates.map((date, index) => (
        <DateButton key={date.toDateString()} date={date} />
      ))}
    </div>
  );
};

export default Calendar;
