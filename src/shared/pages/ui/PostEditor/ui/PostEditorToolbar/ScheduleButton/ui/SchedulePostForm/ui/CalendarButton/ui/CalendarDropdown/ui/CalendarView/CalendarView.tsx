import styles from "./CalendarView.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { Calendar } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface CalendarViewProps {
  className?: string;
}

const CalendarView = ({ className }: CalendarViewProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarView"]);

  const classNames = joinClassNames([styles["calendar__view"], className]);

  return (
    <div className={classNames} id={"calendar-view"} role="region">
      <div className={styles["calendar__wrapper"]}>
        <Calendar />
      </div>
      <div className={styles["btns__wrapper"]}>
        <button>삭제</button>
        <button>오늘</button>
      </div>
    </div>
  );
};

export default CalendarView;
