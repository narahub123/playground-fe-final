import { ReactNode, useEffect, useRef } from "react";
import styles from "./SelectOption.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SelectOptionProps {
  children: ReactNode;
  value: string;
  onMouseDown: (value: any) => void;
  className?: string;
}

const SelectOption = ({
  children,
  value,
  onMouseDown,
  className,
}: SelectOptionProps) => {
  const optionRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (!optionRef.current) return;

    const option = optionRef.current;

    if (option.className.includes("selected")) {
      option.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [value]);

  const classNames = joinClassNames([styles["select__option"], className]);

  return (
    <li className={classNames} onMouseDown={onMouseDown} ref={optionRef}>
      {children}
    </li>
  );
};

export default SelectOption;
