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

  const placement = toasts[0]?.placement || "";

  const top = !placement || placement?.includes("top") ? "0px" : undefined;

  const bottom = placement?.includes("bottom") ? "0px" : undefined;

  const left = placement?.includes("start") ? "0px" : undefined;

  const right = placement?.includes("end") ? "0px" : undefined;

  const width =
    placement?.includes("start") || placement?.includes("end") ? "50%" : "100%";

  const direction = placement?.includes("bottom") ? "bottom" : "top";

  return (
    <Portal id="toasts">
      <div className={classNames} style={{ top, bottom, left, right, width }}>
        <ul className={styles[`toasts__wrapper`]}>
          {toasts.map((toast, index) => {
            if (toast.max && index === toast.max && !toast.overlap) {
              toasts[toast.max].id &&
                removeToast(toasts[toast.max].id as number, 200);
            } else if (toast.overlap && toasts[1]) {
              toasts[1].id && removeToast(toasts[1].id as number, 200);
            }
            return (
              <Toast
                key={toast.id}
                props={toast}
                index={index}
                className={joinClassNames([
                  (toast.max && index === toast.max) ||
                  (toast.overlap && index === 1)
                    ? styles[`toast__removed--${direction}`]
                    : undefined,
                ])}
              />
            );
          })}
        </ul>
      </div>
    </Portal>
  );
};

export default ToastsContainer;
