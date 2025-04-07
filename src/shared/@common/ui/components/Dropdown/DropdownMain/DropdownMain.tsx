import { ReactNode, useRef } from "react";
import styles from "./DropdownMain.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useClickOutside, useFocusTrap } from "@shared/@common/models/hooks";

interface DropdownMainProps {
  children: ReactNode;
  onClose: () => void;
  lastClickedRef?: React.RefObject<HTMLElement>;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  className?: string;
}

const DropdownMain = ({
  children,
  onClose,
  lastClickedRef,
  top,
  bottom,
  left,
  right,
  className,
}: DropdownMainProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const classNames = joinClassNames([styles["dropdown"], className]);

  // 포커스 트랩
  useFocusTrap({ containerRef });

  // 외부 클릭 시 창 닫기
  useClickOutside({ containerRef, toggle: onClose, lastClickedRef });

  return (
    <div
      className={classNames}
      style={{ top, bottom, left, right }}
      ref={containerRef}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          onClose();
          if (lastClickedRef)
            setTimeout(() => {
              lastClickedRef.current?.focus();
            }, 100);
        }
      }}
    >
      <ul
        className={styles["dropdown__list"]}
        style={{
          maxHeight:
            bottom && window.innerHeight > bottom
              ? window.innerHeight - bottom
              : window.innerHeight,
          overflowY: "auto",
        }}
      >
        {children}
      </ul>
    </div>
  );
};

export default DropdownMain;
