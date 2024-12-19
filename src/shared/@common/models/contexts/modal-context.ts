import { createContext } from "react";
import { ModalContextValueType } from "@shared/@common/types";

const ModalContext = createContext<ModalContextValueType>({});

export default ModalContext;
