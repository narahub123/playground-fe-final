import { ReactNode } from "react";
import styles from "./AlertTitle.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface AlertTitleProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const AlertTitle = ({
  children,
  className,
  disabled = false,
}: AlertTitleProps) => {
  const classNames = joinClassNames([styles["alert__title"], className]);

  return <div className={classNames}>{children}</div>;
};

export default AlertTitle;
