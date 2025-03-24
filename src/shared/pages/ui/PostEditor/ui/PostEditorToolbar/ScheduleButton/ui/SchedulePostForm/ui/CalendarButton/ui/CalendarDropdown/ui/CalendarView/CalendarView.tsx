import styles from "./CalendarView.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface CalendarViewProps {
  className?: string;
  isCalendarView: boolean;
}

const CalendarView = ({ className, isCalendarView }: CalendarViewProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarView"]);

  const classNames = joinClassNames([styles["calendarview"], className]);

  return (
    <div
      className={classNames}
      id={"calendar-view"}
      role="region"
      aria-hidden={isCalendarView}
    >
      CalendarView
    </div>
  );
};

export default CalendarView;
