import styles from "./CalendarAccordian.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useScheduleContext, useScheduleData } from "../../../../hooks";
import MonthButton from "../MonthButton/MonthButton";

interface CalendarAccordianProps {
  className?: string;
  year: number;
  isOpen: boolean;
  setIsAccordianOpen: React.Dispatch<React.SetStateAction<number>>;
  setIsCalendar: React.Dispatch<React.SetStateAction<boolean>>;
}

const CalendarAccordian = ({
  className,
  year,
  isOpen,
  setIsAccordianOpen,
  setIsCalendar,
}: CalendarAccordianProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarAccordian"]);

  const classNames = joinClassNames([styles["calendar__accordian"], className]);

  const { schedule } = useScheduleContext();
  const { month: months } = useScheduleData();

  return (
    <div className={classNames}>
      <div
        className={styles["calendar__accordian__header"]}
        onClick={() => {
          console.log(year);

          setIsAccordianOpen(year);
        }}
      >
        {year}
      </div>
      <div
        className={joinClassNames([
          styles["calendar__accordian__year"],
          isOpen
            ? styles["calendar__accordian__year--open"]
            : styles["calendar__accordian__year--closed"],
        ])}
      >
        {months.reduce<JSX.Element[]>((acc, month, index) => {
          if (index % 4 === 0) {
            acc.push(
              <div key={index} className={styles["calendar__month"]}>
                <MonthButton
                  key={index}
                  month={month}
                  isOpen={isOpen}
                  year={year}
                  setIsCalendar={setIsCalendar}
                />
              </div>
            );
          } else {
            acc[acc.length - 1] = (
              <div key={acc.length - 1} className={styles["calendar__month"]}>
                {acc[acc.length - 1].props.children}
                <MonthButton
                  key={index}
                  month={month}
                  isOpen={isOpen}
                  year={year}
                  setIsCalendar={setIsCalendar}
                />
              </div>
            );
          }
          return acc;
        }, [])}
      </div>
    </div>
  );
};

export default CalendarAccordian;
