import { ReactNode } from "react";
import styles from "./InputContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputContainerProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const InputContainer = ({
  children,
  className,
  disabled = false,
}: InputContainerProps) => {
  const classNames = joinClassNames([styles["input__container"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputContainer;
