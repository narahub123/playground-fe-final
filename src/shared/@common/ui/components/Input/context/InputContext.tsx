import { createContext } from "react";
import { InputContextType } from "./Input.types";

const InputContext = createContext<InputContextType | null>(null);

export default InputContext;
