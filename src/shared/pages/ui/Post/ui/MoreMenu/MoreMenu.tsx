import styles from "./MoreMenu.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useEffect, useRef, useState } from "react";
import { IRect, MoreButton } from "@shared/pages/ui/Post";

interface MoreMenuProps {
  className?: string;
}

const MoreMenu = ({ className }: MoreMenuProps) => {
  const classNames = joinClassNames([styles["more__menu"], className]);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [rect, setRect] = useState<IRect>();

  // 드롭다운 위치 지정
  useEffect(() => {
    const getButtonPosition = () => {
      if (!buttonRef.current) return;
      const button = buttonRef.current;

      const { top, bottom, left, right } = button.getBoundingClientRect();

      setRect({ top, bottom, left, right });
    };

    getButtonPosition();

    window.addEventListener("resize", getButtonPosition);
    window.addEventListener("scroll", getButtonPosition);

    return () => {
      window.removeEventListener("resize", getButtonPosition);
      window.removeEventListener("scroll", getButtonPosition);
    };
  }, []);

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  console.log(isOpen);
  console.log(rect);

  return (
    <div className={classNames}>
      <MoreButton ref={buttonRef} onClick={onOpen} />
    </div>
  );
};

export default MoreMenu;
