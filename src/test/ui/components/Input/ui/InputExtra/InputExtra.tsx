import { ReactNode } from "react";
import styles from "./InputExtra.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputExtraProps {
  children: ReactNode;
  className?: string;
}

const InputExtra = ({ children, className }: InputExtraProps) => {
  const classNames = joinClassNames([styles["input__extra"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputExtra;
