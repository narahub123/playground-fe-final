import styles from "./CalendarButton.module.css";
import { useLanguageContent } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useLayoutEffect, useRef, useState } from "react";
import {
  CalendarDropdown,
  CalendarIcon,
} from "@shared/pages/ui/PostEditor/ui/PostEditorToolbar/ScheduleButton";

interface CalendarButtonProps {
  className?: string;
}

const CalendarButton = ({ className }: CalendarButtonProps) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<{ top?: number; left?: number }>({
    top: undefined,
    left: undefined,
  });

  // 언어 설정
  //   const {} = useLanguageContent(["", "CalendarButton"]);
  useLayoutEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;

    const { top, left } = button.getBoundingClientRect();

    setRect({
      top,
      left: left - 200,
    });
  }, []);

  const classNames = joinClassNames([styles["calendarbutton"], className]);

  const handleClick = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={classNames} ref={buttonRef}>
      <CalendarIcon onClick={handleClick} />
      <CalendarDropdown
        isOpen={isOpen}
        onClose={onClose}
        lastClickedRaf={buttonRef}
        top={rect.top}
        left={rect.left}
      />
    </div>
  );
};

export default CalendarButton;
