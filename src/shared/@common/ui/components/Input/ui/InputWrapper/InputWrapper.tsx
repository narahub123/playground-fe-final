import { ReactElement } from "react";
import styles from "./InputWrapper.module.css";

interface InputWrapperProps {
  children: ReactElement | ReactElement[]; // 차이점 + reactnode와의 차이점
}

const InputWrapper = ({ children }: InputWrapperProps) => {
  return <div className={styles[`input__wrapper`]}>{children}</div>;
};

export default InputWrapper;
