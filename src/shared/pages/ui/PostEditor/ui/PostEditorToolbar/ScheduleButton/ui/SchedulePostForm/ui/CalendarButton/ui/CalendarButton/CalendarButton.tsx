import styles from "./CalendarButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useLayoutEffect, useRef, useState } from "react";
import {
  CalendarIcon,
  CalendarDropdown,
  IRect,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface CalendarButtonProps {
  className?: string;
}

const CalendarButton = ({ className }: CalendarButtonProps) => {
  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarButton"]);
  const btnRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);

  const [rect, setRect] = useState<IRect | null>(null);

  useLayoutEffect(() => {
    if (!btnRef.current) return;
    const button = btnRef.current;

    const { top, right } = button.getBoundingClientRect();

    console.log(right);

    setRect({
      top: top + 34,
      right: right - 200,
    });
  }, []);

  console.log("달력 오픈?", isOpen);

  const classNames = joinClassNames([styles["calendar__button"], className]);

  const onToggle = () => {
    setIsOpen(!isOpen);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={classNames}>
      <CalendarIcon onToggle={onToggle} ref={btnRef} isOpen={isOpen} />
      <CalendarDropdown
        isOpen={isOpen}
        onClose={onClose}
        lastClickedRef={btnRef}
        top={rect?.top}
        left={rect?.right}
      />
    </div>
  );
};

export default CalendarButton;
