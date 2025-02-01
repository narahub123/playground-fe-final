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
  const { field, label, maxLength } = useInputContext();
  const classNames = joinClassNames([styles["input__main"], className]);

  return (
    <div className={classNames}>
      <label htmlFor={field} className={styles[`input__main__label`]}>
        <Text>{label}</Text>
        {maxLength && <Text>{maxLength}</Text>}
      </label>
      {children}
    </div>
  );
};

export default InputMain;
