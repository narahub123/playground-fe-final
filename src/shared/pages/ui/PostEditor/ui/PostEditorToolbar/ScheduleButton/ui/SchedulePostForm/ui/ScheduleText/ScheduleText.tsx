import styles from "./ScheduleText.module.css";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { LuCalendarDays } from "react-icons/lu";
import { ISchedule } from "../../types";

interface ScheduleTextProps {
  schedule: ISchedule;
}

const ScheduleText = ({ schedule }: ScheduleTextProps) => {
  const classNames = joinClassNames([styles["schedule__text"]]);

  const { year, month, date, hour, minute, amPm } = schedule;

  const time = new Intl.DateTimeFormat(navigator.language, {
    dateStyle: "full",
    timeStyle: "short",
  }).format(
    new Date(year, month - 1, date, amPm === "am" ? hour : hour + 12, minute)
  );

  return (
    <Text type="expl" className={classNames}>
      <LuCalendarDays className={styles["icon"]} /> {time}에 전송 예정
    </Text>
  );
};

export default ScheduleText;
