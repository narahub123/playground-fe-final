import { ComponentType, ReactNode } from "react";
import styles from "./InputTop.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useInputContext } from "../../context";
import { validateChildren } from "../../utils";
import InputCounter from "../InputCounter/InputCounter";
import InputBottom from "../InputBottom/InputBottom";

interface InputTopProps {
  children: ReactNode;
}

const InputTop = ({ children }: InputTopProps) => {
  const { focusCond, list } = useInputContext();

  // 유효하지 않은 컴포넌트
  const invalidComponents: ComponentType<any>[] = [InputBottom];

  // 드롭다운(list)가 있는 경우
  if (list) {
    // InputCounter를 InputTop안에서 사용 불가
    invalidComponents.push(InputCounter);
  }

  // InputError와 InputDropdown이 InputMain의 자식 요소로 오지 못하게 제한
  const validChildren = validateChildren(children, invalidComponents);

  return (
    <div
      className={joinClassNames([
        styles["input__top"],
        focusCond // isFocused 가 true 이거나 inputValue 가 빈문자열이 아닐 때
          ? styles["input__top--focused"]
          : styles["input__top--unfocused"],
      ])}
    >
      {validChildren}
    </div>
  );
};

export default InputTop;
