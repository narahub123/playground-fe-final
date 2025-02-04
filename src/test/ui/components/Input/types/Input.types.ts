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
  setInputValue:
    | ((value: any) => { type: string; payload: any })
    | React.Dispatch<React.SetStateAction<string>>;
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
   * `error`는 `InputErrorKeyType`을 키로 가지며, 각 키에 해당하는 에러 메시지와
   * 선택적으로 정규 표현식을 포함하는 객체입니다.
   * `undefined`일 수도 있음을 나타냅니다.
   *
   * - `InputErrorKeyType`은 다양한 에러 키들을 정의하고 있으며,
   * - `InputErrorType<K>`은 각 에러 키에 대한 타입을 정의합니다.
   *
   * 예시:
   * - `error: { EMPTY: { errorMessage: "이 필드는 비어 있을 수 없습니다.", regExp: "^.*$" } }`
   * - `error: undefined`일 수도 있습니다.
   */
  error:
    | {
        [K in InputErrorKeyType]?: InputErrorType<K>;
      }
    | undefined;

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
 * `InputErrorType`은 주어진 에러 키에 따라, 에러 메시지 또는 정규 표현식 정보를 담는 타입을 정의합니다.
 * - `InputErrorKeyWithoutRegExp`에 해당하는 경우, `errorMessage`만 포함됩니다.
 * - `InputErrorKeyWithRegExp`에 해당하는 경우, `errorMessage`와 `regExp`를 포함합니다.
 *
 * @template T - 에러 키에 따라 타입이 결정됩니다.
 */
type InputErrorType<T> = T extends InputErrorKeyWithoutRegExp
  ? {
      /**
       * 오류 발생 시 사용자에게 보여줄 에러 메시지.
       * 오류 발생 시 유저 인터페이스에서 표시되는 텍스트로 사용됩니다.
       *
       * @example
       * "숫자만 입력해주세요."
       */
      errorMessage: string;
    }
  : {
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
    };

/**
 * `CompileErrorType`은 `InputErrorType`의 확장형으로,
 * `InputErrorKeyWithoutRegExp`에 해당하는 경우는 `errorMessage`만,
 * `InputErrorKeyWithRegExp`에 해당하는 경우는 `regExp`가 `RegExp` 객체로 제공됩니다.
 *
 * @template T - 에러 키에 따라 타입이 결정됩니다.
 */
