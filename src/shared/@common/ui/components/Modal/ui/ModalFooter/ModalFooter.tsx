import { ReactNode } from "react";
import styles from "./ModalFooter.module.css";

interface ModalFooterProps {
  children: ReactNode;
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  return <div className={styles["modal__footer"]}>{children}</div>;
};

export default ModalFooter;
