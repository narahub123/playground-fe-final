import { ReactNode } from "react";
import SelectContext from "./SelectContext";
import { SelectContextType } from "../types";

interface SelectContextProviderProps {
  children: ReactNode;
  value: SelectContextType;
}

const SelectContextProvider = ({
  children,
  value,
}: SelectContextProviderProps) => {
  return (
    <SelectContext.Provider value={value}>{children}</SelectContext.Provider>
  );
};

export default SelectContextProvider;
