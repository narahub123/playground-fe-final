import { ReactNode } from "react";
import styles from "./InputBottom.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../../hooks";

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
  const { isFocused } = useInputContext();
  const classNames = joinClassNames([
    styles["input__bottom"],
    isFocused
      ? styles[`input__bottom--focused`]
      : styles[`input__bottom--unfocused`],
    className,
  ]);

  return <div className={classNames}>{children}</div>;
};

export default InputBottom;
