import { ReactNode } from "react";
import styles from "./InputContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { InputContext } from "../../context";

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

  const value = {};
  return (
    <InputContext.Provider value={value}>
      <div className={classNames}>{children}</div>
    </InputContext.Provider>
  );
};

export default InputContainer;
