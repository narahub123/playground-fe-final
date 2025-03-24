import styles from "./CalendarIcon.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Icon } from "@shared/@common/ui/icons";
import { joinClassNames } from "@shared/@common/utils";
import { forwardRef } from "react";

interface CalendarIconProps {
  className?: string;
  isOpen: boolean;
  onToggle: () => void;
}

const CalendarIcon = forwardRef<HTMLDivElement, CalendarIconProps>(
  ({ className, onToggle, isOpen }, ref) => {
    // 언어 설정
    //   const {} = useLanguageContent(["", "CalendarIcon"]);

    const classNames = joinClassNames([styles["calendar__icon"], className]);

    return (
      <div className={classNames}>
        <div className={styles["calendar__icon__wrapper"]} ref={ref}>
          <Icon
            iconName="calendar"
            onClick={onToggle}
            aria-expanded={isOpen}
            aria-label="달력 보이기"
            aria-haspopup={"dialog"}
            aria-controls="calendar-dropdown"
          />
        </div>
      </div>
    );
  }
);

export default CalendarIcon;
