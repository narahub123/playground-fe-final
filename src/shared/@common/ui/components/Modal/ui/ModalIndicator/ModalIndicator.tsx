import styles from "./ModalIndicator.module.css";

interface ModalIndicatorProps {}

const ModalIndicator = ({}: ModalIndicatorProps) => {
  return <div className={styles["modal__indicator"]}>ModalIndicator</div>;
};

export default ModalIndicator;
