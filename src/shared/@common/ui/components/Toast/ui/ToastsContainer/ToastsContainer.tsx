import styles from "./ToastsContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Toast, Portal } from "@shared/@common/ui/components";
import { useToastContext } from "../../hooks";
import { useEffect } from "react";

interface ToastsContainerProps {
  className?: string;
}

const ToastsContainer = ({ className }: ToastsContainerProps) => {
  const { toasts, removeToast } = useToastContext();

  // toast 개수 제한
  useEffect(() => {
    if (!toasts || toasts.length < 1) return;

    const max = toasts[0].max;

    if (!max) return;

    if (toasts.length > max) {
      toasts[0].id && removeToast(toasts[0].id, 0);
    }
  }, [toasts]);

  const classNames = joinClassNames([styles["toasts__container"], className]);

  return (
    <Portal id="toasts">
      <div className={classNames}>
        <ul className={styles[`toasts__wrapper`]}>
          {toasts.map((toast) => (
            <Toast key={toast.id} props={toast} />
          ))}
        </ul>
      </div>
    </Portal>
  );
};

export default ToastsContainer;
