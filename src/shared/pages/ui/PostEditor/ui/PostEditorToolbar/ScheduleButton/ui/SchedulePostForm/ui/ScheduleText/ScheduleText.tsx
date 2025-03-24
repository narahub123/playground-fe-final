import styles from "./ScheduleText.module.css";
import { Text } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";
import { LuCalendarDays } from "react-icons/lu";

interface ScheduleTextProps {
  schedule: Date;
}

const ScheduleText = ({ schedule }: ScheduleTextProps) => {
  const classNames = joinClassNames([styles["schedule__text"]]);

  console.log(schedule);

  const time = new Intl.DateTimeFormat(navigator.language, {
    dateStyle: "full",
    timeStyle: "short",
  }).format(schedule);

  console.log(time);

  return (
    <Text type="expl" className={classNames}>
      <LuCalendarDays className={styles["icon"]} /> {time}에 전송 예정
    </Text>
  );
};

export default ScheduleText;
