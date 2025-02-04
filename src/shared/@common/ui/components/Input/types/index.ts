type InputContextType = {
  label: string;
  field: string;
  disabled: boolean;
  isFocused: boolean;
  setIsFocused: React.Dispatch<React.SetStateAction<boolean>>;
  inputValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  maxLength?: number;
};

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
