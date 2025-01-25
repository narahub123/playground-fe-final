import styles from "./AlertDescription.module.css";
import { ReactNode } from "react";
import { joinClassNames } from "@shared/@common/utils";

interface AlertDescriptionProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const AlertDescription = ({
  children,
  className,
  disabled = false,
}: AlertDescriptionProps) => {
  const classNames = joinClassNames([styles["alert__description"], className]);

  return <div className={classNames}>{children}</div>;
};

export default AlertDescription;
