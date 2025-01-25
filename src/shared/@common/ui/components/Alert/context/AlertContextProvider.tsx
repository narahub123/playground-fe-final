import { ReactNode, useState } from "react";
import AlertContext from "./AlertContext";
import { AlertOptions } from "../types";
import Alert from "..";

interface AlertContextProviderProps {
  children: ReactNode;
}

const AlertContextProvider = ({ children }: AlertContextProviderProps) => {
  const initialAlert: AlertOptions = {
    title: "",
    description: "",
  };
  const [alert, setAlert] = useState<AlertOptions>(initialAlert);

  const addAlert = (alert: AlertOptions) => {
    setAlert(alert);
  };

  const removeAlert = () => setAlert(initialAlert);

  return (
    <AlertContext.Provider value={{ addAlert, removeAlert, alert }}>
      <Alert />
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContextProvider;
