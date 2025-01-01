import { ReactNode } from "react";
import styles from "./ModalContent.module.css";

interface ModalContentProps {
  children: ReactNode;
}

const ModalContent = ({ children }: ModalContentProps) => {
  return <div className={styles["modal__content"]}>{children}</div>;
};

export default ModalContent;
