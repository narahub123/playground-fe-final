import { ReactNode } from "react";
import styles from "./InputError.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputErrorProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const InputError = ({
  children,
  className,
  disabled = false,
}: InputErrorProps) => {
  const classNames = joinClassNames([styles["input__error"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputError;
