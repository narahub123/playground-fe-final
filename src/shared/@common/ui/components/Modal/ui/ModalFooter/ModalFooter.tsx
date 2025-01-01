import styles from "./ModalFooter.module.css";

interface ModalFooterProps {}

const ModalFooter = ({}: ModalFooterProps) => {
  return <div className={styles["modal__footer"]}>ModalFooter</div>;
};

export default ModalFooter;
