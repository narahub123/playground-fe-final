import styles from "./CalendarAccordian.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";

interface CalendarAccordianProps {
  className?: string;
  disabled?: boolean;
}

const CalendarAccordian = ({
  className,
  disabled = false,
}: CalendarAccordianProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarAccordian"]);

  const classNames = joinClassNames([styles["calendaraccordian"], className]);

  return <div className={classNames}>CalendarAccordian</div>;
};

export default CalendarAccordian;
