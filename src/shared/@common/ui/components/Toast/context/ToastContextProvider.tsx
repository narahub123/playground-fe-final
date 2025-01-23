import { ReactNode, useState } from "react";
import ToastContext from "./ToastContext";
import { ToastOptions } from "../types.ts";
import Portal from "../../Portal/Portal.tsx";
import { Toast } from "../ui/index.ts";

interface ToastContextProviderProps {
  children: ReactNode;
}

const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
  const [toasts, setToast] = useState<ToastOptions[]>([]);

  const addToast = (toast: ToastOptions) => {
    setToast((prev) => [...prev, { id: Date.now(), ...toast }]);
  };

  const removeToast = (id: number) => {
    setToast((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <Portal id="toasts">
        {toasts.map((toast) => (
          <Toast key={toast.id} props={toast} />
        ))}
      </Portal>
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
