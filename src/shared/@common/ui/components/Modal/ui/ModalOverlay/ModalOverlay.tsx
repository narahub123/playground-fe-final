import styles from "./ModalOverlay.module.css";

interface ModalOverlayProps {}

const ModalOverlay = ({}: ModalOverlayProps) => {
  return <div className={styles["modal__overlay"]}>ModalOverlay</div>;
};

export default ModalOverlay;
