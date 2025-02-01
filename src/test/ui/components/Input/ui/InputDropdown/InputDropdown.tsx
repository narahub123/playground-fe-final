import { ReactNode } from "react";
import styles from "./InputDropdown.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputDropdownProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const InputDropdown = ({
  children,
  className,
  disabled = false,
}: InputDropdownProps) => {
  const classNames = joinClassNames([styles["input__dropdown"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputDropdown;
