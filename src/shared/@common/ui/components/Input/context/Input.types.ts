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
  /**
   * `error` 객체는 `InputErrorKeyType` 값을 키로 사용하며, 각 키에 대해
   * 해당하는 `InputErrorType` 객체를 값으로 가집니다. 이 객체는 다양한 입력 오류를 처리하기 위한 정보를 저장합니다.
   *
   * 각 `InputErrorKeyType` 값은 다음과 같은 에러 유형을 나타냅니다:
   * - `EMPTY`: 입력값이 비어있을 때 발생하는 에러.
   * - `FORBIDDEN`: 허용되지 않는 값이 입력된 경우 발생하는 에러.
   * - `UNDER_MINIMUM`: 입력값이 최소 조건을 만족하지 못한 경우 발생하는 에러.
   * - `INCOMPLETE`: 필수 입력 항목이 부족한 경우 발생하는 에러.
   * - `EXCEED`: 입력값이 최대 조건을 초과한 경우 발생하는 에러.
   * - `FORMAT`: 입력값의 형식이 올바르지 않은 경우 발생하는 에러.
   * - `DUPLICATE`: 이미 동일한 값으로 저장된 값이 있는 경우 발생하는 에러.
   * - `DISCONNECT`: 서버와 연결이 되지 않는 경우 발생하는 에러.
   * 각 키에 대한 `InputErrorType` 구조는 다음과 같습니다:
   * - `regExp`: 해당 오류를 검출하기 위한 정규 표현식.
   * - `errorMessage`: 오류가 발생했을 때 사용자에게 보여줄 에러 메시지.
   *
   * `error` 객체는 `InputErrorKeyType` 값을 키로 하고, 각 키에 대응하는 `InputErrorType` 값을 값으로 가집니다.
   * 이 객체는 `Partial`로 정의되어 있어, 각 에러 키에 대해 `InputErrorType`의 일부 필드만 포함될 수도 있습니다.
   * 예를 들어, `regExp`만 포함되어 있거나 `errorMessage`만 포함되어 있을 수 있습니다.
   *
   * @type {Partial<Record<InputErrorKeyType, InputErrorType>>}
   * - `error` 객체는 `InputErrorKeyType` 값을 키로 사용하며, 각 키에 대해 선택적으로 `InputErrorType`을 가질 수 있습니다.
   */
  error: Partial<Record<InputErrorKeyType, InputErrorType>> | undefined;

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
  /**
   * 드롭다운에서 `.scroll` 클래스를 가진 가장 가까운 요소
   *
   * - `HTMLElement`일 경우, `scroll` 클래스를 가진 DOM 요소를 나타냅니다.
   * - `Window`일 경우, 브라우저의 `window` 객체를 나타냅니다.
   *
   * `scroll`는 스크롤 이벤트를 다루기 위해서 사용되는 클래스로 해당 클래스가 적용된 가장 가까운 클래스를 찾고,
   * 해당 요소에서 스크롤 이벤트를 감지하여 드롭다운의 위치 및 높이를 조정합니다.
   */
  scroll: HTMLElement | Window;
  /**
   * 현재 inputValue의 유효성 여부.
   * - `true`: 유효한 값.
   * - `false`: 유효하지 않은 값.
   * - 이 값은 현재 입력 필드의 유효성 검사를 수행하고, 해당 값에 따라 유효성 상태를 나타냅니다.
   */
  isValid: boolean;

  /**
   * inputValue의 유효성을 업데이트하는 함수.
   * - `isValid`가 객체일 경우 각 필드에 대한 유효성 상태를 개별적으로 업데이트할 수 있습니다.
   * - `isValid`가 `boolean`일 경우, 전체 입력 필드에 대한 유효성 상태를 한 번에 업데이트할 수 있습니다.
   *
   * 이 함수는 유효성 상태를 업데이트하기 위해 `useState`와 같은 상태 관리 훅에서 전달되며,
   * 입력 필드의 유효성 여부를 조정하는 데 사용됩니다.
   */
  setIsValid?: React.Dispatch<
    React.SetStateAction<
      | {
          [key: string]: boolean; // 각 필드에 대한 유효성 상태를 객체로 나타내며, 필드 이름을 키로, 유효성 여부(boolean)를 값으로 설정합니다.
        }
      | boolean // 전체 유효성 상태를 나타내는 `boolean` 값으로, 모든 입력 필드에 대해 유효성 검사를 한 번에 처리할 수 있습니다.
    >
  >;
  /** disabled 모드 적용 여부 */
  disabled?: boolean;
  /** 사용자가 입력할 수 있는 최대 글자 수 제한 */
  maxLength?: number;
  /** 드롭다운에 들어갈 아이템 배열 */
  list?: DropdownItemType[];
}

