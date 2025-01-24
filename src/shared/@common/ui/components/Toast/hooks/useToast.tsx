import { ToastOptions } from "@shared/@common/ui/components/Toast/types";
import { useToastContext } from "@shared/@common/ui/components/Toast/hooks";
import {
  TOAST_DEFAULT_DURATION,
  TOAST_DEFAULT_OFFSET,
  TOAST_DEFAULT_OVERLAP,
  TOAST_DEFAULT_PLACEMENT,
  TOAST_DEFAULT_TYPE,
} from "@shared/@common/constants";

const useToast = () => {
  const toastContext = useToastContext();

  const toast = ({
    title,
    description,
    type = TOAST_DEFAULT_TYPE,
    action,
    duration = TOAST_DEFAULT_DURATION,
    max,
    placement = TOAST_DEFAULT_PLACEMENT,
    overlap = TOAST_DEFAULT_OVERLAP,
    offset = TOAST_DEFAULT_OFFSET,
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
