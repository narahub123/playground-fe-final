import styles from "./CalendarView.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useCalendarDropdownContext } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface CalendarViewProps {
  className?: string;
}

const CalendarView = ({ className }: CalendarViewProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarView"]);

  const classNames = joinClassNames([styles["calendarview"], className]);

  const { isCalendarView } = useCalendarDropdownContext();

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
