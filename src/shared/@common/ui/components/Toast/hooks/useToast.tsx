import { ToastOptions } from "../types.ts";

const useToast = () => {
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
    console.log(
      title,
      description,
      type,
      action,
      duration,
      max,
      placement,
      overlap,
      offset
    );
  };

  return toast;
};

export default useToast;
