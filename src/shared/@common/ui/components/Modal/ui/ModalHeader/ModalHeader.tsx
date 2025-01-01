import { ReactNode } from "react";
import styles from "./ModalHeader.module.css";

interface ModalHeaderProps {
  children: ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  return <div className={styles["modal__header"]}>{children}</div>;
};

export default ModalHeader;
