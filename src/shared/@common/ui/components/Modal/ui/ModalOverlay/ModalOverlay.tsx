import styles from "./ModalOverlay.module.css";

interface ModalOverlayProps {
  backgroundColor?: string;
  opacity?: number;
}

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
