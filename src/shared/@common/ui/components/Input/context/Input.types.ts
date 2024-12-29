import { DropdownItemType } from "@shared/@common/types";

interface InputContextType {
  label: string; // input 필드의 목적을 설명하는 문자열
  field: string; // slice에서 상태를 식별하기 위한 필드 이름
  inputValue: string; // Input의 value
  setInputValue: (value: any) => { type: string; payload: any }; // inputValue를 업데이트할 reducer
  isFocused: boolean; // 현재 Input 컴포넌트의 포커스 여부
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>; // Input 컴포넌트의 포커스 상태 업데이트하는 set 함수
  focusCond: boolean; // focus 표시 조건: focuse 상태거나 inputValue에 값이 있는 경우
  isValid: boolean; // 현재 inputValue의 유효성 여부: 지금은 내부에서 생성하는데 다른 컴포넌트과 유효성을 통합해서 상태 확인할 때는 외부에서 가져와야 할 수도 있음
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>; // inputValue의 유효성을 업데이트 하는 set 함수
  inputRef: React.RefObject<HTMLInputElement> | undefined; // input 요소를 참조하는 상태: 포커스 이동에 사용
  setInputRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLInputElement> | undefined>
  >; // inputRef를 업데이트하는 set 함수
  showPassword: boolean; // 현재 비밀번호 표시 여부
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>; // 비밀번호 표시 여부 업데이트하는 set 함수
  errorMessage: string; // 현재 에러 메시지 상태
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>; // 에러 메시지 업데이트하는 set 함수
  error: InputErrorType; // 에러 객체 : 정규 표현식과 에러 메시지를 가지고 있음
  isDropdownOpen: boolean; // 현재 드롭다운 열여 있는지 여부
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>; // 드롭다운 여닫기 업데이트하는 set 함수
  mainRef: React.RefObject<HTMLLabelElement> | undefined; // 현재 InputMain 참조하는 상태: 드롭다운의 위치, 크기에 영향
  setMainRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLLabelElement> | undefined>
  >; // mainRef를 업데이트 하는 set 함수
  maxLength?: number; // 사용자가 input 필드에 입력할 수 있는 최대 글자 수를 제한: Constants로 관리할 것
  list?: DropdownItemType[]; // 드롭다운에 들어갈 아이템 배열
}

interface InputErrorType {
  regExp: string;
  defaultErrorMsg: string;
  errorList?: InputErrorListItemType[];
  empty?: string;
}

interface InputErrorListItemType {
  regExp: string;
  errorMsg: string;
}

export type { InputContextType, InputErrorType, InputErrorListItemType };
