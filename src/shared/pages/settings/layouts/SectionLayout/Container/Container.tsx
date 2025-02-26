import { ReactNode } from "react";
import styles from "./Container.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
  const classNames = joinClassNames([styles["container"], className]);

  return <div className={classNames}>{children}</div>;
};

export default Container;
