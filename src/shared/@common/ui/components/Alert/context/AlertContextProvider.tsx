import { ReactNode } from "react";
import AlertContext from "./AlertContext";
import { AlertContextType } from "../types";

interface AlertContextProviderProps {
  children: ReactNode;
}

const AlertContextProvider = ({ children }: AlertContextProviderProps) => {
  const value: AlertContextType = {};
  return (
    <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
  );
};

export default AlertContextProvider;
