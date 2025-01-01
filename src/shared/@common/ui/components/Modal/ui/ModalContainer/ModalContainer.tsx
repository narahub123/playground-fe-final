import styles from "./ModalContainer.module.css";
import { ReactNode } from "react";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer = ({ children }: ModalContainerProps) => {
  const { width, unit } = useModalContext();
  return (
    <div
      className={styles["modal__container"]}
      style={{ width: `${width}${unit}` }}
    >
      {children}
    </div>
  );
};

export default ModalContainer;
