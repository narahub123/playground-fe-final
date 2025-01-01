/**
 * 모달 컨텍스트에서 사용되는 데이터와 동작을 정의하는 타입입니다.
 */
interface ModalContextType {
  /**
   * 모달을 닫는 함수 (옵션).
   */
  onClose?: () => void;

  /**
   * 페이지 목록의 항목 개수 (옵션).
   */
  lengthOfList?: number;

  /**
   * 현재 페이지 번호 (옵션).
   */
  curPage?: number;

  /**
   * 현재 페이지 번호를 설정하는 함수 (옵션).
   */
  setCurPage?: React.Dispatch<React.SetStateAction<number>>;

  /**
   * 모달의 너비 (옵션).
   */
  width?: number;

  /**
   * 모달 너비의 크기의 단위를 나타내는 타입 (옵션).
   */
  unit?: FontUnitType;
}

/**
 * 모달 너비의 크기의 단위를 나타내는 문자열 타입입니다.
 */
type FontUnitType = "px" | "%" | "rem";

export type { ModalContextType, FontUnitType };
