import styles from "./CalendarDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useState } from "react";
import { Dropdown, Text } from "@shared/@common/ui/components";
import {
  Calendar,
  CalendarAccordian,
  useScheduleContext,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { GoTriangleDown } from "react-icons/go";

interface CalendarDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  lastClickedRaf: any;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const CalendarDropdown = ({
  isOpen,
  onClose,
  lastClickedRaf,
  top,
  bottom,
  left,
  right,
}: CalendarDropdownProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarDropdown"]);

  const { schedule, setSchedule } = useScheduleContext();

  const { year, month } = schedule;

  const [isCalendar, setIsCalendar] = useState(true);

  const classNames = joinClassNames([styles["calendar__dropdown"]]);

  const years = ["2025", "2026", "2027"];

  const curMonth = Intl.DateTimeFormat(navigator.language, {
    year: "numeric",
    month: "long",
  }).format(new Date(year, month - 1));

  const handleMonthUp = () => {
    const thisSchedule = new Date(year, month - 1);
    thisSchedule.setMonth(thisSchedule.getMonth());

    const movedUpYear = thisSchedule.getFullYear();
    const movedUpMonth = thisSchedule.getMonth();

    setSchedule((prev) => ({
      ...prev,
      year: movedUpYear,
      month: movedUpMonth,
    }));
  };

  const handleMonthDown = () => {
    const thisSchedule = new Date(year, month - 1);

    thisSchedule.setMonth(month);

    const movedDownYear = thisSchedule.getFullYear();
    const movedDownMonth = thisSchedule.getMonth() + 1;

    setSchedule((prev) => ({
      ...prev,
      year: movedDownYear,
      month: movedDownMonth,
    }));
  };

  const handleDeleteSchedule = () => {
    const targetDate = new Date();

    targetDate.setDate(targetDate.getDate() + 5);

    const year = targetDate.getFullYear();
    const month = targetDate.getMonth() + 1;
    const date = targetDate.getDate();

    setSchedule((prev) => ({
      ...prev,
      year,
      month,
      date,
    }));
  };

  const setToday = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const date = today.getDate();

    setSchedule((prev) => ({
      ...prev,
      year,
      month,
      date,
    }));
  };

  return (
    <Dropdown
      className={classNames}
      isOpen={isOpen}
      onClose={onClose}
      lastClickedRef={lastClickedRaf}
      name="calendar"
      top={top}
      bottom={bottom}
      left={left}
      right={right}
    >
      <div className={styles["calendar__dropdown__header"]}>
        <button
          className={styles["text__button"]}
          onClick={() => setIsCalendar(!isCalendar)}
        >
          <Text>{curMonth}</Text>
          <GoTriangleDown />
        </button>
        <div className={styles["button__container"]}>
          <button className={styles["icon__button"]} onClick={handleMonthUp}>
            <FaArrowUp className={styles["icon"]} />
          </button>
          <button className={styles["icon__button"]}>
            <FaArrowDown className={styles["icon"]} onClick={handleMonthDown} />
          </button>
        </div>
      </div>
      <div className={styles["calendar__dropdown__body"]}>
        {isCalendar ? (
          <div className={styles["calendar__dropdown__calendar__container"]}>
            <div className={styles["calendar__dropdown__calendar__wrapper"]}>
              <Calendar year={year} month={month} />
            </div>
            <div className={styles["calendar__dropdown__buttons"]}>
              <button
                className={styles["icon__button"]}
                onClick={handleDeleteSchedule}
              >
                삭제
              </button>
              <button className={styles["icon__button"]} onClick={setToday}>
                오늘
              </button>
            </div>
          </div>
        ) : (
          <div className={styles["calendar__dropdown__accordian__wrapper"]}>
            {years.map((year, index) => (
              <CalendarAccordian key={index} />
            ))}
          </div>
        )}
      </div>
    </Dropdown>
  );
};

export default CalendarDropdown;
