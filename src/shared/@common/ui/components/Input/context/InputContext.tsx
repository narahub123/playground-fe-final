import { createContext } from "react";
import { InputContextType } from "./Input.types";

const InputContext = () => {
  const context = createContext<InputContextType | null>(null);

  return context;
};

export default InputContext;
