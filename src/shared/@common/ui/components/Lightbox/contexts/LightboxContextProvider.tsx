import { ReactNode } from "react";
import { LightboxContextType } from "../types";
import LightboxContext from "./LightboxContext";

interface LightboxContextProviderProps {
  value: LightboxContextType;
  children: ReactNode;
}

const LightboxContextProvider = ({
  value,
  children,
}: LightboxContextProviderProps) => {
  return (
    <LightboxContext.Provider value={value}>
      {children}
    </LightboxContext.Provider>
  );
};

export default LightboxContextProvider;
