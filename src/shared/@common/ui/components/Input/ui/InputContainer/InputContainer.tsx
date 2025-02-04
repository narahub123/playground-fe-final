import styles from "./InputContainer.module.css";
import { ReactNode, useState } from "react";
import { joinClassNames } from "@shared/@common/utils";
import { InputContext, InputContextType } from "@test/ui/components/Input";

interface InputContainerProps {
  children: ReactNode;
  label: string; // Input 들어갈 값에 대한 설명
  field: string; // InputLabel과 InputField를 연결할 id 값
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid?: boolean;
  maxLength?: number; // InputValue의 최대 길이
  disabled?: boolean; // disabled 모드 적용
  className?: string; // 스타일 추가
}

const InputContainer = ({
  children,
  label,
  field,
  inputValue,
  handleChange,
  maxLength,
  className,
  isValid = false,
  disabled = false,
}: InputContainerProps) => {
  const classNames = joinClassNames([styles["input__container"], className]);

  // input 필드에 포커스 여부
  const [isFocused, setIsFocused] = useState(false);

  // InputContext 설정
  const value: InputContextType = {
    label,
    field,
    disabled,
    maxLength,
    isFocused,
    setIsFocused,
    inputValue,
    handleChange,
    isValid,
  };

  return (
    <InputContext.Provider value={value}>
      <div className={classNames}>{children}</div>
    </InputContext.Provider>
  );
};

export default InputContainer;
