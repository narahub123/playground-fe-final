import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import styles from "./SelectListbox.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SelectListboxProps {
  children: ReactNode;
  className?: string;
}

const SelectListbox = ({ children, className }: SelectListboxProps) => {
  const listboxRef = useRef<HTMLDivElement>(null);

  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    if (!listboxRef.current) return;

    const listbox = listboxRef.current;

    const screenHeight = window.visualViewport?.height || 0;

    const top = listbox.getBoundingClientRect().top;

    const height = screenHeight - top;

    setHeight(height);
  }, [listboxRef.current]);

  const classNames = joinClassNames([styles["select__listbox"], className]);

  return (
    // 스크롤을 listbox의 보더와 맞추기 위한 div
    <div
      className={styles[`select__listbox__container`]}
      ref={listboxRef}
      style={{ height }}
      onMouseDown={(e) => e.stopPropagation()}
    >
      <ul className={classNames} style={{ height }}>
        {children}
      </ul>
    </div>
  );
};

export default SelectListbox;
