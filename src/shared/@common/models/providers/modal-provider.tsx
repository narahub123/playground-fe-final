import { ReactNode } from "react";
import { ModalContextValueType } from "@shared/@common/types";
import { ModalContext } from "@shared/@common/models/contexts";

const ModalProvider = ({
  value,
  children,
}: {
  value: ModalContextValueType;
  children: ReactNode;
}) => {
  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
