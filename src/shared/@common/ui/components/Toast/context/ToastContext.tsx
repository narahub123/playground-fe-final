import { createContext } from "react";
import { ToastContextType } from "@shared/@common/ui/components/Toast/types";

const ToastContext = createContext<ToastContextType | null>(null);

export default ToastContext;
