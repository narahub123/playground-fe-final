import { ReactNode } from "react";
import styles from "./InputMain.module.css";
import InputError from "../InputError/InputError";
import InputDropdown from "../InputDropdown/InputDropdown";
import { validateChildren } from "../../utils";

interface InputMainProps {
  children: ReactNode; //type 에러 : 유효하지 않은 타입 제거
}

const InputMain = ({ children }: InputMainProps) => {
  // InputError와 InputDropdown이 InputMain의 자식 요소로 오지 못하게 제한
  const validChildren = validateChildren(children, [InputError, InputDropdown]);

  return <div className={styles["inputmain"]}>{validChildren}</div>;
};

export default InputMain;
