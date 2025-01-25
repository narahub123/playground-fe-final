import { ReactNode } from "react";
import styles from "./AlertRoot.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AlertRootProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const AlertRoot = ({
  children,
  className,
  disabled = false,
}: AlertRootProps) => {
  const classNames = joinClassNames([styles["alert__root"], className]);

  return <div className={classNames}>{children}</div>;
};

export default AlertRoot;
