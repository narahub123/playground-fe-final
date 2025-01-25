import { ReactNode } from "react";
import styles from "./AlertContent.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AlertContentProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const AlertContent = ({
  children,
  className,
  disabled = false,
}: AlertContentProps) => {
  const classNames = joinClassNames([styles["alert__content"], className]);

  return <div className={classNames}>{children}</div>;
};

export default AlertContent;
