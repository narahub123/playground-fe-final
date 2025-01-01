import styles from "./ModalContainer.module.css";
import { ReactNode, useRef } from "react";
import { useFocusTrap } from "@shared/@common/models/hooks";

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
}: ModalContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useFocusTrap({ containerRef, firstFocus: 1 });

  return (
    <div
      className={styles["modal__container"]}
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
