import styles from "./ModalOverlay.module.css";

/**
 * ModalOverlayProps는 ModalOverlay 컴포넌트에 전달되는 속성들을 정의합니다.
 */
interface ModalOverlayProps {
  /**
   * 오버레이의 배경색을 설정합니다.
   * 기본값은 "rgb(0, 0, 0)" (검은색)입니다.
   *
   * @default "rgb(0, 0, 0)"
   */
  backgroundColor?: string;

  /**
   * 오버레이의 투명도를 설정합니다.
   * 0에서 1 사이의 값으로 설정하며, 기본값은 0.6입니다.
   *
   * @default 0.6
   */
  opacity?: number;
}

/**
 * ModalOverlay 컴포넌트는 모달의 배경 오버레이를 렌더링합니다.
 * 배경색과 투명도를 동적으로 조정할 수 있으며, 접근성을 고려한 속성을 포함합니다.
 *
 * @component
 * @param {Object} props - 컴포넌트에 전달되는 속성들
 * @param {string} [props.backgroundColor="rgb(0, 0, 0)"] - 오버레이의 배경색을 설정합니다. 기본값은 검은색입니다.
 * @param {number} [props.opacity=0.6] - 오버레이의 투명도를 설정합니다. 기본값은 0.6입니다.
 *
 * @returns {JSX.Element} 모달의 배경 오버레이를 렌더링합니다.
 *
 * @example
 * // 기본 배경색과 투명도로 사용
 * <ModalOverlay />
 *
 * @example
 * // 사용자 지정 배경색과 투명도로 사용
 * <ModalOverlay backgroundColor="rgba(255, 255, 255, 0.8)" opacity={0.8} />
 */
const ModalOverlay = ({
  backgroundColor = "rgb(0, 0, 0)",
  opacity = 0.6,
}: ModalOverlayProps) => {
  return (
    <div
      className={styles["modal__overlay"]}
      style={{ backgroundColor, opacity }}
      role="presentation" // 스크린 리더가 읽지 않도록 설정
      aria-hidden={true} // 접근성 트리에서 제외
    />
  );
};

export default ModalOverlay;
