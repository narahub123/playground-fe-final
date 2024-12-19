import { createContext } from "react";
import { ModalContextValueType } from "@shared/@common/types";

const initialValue: ModalContextValueType = {
  onClose: undefined,
};

const ModalContext = createContext<ModalContextValueType>(initialValue);

export default ModalContext;
