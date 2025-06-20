import styles from "./ModalContainer.module.css";
import { ReactNode, useRef } from "react";
import { useFocusTrap } from "@shared/@common/models/hooks";
import { joinClassNames } from "@shared/@common/utils";
import { useModalContext } from "../../hooks";

/**
 * ModalContainerProps는 ModalContainer 컴포넌트에 전달되는 속성들을 정의합니다.
 */
interface ModalContainerProps {
  /**
   * 모달 내부에 렌더링될 내용입니다.
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * 모달의 너비를 설정하는 값입니다.
   * 기본값은 70%입니다.
   * @type {number}
   * @default 70
   */
  width?: number;

  /**
   * 모달의 너비 단위를 설정합니다.
   * 기본값은 "%"이며, "px" 또는 "rem"도 사용 가능합니다.
   * @type {"px" | "%" | "rem"}
   * @default "%"
   */
  widthUnit?: "px" | "%" | "rem";

  /**
   * 추가적인 클래스명을 지정할 수 있는 프로퍼티. 기존 className에 덧붙여짐
   * @type {string}
   */
  className?: string;
}

/**
 * ModalContainer 컴포넌트는 모달의 내용 영역을 렌더링합니다.
 * 모달의 크기, 접근성 속성, 포커스 트랩 등을 처리합니다.
 *
 * @component
 * @param {Object} props - 컴포넌트에 전달되는 속성들
 * @param {ReactNode} props.children - 모달 내부에 렌더링될 내용입니다.
 * @param {number} [props.width=70] - 모달의 너비를 설정하는 값입니다. 기본값은 70%입니다.
 * @param {("px" | "%" | "rem")} [props.widthUnit="%"] - 모달의 너비 단위를 설정합니다. 기본값은 "%"입니다.
 *
 * @returns {JSX.Element} 모달의 내용이 렌더링된 `div` 요소입니다.
 *
 * @example
 * // 기본 크기 및 단위로 사용
 * <ModalContainer>
 *   <p>모달 내용</p>
 * </ModalContainer>
 *
 * @example
 * // 너비를 px 단위로 설정
 * <ModalContainer width={400} widthUnit="px">
 *   <p>모달 내용</p>
 * </ModalContainer>
 */
const ModalContainer = ({
  width = 70,
  widthUnit = "%",
  children,
  className,
}: ModalContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 모달 컨텍스트에서 필요한 값 추출
  const { firstFocusIndex, screenValidations } = useModalContext();

  // `screenValidations`의 값 개수 계산
  /**
   * `screenValidations`가 존재하면 유효성 객체의 값 개수를 가져옵니다.
   * 그렇지 않으면 `undefined`를 반환합니다.
   *
   * @type {number | undefined}
   */
  const lengthOfList = screenValidations
    ? Object.values(screenValidations).length
    : undefined;

  // 첫 번째 포커스를 설정
  /**
   * 첫 번째 포커스 위치를 계산합니다.
   * - `firstFocusIndex`가 존재하면 해당 값을 사용.
   * - 그렇지 않으면, `screenValidations`의 길이에 1을 더한 값을 사용.
   * - 모든 값이 없으면 기본값으로 `1`을 사용.
   *
   * @type {number}
   */

  const firstFocus =
    firstFocusIndex !== undefined
      ? firstFocusIndex
      : lengthOfList
      ? 1 + lengthOfList
      : 1;

  useFocusTrap({
    containerRef,
    firstFocus,
  });

  return (
    <div
      className={joinClassNames([styles["modal__container"], className])}
      style={{ width: `${width}${widthUnit}` }}
      ref={containerRef}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
};

export default ModalContainer;
