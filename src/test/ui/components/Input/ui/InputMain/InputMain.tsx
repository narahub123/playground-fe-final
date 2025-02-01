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

  const topClassNames = joinClassNames([
    styles[`input__top`],
    isFocused ? styles[`input__top--focused`] : styles[`input__top--unfocused`],
  ]);

  const labelClassNames = joinClassNames([
    styles[`input__label`],
    isFocused
      ? styles[`input__label--focused`]
      : styles[`input__label--unfocused`],
  ]);

  const countClassNames = joinClassNames([
    styles[`input__count`],
    isFocused
      ? styles[`input__count--focused`]
      : styles[`input__count--unfocused`],
  ]);

  return (
    <label className={classNames} htmlFor={field}>
      <div className={topClassNames}>
        <Text className={labelClassNames}>{label}</Text>
        {maxLength && <Text className={countClassNames}>{maxLength}</Text>}
      </div>
      {children}
    </label>
  );
};

export default InputMain;
