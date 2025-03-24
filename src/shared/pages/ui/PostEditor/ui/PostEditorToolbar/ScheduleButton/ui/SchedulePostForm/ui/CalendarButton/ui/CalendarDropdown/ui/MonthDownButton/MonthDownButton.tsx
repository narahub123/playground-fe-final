import styles from "./MonthDownButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { LuArrowDown } from "react-icons/lu";
import { useScheduleContext } from "../../../../../../hooks";

interface MonthDownButtonProps {
  className?: string;
  disabled?: boolean;
}

const MonthDownButton = ({
  className,
  disabled = false,
}: MonthDownButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "MonthDownButton"]);

  const { schedule, setSchedule } = useScheduleContext();

  const classNames = joinClassNames([styles["month__down__button"], className]);

  const handleClick = () => {
    const newSchedule = new Date(schedule);
    console.log(newSchedule);

    const curDate = newSchedule.getDate();
    console.log(curDate);

    newSchedule.setMonth(newSchedule.getMonth() + 1);

    console.log(newSchedule);
    const newDate = newSchedule.getDate();

    console.log(newDate);

    setSchedule(newSchedule);
  };

  return (
    <button
      className={classNames}
      aria-disabled={disabled}
      aria-label="다음 달로 이동"
      onClick={handleClick}
    >
      <LuArrowDown />
    </button>
  );
};

export default MonthDownButton;
