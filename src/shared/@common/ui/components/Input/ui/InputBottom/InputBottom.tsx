import { ReactNode } from "react";
import styles from "./InputBottom.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../../hooks";

interface InputBottomProps {
  children: ReactNode;
  className?: string;
}

const InputBottom = ({ children, className }: InputBottomProps) => {
  const { isFocused, inputValue } = useInputContext();
  const classNames = joinClassNames([
    styles["input__bottom"],
    isFocused || inputValue !== ""
      ? styles[`input__bottom--focused`]
      : styles[`input__bottom--unfocused`],
    className,
  ]);

  return <div className={classNames}>{children}</div>;
};

export default InputBottom;
