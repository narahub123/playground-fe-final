import { ReactNode, useState } from "react";
import styles from "./InputWrapper.module.css";
import { InputContextProvider, InputContextType } from "../../context";

// 외부에서 전달 받을 값
interface InputWrapperProps {
  label: string; // input 필드의 목적을 설명하는 문자열
  field: string; // slice에서 상태를 식별하기 위한 필드 이름
  inputValue: string; // Input의 value
  setInputValue: (value: any) => { type: string; payload: any }; // inputValue를 업데이트할 reducer
  children: ReactNode;
  maxLength?: number; // 사용자가 input 필드에 입력할 수 있는 최대 글자 수를 제한: Constants로 관리할 것
}

const InputWrapper = ({
  label,
  field,
  inputValue,
  setInputValue,
  children,
  maxLength,
}: InputWrapperProps) => {
  const [isFocused, setIsFocused] = useState(false); // Input 컴포넌트의 포커스 상태 관리
  const [isValid, setIsValid] = useState(true); // inputValue의 유효성 상태 관리
  const [inputRef, setInputRef] = useState<React.RefObject<HTMLInputElement>>(); // input 요소를 참조하는 상태 관리
  const [showPassword, setShowPassword] = useState(false); // 비밀번호 표시 상태 관리

  // context 값
  const value: InputContextType = {
    // 외부에서 전달 받을 값 : Props
    label, // input 필드의 목적을 설명하는 문자열
    field, // slice에서 상태를 식별하기 위한 필드 이름
    inputValue, // Input의 value
    setInputValue, // inputValue를 업데이트할 reducer
    maxLength, // 사용자가 input 필드에 입력할 수 있는 최대 글자 수를 제한: Constants로 관리할 것
    // 내부에서 생성할 값
    isFocused, // 현재 Input 컴포넌트의 포커스 여부
    setIsFocused, // Input 컴포넌트의 포커스 상태 업데이트하는 set 함수
    focusCond: isFocused || inputValue !== "", // focus 표시 조건: focuse 상태거나 inputValue에 값이 있는 경우
    isValid, // 현재 inputValue의 유효성 여부: 지금은 내부에서 생성하는데 다른 컴포넌트과 유효성을 통합해서 상태 확인할 때는 외부에서 가져와야 할 수도 있음
    setIsValid, // inputValue의 유효성을 업데이트 하는 set 함수
    inputRef, // input 요소를 참조하는 상태: 포커스 이동에 사용, 포커스 시 커서 위치 지정에 사용
    setInputRef, // inputRef를 업데이트하는 set 함수
    showPassword, // 현재 비밀번호 표시 여부
    setShowPassword, // 비밀번호 표시 여부 업데이트하는 set 함수
  };
  return (
    // Input 관련 데이터를 하위 컴포넌트에 전달하기 위한 Context Provider
    <InputContextProvider value={value}>
      <div className={styles[`input__wrapper`]}>{children}</div>
    </InputContextProvider>
  );
};

export default InputWrapper;
