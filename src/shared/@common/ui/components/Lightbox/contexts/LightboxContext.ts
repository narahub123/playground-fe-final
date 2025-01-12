import { createContext } from "react";
import { LightboxContextType } from "../types";

const LightboxContext = createContext<LightboxContextType | null>(null);

export default LightboxContext;
