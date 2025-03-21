import styles from "./CalendarDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown, Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import {
  Calendar,
  CalendarAccordian,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";
import { useState } from "react";
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

  const [isCalendar, setIsCalendar] = useState(true);

  const classNames = joinClassNames([styles["calendar__dropdown"]]);

  const years = ["2025", "2026", "2027"];

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
          <Text>2025년 03월</Text>
          <GoTriangleDown />
        </button>
        <div className={styles["button__container"]}>
          <button className={styles["icon__button"]}>
            <FaArrowUp className={styles["icon"]} />
          </button>
          <button className={styles["icon__button"]}>
            <FaArrowDown className={styles["icon"]} />
          </button>
        </div>
      </div>
      <div className={styles["calendar__dropdown__body"]}>
        {isCalendar ? (
          <div className={styles["calendar__dropdown__calendar__container"]}>
            <div className={styles["calendar__dropdown__calendar__wrapper"]}>
              <Calendar />
            </div>
            <div className={styles["calendar__dropdown__buttons"]}>
              <button className={styles["icon__button"]}>삭제</button>
              <button className={styles["icon__button"]}>오늘</button>
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
