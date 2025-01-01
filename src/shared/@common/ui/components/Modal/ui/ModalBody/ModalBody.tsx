import styles from "./ModalBody.module.css";

interface ModalBodyProps {}

const ModalBody = ({}: ModalBodyProps) => {
  return <div className={styles["modal__body"]}>ModalBody</div>;
};

export default ModalBody;
