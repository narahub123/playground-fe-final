import { ReactNode } from "react";
import styles from "./Main.module.css";
import { joinClassNames } from "@shared/@common/utils";

interface MainProps {
  children: ReactNode;
  className?: string;
}

const Main = ({ children, className }: MainProps) => {
  const classNames = joinClassNames([styles["main"], className]);

  return <main className={classNames}>{children}</main>;
};

export default Main;
