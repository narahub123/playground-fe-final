import styles from "./ToastsContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { Toast, Portal } from "@shared/@common/ui/components";
import { useToastContext } from "../../hooks";

interface ToastsContainerProps {
  className?: string;
}

const ToastsContainer = ({ className }: ToastsContainerProps) => {
  const { toasts } = useToastContext();

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
