import { ReactNode } from "react";
import styles from "./InputMain.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputMainProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const InputMain = ({
  children,
  className,
  disabled = false,
}: InputMainProps) => {
  const classNames = joinClassNames([styles["input__main"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputMain;
