import styles from "./YearMonthButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useScheduleContext } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface YearMonthButtonProps {
  className?: string;
  isCalendarAccordianView: boolean;
}

const YearMonthButton = ({
  className,
  isCalendarAccordianView,
}: YearMonthButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "YearMonthButton"]);

  const { schedule } = useScheduleContext();

  const { year, month } = schedule;

  const scheduledYearMonth = Intl.DateTimeFormat(navigator.language, {
    year: "numeric",
    month: "long",
  }).format(new Date(year, month - 1));

  const classNames = joinClassNames([styles["year__month__button"], className]);

  return (
    <button
      className={classNames}
      aria-expanded={!isCalendarAccordianView}
      aria-controls="calendar-accordian-view"
    >
      {scheduledYearMonth}
    </button>
  );
};

export default YearMonthButton;
