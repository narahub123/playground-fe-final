import { createContext } from "react";
import { ToastContextType } from "../types.ts";

const ToastContext = createContext<ToastContextType | null>(null);

export default ToastContext;
