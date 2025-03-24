import styles from "./CalendarAccordianView.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface CalendarAccordianViewProps {
  className?: string;
  disabled?: boolean;
  isCalendarAccordianView: boolean;
}

const CalendarAccordianView = ({
  className,
  disabled = false,
  isCalendarAccordianView,
}: CalendarAccordianViewProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarAccordianView"]);

  const classNames = joinClassNames([
    styles["calendaraccordianview"],
    className,
  ]);

  return (
    <div
      className={classNames}
      id={"calendar-accordian-view"}
      role="region"
      aria-hidden={isCalendarAccordianView}
    >
      CalendarAccordianView
    </div>
  );
};

export default CalendarAccordianView;
