import styles from "./YearMonthButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  useCalendarDropdownContext,
  useScheduleContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface YearMonthButtonProps {
  className?: string;
}

const YearMonthButton = ({ className }: YearMonthButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "YearMonthButton"]);

  const { schedule } = useScheduleContext();
  const { isCalendarView, setIsCalendarView } = useCalendarDropdownContext();

  const { year, month } = schedule;

  const scheduledYearMonth = Intl.DateTimeFormat(navigator.language, {
    year: "numeric",
    month: "long",
  }).format(new Date(year, month - 1));

  const classNames = joinClassNames([styles["year__month__button"], className]);

  return (
    <button
      className={classNames}
      aria-expanded={!isCalendarView}
      aria-controls="calendar-accordian-view"
      onClick={() => setIsCalendarView(false)}
    >
      {scheduledYearMonth}
    </button>
  );
};

export default YearMonthButton;
