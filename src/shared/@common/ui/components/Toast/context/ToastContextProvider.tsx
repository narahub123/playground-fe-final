import { ReactNode, useState } from "react";
import { ToastContext } from "@shared/@common/ui/components/Toast/context";
import { ToastOptions } from "@shared/@common/ui/components/Toast/types";
import { Toast, Portal } from "@shared/@common/ui/components";

interface ToastContextProviderProps {
  children: ReactNode;
}

const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
  const [toasts, setToast] = useState<ToastOptions[]>([]);

  const addToast = (toast: ToastOptions) => {
    setToast((prev) => [...prev, { id: Date.now(), ...toast }]);
  };

  const removeToast = (id: number, duration?: number) => {
    setTimeout(() => {
      setToast((prev) => prev.filter((toast) => toast.id !== id));
    }, duration || 5000);
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
