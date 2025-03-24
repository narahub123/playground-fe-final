import styles from "./CalendarDropdown.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { Dropdown } from "@shared/@common/ui/components";
import { joinClassNames } from "@shared/@common/utils";

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

  const classNames = joinClassNames([styles["calendar__dropdown"], className]);

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
      하하
    </Dropdown>
  );
};

export default CalendarDropdown;
