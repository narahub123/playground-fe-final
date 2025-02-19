import { ReactNode, useRef } from "react";
import styles from "./DropdownMain.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { useFocusTrap } from "@shared/@common/models/hooks";

interface DropdownMainProps {
  children: ReactNode;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  className?: string;
}

const DropdownMain = ({
  children,
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

  return (
    <div
      className={classNames}
      style={{ top, bottom, left, right }}
      ref={containerRef}
      onClick={(e) => e.stopPropagation()}
    >
      <ul
        className={styles["dropdown__list"]}
        style={{
          maxHeight:
            bottom && window.innerHeight > bottom ? bottom : window.innerHeight,
          overflowY: "auto",
        }}
      >
        {children}
      </ul>
    </div>
  );
};

export default DropdownMain;
