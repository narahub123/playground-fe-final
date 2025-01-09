/**
 * 모달 컨텍스트에서 사용되는 데이터와 동작을 정의하는 타입입니다.
 */
interface ModalContextType {
  /**
   * 모달을 닫는 함수 (옵션).
   */
  onClose?: () => void;

  /**
   * 현재 페이지 번호 (옵션).
   */
  curPage?: number;

  /**
   * 현재 페이지 번호를 설정하는 함수 (옵션).
   */
  setCurPage?: React.Dispatch<React.SetStateAction<number>>;

  /**
   * 화면 유효성 상태를 나타내는 선택적 필드.
   * 각 화면 이름을 키로 하여 유효성 상태를 저장합니다.
   *
   * @property {ScreenValidationType} [screenValidations] - 화면별 유효성 상태 객체 (선택적).
   */
  screenValidations?: ScreenValidationType;

  /**
   * 화면 유효성 상태를 업데이트하는 선택적 상태 디스패치 함수.
   * `screenValidations` 상태를 업데이트하는 데 사용됩니다.
   *
   * @property {React.Dispatch<React.SetStateAction<ScreenValidationType>>} [setScreenValidations] - 유효성 상태를 업데이트하는 디스패치 함수 (선택적).
   */
  setScreenValidations?: React.Dispatch<
    React.SetStateAction<ScreenValidationType>
  >;

  /**
   * 모달을 열었을 때 포커스가 될 요소의 인덱스
   */
  firstFocusIndex?: number;
}

/**
 * 모달 너비의 크기의 단위를 나타내는 문자열 타입입니다.
 */
type FontUnitType = "px" | "%" | "rem";

/**
 * 화면 유효성 상태를 나타내는 타입.
 * 키는 Screen 컴포넌트의 이름(문자열)이며, 값은 해당 Screen의 전체 유효성의 결과을 나타내는 불리언 값입니다.
 *
 * - `true`: Screen이 유효성 통과함을 의미.
 * - `false`: Screen이 유효성을 통과하지 않음을 의미.
 *
 * @typedef {Object} ScreenValidationType
 * @property {boolean} [key: string] - Screen 컴포넌트 이름을 키로 가지며, 유효성 통과 여부를 나타내는 불리언 값.
 */
type ScreenValidationType = {
  [key: string]: boolean;
};

export type { ModalContextType, FontUnitType, ScreenValidationType };
