import { ReactNode } from "react";
import InputContext from "./InputContext";
import { InputContextType } from "./Input.types";

const InputContextProvider = ({
  value,
  children,
}: {
  value: InputContextType;
  children: ReactNode;
}) => {
  return (
    <InputContext.Provider value={value}>{children}</InputContext.Provider>
  );
};

export default InputContextProvider;
