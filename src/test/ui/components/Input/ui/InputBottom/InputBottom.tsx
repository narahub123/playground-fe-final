import { ReactNode } from "react";
import styles from "./InputBottom.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface InputBottomProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const InputBottom = ({
  children,
  className,
  disabled = false,
}: InputBottomProps) => {
  const classNames = joinClassNames([styles["input__bottom"], className]);

  return <div className={classNames}>{children}</div>;
};

export default InputBottom;
