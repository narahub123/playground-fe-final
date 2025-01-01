import styles from "./ModalHeader.module.css";

interface ModalHeaderProps {}

const ModalHeader = ({}: ModalHeaderProps) => {
  return <div className={styles["modal__header"]}>ModalHeader</div>;
};

export default ModalHeader;
