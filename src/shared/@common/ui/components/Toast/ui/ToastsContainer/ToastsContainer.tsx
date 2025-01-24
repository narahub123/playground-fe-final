import styles from "./ToastsContainer.module.css";
import { getNumbersFromText, joinClassNames } from "@shared/@common/utils";
import { Toast, Portal } from "@shared/@common/ui/components";
import { useToastContext } from "@shared/@common/ui/components/Toast/hooks";
import { useEffect, useRef, useState } from "react";
import { TOAST_GAP, TOAST_REMOVE_DELAY } from "@shared/@common/constants";

interface ToastsContainerProps {
  className?: string;
}

const ToastsContainer = ({ className }: ToastsContainerProps) => {
  const toastsRef = useRef<(HTMLLIElement | null)[]>([]);
  const { toasts, removeToast } = useToastContext();
  const [boxHeights, setBoxHeights] = useState<number[]>([]);

  useEffect(() => {
    const toastElems = toastsRef.current;

    let toastHeights = [];

    for (let i = 0; i < toastElems.length; i++) {
      const toast = toastElems[i];

      if (!toast) return;

      const toastHeight = toast.getBoundingClientRect().height;

      const fontSize = window.getComputedStyle(toast).fontSize;

      const toastGap =
        getNumbersFromText(TOAST_GAP) * getNumbersFromText(fontSize);

      toastHeights.push(toastHeight + toastGap);
    }

    setBoxHeights(toastHeights);

    toastHeights = [];
  }, [toasts]);

  const classNames = joinClassNames([styles["toasts__container"], className]);

  // Toast의 위치
  const placement = toasts[0]?.placement || "";

  const top = !placement || placement?.includes("top") ? "0px" : undefined;

  const bottom = placement?.includes("bottom") ? "0px" : undefined;

  const left = placement?.includes("start") ? "0px" : undefined;

  const right = placement?.includes("end") ? "0px" : undefined;

  const width =
    placement?.includes("start") || placement?.includes("end") ? "50%" : "100%";

  const direction = placement?.includes("bottom") ? "bottom" : "top";

  // offset 속성
  const offset = toasts[0]?.offset || "";

  const margin =
    typeof offset === "string"
      ? offset
      : typeof offset === "object"
      ? `${offset.top || 0} ${offset.right || 0} ${offset.bottom || 0} ${
          offset.left || 0
        }`
      : undefined;

  // 뷰포트의 높이
  const viewPortHeight = (visualViewport?.height as number) || 0;

  // toastHeights 합
  const getSumOfBoxHeights = (index: number) => {
    return boxHeights.slice(0, index + 1).reduce((acc, num) => acc + num, 0);
  };

  return (
    <Portal id="toasts">
      <div className={classNames} style={{ top, bottom, left, right, width }}>
        <ul
          className={styles[`toasts__wrapper`]}
          style={{ margin, gap: TOAST_GAP }}
        >
          {toasts.map((toast, index) => {
            if (toast.max && index === toast.max && !toast.overlap) {
              toasts[toast.max].id &&
                removeToast(toasts[toast.max].id as number, TOAST_REMOVE_DELAY);
            } else if (toast.overlap && toasts[1]) {
              toasts[1].id &&
                removeToast(toasts[1].id as number, TOAST_REMOVE_DELAY);
            } else if (
              !toast.max &&
              getSumOfBoxHeights(index) > viewPortHeight
            ) {
              removeToast(toasts[index].id as number, TOAST_REMOVE_DELAY);
            }

            return (
              <Toast
                key={toast.id}
                props={toast}
                className={joinClassNames([
                  (toast.max && index === toast.max && !toast.overlap) ||
                  (toast.overlap && index === 1) ||
                  (!toast.max && getSumOfBoxHeights(index) > viewPortHeight)
                    ? styles[`toast__removed--${direction}`]
                    : undefined,
                ])}
                ref={(el) => (toastsRef.current[index] = el)}
                sumOfboxHeight={getSumOfBoxHeights(index - 1)}
              />
            );
          })}
        </ul>
      </div>
    </Portal>
  );
};

export default ToastsContainer;
