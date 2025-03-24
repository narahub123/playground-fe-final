import styles from "./CalendarDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown } from "@shared/@common/ui/components";
import { useState } from "react";
import { joinClassNames } from "@shared/@common/utils";
import {
  YearMonthButton,
  MonthDownButton,
  MonthUpButton,
  CalendarView,
  CalendarAccordianView,
  CalendarDropdownContextProvider,
  ICalendarDropdown,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface CalendarDropdownProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
  lastClickedRef: React.RefObject<HTMLElement>;
  top?: number;
  left?: number;
}

const CalendarDropdown = ({
  className,
  isOpen,
  onClose,
  lastClickedRef,
  top,
  left,
}: CalendarDropdownProps) => {
  // 언어 설정
  // const {} = useLanguageContent(["", "CalendarDropdown"]);

  const [isCalendarView, setIsCalendarView] = useState(true);

  const classNames = joinClassNames([styles["calendar__dropdown"], className]);

  const value: ICalendarDropdown = {
    isCalendarView,
    setIsCalendarView,
  };

  return (
    <Dropdown
      className={classNames}
      name="calendar"
      isOpen={isOpen}
      onClose={onClose}
      lastClickedRef={lastClickedRef}
      top={top}
      left={left}
    >
      <CalendarDropdownContextProvider value={value}>
        <div className={styles["calendar__dropdown__header"]}>
          <YearMonthButton />
          <span className={styles["calendar__dropdown__arrow__btns"]}>
            <MonthUpButton />
            <MonthDownButton />
          </span>
        </div>
        <div className={styles["calendar__dropdown__body"]}>
          {isCalendarView ? <CalendarView /> : <CalendarAccordianView />}
        </div>
      </CalendarDropdownContextProvider>
    </Dropdown>
  );
};

export default CalendarDropdown;
