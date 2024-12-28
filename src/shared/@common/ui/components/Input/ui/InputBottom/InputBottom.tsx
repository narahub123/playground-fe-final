import { ReactNode } from "react";
import styles from "./InputBottom.module.css";
import { useInputContext } from "../../context";
import { joinClassNames } from "@shared/@common/utils";

interface InputBottomProps {
  children: ReactNode;
}

const InputBottom = ({ children }: InputBottomProps) => {
  // InputContext를 통해서 값을 불러옴
  const { focusCond } = useInputContext();

  return (
    <div
      className={joinClassNames([
        styles["input__bottom"],
        focusCond // 포커스 상태 변화
          ? styles["input__bottom--focused"]
          : styles["input__bottom--unfocused"],
      ])}
    >
      {children}
    </div>
  );
};

export default InputBottom;
