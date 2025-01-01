import styles from "./ModalCloseButton.module.css";

interface ModalCloseButtonProps {}

const ModalCloseButton = ({}: ModalCloseButtonProps) => {
  return <div className={styles["modal__close__button"]}>ModalCloseButton</div>;
};

export default ModalCloseButton;
