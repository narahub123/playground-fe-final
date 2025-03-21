import styles from "./Calendar.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface CalendarProps {
  className?: string;
  disabled?: boolean;
}

const Calendar = ({ className, disabled = false }: CalendarProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "Calendar"]);

  const classNames = joinClassNames([styles["calendar"], className]);

  return <div className={classNames}>Calendar</div>;
};

export default Calendar;
