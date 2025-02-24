import { ReactNode } from "react";
import styles from "./Header.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface HeaderProps {
  children: ReactNode;
  className?: string;
}

const Header = ({ children, className }: HeaderProps) => {
  const classNames = joinClassNames([styles["header"], className]);

  return <header className={classNames}>{children}</header>;
};

export default Header;
