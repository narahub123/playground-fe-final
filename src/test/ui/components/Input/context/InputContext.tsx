import { createContext } from "react";
import { InputContextType } from "../types";

const InputContext = createContext<InputContextType | null>(null);

export default InputContext;
