import styles from "./ModalContainer.module.css";
import { ReactNode, useRef } from "react";
import { useFocusTrap } from "@shared/@common/models/hooks";

interface ModalContainerProps {
  children: ReactNode;
  width?: number;
  widthUnit?: "px" | "%" | "rem";
}

const ModalContainer = ({
  width = 70,
  widthUnit = "%",
  children,
}: ModalContainerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useFocusTrap({ containerRef, firstFocus: 1 });

  return (
    <div
      className={styles["modal__container"]}
      style={{ width: `${width}${widthUnit}` }}
      ref={containerRef}
      role="dialog"
      aria-modal="true"
    >
      {children}
    </div>
  );
};

export default ModalContainer;
