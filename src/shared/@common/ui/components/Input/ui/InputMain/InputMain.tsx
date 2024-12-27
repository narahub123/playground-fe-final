import { Children, isValidElement, ReactElement, ReactNode } from "react";
import styles from "./InputMain.module.css";
import InputError from "../InputError/InputError";
import InputDropdown from "../InputDropdown/InputDropdown";

interface InputMainProps {
  children: ReactNode; //type 에러 : 유효하지 않은 타입 제거
}

const InputMain = ({ children }: InputMainProps) => {
  const validChildren = Children.toArray(children).map((child, index) => {
    if (isValidElement(child)) {
      // InputError 또는 InputDropdown인 경우 해당 위치에 에러 메시지 삽입
      if (child.type === InputError || child.type === InputDropdown) {
        return (
          <div key={index}>
            <p>에러: {child.type.name}는 자식으로 사용할 수 없습니다.</p>{" "}
            {/* 에러 메시지 */}
          </div>
        );
      }
      return child; // 유효한 컴포넌트는 그대로 반환
    }
    return child; // JSX 엘리먼트가 아닌 경우 그대로 반환
  });
  return <div className={styles["inputmain"]}>{validChildren}</div>;
};

export default InputMain;
