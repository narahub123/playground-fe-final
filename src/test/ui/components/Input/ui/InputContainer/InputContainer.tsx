import styles from "./InputContainer.module.css";
import { ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { InputContext, InputContextType } from "@test/ui/components/Input";

interface InputContainerProps {
  children: ReactNode;
  label: string; // Input 들어갈 값에 대한 설명
  field: string; // InputLabel과 InputField를 연결할 id 값
  maxLength?: string; // InputValue의 최대 길이
  disabled?: boolean; // disabled 모드 적용
  className?: string; // 스타일 추가
}

const InputContainer = ({
  children,
  label,
  field,
  maxLength,
  className,
  disabled = false,
}: InputContainerProps) => {
  const classNames = joinClassNames([styles["input__container"], className]);

  const value: InputContextType = {
    label,
    field,
    disabled,
    maxLength,
  };
  return (
    <InputContext.Provider value={value}>
      <div className={classNames}>{children}</div>
    </InputContext.Provider>
  );
};

export default InputContainer;
