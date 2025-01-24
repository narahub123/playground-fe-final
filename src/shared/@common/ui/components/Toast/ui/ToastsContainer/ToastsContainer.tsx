import styles from "./ToastsContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Toast, Portal } from "@shared/@common/ui/components";
import { useToastContext } from "../../hooks";

interface ToastsContainerProps {
  className?: string;
}

const ToastsContainer = ({ className }: ToastsContainerProps) => {
  const { toasts, removeToast } = useToastContext();

  const classNames = joinClassNames([styles["toasts__container"], className]);

  return (
    <Portal id="toasts">
      <div className={classNames}>
        <ul className={styles[`toasts__wrapper`]}>
          {toasts.map((toast, index) => {
            if (toast.max && index === toast.max) {
              toasts[toast.max].id &&
                removeToast(toasts[toast.max].id as number, 200);
            }
            return (
              <Toast
                key={toast.id}
                props={toast}
                index={index}
                className={
                  toast.max && index === toast.max
                    ? styles[`toast__removed`]
                    : undefined
                }
              />
            );
          })}
        </ul>
      </div>
    </Portal>
  );
};

export default ToastsContainer;
