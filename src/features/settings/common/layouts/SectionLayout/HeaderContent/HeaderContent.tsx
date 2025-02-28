import styles from "./HeaderContent.module.css";
import { joinClassNames } from "@shared/@common/utils";
import { ReactNode } from "react";

interface HeaderContentProps {
  children: ReactNode;
  className?: string;
}

const HeaderContent = ({ children, className }: HeaderContentProps) => {
  const classNames = joinClassNames([styles["header__content"], className]);

  return <div className={classNames}>{children}</div>;
};

export default HeaderContent;
