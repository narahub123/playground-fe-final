import { ReactNode } from "react";
import styles from "./SelectOption.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface SelectOptionProps {
  children: ReactNode;
  onMouseDown: (value: any) => void;
  className?: string;
}

const SelectOption = ({
  children,
  onMouseDown,
  className,
}: SelectOptionProps) => {
  const classNames = joinClassNames([styles["select__option"], className]);

  return (
    <li className={classNames} onMouseDown={onMouseDown}>
      {children}
    </li>
  );
};

export default SelectOption;
