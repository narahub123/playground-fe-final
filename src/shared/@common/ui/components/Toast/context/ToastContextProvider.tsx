import { ReactNode, useState } from "react";
import { ToastContext } from "@shared/@common/ui/components/Toast/context";
import { ToastOptions } from "@shared/@common/ui/components/Toast/types";
import { ToastsContainer } from "../ui";

interface ToastContextProviderProps {
  children: ReactNode;
}

const ToastContextProvider = ({ children }: ToastContextProviderProps) => {
  const [toasts, setToast] = useState<ToastOptions[]>([]);

  const addToast = (toast: ToastOptions) => {
    // placement에 따라서 toast 추가하는 방식이 달라짐 주의!!!
    setToast((prev) => [{ id: Date.now(), ...toast }, ...prev]);
  };

  const removeToast = (id: number, duration?: number) => {
    const timer = setTimeout(() => {
      setToast((prev) => prev.filter((toast) => toast.id !== id));
    }, duration ?? 5000);

    return () => {
      clearTimeout(timer);
    };
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast, toasts }}>
      {children}
      <ToastsContainer />
    </ToastContext.Provider>
  );
};

export default ToastContextProvider;
