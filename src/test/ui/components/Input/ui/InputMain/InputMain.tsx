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
  const { field, label, maxLength, isFocused, inputValue, isValid, disabled } =
    useInputContext();

  const focusCond = isFocused || inputValue !== "";

  const validCond = isValid || inputValue === ""; // 유효성 여부

  const classNames = joinClassNames([
    styles["input__main"],
    isFocused // 포커스 여부
      ? validCond
        ? styles[`input__main--focused--valid`]
        : styles[`input__main--focused--invalid`]
      : validCond
      ? styles[`input__main--unfocused--valid`]
      : styles[`input__main--unfocused--invalid`],
    disabled ? styles["input__main--disabled"] : "",
    className,
  ]);

  const topClassNames = joinClassNames([
    styles[`input__top`],
    focusCond ? styles[`input__top--focused`] : styles[`input__top--unfocused`],
  ]);

  const labelClassNames = joinClassNames([
    styles[`input__label`],
    focusCond
      ? validCond
        ? styles[`input__label--focused--valid`]
        : styles[`input__label--focused--invalid`]
      : styles[`input__label--unfocused`],
    disabled ? styles[`input__label--disabled`] : "",
  ]);

  const countClassNames = joinClassNames([
    styles[`input__count`],
    focusCond
      ? styles[`input__count--focused`]
      : styles[`input__count--unfocused`],
  ]);

  return (
    <label className={classNames} htmlFor={field}>
      <div className={topClassNames}>
        <Text className={labelClassNames}>{label}</Text>
        {maxLength && !disabled && (
          <Text
            className={countClassNames}
          >{`${inputValue.length} / ${maxLength}`}</Text>
        )}
      </div>
      {children}
    </label>
  );
};

export default InputMain;
