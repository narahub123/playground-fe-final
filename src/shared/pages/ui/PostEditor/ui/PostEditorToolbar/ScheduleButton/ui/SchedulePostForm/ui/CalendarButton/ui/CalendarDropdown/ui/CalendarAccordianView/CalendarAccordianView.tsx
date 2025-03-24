import styles from "./CalendarAccordianView.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import {
  useCalendarDropdownContext,
  useScheduleData,
  CalendarAccordian,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";
import { useState } from "react";

interface CalendarAccordianViewProps {
  className?: string;
}

const CalendarAccordianView = ({ className }: CalendarAccordianViewProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarAccordianView"]);
  const { year: years } = useScheduleData();

  const [openedAccordian, setOpenedAccordian] = useState(years[0].value);

  const classNames = joinClassNames([
    styles["calendar__accordian__view"],
    className,
  ]);

  return (
    <div className={classNames} id={"calendar-accordian-view"} role="region">
      {years.map((year) => (
        <CalendarAccordian
          key={year.text}
          year={year.value}
          isAccordianOpen={openedAccordian === year.value}
          setOpenedAccordian={setOpenedAccordian}
        />
      ))}
    </div>
  );
};

export default CalendarAccordianView;
