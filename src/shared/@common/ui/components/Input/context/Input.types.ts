import { DropdownItemType } from "@shared/@common/types";

/**
 * InputContextType 인터페이스는 입력 필드와 관련된 상태 및 동작을 정의합니다.
 */
interface InputContextType {
  /** input 필드의 목적을 설명하는 문자열 */
  label: string;
  /** slice에서 상태를 식별하기 위한 필드 이름 */
  field: string;
  /** Input의 현재 value */
  inputValue: string;
  /** inputValue를 업데이트할 reducer 함수 */
  setInputValue: (value: any) => { type: string; payload: any };
  /** 현재 Input 컴포넌트의 포커스 여부 */
  isFocused: boolean;
  /** Input 컴포넌트의 포커스 상태를 업데이트하는 set 함수 */
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  /** focus 표시 조건: focus 상태거나 inputValue에 값이 있는 경우 */
  focusCond: boolean;
  /** 현재 inputValue의 유효성 여부 */
  isValid: boolean;
  /** inputValue의 유효성을 업데이트하는 set 함수 */
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
  /** input 요소를 참조하는 상태: 포커스 이동에 사용 */
  inputRef: React.RefObject<HTMLInputElement> | undefined;
  /** inputRef를 업데이트하는 set 함수 */
  setInputRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLInputElement> | undefined>
  >;
  /** 현재 비밀번호 표시 여부 */
  showPassword: boolean;
  /** 비밀번호 표시 여부를 업데이트하는 set 함수 */
  setShowPassword: React.Dispatch<React.SetStateAction<boolean>>;
  /** 현재 에러 메시지 상태 */
  errorMessage: string;
  /** 에러 메시지를 업데이트하는 set 함수 */
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  /** 에러 객체 : 정규 표현식과 에러 메시지를 포함 */
  error: InputErrorType;
  /** 현재 드롭다운이 열려 있는지 여부 */
  isDropdownOpen: boolean;
  /** 드롭다운 상태를 업데이트하는 set 함수 */
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  /** 현재 InputMain을 참조하는 상태: 드롭다운 위치와 크기에 영향 */
  mainRef: React.RefObject<HTMLLabelElement> | undefined;
  /** mainRef를 업데이트하는 set 함수 */
  setMainRef: React.Dispatch<
    React.SetStateAction<React.RefObject<HTMLLabelElement> | undefined>
  >;
  /** disabled 모드 적용 여부 */
  disabled?: boolean;
  /** 사용자가 입력할 수 있는 최대 글자 수 제한 */
  maxLength?: number;
  /** 드롭다운에 들어갈 아이템 배열 */
  list?: DropdownItemType[];
}

/**
 * InputErrorType 인터페이스는 입력값 유효성 검사에 필요한 에러 정보를 정의합니다.
 */
interface InputErrorType {
  /** 유효성 검사에 사용할 정규 표현식 */
  regExp: string;
  /** 기본 에러 메시지 */
  defaultErrorMsg: string;
  /** 추가적인 에러 메시지 및 정규 표현식 리스트 */
  errorList?: InputErrorListItemType[];
  /** 빈 입력값에 대한 에러 메시지 */
  empty?: string;
}

/**
 * InputErrorListItemType 인터페이스는 개별 유효성 검사 항목과 관련된 정보를 정의합니다.
 */
interface InputErrorListItemType {
  /** 유효성 검사에 사용할 정규 표현식 */
  regExp: string;
  /** 정규 표현식에 해당하는 에러 메시지 */
  errorMsg: string;
}

/**
 * 에러 정보를 정규 표현식 및 메시지로 반환하는 인터페이스
 */
interface CompiledInputErrorType {
  /**
   * 기본 에러 정규 표현식
   * - `regExp` 값을 컴파일한 정규 표현식입니다.
   * - 입력 값이 기본 조건을 충족하지 않을 경우 이 정규 표현식으로 검사됩니다.
   */
  defaultErrorRegex: RegExp | string;

  /**
   * 기본 에러 메시지
   * - 기본 정규 표현식(`defaultErrorRegex`)에 맞지 않을 경우 표시됩니다.
   */
  defaultErrorMsg: string;

  /**
   * 에러 목록의 정규 표현식 배열
   * - 추가로 정의된 에러 조건들을 정규 표현식으로 변환한 배열입니다.
   */
  errorRegexList: RegExp[];

  /**
   * 에러 목록의 메시지 배열
   * - `errorRegexList`와 동일한 순서로 에러 메시지를 저장한 배열입니다.
   */
  errorMsgList: string[];

  /**
   * 입력 값이 비어 있을 경우 표시되는 에러 메시지
   * - 입력 필드가 필수인 경우 비어 있을 때 나타나는 메시지입니다.
   */
  empty: string | undefined;
}

export type {
  InputContextType,
  InputErrorType,
  InputErrorListItemType,
  CompiledInputErrorType,
};
