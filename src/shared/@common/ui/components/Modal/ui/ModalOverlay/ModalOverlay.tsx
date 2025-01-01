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
    />
  );
};

export default ModalOverlay;
