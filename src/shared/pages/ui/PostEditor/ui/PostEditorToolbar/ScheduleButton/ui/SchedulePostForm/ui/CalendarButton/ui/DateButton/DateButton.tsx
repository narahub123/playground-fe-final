import styles from "./DateButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useScheduleContext } from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface DateButtonProps {
  index: number;
  date: Date;
}

const DateButton = ({ index, date }: DateButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "DateButton"]);

  const { schedule: scheduled } = useScheduleContext();

  const { year, month, date: selectedDate } = scheduled;

  const today = new Date();

  today.setHours(0, 0, 0, 0);

  const firstDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0);

  const schedule = new Date(year, month - 1, selectedDate);

  const classNames = joinClassNames([
    styles["date__button"],
    index % 7 === 0
      ? styles["sunday"]
      : index % 7 === 6
      ? styles["saturday"]
      : "",
    firstDate.getTime() > date.getTime()
      ? styles["last__month"]
      : lastDate.getTime() < date.getTime()
      ? styles["next__month"]
      : "",
    today.getTime() === date.getTime() ? styles["today"] : "",
    schedule.getTime() === date.getTime() ? styles["scheduled__date"] : "",
  ]);

  return (
    <button className={classNames} key={index}>
      {date.getDate()}
    </button>
  );
};

export default DateButton;
