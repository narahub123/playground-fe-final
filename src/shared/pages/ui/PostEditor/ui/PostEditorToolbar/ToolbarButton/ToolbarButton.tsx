import styles from "./ToolbarButton.module.css";
import { forwardRef, ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";

interface ToolbarButtonProps {
  className?: string;
  disabled?: boolean;
  children: ReactNode;
  onClick: () => void;
  title: string;
}

const ToolbarButton = forwardRef<HTMLButtonElement, ToolbarButtonProps>(
  ({ className, children, disabled, onClick, title }, ref) => {
    const classNames = joinClassNames([
      disabled
        ? styles["toolbar__button--disabled"]
        : styles["toolbar__button"],
      className,
    ]);

    return (
      <button
        className={classNames}
        disabled={disabled}
        onClick={onClick}
        data-title={title}
        ref={ref}
      >
        <div className={styles["toolbar__button__wrapper"]}>{children}</div>
      </button>
    );
  }
);

export default ToolbarButton;
