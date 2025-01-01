import styles from "./ModalContainer.module.css";
import { ReactNode, useRef } from "react";
import { useModalContext } from "@shared/@common/ui/components/Modal/hooks";
import { useFocusTrap } from "@shared/@common/models/hooks";

interface ModalContainerProps {
  children: ReactNode;
}

const ModalContainer = ({ children }: ModalContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, unit } = useModalContext();

  useFocusTrap({ containerRef, firstFocus: 1 });

  return (
    <div
      className={styles["modal__container"]}
      style={{ width: `${width}${unit}` }}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default ModalContainer;
