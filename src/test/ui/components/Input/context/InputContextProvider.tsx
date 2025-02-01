import { ReactNode } from "react";
import InputContext from "./InputContext";
import { InputContextType } from "../types";

interface InputContextProviderProps {
  children: ReactNode;
  value: InputContextType;
}

const InputContextProvider = ({
  children,
  value,
}: InputContextProviderProps) => {
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};

export default InputContextProvider;
