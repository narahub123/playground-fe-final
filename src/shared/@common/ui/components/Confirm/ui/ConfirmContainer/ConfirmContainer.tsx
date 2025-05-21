import styles from "./ConfirmContainer.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";

interface ConfirmContainerProps {
  className?: string;
  children: ReactNode;
}

const ConfirmContainer = ({ className, children }: ConfirmContainerProps) => {
  const classNames = joinClassNames([styles["confirm__container"], className]);

  return <div className={classNames}>{children}</div>;
};

export default ConfirmContainer;
