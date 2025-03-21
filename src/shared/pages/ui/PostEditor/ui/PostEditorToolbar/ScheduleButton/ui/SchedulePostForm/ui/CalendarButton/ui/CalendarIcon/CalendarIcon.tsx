import styles from "./CalendarIcon.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";

interface CalendarIconProps {
  className?: string;
  onClick: () => void;
}

const CalendarIcon = ({ className, onClick }: CalendarIconProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarIcon"]);

  const classNames = joinClassNames([styles["calendaricon"], className]);

  return (
    <Icon iconName="calendar" onClick={onClick} iconSize="xl" bgSize="xl" />
  );
};

export default CalendarIcon;
