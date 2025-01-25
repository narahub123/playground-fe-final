import styles from "./AlertIndicator.module.css";
import { ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";

interface AlertIndicatorProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const AlertIndicator = ({
  children,
  className,
  disabled = false,
}: AlertIndicatorProps) => {
  const classNames = joinClassNames([styles["alert__indicator"], className]);

  return <div className={classNames}>{children}</div>;
};

export default AlertIndicator;
