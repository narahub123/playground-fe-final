import styles from "./HeaderContent.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";

interface HeaderContentProps {
  children: ReactNode;
  className?: string;
}

const HeaderContent = ({ children, className }: HeaderContentProps) => {
  const classNames = joinClassNames([styles["headercontent"], className]);

  return <div className={classNames}>{children}</div>;
};

export default HeaderContent;
