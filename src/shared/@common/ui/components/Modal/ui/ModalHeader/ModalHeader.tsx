import styles from "./ModalHeader.module.css";
import { ComponentType, ReactNode } from "react";
import { useValidateChildren } from "@shared/@common/models/hooks";
import ModalBody from "../ModalBody/ModalBody";
import ModalFooter from "../ModalFooter/ModalFooter";

interface ModalHeaderProps {
  children: ReactNode;
}

const ModalHeader = ({ children }: ModalHeaderProps) => {
  const invalidComponents: ComponentType<any>[] = [ModalBody, ModalFooter];

  const filteredChildren = useValidateChildren({ children, invalidComponents });

  return <div className={styles["modal__header"]}>{filteredChildren}</div>;
};

export default ModalHeader;
