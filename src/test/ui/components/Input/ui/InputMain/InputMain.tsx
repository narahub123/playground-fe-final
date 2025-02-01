import { ReactNode } from "react";
import styles from "./InputMain.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Text } from "@shared/@common/ui/components";
import { useInputContext } from "../../hooks";

interface InputMainProps {
  children: ReactNode;
  className?: string;
}

const InputMain = ({ children, className }: InputMainProps) => {
  const { field, label, maxLength, isFocused } = useInputContext();
  const classNames = joinClassNames([
    styles["input__main"],
    isFocused
      ? styles[`input__main--focused`]
      : styles[`input__main--unfocused`],
    className,
  ]);

  return (
    <label className={classNames} htmlFor={field}>
      <div className={styles[`input__main__label`]}>
        <Text>{label}</Text>
        {maxLength && <Text>{maxLength}</Text>}
      </div>
      {children}
    </label>
  );
};

export default InputMain;
