import { ReactNode } from "react";
import styles from "./ToolbarButton.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface ToolbarButtonProps {
  className?: string;
  children: ReactNode;
}

const ToolbarButton = ({ className, children }: ToolbarButtonProps) => {
  const classNames = joinClassNames([styles["toolbar__button"], className]);

  return (
    <button className={classNames}>
      <div className={styles["toolbar__button__wrapper"]}>{children}</div>
    </button>
  );
};

export default ToolbarButton;
