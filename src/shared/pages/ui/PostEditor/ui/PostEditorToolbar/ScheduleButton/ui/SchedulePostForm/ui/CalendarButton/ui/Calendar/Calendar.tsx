import styles from "./Calendar.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { scheduleDate } from "../../../../data";
import { useEffect, useState } from "react";
import DateButton from "../DateButton/DateButton";

interface CalendarProps {
  className?: string;
  disabled?: boolean;
  year: number;
  month: number;
}

const Calendar = ({
  className,
  disabled = false,
  year,
  month,
}: CalendarProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "Calendar"]);
  const [dates, setDates] = useState<Date[]>([]);

  const firstDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0);

  const classNames = joinClassNames([styles["calendar"], className]);

  const days = ["일", "월", "화", "수", "목", "금", "토"];

  useEffect(() => {
    const thisDates = scheduleDate(year, month).map(
      (date) => new Date(year, month - 1, date.value)
    );
    const firstDateOfThisMonth = new Date(year, month - 1, 1);

    const lastDateLength = firstDateOfThisMonth.getDay();
    const lastMonthDates = Array.from({ length: lastDateLength }).map(
      (_, index) => {
        const dateIndex = index + 1 - lastDateLength;

        return new Date(year, month - 1, dateIndex);
      }
    );

    const thisDateLength = thisDates.length;

    const lastMonthDay = new Date(year, month - 1, thisDateLength).getDay();

    const nextMonthDates = Array.from({ length: 6 - lastMonthDay }).map(
      (_, index) => new Date(year, month - 1, thisDateLength + 1 + index)
    );

    const dates = [...lastMonthDates, ...thisDates, ...nextMonthDates];

    setDates(dates);
  }, [year, month]);

  console.log(dates);

  return (
    <div className={classNames}>
      <div className={styles["calendar__wrapper"]}>
        <div className={styles["calendar__days"]}>
          {days.map((day) => (
            <span key={day} className={styles["calendar__day"]}>
              {day}
            </span>
          ))}
        </div>
        <div className={styles["calendar__dates"]}>
          {dates.reduce<JSX.Element[]>((acc, date, index) => {
            if (index % 7 === 0) {
              acc.push(
                <div key={index} className={styles["calendar__week"]}>
                  <DateButton index={index} date={date} key={index} />
                </div>
              );
            } else {
              acc[acc.length - 1] = (
                <div key={acc.length - 1} className={styles["calendar__week"]}>
                  {acc[acc.length - 1].props.children}
                  <DateButton index={index} date={date} key={index} />
                </div>
              );
            }
            return acc;
          }, [])}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
