import { ReactNode } from "react";
import styles from "./InputTop.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../../context";

interface InputTopProps {
  children: ReactNode;
}

const InputTop = ({ children }: InputTopProps) => {
  const { focusCond } = useInputContext();
  return (
    <div
      className={joinClassNames([
        styles["input__top"],
        focusCond // isFocused 가 true 이거나 inputValue 가 빈문자열이 아닐 때
          ? styles["input__top--focused"]
          : styles["input__top--unfocused"],
      ])}
    >
      {children}
    </div>
  );
};

export default InputTop;
