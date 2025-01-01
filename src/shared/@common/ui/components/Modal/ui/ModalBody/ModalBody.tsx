import { ReactNode } from "react";
import styles from "./ModalBody.module.css";

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => {
  return <div className={styles["modal__body"]}>{children}</div>;
};

export default ModalBody;
