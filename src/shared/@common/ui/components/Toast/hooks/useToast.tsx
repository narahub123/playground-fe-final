import { useContext } from "react";
import { ToastOptions } from "../types.ts";
import ToastContext from "../context/ToastContext.tsx";

const useToast = () => {
  const toastContext = useContext(ToastContext);

  const toast = ({
    title,
    description,
    type,
    action,
    duration,
    max,
    placement,
    overlap,
    offset,
  }: ToastOptions) => {
    toastContext?.addToast({
      title,
      description,
      type,
      action,
      duration,
      max,
      placement,
      overlap,
      offset,
    });
  };

  return toast;
};

export default useToast;