/**
 * `InputErrorType`은 각 입력 오류를 정의하는 타입입니다. 이 타입은 오류를 검출하기 위한
 * 정규 표현식과 사용자에게 보여줄 에러 메시지를 포함합니다.
 */
interface InputErrorType {
  /**
   * 오류를 검출하기 위한 정규 표현식. 문자열 형태로 입력됩니다.
   * 이 정규 표현식을 사용하여 입력값의 유효성을 검사합니다.
   *
   * @example
   * "^\\d+$" // 숫자만 허용
   */
  regExp: string;

  /**
   * 오류 발생 시 사용자에게 보여줄 에러 메시지.
   * 오류 발생 시 유저 인터페이스에서 표시되는 텍스트로 사용됩니다.
   *
   * @example
   * "숫자만 입력해주세요."
   */
  errorMessage: string;
}

/**
 * `CompileErrorType`은 `InputErrorType`과 유사하지만, `regExp` 필드를 정규 표현식 객체로
 * 정의한 타입입니다. 이 타입은 정규 표현식 객체를 사용하여 검증을 수행할 수 있습니다.
 */
interface CompileErrorType {
  /**
   * 오류를 검출하기 위한 정규 표현식 객체.
   * 이 정규 표현식을 사용하여 입력값을 검사합니다.
   *
   * @example
   * /\\d+/ // 숫자만 허용하는 정규 표현식
   */
  regExp: RegExp;

  /**
   * 오류 발생 시 사용자에게 보여줄 에러 메시지.
   * `InputErrorType`의 `errorMessage`와 동일하게 동작하지만,
   * 정규 표현식이 `RegExp` 객체로 제공됩니다.
   *
   * @example
   * "숫자만 입력해주세요."
   */
  errorMessage: string;
}

/**
 * `InputErrorKeyType`은 여러 종류의 입력 오류를 나타내는 문자열 리터럴 타입입니다.
 * 각 키는 특정 오류 유형을 나타내며, 이는 `InputErrorType`이나 `CompileErrorType`과 매핑됩니다.
 *
 * - `EMPTY`: 입력값이 비어 있을 때 발생하는 오류.
 * - `FORBIDDEN`: 허용되지 않는 값이 입력된 경우 발생하는 오류.
 * - `UNDER_MINIMUM`: 입력값이 최소 조건을 만족하지 못한 경우 발생하는 오류.
 * - `INCOMPLETE`: 필수 입력 항목이 부족한 경우 발생하는 오류.
 * - `EXCEED`: 입력값이 최대 조건을 초과한 경우 발생하는 오류.
 * - `FORMAT`: 입력값의 형식이 올바르지 않은 경우 발생하는 오류.
 * - `DUPLICATE`: 이미 동일한 값으로 저장된 값이 있는 경우 발생하는 오류.
 * - `DISCONNECT`: 서버와 연결이 되지 않는 경우 발생하는 오류.
 */
type InputErrorKeyType =
  | "EMPTY" // 비어있는 입력
  | "FORBIDDEN" // 허용되지 않는 값
  | "UNDER_MINIMUM" // 최소 조건 미만
  | "INCOMPLETE" // 필수 항목 부족
  | "EXCEED" // 최대 조건 초과
  | "FORMAT" // 잘못된 형식
  | "DUPLICATE" // 중복
  | "DISCONNECT"; // 서버와 연결 안됨

export type {
  InputContextType,
  InputErrorType,
  CompileErrorType,
  InputErrorKeyType,
};
