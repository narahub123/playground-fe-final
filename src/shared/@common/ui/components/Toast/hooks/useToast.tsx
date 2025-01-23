import { ToastOptions } from "@shared/@common/ui/components/Toast/types";
import { useToastContext } from "@shared/@common/ui/components/Toast/hooks";

const useToast = () => {
  const toastContext = useToastContext();

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