type CompileErrorType<T> = T extends InputErrorKeyWithoutRegExp
  ? {
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
  : {
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
    };

/**
 * `InputErrorKeyType`은 에러 키의 타입을 정의하며,
 * `InputErrorKeyWithRegExp`와 `InputErrorKeyWithoutRegExp` 두 가지를 포함할 수 있습니다.
 */
type InputErrorKeyType = InputErrorKeyWithRegExp | InputErrorKeyWithoutRegExp;

/**
 * `InputErrorKeyWithRegExp`는 정규 표현식을 사용하는 에러 키들의 타입을 정의합니다.
 * 이 키들은 주로 입력값이 특정 규칙을 만족하는지 검사할 때 사용됩니다.
 *
 * 각 에러 키에 대한 설명:
 * - `"EMPTY"`: 입력 필드가 비어있는 경우 발생하는 에러입니다.
 * - `"FORBIDDEN"`: 허용되지 않는 값이 입력된 경우 발생하는 에러입니다.
 * - `"UNDER_MINIMUM"`: 입력값이 최소 조건을 충족하지 않는 경우 발생하는 에러입니다.
 * - `"INCOMPLETE"`: 입력이 불완전하거나 필요한 정보가 부족한 경우 발생하는 에러입니다.
 * - `"FORMAT"`: 입력값이 예상되는 형식에 맞지 않는 경우 발생하는 에러입니다.
 *
 * @example
 * "EMPTY", "FORBIDDEN", "UNDER_MINIMUM", "INCOMPLETE", "FORMAT"
 */
type InputErrorKeyWithRegExp =
  /**
   * 비어있는 입력에 대한 에러 키.
   * 입력 필드가 비어있을 경우 발생하는 오류를 나타냅니다.
   */
  | "EMPTY" // 비어있는 입력
  /**
   * 허용되지 않는 값에 대한 에러 키.
   * 사용자가 입력한 값이 허용된 값이 아닐 경우 발생하는 오류를 나타냅니다.
   */
  | "FORBIDDEN" // 허용되지 않는 값
  /**
   * 최소 조건 미만에 대한 에러 키.
   * 사용자가 입력한 값이 최소 조건을 만족하지 못할 때 발생하는 오류를 나타냅니다.
   */
  | "UNDER_MINIMUM" // 최소 조건 미만
  /**
   * 필수 항목 부족에 대한 에러 키.
   * 사용자가 필수적으로 입력해야 하는 값이 부족할 경우 발생하는 오류를 나타냅니다.
   */
  | "INCOMPLETE" // 필수 항목 부족
  /**
   * 잘못된 형식에 대한 에러 키.
   * 입력값이 지정된 형식에 맞지 않는 경우 발생하는 오류를 나타냅니다.
   */
  | "FORMAT"; // 잘못된 형식;

/**
 * `InputErrorKeyWithoutRegExp`는 정규 표현식을 사용하지 않는 에러 키들의 타입을 정의합니다.
 * 이 키들은 주로 특정 조건을 충족하지 못할 때 발생하는 에러를 처리하는 데 사용됩니다.
 *
 * 각 에러 키에 대한 설명:
 * - `"EXCEED"`: 입력값이 최대 허용 범위를 초과하는 경우 발생하는 에러입니다.
 * - `"DUPLICATE"`: 이미 존재하는 값이 중복되어 입력된 경우 발생하는 에러입니다.
 * - `"DISCONNECT"`: 서버와의 연결이 끊어졌을 때 발생하는 에러입니다.
 * - `"REQUIRED"`: 다른 필드의 입력이 먼저 필요할 때 발생하는 에러입니다.
 * - `"MISMATCH"`: 다른 필드와의 값이 일치하지 않는 경우 발생하는 에러입니다.
 *
 * @example
 * "EXCEED", "DUPLICATE", "DISCONNECT", "REQUIRED", "MISMATCH"
 */
type InputErrorKeyWithoutRegExp =
  /**
   * 최대 조건 초과에 대한 에러 키.
   * 사용자가 입력한 값이 최대 조건을 초과할 경우 발생하는 오류를 나타냅니다.
   */
  | "EXCEED" // 최대 조건 초과
  /**
   * 중복에 대한 에러 키.
   * 사용자가 입력한 값이 이미 존재하는 경우 발생하는 오류를 나타냅니다.
   */
  | "DUPLICATE" // 중복
  /**
   * 서버와 연결되지 않음에 대한 에러 키.
   * 서버와 연결되지 않거나 연결이 끊어진 경우 발생하는 오류를 나타냅니다.
   */
  | "DISCONNECT" // 서버와 연결 안됨
  /**
   * 다른 필드의 정보가 먼저 입력되어야 하는 경우 발생하는 에러 키.
   * 다른 필드의 값이 먼저 입력되어야 할 때 발생하는 오류를 나타냅니다.
   */
  | "REQUIRED" // 다른 필드의 정보가 먼저 입력되어야 하는 경우
  /**
   * 다른 필드의 정보와 일치하지 않는 경우 발생하는 에러 키.
   * 사용자가 입력한 값이 다른 필드와 일치하지 않는 경우 발생하는 오류를 나타냅니다.
   */
  | "MISMATCH"; // 다른 필드의 정보와 일치하지 않는 경우;

export type {
  InputContextType,
  InputErrorType,
  CompileErrorType,
  InputErrorKeyType,
  InputErrorKeyWithRegExp,
  InputErrorKeyWithoutRegExp,
};
