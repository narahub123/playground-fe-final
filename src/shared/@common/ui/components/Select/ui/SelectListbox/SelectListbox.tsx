import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import styles from "./SelectListbox.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SelectListboxProps {
  children: ReactNode;
  className?: string;
}

const SelectListbox = ({ children, className }: SelectListboxProps) => {
  const listboxRef = useRef<HTMLUListElement>(null);

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
    <ul className={classNames} ref={listboxRef} style={{ height }}>
      {children}
    </ul>
  );
};

export default SelectListbox;
