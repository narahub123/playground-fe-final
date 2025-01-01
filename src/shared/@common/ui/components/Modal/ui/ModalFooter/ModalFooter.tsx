import styles from "./ModalFooter.module.css";
import { ComponentType, ReactNode } from "react";
import { useValidateChildren } from "@shared/@common/models/hooks";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalBody from "../ModalBody/ModalBody";

interface ModalFooterProps {
  children: ReactNode;
}

const ModalFooter = ({ children }: ModalFooterProps) => {
  const invalidComponents: ComponentType<any>[] = [ModalHeader, ModalBody];

  const filteredChildren = useValidateChildren({ children, invalidComponents });

  return <div className={styles["modal__footer"]}>{filteredChildren}</div>;
};

export default ModalFooter;
