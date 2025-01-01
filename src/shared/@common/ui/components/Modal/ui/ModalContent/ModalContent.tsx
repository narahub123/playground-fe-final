import styles from "./ModalContent.module.css";

interface ModalContentProps {}

const ModalContent = ({}: ModalContentProps) => {
  return <div className={styles["modal__content"]}>ModalContent</div>;
};

export default ModalContent;
