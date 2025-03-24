import styles from "./CalendarAccordian.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  YearButton,
  useScheduleData,
  MonthButton,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface CalendarAccordianProps {
  className?: string;
  year: number;
  isAccordianOpen: boolean;
  setOpenedAccordian: React.Dispatch<React.SetStateAction<number>>;
}

const CalendarAccordian = ({
  className,
  year,
  isAccordianOpen,
  setOpenedAccordian,
}: CalendarAccordianProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarAccordian"]);

  const { month } = useScheduleData();

  const classNames = joinClassNames([styles["calendar__accordian"], className]);

  const months = month.map((mon) => mon.value);

  const handleOpen = () => {
    setOpenedAccordian((prev) => {
      if (prev !== year) {
        return year;
      } else return prev;
    });
  };

  return (
    <div className={classNames}>
      <div
        className={styles["calendar__accordian__header"]}
        onClick={handleOpen}
      >
        <YearButton year={year} />
      </div>
      <div
        className={joinClassNames([
          styles["calendar__accordian__body"],
          isAccordianOpen
            ? styles["calendar__accordian__body--open"]
            : styles["calendar__accordian__body--closed"],
        ])}
      >
        {months.map((month) => (
          <MonthButton month={month} year={year} isOpen={isAccordianOpen} />
        ))}
      </div>
    </div>
  );
};

export default CalendarAccordian;
