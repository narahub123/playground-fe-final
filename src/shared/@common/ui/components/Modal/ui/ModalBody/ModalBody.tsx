import styles from "./ModalBody.module.css";
import { ComponentType, ReactNode } from "react";
import { useValidateChildren } from "@shared/@common/models/hooks";
import ModalHeader from "../ModalHeader/ModalHeader";
import ModalFooter from "../ModalFooter/ModalFooter";

interface ModalBodyProps {
  children: ReactNode;
}

const ModalBody = ({ children }: ModalBodyProps) => {
  const invalidComponents: ComponentType<any>[] = [ModalHeader, ModalFooter];

  const filteredChildren = useValidateChildren({ children, invalidComponents });

  return <div className={styles["modal__body"]}>{filteredChildren}</div>;
};

export default ModalBody;
